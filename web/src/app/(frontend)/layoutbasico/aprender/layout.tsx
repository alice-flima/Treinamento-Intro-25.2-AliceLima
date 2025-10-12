import LandingPagesNav from '../../../../components/nav/InitialNav/index.tsx'; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><header>
      <LandingPagesNav /> 
      <nav>Dogão</nav>
    </header><main>
        {children}
      </main></> 
  );
}
