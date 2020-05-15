import { camelCase } from "pika/camel-case@^4.1.1";

/**
 * Return the text in camelCase + how many 🐪
 * 
 * @example "this is an example" -> "thisIsAnExample 🐪🐪🐪"
 * @param text 
 * @returns {string}
 */
export default (text: string) => {
  const camelCaseText = camelCase(text);
  const matches = camelCaseText.match(/[A-Z]/g) || [];
  const camels = Array.from({ length: matches.length })
    .map(() => "🐪")
    .join("");

  return `${camelCaseText} ${camels}`;
};
