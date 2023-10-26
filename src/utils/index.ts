export const cx = (...className: string[]) =>
  className.filter(Boolean).join("");
