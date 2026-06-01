import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}

export default function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div className="site-shell">
      <Header currentPage={currentPage} />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}
