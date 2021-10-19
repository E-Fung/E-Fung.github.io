export const generateIdTexture = (id: string): string => {
  // Set variables
  const bitmapShift: number = 0;
  const copyAmount: number = 6;
  const canvasWidth: number = 200; //size of each picture which will then be repeated
  const fontSize: number = canvasWidth / copyAmount;
  const fontStyle: string = `Bold ${fontSize}px Arial`;

  // Create canvas
  const bitmap = document.createElement('canvas');
  bitmap.height = bitmap.width = canvasWidth;

  // Create 2d context
  const g = bitmap.getContext('2d')!;

  // Add font style again
  g.fillStyle = 'rgb(0,0,0,0.06)';
  g.font = fontStyle;

  // Add text on the canvas
  const textWidth = g.measureText(id).width;
  g.scale(canvasWidth / textWidth, 1);
  const fillAndDuplicateText = (index: number) => g.fillText(id, 0, fontSize * ++index - bitmapShift);

  Array(copyAmount + 1)
    .fill(0)
    .forEach((item, i) => {
      fillAndDuplicateText(i);
    });

  const background: string = bitmap.toDataURL('image/png');
  return background;
};
