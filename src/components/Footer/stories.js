import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://github.com/Pedro-Murilo">Made with <3 by Pedro</a></p>`,
  },
};

export const Template = (args) => <Footer {...args} />;
