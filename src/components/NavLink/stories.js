import { NavLink } from '.';
import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links: links,
  },
  argTypes: {
    links: { type: '' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <NavLink {...args} />
    </div>
  );
};
