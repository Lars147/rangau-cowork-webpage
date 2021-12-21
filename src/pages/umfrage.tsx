import React from 'react';

import Head from 'next/head';

import Navbar from '../components/Navbar';
import Survey from '../components/Survey';

const Umfrage = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Umfrage</title>
      </Head>
      <Navbar />
      <Survey />
    </>
  );
};

export default Umfrage;
