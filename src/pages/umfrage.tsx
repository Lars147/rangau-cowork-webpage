import React from 'react';

import Head from 'next/head';

const Survey = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Umfrage</title>
      </Head>
      <div className="content-center bg-green-50">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?embedded=true"
          width="100%"
          height="8855" // make this dynamic height
          frameBorder="0"
        >
          Wird geladen…
        </iframe>
      </div>
    </>
  );
};

export default Survey;
