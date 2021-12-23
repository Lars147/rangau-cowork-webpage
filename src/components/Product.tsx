import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Product = () => {
  const { product } = config;

  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-emerald-400`}
        >
          {product.title.split(' ').map((word, index) => (
            <span
              key={index}
              className={index === 2 ? 'text-emerald-400' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`md:mt-20 md:space-y-10`}>
          <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
            <div className={`w-full sm:w-1/2 p-6`}>
              <img
                className="h-6/6 rounded-md shadow-xl"
                src="/assets/images/work.jpg"
                alt="work"
              />
            </div>
            <div className={`w-full sm:w-1/2 p-6 mt-20`}>
              <div className={`align-middle`}>
                <h3
                  className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                >
                  Arbeitsplatz
                </h3>
                <p className={`text-gray-600 mb-8`}>
                  Coworking ist für uns mehr als nur ein mobiler Arbeitsplatz.
                  Wir verknüpfen Produktivität mit{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    Wohlfühlfaktor
                  </span>{' '}
                  und Büroatmosphäre mit{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    Community
                  </span>
                  , um inspirierende Orte für gemeinsames Arbeiten zu
                  erschaffen.
                </p>
              </div>
            </div>
          </div>
          <div className={`flex flex-wrap`}>
            <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                Gemeinschaft
              </h3>
              <p className={`text-gray-600`}>
                Beziehungen sind Katalysatoren für erfolgreiches Arbeiten. Wir
                sind davon überzeugt, dass ein{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  vielfältiges soziales Netzwerk
                </span>{' '}
                die Kreativität beflügelt und nachhaltigen Mehrwert schafft.
                Coworking gibt Menschen die Möglichkeit, sich lokal miteinander
                zu vernetzen.{' '}
                <span className="font-bold underline decoration-2 decoration-emerald-400">
                  Über Unternehmensgrenzen hinweg
                </span>{' '}
                entstehen so kreative Problemlösungen.
              </p>
            </div>
            <div className={`w-full sm:w-1/2 p-6`}>
              <img
                className="h-6/6 rounded-md shadow-xl"
                src="/assets/images/social.jpg"
                alt="social"
              />
            </div>
          </div>
          <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
            <div className={`w-full sm:w-1/2 p-6`}>
              <img
                className="h-6/6 rounded-md shadow-xl"
                src="/assets/images/equipment-small.jpg"
                alt="equipment"
              />
            </div>
            <div className={`w-full sm:w-1/2 p-6 mt-20`}>
              <div className={`align-middle`}>
                <h3
                  className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
                >
                  Ausstattung
                </h3>
                <p className={`text-gray-600 mb-8`}>
                  Ein Arbeitsplatz muss heute allen Anforderungen der modernen
                  Arbeitswelt gerecht werden. Die Coworking-Infrastruktur
                  ermöglicht sowohl{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    fokussiertes Arbeiten
                  </span>{' '}
                  und konstruktive Meetings als auch zwischenmenschliche
                  Begegnungen und gemeinschaftliches Miteinander. Nutzer von
                  Coworking-Flächen profitieren von fortschrittlicher{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    IT-Infrastruktur
                  </span>
                  , ergonomischem{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    Arbeitsmobiliar
                  </span>{' '}
                  und innovativen{' '}
                  <span className="font-bold underline decoration-2 decoration-emerald-400">
                    Gemeinschaftsbereichen
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
