import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

const theme = create({
  base: 'light',

  // Brand
  brandTitle: 'Atlas Design System',
  brandUrl: 'https://tickertapenews.io',

  // Colors
  colorPrimary: '#9500FF',
  colorSecondary: '#9500FF',

  // UI
  appBg: '#F4F4F4',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#FFFFFF',
  appBorderColor: 'rgba(15,15,15,0.08)',
  appBorderRadius: 6,

  // Text
  textColor: '#0F0F0F',
  textInverseColor: '#FAFAFA',
  textMutedColor: 'rgba(15,15,15,0.5)',

  // Toolbar
  barTextColor: 'rgba(15,15,15,0.5)',
  barSelectedColor: '#9500FF',
  barHoverColor: '#0F0F0F',
  barBg: '#FFFFFF',

  // Typography
  fontBase: '"Figtree", sans-serif',
  fontCode: 'monospace',

  // Inputs
  inputBg: '#FFFFFF',
  inputBorder: 'rgba(15,15,15,0.12)',
  inputTextColor: '#0F0F0F',
  inputBorderRadius: 4,
});

addons.setConfig({
  theme,
});
