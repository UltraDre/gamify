import Sidebar from "@/components/admin/Sidebar";
import "../globals.css";
import AdminProtected from "@/components/admin/AdminProtected";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex w-full">
          <AdminProtected>
            <div className="w-[80%]">{children}</div>
            <Sidebar />
          </AdminProtected>
        </div>
      </body>
    </html>
  );
}
