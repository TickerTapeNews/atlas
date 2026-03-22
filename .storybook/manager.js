import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',

  // Brand
  brandTitle: 'Atlas',
  brandUrl: 'https://tickertapenews.io',
  brandImage: 'https://tickertapenews.github.io/atlas/atlas-logo.png',

  // Colors
  colorPrimary: '#000000',
  colorSecondary: '#000000',

  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: '#EBEBEB',
  appBorderRadius: 10,

  // Text
  textColor: '#000000',
  textInverseColor: '#FFFFFF',
  textMutedColor: 'rgba(0,0,0,0.5)',

  // Toolbar
  barTextColor: 'rgba(0,0,0,0.5)',
  barSelectedColor: '#000000',
  barHoverColor: '#000000',
  barBg: '#FFFFFF',

  // Typography
  fontBase: '"Figtree", sans-serif',
  fontCode: '"SF Mono", "Fira Code", monospace',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: '#EBEBEB',
  inputTextColor: '#000000',
  inputBorderRadius: 6,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
