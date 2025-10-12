export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <><header>
      <nav>Dogão</nav>
    </header><main>
        {children}
      </main><footer>Dogão</footer></> 
  );
}
