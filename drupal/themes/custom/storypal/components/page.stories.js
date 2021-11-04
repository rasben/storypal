import drupalAttribute from 'drupal-attribute'

import template from './page.twig';
import {header} from './header.stories';

export default {
  title: "Pages/Pages",
  parameters: {
    layout: "fullscreen",
  },
};

export const page = () => (
  template({
    attributes: new drupalAttribute(),
    header: [
      header
    ],
    content: []
  })
);
