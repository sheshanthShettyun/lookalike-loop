import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/archive")({
  head: () => ({ meta: [
    { title: "Archive — Sriyaan" },
    { name: "description", content: "An archive of Sriyaan's companies and collaborations." },
    { property: "og:title", content: "Archive — Sriyaan" },
    { property: "og:description", content: "Past collaborations and work from Sriyaan." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Archive,
});

function Archive() { return <Portfolio page="Archive" />; }