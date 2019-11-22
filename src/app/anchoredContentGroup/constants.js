import { calculateChildStyle } from './utils';

export const desktopImageWidth = 350;
export const desktopStyles = {
    anchorImg: {
      width: `${desktopImageWidth}px`
    },
    childContainer: calculateChildStyle(desktopImageWidth)
  }