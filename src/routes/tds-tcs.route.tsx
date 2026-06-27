import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/tds-tcs")({
  component: () => <Outlet />,
});