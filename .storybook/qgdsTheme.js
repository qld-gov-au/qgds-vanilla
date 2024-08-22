import { create } from '@storybook/theming/create';
import coa from '../src/assets/img/header-logo-qgov--light.svg';

export default create({
  base: 'dark',
  brandTitle: 'QGDS',
  brandUrl: 'https://qld.gov.au',
  brandImage: coa,
  brandTarget: '_self',
});
