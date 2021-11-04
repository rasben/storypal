import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';
import '!style-loader!css-loader!../dist/css/storypal.bundle.css';

// Add the filters to Twig instance.
twigDrupal(Twig);

const viewPorts = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '600px',
      height: '960px',
    },
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  tabletLandscape: {
    name: 'Tablet Landscape',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  desktop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '768px',
    },
  },
};

export const parameters = {
  viewport: {
    viewports: viewPorts,
    defaultViewport: 'tablet',
  },
}
