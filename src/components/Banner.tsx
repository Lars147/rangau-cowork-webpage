import Link from 'next/link';

import config from '../config/index.json';

const SimpleBanner = () => {
  const { banner } = config;

  return (
    <div className="bg-emerald-400 text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 font-medium text-white">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?usp=sf_link"
          passHref
        >
          <a className="after:absolute after:inset-0" target="_blank">
            {banner.text}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SimpleBanner;
