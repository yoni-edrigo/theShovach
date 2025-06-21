import { CustomNavbar } from "@/components/cutsom-navbar";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <CustomNavbar />
      <Outlet />
    </>
  ),
});
