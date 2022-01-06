import { nivoGreensReversed, GreenBar, GreenPie } from './Charts';

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
    ageRange: 'Sonstiges',
    frequency: 3,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Fehlende soziale Interaktion',
    frequency: 8,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Negativer Einfluss durch Kollegen',
    frequency: 13,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Fehlende Trennung von Arbeit und Privatem',
    frequency: 16,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Lautstärke',
    frequency: 18,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Zufrieden',
    frequency: 19,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Technische Ausstattung',
    frequency: 40,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
];

const dataSatisfactionBar2 = [
  {
    ageRange: 'Sonstiges',
    frequency: 6,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Flexibilität',
    frequency: 11,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Kurzer Arbeitsweg',
    frequency: 11,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Location (Architektur, Lage)',
    frequency: 22,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Technische Ausstattung',
    frequency: 25,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Verknüpfung von Arbeit und Privatem',
    frequency: 28,
    frequencyColor: 'hsl(158, 64%, 52%)',
  },
  {
    ageRange: 'Soziales Umfeld',
    frequency: 31,
    frequencyColor: 'hsl(158, 64%, 52%)',
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
    value: 4,
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
    color: 'hsl(39, 70%, 50%)',
  },
  {
    id: 'Flexibilität',
    label: 'Flexibilität',
    value: 5,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Ruhe',
    label: 'Ruhe',
    value: 10,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Technische Ausstattung',
    label: 'Technische Ausstattung',
    value: 13,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Location (Architektur, Lage)',
    label: 'Location (Architektur, Lage)',
    value: 28,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Kurzer Arbeitsweg',
    label: 'Kurzer Arbeitsweg',
    value: 44,
    color: 'hsl(296, 70%, 50%)',
  },
  {
    id: 'Soziales Umfeld',
    label: 'Soziales Umfeld',
    value: 59,
    color: 'hsl(296, 70%, 50%)',
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

function LinkInPage({ href, text }: { href: string; text: string }) {
  return (
    <a
      href={href}
      className="text-gray-500 font-bold underline decoration-emerald-400 hover:text-emerald-800"
    >
      {text}
    </a>
  );
}

function HighlightText({ text }: { text: string }) {
  return <span className="font-bold">{text}</span>;
}

export default function Content() {
  return (
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
              Coworking Umfrage 2022
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Mittels einer Online-Umfrage wurden Coworking-Potenziale im Rangau
            erfasst. <br />
            Die Teilnahme ist weiterhin{' '}
            <LinkInPage
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSeOwEoOFLSm8ROR5Np8E2EsB9RHY7bSZU5cRtRQ0D71l5GuCA/viewform?usp=sf_link'
              }
              text="hier"
            />{' '}
            möglich. Ein Auszug der bis dato zentralen Erkenntnisse findet sich
            hier.
          </p>
        </div>
        <div className="mt-6 prose prose-emerald prose-lg text-gray-500 mx-auto">
          <p>
            Bis zum 03.01.2022 nahmen 87 Personen an der Umfrage teil. Die
            Umfrage wurde auf mehreren Kanälen ausgeschrieben. Unter anderem
          </p>
          <ul role="list">
            <li>im Mitteilungsblatt Markt Erlbach</li>
            <li>in Facebook Gruppen</li>
            <li>durch Weiterleitungen</li>
          </ul>
          <p>
            Die Ergebnisse der Umfrage wurde in mehrere Bereiche aufgeteilt.
            Zuerst werden die Teilnehmer analysiert und anschließend die
            Inhalte.
          </p>
          <h2>Beschreibung der Teilnehmerstichprobe</h2>
          <p>
            Dieser Abschnitt charakterisiert die Teilnehmer der Umfrage
            hinsichtlich
            <ul role="list">
              <li>
                <LinkInPage href={'#residence'} text={'Wohnort'} />
              </li>
              <li>
                <LinkInPage href={'#age'} text={'Alter'} />
              </li>
              <li>
                <LinkInPage href={'#employment'} text={'Beschäftigung'} />
              </li>
            </ul>
          </p>
          <h3 id="residence">Wohnort</h3>
          <div className="h-96">
            <GreenPie data={dataResidentPie} />
          </div>
          <p>
            <HighlightText text="90%" /> der Umfrageteilnehmer kommen{' '}
            <HighlightText text="aus Markt Erlbach" /> oder einer
            Nachbargemeinde.
          </p>
          <h3 id="age">Alter</h3>
          <div className="h-96">
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
                legend: 'Anzahl',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
            />
          </div>
          <p>
            <HighlightText text="74%" /> der Umfrageteilnehmer sind zwischen 21
            und 40 Jahre alt. Das Durchschnittsalter aller Teilnehmer liegt bei{' '}
            <HighlightText text="34 Jahren" />.
          </p>
          <h3 id="employment">Beschäftigung</h3>
          <div className="h-96">
            <GreenPie data={dataEmploymentPie} />
          </div>
          <p>
            <HighlightText text="4 von 5" /> Umfrageteilnehmern befinden sich in
            einem Angestelltenverhältnis.
          </p>
          <h2>Inhalte der Umfrage</h2>
          Im Rahmen unserer Umfrage beantworteten die Teilnehmer Fragen zu
          folgenden Kategorien:
          <ul role="list">
            <li>
              <LinkInPage
                href={'#satisfaction'}
                text={
                  'Zufriedenheit bzw. Verbesserungspotenzial in der Arbeitsumgebung'
                }
              />
            </li>
            <li>Dauer bzw. Zufriedenheit mit Arbeitsweg</li>
            <li>
              <LinkInPage
                href={'#interest-coworking'}
                text={
                  'Interesse und Zahlungsbereitschaft bzgl. Coworking-Nutzung'
                }
              />
            </li>
            <li>
              <LinkInPage
                href={'#working-activity'}
                text={'Klassifikation typischer beruflicher Tätigkeiten'}
              />
            </li>
            <li>
              <LinkInPage
                href={'#expectations-coworking'}
                text={'Erwartungen an Coworking'}
              />
            </li>
            <li>
              <LinkInPage
                href={'#support-employeer'}
                text={
                  'Erlaubnis und Unterstützung durch Arbeitgeber für mobiles Arbeiten'
                }
              />
            </li>
          </ul>
          <p>
            Nicht alle Fragen waren als Pflichtfragen deklariert, bei bestimmten
            Fragen waren Mehrfachnennungen möglich. Die folgenden Diagramme
            beziehen sich deshalb auf die Anzahl der Teilnehmer, welche die
            betreffende Frage beantwortet haben.
          </p>
          <h3 id="satisfaction">
            Zufriedenheit bzw. Verbesserungspotenziale in der Arbeitsumgebung
          </h3>
          <div className="h-[34rem]">
            <GreenBar
              data={dataSatisfactionBar1}
              keys={['frequency']}
              indexBy={'ageRange'}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Anteil abgegebener Stimmen [%]',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 40, right: 80, bottom: 220, left: 80 }}
            />
          </div>
          <p>
            <HighlightText text="40%" /> stören sich an der technischen
            Ausstattung, <HighlightText text="16%" /> an der fehlenden Trennung
            zwischen Arbeit und Privatem. <HighlightText text="19%" /> sind mit
            ihrer derzeitigen Arbeitsumgebung zufrieden.
          </p>
          <div className="h-[34rem]">
            <GreenBar
              data={dataSatisfactionBar2}
              keys={['frequency']}
              indexBy={'ageRange'}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 45,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Anteil abgegebener Stimmen [%]',
                legendPosition: 'middle',
                legendOffset: -40,
              }}
              margin={{ top: 40, right: 80, bottom: 200, left: 80 }}
            />
          </div>
          <p>
            Das <HighlightText text="soziale Umfeld" /> und die{' '}
            <HighlightText text="technische Ausstattung" /> sind, unabhängig vom
            Arbeitsort, zwei wichtige Zufriedenheitsfaktoren. Am Home Office
            schätzen viele die{' '}
            <HighlightText text="Verknüpfung von Arbeit und Privatem" />,
            wohingegen im Firmenbüro die{' '}
            <HighlightText text="Location (Architektur, Lage)" /> eine hohe
            Relevanz hat.
          </p>
          <h3 id="interest-coworking">Interesse bzgl. Coworking-Nutzung</h3>
          <div className="h-96">
            <GreenPie
              data={dataCoworkingPie}
              colors={[nivoGreensReversed[0], nivoGreensReversed[4]]}
            />
          </div>
          <p>
            Fast <HighlightText text="zwei Drittel" /> der Teilnehmer können
            sich vorstellen, einen Coworking-Space für ihre Arbeit zu nutzen.
          </p>
          <h3 id="working-activity">
            Klassifikation typischer beruflicher Tätigkeiten
          </h3>
          <div className="h-96">
            <GreenPie
              data={dataWorkingActivityPie}
              colors={nivoGreensReversed}
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
          <h3 id="expectations-coworking">Erwartungen an Coworking</h3>
          <div className="h-96">
            <GreenPie data={dataExpectationsCoworkingPie} />
          </div>
          <p>
            Die Mehrheit der Coworking-Interessierten erhofft sich ein
            <HighlightText text="vielfältiges soziales Umfeld" />. Weiterhin ist
            ein <HighlightText text="kurzer Arbeitsweg" /> und eine{' '}
            <HighlightText text="ansprechende Location (Architektur, Lage)" />{' '}
            relevant.
          </p>
          <h3 id="support-employeer">
            Erlaubnis und Unterstützung durch Arbeitgeber für mobiles Arbeiten
          </h3>
          <div className="h-96">
            <GreenPie
              data={dataSupportEmployeerPie}
              colors={[
                nivoGreensReversed[0],
                nivoGreensReversed[2],
                nivoGreensReversed[5],
              ]}
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
          <h2>Fazit</h2>
          <p>
            Die Umfrageergebnisse zeigen{' '}
            <HighlightText text="enormes Potenzial" /> für Coworking im Rangau.
            Besonders die Aspekte <HighlightText text="Gemeinschaft" /> und{' '}
            <HighlightText text="Ausstattung" /> sind das Erfolgsgeheimnis eines
            Coworking-Spaces im Rangau. Bei{' '}
            <HighlightText text="Fragen zur Umsetzung" /> stehen wir Ihnen
            jederzeit beratend zur Verfügung. Ebenso freuen wir uns über{' '}
            <HighlightText text="Diskussion" /> und Anfragen zur{' '}
            <HighlightText text="Detailauswertung" /> der vielversprechenden
            Umfrageergebnisse.
            <br />
            <HighlightText text="Kontaktieren Sie uns" />{' '}
            <LinkInPage href="" text="hier" /> gerne persönlich!
          </p>
        </div>
      </div>
    </div>
  );
}
