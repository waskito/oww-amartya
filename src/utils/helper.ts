const trimAddress = (address: string, trim: number | undefined = 4) =>
  `${address.slice(0, trim)}...${address.slice(-trim)}`;

const isMobile = window => {
  const toMatch = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];

  return toMatch.some(toMatchItem => {
    return window.navigator.userAgent.match(toMatchItem);
  });
};

const convertToWei = (value: number) => value * 10 ** 18;

export { trimAddress, isMobile, convertToWei };
