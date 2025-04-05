import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

export const faIconsImporter = () => {
  const icons = Object.entries(solidIcons)
    .filter(([key, value]) => key.startsWith('fa') && typeof value === 'object' && 'iconName' in value)
    .map(([_, icon]) => icon as any);
  library.add(...icons);
};

