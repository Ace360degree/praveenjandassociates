import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/income-tax")({
  component: () => <Outlet />,
});