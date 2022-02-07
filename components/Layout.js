import Navbar from "./NavbarC";
import Footer from "./Footer";
import Topbar from "./Topbar";

export default function Layout({ children }) {
  return (
    <>
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
