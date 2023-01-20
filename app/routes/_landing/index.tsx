import { Outlet } from "@remix-run/react";

export default function LandingRoute() {
  return (
    <>
      <header>Landing/</header>
      <Outlet />
    </>
  );
}
