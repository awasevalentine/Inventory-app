import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h2>What is happening here first</h2>
        {children}
      </body>

    </html>
  );
}
