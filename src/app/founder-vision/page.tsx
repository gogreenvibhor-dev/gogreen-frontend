import type { Metadata } from "next";
import FounderVisionContent from "./FounderVisionContent";

export const metadata: Metadata = {
  title: "Founder's Vision | Vidhi Enterprises",
  description: "The vision and legacy of Late Shri Dhirendar Kumar Jain, the founder of Vidhi Enterprises.",
};

export default function Page() {
  return <FounderVisionContent />;
}
