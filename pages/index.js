import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faBullhorn, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { Button, Carousel } from "react-bootstrap";
import Layout from "../components/Layout";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

export default function Home() {
  return (
    <>
      <Head>
        <title>Beranda | SMKN 1 Ciamis</title>
        <meta property="og:title" content="Beranda | SMKN 1 Ciamis" />
        <meta property="og:description" content="Kenapa Harus SMK NEGERI 1 CIAMIS? Sekolah Menengah Kejuruan Bidang Keahlian Bisnis-Manajemen, Pariwisata dan Teknologi Informasi dan Komunikasi, Melaksanakan ." />
        <meta property="og:image" content="/assets/gambar/logo-motto.png" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="webcrawlers" content="all" />
        <meta property="spiders" content="all" />
        <meta property="robots" content="all" />
        <meta name="keywords" content="" />
      </Head>
      <Layout pageTitle="Index">
        <section>
          <div className="slider align-top">
            <Carousel interval={3000} fade prevLabel={false} nextLabel={false} indicators={false}>
              <Carousel.Item>
                <img className="d-block w-100 mr-auto" src="/assets/gambar/banner.jpg" alt="Second slide" />
                <div className="carousel-caption card col-8 col-md-4 p-2 p-md-4 mx-3">
                  <h5>Perpisahan Kelas 12 Tahun Angkatan 2019 - 2022</h5>
                  <p className="d-none d-md-block">Penerimaan Peserta Didik Baru (PPDB) di SMKN 1 Ciamis akan dilaksanakan dalam dua tahapan. Tahap pertama akan dilaksanakan.</p>
                  <div className="button">
                    <button className="btn btn-primary d-none d-md-block">Lihat Detail</button>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 mr-auto" src="/assets/gambar/banner.jpg" alt="Second slide" />
                <div className="carousel-caption card col-8 col-md-4 p-2 p-md-4 mx-3">
                  <h5>PPDB SMKN 1 Ciamis Tahun 2021-2022</h5>
                  <p className="d-none d-md-block">Penerimaan Peserta Didik Baru (PPDB) di SMKN 1 Ciamis akan dilaksanakan dalam dua tahapan. Tahap pertama akan dilaksanakan.</p>
                  <div className="button">
                    <button className="btn btn-primary d-none d-md-block">Lihat Detail</button>
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100 mr-auto" src="/assets/gambar/banner.jpg" alt="Second slide" />
                <div className="carousel-caption card col-8 col-md-4 p-2 p-md-4 mx-3">
                  <h5>Pelepasan Kepala Sekolah SMK Negeri 1 Ciamis</h5>
                  <p className="d-none d-md-block">Penerimaan Peserta Didik Baru (PPDB) di SMKN 1 Ciamis akan dilaksanakan dalam dua tahapan. Tahap pertama akan dilaksanakan.</p>
                  <div className="button">
                    <button className="btn btn-primary d-none d-md-block">Lihat Detail</button>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </section>
        <section className="profile-smk">
          <div className="container">
            <div className="card">
              <div className="card-body ">
                <div className="row py-5">
                  <div className="col-md-9 pt-md-0 px-5">
                    <h2>Kenapa Harus SMKN 1 Ciamis?</h2>
                    <p>
                      Sekolah Menengah Kejuruan Bidang Keahlian Bisnis-Manajemen, Pariwisata dan Teknologi Informasi dan Komunikasi, Melaksanakan pembelajaran berbasis Teknologi Informasi dan Komunikasi, Memenuhi fasilitas praktik dan bahan
                      ajar sesuai dengan standar yang ditetapkan.
                    </p>
                  </div>
                  <div className="col-md-3">
                    <div className="justify-content-center pt-md-3 button-profil">
                      <div className="py-2 px-1 px-md-0">
                        <Link href="/">
                          <a className="btn btn-primary">PPDB MANDIRI 2021</a>
                        </Link>
                      </div>
                      <div className="py-2 px-1 px-md-0">
                        <Link href="/">
                          <a className="btn btn-primary">PPDB SEKOLAH 2021</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sambutan">
          <div className="container">
            <div className="card">
              <div className="card-body d-md-flex py-5">
                <div className="img-sambutan" style={{ backgroundImage: `url('/assets/gambar/profile.jpg')`, height: "300px", width: "100%", backgroundSize: "cover" }}></div>
                <div className="title-sambutan pt-md-0 pt-4">
                  <h3>Dra. Hj. Nunung Erni N, M.MPd</h3>
                  <p className="text-muted">Kepala Sekolah SMKN 1 Ciamis</p>
                  <p>
                    Perubahan sangat cepat dalam dunia pendidikan menjadikan guru sebagai agen perubahan dan ujung tombak dalam proses pendidikan. Mewujudkan pendidikan nasional tentunya didukung guru yang profesional dan unggul berdasarkan
                    nilai-nilai Pancasila. Melalui Direktorat Pendidikan Profesi Guru yang melaksanakan perumusan...
                  </p>
                  <Button variant="outline-secondary">Lihat detail</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="berita">
          <div className="container">
            <div className="row">
              <div className="col-md-6 berita-unggulan">
                <div className="header-berita d-flex justify-content-between">
                  <h4>Berita Unggulan</h4>
                  <Button variant="outline-primary">Selengkapnya</Button>
                </div>
                <div className="content-berita">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge  kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-md-0 mt-5">
                <div className="header-berita d-flex justify-content-between">
                  <h4>Berita Terbaru</h4>
                  <Button variant="outline-primary">Selengkapnya</Button>
                </div>
                <div className="content-berita">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge  kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge  kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge  kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card">
                        <img src="/assets/gambar/default.jpg" />
                        <div className="card-body judul-berita">
                          <a href="#" className="badge  kategori text-decoration-none">
                            Pendidikan
                          </a>
                          <h5>
                            <a href="#" className="text-decoration-none">
                              Pelepasan Siswa dan Siswi SMKN 1 Ciamis
                            </a>
                          </h5>
                          <p className="pt-2 text-muted">
                            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>&nbsp; Selasa, 21 Februari 2022
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="content-unpeng">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="card">
                  <div className="card-header pengumuman py-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="icon">
                          <FontAwesomeIcon icon={faBullhorn}></FontAwesomeIcon>
                        </span>
                        <h3>Pengumuman</h3>
                      </div>
                      <a href="#" className="pt-5 text-white">
                        Lihat lebih banyak
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="unpeng-item d-flex my-4">
                      <div className="date">
                        <span>20</span> <span>Februari</span> <span>2022</span>
                      </div>
                      <a className="text-decoration-none" href="#">
                        <h5>Pelepasan siswa dan siswi SMKN 1 Ciamis Tahun 2022</h5>
                      </a>
                    </div>
                    <div className="unpeng-item d-flex my-4">
                      <div className="date">
                        <span>20</span> <span>Februari</span> <span>2022</span>
                      </div>
                      <a className="text-decoration-none" href="#">
                        <h5>Pelepasan siswa dan siswi SMKN 1 Ciamis Tahun 2022</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <div className="card">
                  <div className="card-header bg-secondary py-4">
                    <div className="d-flex justify-content-between">
                      <div>
                        <span className="icon">
                          <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
                        </span>
                        <h3>Undangan</h3>
                      </div>
                      <a href="#" className="pt-5 text-white">
                        Lihat lebih banyak
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="unpeng-item d-flex my-4">
                      <div className="date">
                        <span>20</span> <span>Februari</span> <span>2022</span>
                      </div>
                      <a className="text-decoration-none" href="#">
                        <h5>Pelepasan siswa dan siswi SMKN 1 Ciamis Tahun 2022</h5>
                      </a>
                    </div>
                    <div className="unpeng-item d-flex my-4">
                      <div className="date">
                        <span>20</span> <span>Februari</span> <span>2022</span>
                      </div>
                      <a className="text-decoration-none" href="#">
                        <h5>Pelepasan siswa dan siswi SMKN 1 Ciamis Tahun 2022</h5>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="video-multimedia">
          <div className="container py-5">
            <h3>Video Terbaru MMC</h3>
            <div className="row px-md-0 px-3">
              <div className="col-md-5 mt-3">
                <div className="title-video d-flex mt-4">
                  <div className="nomor">1</div>
                  <div className="judul-video">
                    <h5>FILM FIKSI WAYANG UNINGA SAGALA</h5>
                    <p>27 Februari 2022 &bull; 200 views</p>
                  </div>
                </div>
                <div className="title-video d-flex mt-4">
                  <div className="nomor">2</div>
                  <div className="judul-video">
                    <h5>Pelepasan Siswa dan Siswi SMKN 1 Ciamis di Gor Sekolah</h5>
                    <p>27 Februari 2022 &bull; 200 views</p>
                  </div>
                </div>
                <div className="title-video d-flex mt-4">
                  <div className="nomor">3</div>
                  <div className="judul-video">
                    <h5>FILM FIKSI WAYANG UNINGA SAGALA</h5>
                    <p>27 Februari 2022 &bull; 200 views</p>
                  </div>
                </div>
                <div className="title-video d-flex mt-4">
                  <div className="nomor">4</div>
                  <div className="judul-video">
                    <h5>FILM FIKSI WAYANG UNINGA SAGALA</h5>
                    <p>27 Februari 2022 &bull; 200 views</p>
                  </div>
                </div>
                <div className="mt-3">
                  <Link href="/">
                    <a className=" text-white text-decoration-none">
                      <h5>Lihat lebih banyak</h5>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-md-7 video d-none d-md-block">
                <iframe width="100%" height="350px" src="https://www.youtube.com/embed/cT6WqB6fGJQ"></iframe>
              </div>
            </div>
          </div>
        </section>
        <section className="galeri-foto">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h3>Galeri Foto</h3>
              <Link href="/">
                <a className="text-decoration-none">
                  <h5 className="lihat-semua">Lihat semua</h5>
                </a>
              </Link>
            </div>
            <div className="row content-galeri content-galery px-3 px-sm-0">
              <Swiper
                modules={[FreeMode, Pagination]}
                spaceBetween={30}
                freeMode={true}
                pagination={false}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  500: {
                    slidesPerView: 2,
                  },
                  980: {
                    slidesPerView: 3,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <img src="/assets/gambar/default.jpg" className="img-fluid" />
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <h5 className="pt-3">Pelepasan Kepala Sekolah SMKN 1 Ciamis</h5>
                    </a>
                  </Link>
                  <p className="text-muted">Senin, 07 Februari 2022 &bull; oleh Reihan Andika</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <img src="/assets/gambar/default.jpg" className="img-fluid" />
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <h5 className="pt-3">Pelepasan Kepala Sekolah SMKN 1 Ciamis</h5>
                    </a>
                  </Link>
                  <p className="text-muted">Senin, 07 Februari 2022 &bull; oleh Reihan Andika</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <img src="/assets/gambar/default.jpg" className="img-fluid" />
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <h5 className="pt-3">Pelepasan Kepala Sekolah SMKN 1 Ciamis</h5>
                    </a>
                  </Link>
                  <p className="text-muted">Senin, 07 Februari 2022 &bull; oleh Reihan Andika</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <img src="/assets/gambar/default.jpg" className="img-fluid" />
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <h5 className="pt-3">Pelepasan Kepala Sekolah SMKN 1 Ciamis</h5>
                    </a>
                  </Link>
                  <p className="text-muted">Senin, 07 Februari 2022 &bull; oleh Reihan Andika</p>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card">
                    <div className="card-body">
                      <img src="/assets/gambar/default.jpg" className="img-fluid" />
                    </div>
                  </div>
                  <Link href="/">
                    <a className="text-decoration-none">
                      <h5 className="pt-3">Pelepasan Kepala Sekolah SMKN 1 Ciamis</h5>
                    </a>
                  </Link>
                  <p className="text-muted">Senin, 07 Februari 2022 &bull; oleh Reihan Andika</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
