import { createFileRoute } from "@tanstack/react-router";
import { Portfolio } from "@/components/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Sriyaan — Developer & Creative" },
    { name: "description", content: "Sriyaan, a developer working across machine learning, LLMs, and backend infrastructure. Based in Ho Chi Minh City, Vietnam." },
    { property: "og:title", content: "Sriyaan — Developer & Creative" },
    { property: "og:description", content: "Machine learning, LLMs, and backend infrastructure. Sriyaan's personal portfolio." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

function Index() { return <Portfolio />; }
