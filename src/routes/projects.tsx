import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — Sriyaan" },
    { name: "description", content: "Sriyaan's work across Trusting Social, Documatic, Vestlane, Autonomous, and Genetica." },
    { property: "og:title", content: "Projects — Sriyaan" },
    { property: "og:description", content: "Selected work and collaborations from developer Sriyaan." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Projects,
});

function Projects() { return <Portfolio page="Projects" />; }