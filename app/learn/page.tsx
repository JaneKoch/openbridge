import { LibraryPage } from "@/components/library/library-page";
import { getLessonSummaries } from "@/lib/content";

export const metadata = { title: "Story Library" };

export default function LearnPage() {
  return <LibraryPage lessons={getLessonSummaries()} />;
}
