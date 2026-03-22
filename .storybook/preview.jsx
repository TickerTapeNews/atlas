import { fontUrl, typography } from '../src/tokens/typography.js';
import { colors } from '../src/tokens/colors.js';

// Load Figtree from Google Fonts
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = fontUrl;
document.head.appendChild(link);

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: colors.background },
        { name: 'dark', value: '#1a1a1a' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div style={{ fontFamily: typography.fontFamily, color: colors.text }}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
