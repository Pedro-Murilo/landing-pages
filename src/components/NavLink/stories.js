import { NavLink } from '.';
import Links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: Links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => <NavLink {...args} />;
