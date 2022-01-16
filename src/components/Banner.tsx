import { SpeakerphoneIcon } from '@heroicons/react/outline';
import Link from 'next/link';

import config from '../config/index.json';

const SimpleBanner = () => {
  const { banner } = config;

  return (
    <div className="bg-emerald-400 text-center">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8 font-medium text-white">
        <Link href={banner.href} passHref>
          <a
            className="after:absolute after:inset-0 flex justify-center"
            target={banner.target}
          >
            <SpeakerphoneIcon
              className="h-6 w-6 text-white"
              aria-hidden="true"
            />
            <span className="mx-4">{banner.text}</span>
            <SpeakerphoneIcon
              className="h-6 w-6 text-white scale-x-[-1]"
              aria-hidden="true"
            />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default SimpleBanner;
