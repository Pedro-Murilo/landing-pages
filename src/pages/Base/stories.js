import { Base } from '.';

import { mockBase } from './mock';

export default {
  title: 'Pages/Base',
  component: Base,
  args: mockBase,
};

export const Template = (args) => <Base {...args} />;
