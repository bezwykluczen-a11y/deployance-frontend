// lib/decodeHtml.js
export function decodeHtml(value = '') {
  return value
    .replace(/&#8211;/g, '–')   // półpauza
    .replace(/&#8212;/g, '—')   // pauza
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&hellip;/g, '…'); // wielokropek
}