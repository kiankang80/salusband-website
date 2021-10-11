import { Route } from '@vaadin/router';
import './views/main-layout';
import './views/overview/overview-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'overview-view',
    icon: '',
    title: '',
  },
  {
    path: 'overview',
    component: 'overview-view',
    icon: 'la la-haykal',
    title: 'Overview',
  },
  {
    path: 'products',
    component: 'products-view',
    icon: 'lab la-product-hunt',
    title: 'Products',
    action: async (_context, _command) => {
      await import('./views/products/products-view');
      return;
    },
  },
  {
    path: 'help',
    component: 'help-view',
    icon: 'la la-headset',
    title: 'Help',
    action: async (_context, _command) => {
      await import('./views/help/help-view');
      return;
    },
  },
  {
    path: 'download',
    component: 'download-view',
    icon: '',
    title: 'Download',
    action: async (_context, _command) => {
      await import('./views/download/download-view');
      return;
    },
  },
];
export const routes: ViewRoute[] = [
  {
    path: '',
    component: 'main-layout',
    children: [...views],
  },
];
