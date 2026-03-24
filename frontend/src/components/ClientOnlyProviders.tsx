'use client';

import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Providers = dynamic(
  () => import('./Providers').then((mod) => mod.Providers),
  { ssr: false }
);

export default function ClientOnlyProviders({
  children,
}: {
  children: ReactNode;
}) {
  return <Providers>{children}</Providers>;
}
