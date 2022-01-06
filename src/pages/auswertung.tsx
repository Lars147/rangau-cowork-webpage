import React from 'react';

import Head from 'next/head';

import Content from '../components/Content';
import Navbar from '../components/Navbar';

const Evaluation = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Auswertung - Coworking Umfrage</title>
        <meta
          name="description"
          content="Auswertung der Coworking Umfrage vom Januar 2022."
        />
      </Head>
      <Navbar />
      <Content />
    </>
  );
};

export default Evaluation;
