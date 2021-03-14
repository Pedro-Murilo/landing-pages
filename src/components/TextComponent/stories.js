import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <TextComponent {...args} />;
