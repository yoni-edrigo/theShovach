import { createRootRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <nav style={{ padding: 8 }}>
        <Link to="/" activeOptions={{ exact: true }} style={{ marginRight: 8 }}>
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <hr />
      <Outlet />
    </>
  ),
});
