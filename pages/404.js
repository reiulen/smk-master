import Head from "next/head";
import Link from "next/link";
import { Button, Card, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan | SMKN 1 Ciamis</title>
      </Head>
      <Layout>
        <Container>
          <Row>
            <Card className="border-0 title-404">
              <Card.Body>
                <h1>404</h1>
                <p>Halaman tidak ditemukan</p>
                <Link href="/">
                  <a>
                    <Button variant="outline-primary">Kembali ke halaman utama</Button>
                  </a>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
