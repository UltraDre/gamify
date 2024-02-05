import Sidebar from "@/components/admin/Sidebar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <div className="w-[80%]">{children}</div>
          <Sidebar />
        </div>
      </body>
    </html>
  );
}
