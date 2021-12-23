import React, { useState } from 'react';

import config from '../config/index.json';

const Features = () => {
  const [showAllDescription, setShowAllDescription] = useState(false);

  const { features } = config;
  const { title, subtitle, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background min-h-1/2`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-emerald-400 font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            In Städten ist Coworking längst etabliert. Coworking auf dem Land
            bietet viel unerschöpftes Potential. Gerade im Rangau fehlt ein
            solches zukunftsweisendes Angebot bisher.
            <div
              className={
                showAllDescription
                  ? 'hidden text-sm text-green-400 hover:underline cursor-pointer'
                  : 'text-sm text-green-400 hover:underline cursor-pointer'
              }
              onClick={() => setShowAllDescription(!showAllDescription)}
            >
              Mehr...
            </div>
            <div className={showAllDescription ? '' : 'hidden'}>
              Die Bedürfnisse der beteiligten Akteure sind jedoch vielfältig und
              bringen deshalb ein breites Spektrum an Herausforderungen mit
              sich. Die Interessen von Nutzern, Gründern und Betreibern haben
              für uns die gleiche Relevanz wie die Belange von Politik und
              Zivilgesellschaft. Auch Investoren und Unternehmen auf der Suche
              nach Arbeitsorten für ihre Angestellten binden wir aktiv ein.
              <br />
              Wir kennen die Wünsche aller Beteiligten und bieten Lösungen für
              deren spezifische Anforderungen zum Coworking im Rangau.
            </div>
            <div
              className={
                showAllDescription
                  ? 'text-sm text-green-400 hover:underline cursor-pointer'
                  : 'hidden text-sm text-green-400 hover:underline cursor-pointer'
              }
              onClick={() => setShowAllDescription(!showAllDescription)}
            >
              Weniger...
            </div>
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-emerald-400 border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                    {feature?.svg}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
