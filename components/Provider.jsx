'use client';

import { SessionProvider } from "next-auth/react";

const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
  // all content here
    {children}
  </SessionProvider>
)

export default Provider;
