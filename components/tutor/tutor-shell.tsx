"use client";

import { useCallback, useRef, useState } from "react";
import { BookOpen } from "lucide-react";
import type { Lesson } from "@/lib/content/types";
import { useLocale, useT } from "@/lib/i18n/use-locale";
import { LessonCover } from "@/components/lesson-cover";
import { LevelBadge } from "@/components/level-badge";
import { Card, CardContent } from "@/components/ui/card";
import { QuizCard, type AnswerFeedback } from "@/components/tutor/quiz-card";
import { ResultsScreen } from "@/components/tutor/results-screen";
import { StoryReader } from "@/components/tutor/story-reader";
import { XP_FOR_LESSON } from "@/lib/gamification";
import { getProgress, recordOutcome } from "@/lib/progress/local-store";
import type { StudentProgress } from "@/lib/progress/types";

type TutorPhase = "story" | "quiz" | "results";

export function TutorShell({ lesson }: { lesson: Lesson }) {
  const t = useT();
  const locale = useLocale();
  const [phase, setPhase] = useState<TutorPhase>("story");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<AnswerFeedback | null>(null);
  const [run, setRun] = useState(0);
  const resultRecorded = useRef(false);
  const explanationRequest = useRef(0);
  const [celebration, setCelebration] = useState<
    StudentProgress["lastCelebration"]
  >(null);

  const currentQuestion = lesson.questions[questionIndex];

  const startQuiz = () => {
    setPhase("quiz");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const checkAnswer = useCallback(async () => {
    if (selectedIndex === null || checked) return;
    setChecked(true);
    const isCorrect = selectedIndex === currentQuestion.correctIndex;

    if (isCorrect) {
      setCorrectCount((count) => count + 1);
      setFeedback({
        correct: true,
        explanation: currentQuestion.explanation,
        source: "offline",
      });
      return;
    }

    const requestId = ++explanationRequest.current;
    setFeedback({
      correct: false,
      explanation: currentQuestion.explanation,
      source: "offline",
    });

    try {
      const response = await fetch("/api/explain", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          lessonSlug: lesson.slug,
          questionId: currentQuestion.id,
          answerIndex: selectedIndex,
          locale,
        }),
      });
      if (!response.ok) return;
      const result = (await response.json()) as {
        explanation?: string;
        source?: string;
      };
      if (
        explanationRequest.current === requestId &&
        typeof result.explanation === "string" &&
        result.explanation.length > 0
      ) {
        setFeedback({
          correct: false,
          explanation: result.explanation,
          source: result.source === "ai" ? "ai" : "offline",
        });
      }
    } catch {
      // The locally-authored explanation remains available without a network.
    }
  }, [
    checked,
    currentQuestion,
    lesson.slug,
    locale,
    selectedIndex,
  ]);

  const advance = () => {
    explanationRequest.current += 1;
    if (questionIndex + 1 >= lesson.questions.length) {
      if (!resultRecorded.current) {
        resultRecorded.current = true;
        const before = getProgress();
        const outcome = recordOutcome({
          lesson,
          correctCount,
          totalQuestions: lesson.questions.length,
        });
        const xpEarned = XP_FOR_LESSON(
          Math.round((correctCount / lesson.questions.length) * 100),
          before.streakCount,
          lesson.minutes
        );
        setCelebration(
          outcome.lastCelebration
            ? { ...outcome.lastCelebration, xpEarned }
            : null
        );
      }
      setPhase("results");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setQuestionIndex((index) => index + 1);
    setSelectedIndex(null);
    setChecked(false);
    setFeedback(null);
  };

  const retry = () => {
    explanationRequest.current += 1;
    setQuestionIndex(0);
    setSelectedIndex(null);
    setChecked(false);
    setCorrectCount(0);
    setFeedback(null);
    setRun((value) => value + 1);
    resultRecorded.current = false;
    setCelebration(null);
    setPhase("story");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (phase === "story") {
    return (
      <StoryReader
        key={`${lesson.slug}-${run}`}
        lesson={lesson}
        onStart={startQuiz}
      />
    );
  }

  if (phase === "results") {
    return (
      <ResultsScreen
        key={`${lesson.slug}-${run}`}
        lesson={lesson}
        correctCount={correctCount}
        celebration={celebration}
        onRetry={retry}
      />
    );
  }

  return (
    <main className="min-h-screen bg-aurora">
      <header className="mx-auto flex max-w-5xl items-center gap-4 px-4 pt-6 sm:px-6">
        <div className="size-14 shrink-0 overflow-hidden rounded-2xl">
          <LessonCover
            emoji={lesson.emoji}
            palette={lesson.palette}
            size="card"
            className="h-full min-h-0 rounded-2xl"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-lg font-extrabold text-foreground sm:text-xl">
            {lesson.title}
          </h1>
          <LevelBadge level={lesson.level} locale={locale} className="mt-1" />
        </div>
        <span className="hidden rounded-full bg-sun-soft px-3 py-1.5 text-sm font-bold text-foreground sm:inline-flex">
          {lesson.minutes} {t.common.minutes}
        </span>
      </header>

      <details className="mx-auto mt-5 max-w-3xl px-4 sm:px-6">
        <summary className="flex min-h-12 cursor-pointer items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 font-bold text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <BookOpen aria-hidden="true" className="size-5 text-primary" />
          {t.tutor.readStory}
        </summary>
        <Card className="mt-3 rounded-2xl shadow-warm">
          <CardContent className="space-y-4 p-5">
            <h2 className="font-display text-xl font-extrabold text-foreground">
              {lesson.story.title}
            </h2>
            {lesson.story.sections.map((section, index) => (
              <p key={`${index}-${section.slice(0, 24)}`} className="text-base leading-relaxed text-foreground">
                {section}
              </p>
            ))}
          </CardContent>
        </Card>
      </details>

      <QuizCard
        question={currentQuestion}
        questionIndex={questionIndex}
        questionCount={lesson.questions.length}
        selectedIndex={selectedIndex}
        checked={checked}
        feedback={feedback}
        onSelect={setSelectedIndex}
        onCheck={checkAnswer}
        onAdvance={advance}
      />
    </main>
  );
}
