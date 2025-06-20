import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return <div style={{ padding: 16 }}>Hello from About!</div>;
}
