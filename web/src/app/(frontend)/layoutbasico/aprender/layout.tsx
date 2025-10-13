import LandingPagesNav from '../../../../components/nav/InitialNav/index'; 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <LandingPagesNav /> 
      </header>
      <main>
        {children}
      </main>
    </> 
  );
}
