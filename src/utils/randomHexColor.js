export function randomHexColor() {
  /* eslint no-bitwise: ["error", { "allow": ["<<"] }] */
  return `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
}
