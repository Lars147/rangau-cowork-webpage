import Head from 'next/head';

import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Kontakt</title>
      </Head>
      <Navbar />
      <ContactForm />
    </>
  );
}
