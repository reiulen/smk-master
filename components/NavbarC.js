import { Container, Navbar, Nav, Offcanvas, InputGroup, FormControl, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function NavbarC() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      let header = document.querySelector("nav");
      let brand = document.querySelector(".navbar-brand");
      let nav = document.querySelector(".navbar-nav");
      header.classList.toggle("fixed-top", window.scrollY > 5);
      header.classList.toggle("shadow-lg", window.scrollY > 5);
      nav.classList.toggle("py-2", window.scrollY > 5);
      nav.classList.toggle("ms-auto", window.scrollY > 5);
      brand.classList.toggle("d-lg-none", window.scrollY < 5);
    });
  });
  return (
    <>
      <Navbar className="top-navbar" expand="lg">
        <Container>
          <Link href="/">
            <a className="d-lg-none d-block d-block navbar-brand">
              <img src="/assets/gambar/logo-motto.png" height={"55"} />
            </a>
          </Link>
          <div className="basic-navbar-nav d-lg-none d-block d-flex">
            <label htmlFor="search">
              <FontAwesomeIcon icon={faSearch} className="icon-search"></FontAwesomeIcon>
            </label>
            <Button variant="none" className="mx-1" onClick={handleShow}>
              <FontAwesomeIcon icon={faBars} className="icon-bars"></FontAwesomeIcon>
            </Button>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
              <div className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                  Tentang Kami &nbsp;
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </a>
                <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item border-bottom" href="#">
                    Rekayasa Perangkat Lunak
                  </a>
                  <a className="dropdown-item border-bottom" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                  Kompetensi Keahlian &nbsp;
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </a>
                <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item border-bottom" href="#">
                    Rekayasa Perangkat Lunak
                  </a>
                  <a className="dropdown-item border-bottom" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <Link href="/berita">
                <a className="nav-link">Berita</a>
              </Link>
              <div className="nav-item dropdown">
                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                  Siswa &nbsp;
                  <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
                </a>
                <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item border-bottom" href="#">
                    Rekayasa Perangkat Lunak
                  </a>
                  <a className="dropdown-item border-bottom" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
              <Link href="/berita">
                <a className="nav-link">Teaching Factory</a>
              </Link>
              <Link href="/berita">
                <a className="nav-link">Kontak</a>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <form>
        <input type="checkbox" id="search" />
        <InputGroup className="mb-3 px-2 input-search fixed-top py-3" style={{ marginTop: "80px", backgroundColor: "white" }}>
          <FormControl placeholder="Cari...." name="cari" aria-label="Cari...." aria-describedby="basic-addon2" />
          <Button className="border-left-0" type="submit">
            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
          </Button>
        </InputGroup>
      </form>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img src="assets/gambar/logo-motto.png" height={"50"} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="navbar-nav justify-content-start flex-grow-1 px-2">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Tentang Kami &nbsp;
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </a>
              <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                <a className="dropdown-item border-bottom" href="#">
                  Rekayasa Perangkat Lunak
                </a>
                <a className="dropdown-item border-bottom" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Kompetensi Keahlian &nbsp;
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </a>
              <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                <a className="dropdown-item border-bottom" href="#">
                  Rekayasa Perangkat Lunak
                </a>
                <a className="dropdown-item border-bottom" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <Link href="/berita">
              <a className="nav-link">Berita</a>
            </Link>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
                Siswa &nbsp;
                <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
              </a>
              <div className="dropdown-menu px-4" aria-labelledby="navbarDropdown">
                <a className="dropdown-item border-bottom" href="#">
                  Rekayasa Perangkat Lunak
                </a>
                <a className="dropdown-item border-bottom" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <Link href="/berita">
              <a className="nav-link">Teaching Factory</a>
            </Link>
            <Link href="/berita">
              <a className="nav-link">Kontak</a>
            </Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
