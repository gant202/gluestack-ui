import type { ComponentMeta } from '@storybook/react-native';
import Heading from './Heading';

const HeadingMeta: ComponentMeta<typeof Heading> = {
  title: 'stories/TYPOGRAPHY/Heading',
  component: Heading,
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'],
    },
  },
  args: {
    text: 'This is heading',
    size: '2xl',
  },
};

export default HeadingMeta;

export { Heading };
