import React from 'react';

import { ExclamationIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';

import About from '../components/About';
import { GreenPie, GreenBar, nivoGreensReversed } from '../components/Charts';
import Navbar from '../components/Navbar';

const dataResidentPie = [
  {
    id: 'Emskirchen',
    label: 'Emskirchen',
    value: 2,
  },
  {
    id: 'Trautskirchen',
    label: 'Trautskirchen',
    value: 2,
  },
  {
    id: 'Wilhelmsdorf',
    label: 'Wilhelmsdorf',
    value: 2,
  },
  {
    id: 'Neustadt a.d. Aisch',
    label: 'Neustadt a.d. Aisch',
    value: 4,
  },
  {
    id: 'Neuhof a.d. Zenn',
    label: 'Neuhof a.d. Zenn',
    value: 5,
  },
  {
    id: 'Sonstige',
    label: 'Sonstige',
    value: 7,
  },
  {
    id: 'Wilhermsdorf',
    label: 'Wilhermsdorf',
    value: 11,
  },
  {
    id: 'Markt Erlbach',
    label: 'Markt Erlbach',
    value: 54,
  },
];

const dataAgeBar = [
  {
    ageRange: '11-20',
    Anzahl: 2,
  },
  {
    ageRange: '21-30',
    Anzahl: 31,
  },
  {
    ageRange: '31-40',
    Anzahl: 33,
  },
  {
    ageRange: '41-50',
    Anzahl: 14,
  },
  {
    ageRange: '51-60',
    Anzahl: 5,
  },
  {
    ageRange: '61-70',
    Anzahl: 2,
  },
];

const dataEmploymentPie = [
  {
    id: 'Solo-Selbstständig',
    label: 'Solo-Selbstständig',
    value: 2,
    color: 'hsl(155, 70%, 50%)',
  },
  {
    id: 'Verbeamtet',
    label: 'Verbeamtet',
    value: 2,
    color: 'hsl(155, 70%, 50%)',
  },
  {
    id: 'Selbstständig / Unternehmer',
    label: 'Selbstständig / Unternehmer',
    value: 5,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Azubi / Student / Schüler',
    label: 'Azubi / Student / Schüler',
    value: 7,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Angestellt',
    label: 'Angestellt',
    value: 71,
    color: 'hsl(39, 70%, 50%)',
  },
];

const dataSatisfactionBar1 = [
  {
    SatisfactionCategory: 'Sonstiges',
    Anteil: 3,
  },
  {
    SatisfactionCategory: 'Fehlende soziale Interaktion',
    Anteil: 8,
  },
  {
    SatisfactionCategory: 'Negativer Einfluss durch Kollegen',
    Anteil: 13,
  },
  {
    SatisfactionCategory: 'Fehlende Trennung von Arbeit und Privatem',
    Anteil: 16,
  },
  {
    SatisfactionCategory: 'Lärmbelästigung',
    Anteil: 18,
  },
  {
    SatisfactionCategory: 'Unzureichende Ausstattung',
    Anteil: 40,
  },
];

const dataSatisfactionBar2 = [
  {
    label: 'Sonstiges',
    Anteil: 6,
  },
  {
    label: 'Flexibilität',
    Anteil: 11,
  },
  {
    label: 'Kurzer Arbeitsweg',
    Anteil: 11,
  },
  {
    label: 'Location (Architektur, Lage)',
    Anteil: 22,
  },
  {
    label: 'Technische Ausstattung',
    Anteil: 25,
  },
  {
    label: 'Verknüpfung von Arbeit und Privatem',
    Anteil: 28,
  },
  {
    label: 'Soziales Umfeld',
    Anteil: 31,
  },
];

const dataCoworkingPie = [
  {
    id: 'Ja',
    label: 'Ja',
    value: 55,
    color: 'hsl(39, 70%, 50%)',
  },
  {
    id: 'Nein',
    label: 'Nein',
    value: 32,
    color: 'hsl(296, 70%, 50%)',
  },
];

const dataWorkingActivityPie = [
  {
    id: 'Sonstiges',
    label: 'Sonstiges',
    value: 1,
    color: 'hsl(39, 70%, 50%)',
  },
  {
    id: 'Außendienst',
    label: 'Außendienst',
    value: 3,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Besprechungen vor Ort',
    label: 'Besprechungen vor Ort',
    value: 10,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Online-Meetings',
    label: 'Online-Meetings',
    value: 18,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Individuelle Schreibtischarbeit',
    label: 'Individuelle Schreibtischarbeit',
    value: 68,
    color: 'hsl(296, 70%, 50%)',
  },
];

const dataExpectationsCoworkingPie = [
  {
    id: 'Privatsphäre',
    label: 'Privatsphäre',
    value: 3,
  },
  {
    id: 'Flexibilität',
    label: 'Flexibilität',
    value: 5,
  },
  {
    id: 'Ruhe',
    label: 'Ruhe',
    value: 10,
  },
  {
    id: 'Technische Ausstattung',
    label: 'Technische Ausstattung',
    value: 13,
  },
  {
    id: 'Location (Architektur, Lage)',
    label: 'Location (Architektur, Lage)',
    value: 28,
  },
  {
    id: 'Kurzer Arbeitsweg',
    label: 'Kurzer Arbeitsweg',
    value: 44,
  },
  {
    id: 'Soziales Umfeld',
    label: 'Soziales Umfeld',
    value: 59,
  },
];

const dataSupportEmployeerPie = [
  {
    id: 'Ja',
    label: 'Ja',
    value: 25,
    color: 'hsl(39, 70%, 50%)',
  },
  {
    id: 'Nein',
    label: 'Nein',
    value: 39,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Weiß ich nicht',
    label: 'Weiß ich nicht',
    value: 36,
    color: 'hsl(296, 70%, 50%)',
  },
];

function LinkInPage({
  href,
  target = '_self',
  text,
}: {
  href: string;
  target?: string;
  text: string;
}) {
  return (
    <a
      href={href}
      target={target}
      className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800"
    >
      {text}
    </a>
  );
}

function HighlightText({ text }: { text: string }) {
  return <span className="font-bold">{text}</span>;
}

const Evaluation = () => {
  return (
    <>
      <Head>
        <title>Rangau Cowork - Auswertung - Coworking Umfrage</title>
        <meta
          name="description"
          content="Auswertung der Coworking Umfrage vom Januar 2022."
        />
      </Head>
      <Navbar />
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          <div
            className="relative h-full text-lg max-w-prose mx-auto"
            aria-hidden="true"
          >
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="block text-base text-center text-emerald-600 font-semibold tracking-wide uppercase">
                Auswertung
              </span>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Coworking Umfrage 2021/22
              </span>
            </h1>
            <div className="rounded-md bg-yellow-50 p-4 m-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <ExclamationIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">
                    Achtung
                  </h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      Diese Seite ist <span className="font-bold">nicht</span>{' '}
                      für die mobile Ansicht optimiert.
                      <br />
                      Möglicherweise wird die Darstellung auf deinem Smartphone
                      optimiert, wenn du es in die Horizontale drehst. <br />
                      Für die optimale Darstellung öffne die Seite auf einem PC
                      oder einem Tablet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xl text-gray-500 leading-8">
              Mittels einer Online-Umfrage wurden Coworking-Potenziale im Rangau
              erfasst. <br />
              Die Teilnahme an der Umfrage ist weiterhin{' '}
              <LinkInPage
                href="https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?usp=sf_link"
                target="_blank"
                text="hier"
              />{' '}
              möglich. Ein Auszug der bis dato zentralen Erkenntnisse findet
              sich im Folgenden.
            </p>
          </div>
          <div className="mt-6 prose prose-emerald prose-lg text-gray-500 mx-auto">
            <p>
              Im Zeitraum vom 24.11.2021 bis zum 03.01.2022 nahmen 87 Personen
              an der Umfrage teil. Die Umfrage wurde auf verschiedenen Kanälen
              ausgeschrieben. Unter anderem
            </p>
            <ul role="list">
              <li>im Mitteilungsblatt der Gemeinde Markt Erlbach</li>
              <li>
                in regionalen Facebook Gruppen
                <br />
                (Markt Erlbach, Landkreis NEA-BW, Wilhermsdorf, ...)
              </li>
              <li>durch Weiterleitungen (E-Mail, Kurznachrichten, ...)</li>
            </ul>
            <h2>Beschreibung der Teilnehmerstichprobe</h2>
            <div>
              <p>
                Dieser Abschnitt charakterisiert die Teilnehmer der Umfrage
                hinsichtlich
              </p>
              <ul role="list">
                <li>
                  <Link href="/auswertung/#residence" passHref>
                    <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                      Wohnort
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/auswertung/#age" passHref>
                    <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                      Alter
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/auswertung/#employment" passHref>
                    <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                      Beschäftigung
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div id="residence" className="pt-12">
              <h3>Wohnort</h3>
              <div className="h-72 xl:h-96">
                <GreenPie data={dataResidentPie} hideLegend={true} />
              </div>
              <p>
                <HighlightText text="90%" /> der Umfrageteilnehmer kommen{' '}
                <HighlightText text="aus Markt Erlbach" /> oder einer direkten
                Nachbargemeinde.
              </p>
            </div>
            <div id="age" className="pt-12">
              <h3>Alter</h3>
              <div className="h-[40rem]">
                <GreenBar
                  data={dataAgeBar}
                  keys={['Anzahl']}
                  indexBy={'ageRange'}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Alter',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Anzahl der Teilnehmer',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                />
              </div>
              <p>
                <HighlightText text="74%" /> der Umfrageteilnehmer sind zwischen
                21 und 40 Jahre alt. Das Durchschnittsalter aller Teilnehmer
                liegt bei <HighlightText text="34 Jahren" />.
              </p>
            </div>
            <div id="employment" className="pt-12">
              <h3>Beschäftigung</h3>
              <div className="h-72 xl:h-96">
                <GreenPie data={dataEmploymentPie} hideLegend={true} />
              </div>
              <p>
                <HighlightText text="4 von 5" /> Umfrageteilnehmern befinden
                sich in einem Angestelltenverhältnis.
              </p>
            </div>
            <h2 className="pt-20">Inhalte der Umfrage</h2>
            Im Rahmen unserer Umfrage beantworteten die Teilnehmer Fragen zu
            folgenden Kategorien:
            <ul id="list2" role="list">
              <li>
                <Link href="/auswertung/#satisfaction" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Unzufriedenheit in der aktuellen Arbeitsumgebung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auswertung/#improvement" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Zufriedenheit in der aktuellen Arbeitsumgebung
                  </a>
                </Link>
              </li>
              <li>Dauer bzw. Zufriedenheit mit Arbeitsweg</li>
              <li>Zahlungsbereitschaft bzgl. Coworking-Nutzung</li>
              <li>
                <Link href="/auswertung/#interest-coworking" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Interesse bzgl. Coworking-Nutzung
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auswertung/#working-activity" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Tätigkeiten von Coworking-Interssierten
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auswertung/#expectations-coworking" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Erwartungen an Coworking
                  </a>
                </Link>
              </li>
              <li>Erlaubnis durch Arbeitgeber für mobiles Arbeiten</li>
              <li>
                <Link href="/auswertung/#support-employeer" passHref>
                  <a className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800">
                    Unterstützung durch Arbeitgeber für mobiles Arbeiten
                  </a>
                </Link>
              </li>
            </ul>
            <p>
              Nicht alle Fragen waren als Pflichtfragen deklariert, bei
              bestimmten Fragen waren Mehrfachnennungen möglich. Die folgenden
              Diagramme beziehen sich deshalb auf die Anzahl der Teilnehmer,
              welche die betreffende Frage beantwortet haben.
            </p>
            <div id="satisfaction" className="pt-12">
              <h3>Unzufriedenheit in der aktuellen Arbeitsumgebung</h3>
              <div className="h-[40rem]">
                <GreenBar
                  data={dataSatisfactionBar1}
                  keys={['Anteil']}
                  indexBy={'SatisfactionCategory'}
                  customValueFormat="%"
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 45,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Anteil der Teilnehmer [%]',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                  margin={{ top: 40, right: 120, bottom: 220, left: 80 }}
                />
              </div>
              <p>
                <HighlightText text="40%" /> stören sich an der technischen
                Ausstattung, <HighlightText text="16%" /> an der fehlenden
                Trennung zwischen Arbeit und Privatem.
              </p>
            </div>
            <div id="improvement" className="pt-12">
              <h3>Zufriedenheit in der aktuellen Arbeitsumgebung</h3>
              <div className="h-[40rem]">
                <GreenBar
                  data={dataSatisfactionBar2}
                  keys={['Anteil']}
                  indexBy={'label'}
                  customValueFormat="%"
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 45,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Anteil der Teilnehmer [%]',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                  margin={{ top: 40, right: 80, bottom: 200, left: 80 }}
                />
              </div>
              <p>
                Das <HighlightText text="soziale Umfeld" /> und die{' '}
                <HighlightText text="technische Ausstattung" /> sind, unabhängig
                vom Arbeitsort, zwei wichtige Zufriedenheitsfaktoren. Am Home
                Office schätzen viele die{' '}
                <HighlightText text="Verknüpfung von Arbeit und Privatem" />,
                wohingegen im Firmenbüro die{' '}
                <HighlightText text="Location (Architektur, Lage)" /> eine hohe
                Relevanz hat.
              </p>
            </div>
            <div id="interest-coworking" className="pt-12">
              <h3>Interesse bzgl. Coworking-Nutzung</h3>
              <div className="h-72 xl:h-96">
                <GreenPie
                  data={dataCoworkingPie}
                  colors={[nivoGreensReversed[0], nivoGreensReversed[4]]}
                  hideLegend={true}
                />
              </div>
              <p>
                Fast <HighlightText text="zwei Drittel" /> der Teilnehmer können
                sich vorstellen, einen Coworking-Space für ihre Arbeit zu
                nutzen.
              </p>
            </div>
            <div id="working-activity" className="pt-12">
              <h3>Tätigkeiten von Coworking-Interessierten</h3>
              <div className="h-72 xl:h-96">
                <GreenPie
                  data={dataWorkingActivityPie}
                  colors={nivoGreensReversed}
                  hideLegend={true}
                  customValueFormat="%"
                />
              </div>
              <p>
                Diese Coworking-Interessierten verbringen den{' '}
                <HighlightText
                  text="größten Teil ihrer
            Arbeitszeit mit individueller Schreibtischarbeit"
                />
                . Zusätzlich entfallen <HighlightText text="18%" /> auf{' '}
                <HighlightText text="Online-Meetings" />.
              </p>
            </div>
            <div id="expectations-coworking" className="pt-12">
              <h3>Erwartungen an Coworking</h3>
              <div className="h-72 xl:h-96">
                <GreenPie
                  data={dataExpectationsCoworkingPie}
                  legendPosition="bottom-left"
                  hideLegend={true}
                />
              </div>
              <p>
                Die Mehrheit der Coworking-Interessierten erhofft sich ein{' '}
                <HighlightText text="vielfältiges soziales Umfeld" />. Weiterhin
                ist ein <HighlightText text="kurzer Arbeitsweg" /> und eine{' '}
                <HighlightText text="ansprechende Location (Architektur, Lage)" />{' '}
                relevant.
              </p>
            </div>
            <div id="support-employeer" className="pt-12">
              <h3>Unterstützung durch Arbeitgeber für mobiles Arbeiten</h3>
              <div className="h-72 xl:h-96">
                <GreenPie
                  data={dataSupportEmployeerPie}
                  colors={[
                    nivoGreensReversed[0],
                    nivoGreensReversed[2],
                    nivoGreensReversed[5],
                  ]}
                  hideLegend={true}
                  customValueFormat="%"
                />
              </div>
              <p>
                <HighlightText text="25%" /> der coworking-interessierten
                Arbeitnehmer wissen, dass sie von ihrem Arbeitgeber bei mobilem
                Arbeiten finanziell unterstützt werden können.{' '}
                <HighlightText text="Über ein Drittel" /> ist über eine mögliche
                Unterstützung durch den Arbeitgeber{' '}
                <HighlightText text="nicht informiert" />.
              </p>
            </div>
            <h2 className="pt-20">Fazit</h2>
            <p>
              Die Umfrageergebnisse zeigen{' '}
              <HighlightText text="enormes Potenzial" /> für Coworking im
              Rangau. Besonders die Aspekte{' '}
              <HighlightText text="Gemeinschaft" /> und{' '}
              <HighlightText text="Ausstattung" /> sind das Erfolgsgeheimnis
              eines Coworking-Spaces im Rangau. Bei{' '}
              <HighlightText text="Fragen zur Umsetzung" /> stehen wir Ihnen
              jederzeit beratend zur Verfügung. Ebenso freuen wir uns über{' '}
              <HighlightText text="Diskussion" /> und Anfragen zur{' '}
              <HighlightText text="Detailauswertung" /> der vielversprechenden
              Umfrageergebnisse.
              <br />
              <br />
              <HighlightText text="Kontaktieren Sie uns" />{' '}
              <Link href="/#team-section">hier</Link> gerne persönlich!
            </p>
          </div>
        </div>
      </div>
      <hr />
      <About />
    </>
  );
};

export default Evaluation;
