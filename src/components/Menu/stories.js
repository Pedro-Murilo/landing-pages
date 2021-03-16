import { Menu } from '.';

import LinkMock from '../NavLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: LinkMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Menu {...args} />;
