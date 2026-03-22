import { create } from 'storybook/theming';
import { fontUrl, typography } from '../src/tokens/typography.js';
import { colors } from '../src/tokens/colors.js';

// Load Figtree from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
document.head.appendChild(link);

// Apply font globally
document.body.style.fontFamily = typography.fontFamily;
document.body.style.color = colors.text;

const docsTheme = create({
  base: 'light',
  fontBase: '"Figtree", sans-serif',
  fontCode: 'monospace',
  textColor: '#0F0F0F',
  textMutedColor: 'rgba(15,15,15,0.5)',
  colorPrimary: '#9500FF',
  colorSecondary: '#9500FF',
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
