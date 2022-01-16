import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

export const nivoGreens = [
  'rgb(230, 235, 228)',
  'rgb(213, 228, 209)',
  'rgb(185, 217, 179)',
  'rgb(150, 202, 144)',
  'rgb(108, 183, 110)',
  'rgb(61, 159, 87)',
  'rgb(33, 129, 64)',
  'rgb(0, 101, 41)',
];

export const nivoGreensReversed = nivoGreens.reverse();

declare type CustomLegendAnchor =
  | 'top'
  | 'top-right'
  | 'right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'left'
  | 'top-left'
  | 'center';

export function GreenPie({
  data,
  colors = { scheme: 'greens' },
  margin = { top: 40, right: 80, bottom: 40, left: 80 },
  legendPosition = 'top-left',
  customValueFormat = '',
  hideLegend = false,
}: {
  data: any;
  customValueFormat?: string;
  colors?: any;
  margin?: any;
  legendPosition?: CustomLegendAnchor;
  hideLegend?: boolean;
}) {
  return (
    <ResponsivePie
      data={data}
      margin={margin}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      colors={colors}
      valueFormat={(d) => `${d}${customValueFormat}`}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor="#333333"
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor="#f8fafc"
      theme={{
        fontSize: 14,
      }}
      legends={
        hideLegend
          ? []
          : [
              {
                anchor: legendPosition,
                direction: 'column',
                justify: false,
                translateX: -70,
                translateY: -10,
                itemsSpacing: 5,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                  {
                    on: 'hover',
                    style: {
                      itemTextColor: '#000',
                    },
                  },
                ],
              },
            ]
      }
    />
  );
}

export function GreenBar({
  data,
  keys,
  indexBy,
  axisBottom,
  axisLeft,
  customValueFormat = '',
  label = 'formattedValue',
  colors = { scheme: 'greens' },
  margin = { top: 40, right: 80, bottom: 80, left: 80 },
}: {
  data: any;
  keys: any;
  indexBy: any;
  axisBottom: any;
  axisLeft: any;
  customValueFormat?: string;
  label?: any;
  colors?: any;
  margin?: any;
}) {
  return (
    <ResponsiveBar
      data={data}
      keys={keys}
      indexBy={indexBy}
      theme={{
        fontSize: 14,
      }}
      valueFormat={(d) => `${d}${customValueFormat}`}
      tooltipLabel={(d) => String(d.indexValue)}
      colors={colors}
      colorBy="indexValue"
      borderRadius={1}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      margin={margin}
      label={label}
      axisBottom={axisBottom}
      axisLeft={axisLeft}
    />
  );
}
