'use client';
import { useState } from 'react';
import LandingPagesNav from '../../../../components/nav/InitialNav/index'; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <>
      <header>
        <LandingPagesNav itensCarrinho={0} Preco={0} /> 
      </header>
      <main>
        {children}
      </main>
    </> 
  );
}
