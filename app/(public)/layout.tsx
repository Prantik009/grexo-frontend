
import Footer from "../_shared/layout-components/Footer";
import { Header } from "../_shared/layout-components/Header";
import { Navbar } from "../_shared/layout-components/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
