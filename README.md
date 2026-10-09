# atlas
Design system

## Pill

A compact rounded container for related information, based on the STO and NYC
market pills in Ticker Tape News. Uses Figtree Medium (500), a subtle background,
and a thin border. Pass text, icons, or charts as children.

```jsx
import { Pill } from './src/index.js';

<Pill size="sm">
  <span>STO</span>
  <Sparkline />
  <time dateTime="11:30">11:30</time>
</Pill>
```

Sizes: `sm` (12px text, 24px minimum height) and `md` (14px text, 26px minimum
height, default). Load Figtree in your application. The component imports its CSS
and needs a bundler with JSX and CSS support.

Use `data-theme="dark"` on the pill or an ancestor for dark mode. Existing
`--text-primary`, `--surface-subtle`, and `--border-strong` theme tokens are used
when defined. Additional span attributes, `className`, and `style` are supported.

View the component and market examples under **Components / Pill** in Storybook:

```sh
npm ci
npm run storybook
```
