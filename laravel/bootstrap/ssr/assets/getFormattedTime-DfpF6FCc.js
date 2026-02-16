import { v as vueExports } from "../ssr.js";
const _hoisted_1 = {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
function render(_ctx, _cache) {
  return vueExports.openBlock(), vueExports.createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    vueExports.createStaticVNode('<g clip-path="url(#clip0_4558_179942)"><path d="M6 1V3" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8 1V3" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 1V3" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 5H13.5V11.5C13.5 11.8978 13.342 12.2794 13.0607 12.5607C12.7794 12.842 12.3978 13 12 13H4C3.60218 13 3.22064 12.842 2.93934 12.5607C2.65804 12.2794 2.5 11.8978 2.5 11.5V5Z" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5 6L13.5 7.5" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path><path d="M0.5 6L2.5 7.5" stroke="#09263A" stroke-linecap="round" stroke-linejoin="round"></path></g><defs><clipPath id="clip0_4558_179942"><rect width="16" height="16" fill="white"></rect></clipPath></defs>', 2)
  ]));
}
const IconCookingPot = { render };
function getFormattedTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  const parts = [];
  if (h) parts.push(`${h} ${getHourLabel(h)}`);
  if (m) parts.push(`${m} ${getMinuteLabel(m)}`);
  return parts.join(", ");
}
function getHourLabel(h) {
  if (h === 1) return "час";
  if (h >= 2 && h <= 4) return "часа";
  return "часов";
}
function getMinuteLabel(m) {
  if (m === 1) return "минута";
  if (m >= 2 && m <= 4) return "минуты";
  return "минут";
}
export {
  IconCookingPot as I,
  getFormattedTime as g
};
