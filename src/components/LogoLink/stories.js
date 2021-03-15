import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'https://github.com/Pedro-Murilo/',
  },
};

export const ImageOnly = (args) => <LogoLink {...args} />;

export const TextOnly = (args) => <LogoLink {...args} />;

TextOnly.args = {
  srcImg: '',
};
