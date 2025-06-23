import { createRootRoute, Outlet } from "@tanstack/react-router";
import { CustomNavbar } from "@/components/cutsom-navbar";
import { FloatingWhatsappButton } from "@/components/FloatingWhatsappButton";

export const Route = createRootRoute({
  component: () => (
    <>
      <CustomNavbar />
      <Outlet />
      <FloatingWhatsappButton />
    </>
  ),
});
