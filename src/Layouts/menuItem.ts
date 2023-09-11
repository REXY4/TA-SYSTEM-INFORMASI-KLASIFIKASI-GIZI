import { MenuItemType } from '@paljs/ui/types';

const items: MenuItemType[] = [
  {
    title: 'Dashboard',
    icon: { name: 'home' },
    link: { href: '/dashboard' },
  },
  {
    title: 'Data Training',
    icon: { name: 'book' },
    link: { href: '/data/training' },
  },
  {
    title: 'Algoritma Suport Vector Machine',
    icon: { name: 'book' },
    link: { href: '/svm' },
  },
  {
    title: 'Algoritma K-Nearest Neighbor',
    icon: { name: 'book' },
    link: { href: '/knn' },
  },
  {
    title: 'Perbandingan',
    icon: { name: 'book' },
    link: { href: '/perbandingan' },
  }
];

export default items;
