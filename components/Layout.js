import Navbar from "./NavbarC";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Image from "next/image";

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
