/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body id="shortcut_hook" className="overflow-hidden bg-gradient-to-r from-neutral-900 to-neutral-800">
        {children}
        <script src="/terminal.js"></script>
      </body>
    </html>
  );
}
