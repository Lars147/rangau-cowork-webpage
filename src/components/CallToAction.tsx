import React from 'react';

import config from '../config/index.json';

const CallToAction = () => {
  const { ctaSection } = config;
  const { title, subtitle, description, button } = ctaSection;
  return (
    <div className="mt-5 py-5 bg-white md:py-7 lg:py-14">
      <div className="container mx-auto px-5 xl:max-w-screen-xl">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div>
            <h1 className="text-3xl font-bold md:text-4xl">
              <span className="block text-gray-900">{title}</span>
              <span className="block text-emerald-400">{subtitle}</span>
            </h1>
            <p className="max-w-lg mt-2.5 text-gray-500 md:text-lg">
              {description}
            </p>
          </div>
          <div className="mt-5 lg:mt-0 lg:ml-5 space-y-2.5 sm:flex sm:shrink-0 sm:space-y-0 sm:space-x-2.5">
            <a
              href={button.href}
              className="block px-5 py-3 rounded text-center font-medium text-white bg-emerald-400"
            >
              {button.text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
