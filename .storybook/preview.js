import { create } from 'storybook/theming';
import { fontUrl, typography } from '../src/tokens/typography.js';

// Load Figtree from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
document.head.appendChild(link);

// Apply font globally
document.body.style.fontFamily = typography.fontFamily;
document.body.style.color = '#000000';

const docsTheme = create({
  base: 'light',
  fontBase: '"Figtree", sans-serif',
  fontCode: '"SF Mono", "Fira Code", monospace',
  textColor: '#000000',
  textMutedColor: 'rgba(0,0,0,0.5)',
  colorPrimary: '#000000',
  colorSecondary: '#000000',
});

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: docsTheme,
    },
  },
};

export default preview;
