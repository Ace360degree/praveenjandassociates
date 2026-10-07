import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/custom/$slug")({
  loader: ({ params }) => {
    throw redirect({ to: "/$slug", params: { slug: params.slug } });
  },
});
