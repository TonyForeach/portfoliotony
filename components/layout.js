import Head from "next/head";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title = "", description }) {
  return (
    <>
      <Head>
        <title>{`Anthony Rodrigo - ${title}`}</title>
        <meta name="description" content={description}></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
