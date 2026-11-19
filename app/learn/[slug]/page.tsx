import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLessonBySlug, getLessonSummaries } from "@/lib/content";
import { TutorShell } from "@/components/tutor/tutor-shell";

type LessonPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLessonSummaries().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: LessonPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) return {};
  return { title: lesson.title };
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) notFound();

  return <TutorShell lesson={lesson} />;
}
