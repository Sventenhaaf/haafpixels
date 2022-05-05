const PADDING = 5;
// export const SQUARES_WIDTH = 22;
// export const SQUARES_HEIGHT = 12;

export const BUTTONS_HEIGHT = 100;

export const getDimenstions = (SQUARES_WIDTH: number, SQUARES_HEIGHT: number) => {
  const maxWidth = Math.min(window.innerWidth - 2 * PADDING, 1000);
  const maxHeight = window.innerHeight - 2 * PADDING - BUTTONS_HEIGHT;

  let width = 0,
    height = 0,
    size = 0;
  if (maxWidth / maxHeight < SQUARES_WIDTH / SQUARES_HEIGHT) {
    width = maxWidth;
    height = (maxWidth * SQUARES_HEIGHT) / SQUARES_WIDTH;
  } else {
    height = maxHeight;
    width = (maxHeight * SQUARES_WIDTH) / SQUARES_HEIGHT;
  }
  size = height / SQUARES_HEIGHT;
  const widthArray = new Array(SQUARES_WIDTH).fill(0);
  const heightArray = new Array(SQUARES_HEIGHT).fill(0);

  return { width, height, size, widthArray, heightArray };
};
