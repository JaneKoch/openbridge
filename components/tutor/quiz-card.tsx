"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import type { ComprehensionQuestion } from "@/lib/content/types";
import { COMPREHENSION_SKILL_LABELS } from "@/lib/content/types";
import { useLocale, useT } from "@/lib/i18n/use-locale";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ExplainPanel } from "@/components/tutor/explain-panel";

export type AnswerFeedback = {
  correct: boolean;
  explanation: string;
  source: "ai" | "offline";
};

export function QuizCard({
  question,
  questionIndex,
  questionCount,
  selectedIndex,
  checked,
  feedback,
  onSelect,
  onCheck,
  onAdvance,
}: {
  question: ComprehensionQuestion;
  questionIndex: number;
  questionCount: number;
  selectedIndex: number | null;
  checked: boolean;
  feedback: AnswerFeedback | null;
  onSelect: (index: number) => void;
  onCheck: () => void;
  onAdvance: () => void;
}) {
  const t = useT();
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const promptRef = useRef<HTMLHeadingElement>(null);
  const correctLabel = t.tutor.correctTitle;
  const incorrectLabel = t.tutor.incorrectTitle;
  const progress = ((questionIndex + 1) / questionCount) * 100;

  useEffect(() => {
    promptRef.current?.focus();
  }, [question.id]);

  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <p className="font-display text-base font-bold text-foreground">
          {t.tutor.question} {questionIndex + 1} {t.tutor.of} {questionCount}
        </p>
        <Badge variant="secondary" className="h-auto min-h-7 whitespace-normal text-center">
          {COMPREHENSION_SKILL_LABELS[question.skill][locale]}
        </Badge>
      </div>
      <Progress value={progress} aria-label={`${t.tutor.question} ${questionIndex + 1}`} className="mb-8 h-2" />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={question.id}
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
          transition={{ duration: reduceMotion ? 0 : 0.25 }}
        >
          <Card className="rounded-3xl border-border/80 shadow-warm">
            <CardHeader className="p-5 sm:p-8">
              <h2
                ref={promptRef}
                id="quiz-prompt"
                tabIndex={-1}
                className="font-display text-balance text-2xl font-extrabold leading-snug text-foreground focus:outline-none sm:text-3xl"
              >
                {question.prompt}
              </h2>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-6 sm:px-8 sm:pb-8">
              {question.options.map((option, index) => {
                const isSelected = selectedIndex === index;
                const isCorrect = checked && index === question.correctIndex;
                const isWrongChoice =
                  checked && isSelected && index !== question.correctIndex;
                return (
                  <button
                    key={option.text}
                    type="button"
                    data-testid="quiz-option"
                    data-index={index}
                    aria-pressed={isSelected}
                    disabled={checked}
                    onClick={() => onSelect(index)}
                    className={[
                      "flex min-h-16 w-full items-center gap-4 rounded-2xl border-2 px-4 py-4 text-left text-base font-semibold leading-relaxed transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50 disabled:cursor-default sm:px-5 sm:text-lg",
                      isCorrect
                        ? "border-emerald-700 bg-emerald-50 text-emerald-950"
                        : isWrongChoice
                          ? "border-destructive bg-destructive/10 text-foreground"
                          : isSelected
                            ? "border-primary bg-sun-soft text-foreground"
                            : "border-border bg-background text-foreground hover:border-primary/60 hover:bg-accent",
                    ].join(" ")}
                  >
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-extrabold">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1">{option.text}</span>
                    {isCorrect && <Check aria-hidden="true" className="size-5 shrink-0" />}
                    {isWrongChoice && <X aria-hidden="true" className="size-5 shrink-0" />}
                  </button>
                );
              })}

              {checked && feedback && (
                <AnimatePresence>
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    className="space-y-4 pt-3"
                  >
                    <div
                      data-testid={feedback.correct ? "feedback-correct" : undefined}
                      aria-live="polite"
                      className={[
                        "relative overflow-hidden rounded-2xl border p-5",
                        feedback.correct
                          ? "border-emerald-700/30 bg-emerald-50 text-emerald-950"
                          : "border-amber-700/30 bg-amber-50 text-amber-950",
                      ].join(" ")}
                    >
                      <Sparkles
                        aria-hidden="true"
                        className="absolute right-4 top-4 size-6 opacity-70"
                      />
                      <p className="font-display text-xl font-extrabold">
                        {feedback.correct ? correctLabel : incorrectLabel}
                      </p>
                      {feedback.correct && (
                        <div aria-hidden="true" className="mt-2 flex gap-2 text-xl">
                          <span>✨</span>
                          <span>🎉</span>
                          <span>🌟</span>
                        </div>
                      )}
                      {feedback.correct && (
                        <p className="mt-2 max-w-prose leading-relaxed">
                          {question.options[question.correctIndex].rationale}
                        </p>
                      )}
                    </div>
                    {!feedback.correct && (
                      <ExplainPanel
                        explanation={feedback.explanation}
                        source={feedback.source}
                      />
                    )}
                    <Button
                      type="button"
                      size="lg"
                      className="min-h-12 w-full rounded-full font-bold"
                      onClick={onAdvance}
                    >
                      {questionIndex + 1 === questionCount
                        ? t.tutor.seeResults
                        : t.tutor.nextQuestion}
                    </Button>
                  </motion.div>
                </AnimatePresence>
              )}

              {!checked && (
                <Button
                  type="button"
                  data-testid="check-answer"
                  size="lg"
                  className="mt-3 min-h-12 w-full rounded-full font-bold"
                  disabled={selectedIndex === null}
                  onClick={onCheck}
                >
                  {t.tutor.checkAnswer}
                </Button>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
