import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid Two Column',
    text: 'Lorem',
    srcImg: 'assets/images/logo.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <GridTwoColumn {...args} />;
