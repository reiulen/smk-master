import Head from "next/head";
import Link from "next/link";
import { Button, Card, Container, Row } from "react-bootstrap";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Halaman Tidak Ditemukan | SMKN 1 Ciamis</title>
      </Head>
      <Layout pageTitle="404">
        <Container>
          <Row>
            <Card className="border-0 title-404">
              <Card.Body>
                <h1>404</h1>
                <p>Halaman tidak ditemukan</p>
                <Link href="/">
                  <Button variant="outline-primary">Kembali ke halaman utama</Button>
                </Link>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
