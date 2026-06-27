import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/consultation")({
  component: () => <Outlet />,
});
