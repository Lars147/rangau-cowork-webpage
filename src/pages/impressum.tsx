import React from 'react';

import Head from 'next/head';

import Navbar from '../components/Navbar';

const Imprint = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Impressum</title>
      </Head>
      <Navbar />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Impressum
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Jonas Miederer
              <br />
              Gartenstraße 16
              <br />
              91459 Markt Erlbach
              <br />
              jonas.miederer@rangau-cowork.com
            </p>
            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">
                  Verantwortungsbereich
                </h2>

                <p>
                  Das vorliegende Impressum gilt für den Internet-Auftritt unter
                  folgender Domain: www.rangau-cowork.de
                </p>
              </div>

              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">
                  Haftungsausschluss
                </h2>
              </div>

              <p>
                Ich, der Betreiber diese Seite, nehme den Schutz Ihrer
                persönlichen Daten sehr ernst und halte mich strikt an die
                Regeln der Datenschutzgesetze. Personenezogene Daten werden auf
                dieser Webseite nur im technisch notwendigen Umfang erhoben. In
                keinem Fall werden die erhobenen Daten verkauft oder aus anderen
                Gründen an Dritte weitergegeben. Die nachfolgende Erklärung gibt
                Ihnen einen Überblick darüber, wie ich diesen Schutz
                gewährleiste und welche Art von Daten zu welchem Zweck erhoben
                werden.
              </p>

              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">
                  Haftung für Inhalte
                </h2>
              </div>

              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                sind wir gemäß § 6 Abs.1 MDS tV und § 8 Abs.1 TDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>

              <p>
                Diensteanbieter sind jedoch nicht verpflichtet, die von ihnen
                übermittelten oder gespeicherten fremden Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                Entfernung oder Sperrung der Nutzung von Informationen nach den
                allgemeinen Gesetzen bleiben hier von unberührt. Eine
                diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                Kenntnis einer konkreten Rechtsverletzung möglich. Bei bekannt
                werden von entsprechenden Rechtsverletzungen werden wir diese
                Inhalte umgehend entfernen.
              </p>

              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">
                  Haftung für Links
                </h2>
              </div>

              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
                wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                Verlinkung nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei bekannt
                werden von Rechtsverletzungen werden wir derartige Links
                umgehend entfernen.
              </p>

              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">
                  Urheberrecht
                </h2>
              </div>

              <p>
                Die Betreiber der Seiten sind bemüht, stets die Urheberrechte
                anderer zu beachten bzw. auf selbst erstellte sowie lizenzfreie
                Werke zurückzugreifen. Die durch die Seitenbetreiber erstellten
                Inhalte und Werke auf diesen Seiten unterliegen dem
                Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>

              <div className="pt-10 pb-3">
                <h2 className="text-xl text-gray-900 font-bold">Datenschutz</h2>
              </div>

              <p>
                Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
                Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
                angeforderter Werbung und Informationsmaterialien wird hiermit
                ausdrücklich widersprochen. Die Betreiber der Seiten behalten
                sich ausdrücklich rechtliche Schritte im Falle der unverlangten
                Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imprint;
