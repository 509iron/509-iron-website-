
export const metadata = {
  title: "509 Iron | Farm Equipment Marketplace",
  description:
    "Buy and sell farm equipment across the Pacific Northwest."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
