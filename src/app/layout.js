import "./globals.css";

export const metadata = {
  title: 'Jeshfield Global | Excellence Across Industries',
  description: 'Premium Nigerian company specializing in epoxy flooring, agriculture, and logistics. Crafting excellence from luxury interiors to sustainable farming.',
  keywords: 'Jeshfield Global, epoxy flooring, agriculture Nigeria, logistics, snails, catfish, premium flooring',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
