import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div style={{ padding: 16 }}>
      <h3>Welcome Home!</h3>
      <p>This is the home page.</p>
    </div>
  );
}
