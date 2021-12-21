import React, { useState } from 'react';

const Survey = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="content-center bg-emerald-50">
      {loading ? (
        <div className="pt-2">
          <div className="border border-gray-400 shadow rounded-md p-4 max-w-sm w-full mx-auto h-screen">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-gray-700 h-10 w-10" />
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-gray-700 rounded" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-gray-700 rounded col-span-2" />
                    <div className="h-2 bg-gray-700 rounded col-span-1" />
                  </div>
                  <div className="h-2 bg-gray-700 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?embedded=true"
        width="100%"
        height="8855" // make this dynamic height
        frameBorder="0"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default Survey;
