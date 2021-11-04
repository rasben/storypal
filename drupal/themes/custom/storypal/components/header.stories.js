import drupalAttribute from 'drupal-attribute'

import template from './header.twig';
import './js/header.js';

export default {
  title: 'Components/Header',
  parameters: {
    design: {
      type: "figma",
      url:
        "https://www.figma.com/file/[some-figma-link]",
    },
  },
};

export const header = () => (
  template({
    logo_link_url: '/',
  })
);
