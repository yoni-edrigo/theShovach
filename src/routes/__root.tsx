import { createRootRoute, Outlet } from "@tanstack/react-router";
import { CustomNavbar } from "@/components/cutsom-navbar";

export const Route = createRootRoute({
  component: () => (
    <>
      <CustomNavbar />
      <Outlet />
    </>
  ),
});
