/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require('../components/Button/Button.stories.tsx'),
    // require('../components_old/Pressable/Pressable.stories.tsx'),
    // require('../components_old/FormControl/FormControl.stories.tsx'),
    // require('../components_old/Text/Text.stories.tsx'),
    // require('../components_old/Icons/Icons.stories.tsx'),
    // require('../components_old/Avatar/Avatar.stories.tsx'),
    // require('../components_old/Button/Button.stories.tsx'),
    // require('../components_old/Center/Center.stories.tsx'),
    // require('../components_old/Switch/Switch.stories.tsx'),
    // require('../components_old/Checkbox/Checkbox.stories.tsx'),
    // require('../components_old/Radio/Radio.stories.tsx'),
    // require('../components_old/Heading/Heading.stories.tsx'),
    // require('../components_old/HStack/HStack.stories.tsx'),
    // require('../components_old/Image/Image.stories.tsx'),
    // require('../components_old/Input/Input.stories.tsx'),
    // require('../components_old/Image/Image.stories.tsx'),
    // require('../components_old/Modal/Modal.stories.tsx'),
    // require('../components_old/Slider/Slider.stories.tsx'),
    // require('../components_old/Badge/Badge.stories.tsx'),
    // require('../components_old/Divider/Divider.stories.tsx'),
    // require('../components_old/AlertDialog/AlertDialog.stories.tsx'),
    // require('../components_old/Fab/Fab.stories.tsx'),
    // require('../components_old/Alert/Alert.stories.tsx'),
    // require('../components_old/Actionsheet/Actionsheet.stories.tsx'),
    // require('../components_old/IconButton/IconButton.stories.tsx'),
    // require('../components_old/Progress/Progress.stories.tsx'),
  ];
};

configure(getStories, module, false);
