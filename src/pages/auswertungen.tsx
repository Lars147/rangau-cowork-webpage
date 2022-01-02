import React from 'react';

import Head from 'next/head';

import Navbar from '../components/Navbar';
import ScrollyTeller from '../components/ScrollyTeller';

const Evaluation = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Auswertungen</title>
      </Head>
      <Navbar />
      <ScrollyTeller />
    </>
  );
};

export default Evaluation;
