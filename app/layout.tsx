import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <body className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-auto">{children}</main>
      </div>
    </body>
  </html>
);

export default RootLayout;

