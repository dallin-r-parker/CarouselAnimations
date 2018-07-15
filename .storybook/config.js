import { configure } from '@storybook/react';

function loadStories() {
  require('../src/Placeholder/stories');
}

configure(loadStories, module);