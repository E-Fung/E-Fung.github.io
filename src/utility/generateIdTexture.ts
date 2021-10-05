export const generateIdTexture = (id: string) => {
  // Set variables
  const bitmapShift: number = 10;
  const copyAmount: number = 1;
  const canvasSize: number = 100; //size of each picture which will then be repeated
  const fontSize: number = canvasSize / copyAmount;
  const fontStyle: string = `Bold ${fontSize}px Arial`;

  // Create canvas
  const bitmap = document.createElement('canvas');
  bitmap.height = bitmap.width = canvasSize;

  // Create 2d context
  const g = bitmap.getContext('2d')!;

  // Add font style again
  g.fillStyle = 'rgb(0,0,0,0.06)';
  g.font = fontStyle;

  // Add text on the canvas
  const textWidth = g.measureText(id).width;
  g.scale(canvasSize / textWidth, 1);
  const fillAndDuplicateText = (index: number) => g.fillText(id, 0, fontSize * ++index - bitmapShift);

  Array(copyAmount + 1)
    .fill(0)
    .forEach((item, i) => {
      fillAndDuplicateText(i);
    });

  const background = bitmap.toDataURL('image/png');
  return background;
};
