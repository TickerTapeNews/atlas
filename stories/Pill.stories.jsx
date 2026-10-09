import React from 'react';
import { Pill } from '../src/index.js';

export default {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A rounded container for related, read-only information. Based on the STO and NYC market pills in Ticker Tape News. Combine text, icons, charts, and times through children. Uses Figtree Medium (500); supports inherited theme tokens and data-theme="dark". Keep interactive controls outside the pill.',
      },
    },
  },
  argTypes: {
    size: {
      control: 'inline-radio',
      options: ['sm', 'md'],
      description: 'Small (12px text) or medium (14px text).',
      table: { defaultValue: { summary: 'md' } },
    },
    children: { control: 'text', description: 'Text or composed content.' },
    className: { control: 'text', description: 'Additional CSS classes.' },
  },
  args: { children: 'STO', size: 'md' },
};

export const Default = {};

export const Small = { args: { size: 'sm' } };

function Sparkline({ city, size }) {
  return (
    <svg
      role="img"
      aria-label={`${city}: example index performance`}
      viewBox="0 0 44 18"
      width={size === 'sm' ? 32 : 44}
      height={size === 'sm' ? 16 : 18}
      style={{ display: 'block', color: 'currentColor', opacity: 0.5 }}
    >
      <line x1="1" y1="15" x2="43" y2="15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="1 1" />
      <polyline
        points={city === 'STO' ? '1,15 2,6 7,4 11,5 16,2 20,4 25,3 30,5 35,3 43,4' : '1,2 10,5 20,8 30,12 43,16'}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function MarketPills({ size }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
      <Pill size={size}>
        <span>STO</span>
        <Sparkline city="STO" size={size} />
        <time dateTime="11:30">11:30</time>
      </Pill>
      <Pill size={size}>
        <span>NYC</span>
        <Sparkline city="NYC" size={size} />
        <time dateTime="05:30">05:30</time>
      </Pill>
    </div>
  );
}

export const MarketData = {
  render: ({ size }) => <MarketPills size={size} />,
  parameters: {
    docs: { description: { story: 'Sample data illustrates composition. Chart rendering and live market data belong to the consuming application.' } },
  },
};

export const DarkMode = {
  render: ({ size }) => (
    <div data-theme="dark" style={{ background: '#121216', padding: 16, borderRadius: 8 }}>
      <MarketPills size={size} />
    </div>
  ),
};
