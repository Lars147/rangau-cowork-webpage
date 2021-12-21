import React from 'react';

const Survey = () => {
  return (
    <div className="content-center bg-green-50">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?embedded=true"
        width="100%"
        height="8855" // make this dynamic height
        frameBorder="0"
      />
    </div>
  );
};

export default Survey;
