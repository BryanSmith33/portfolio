export function updateFontFamily(a) {
  let fontArray = ['Above Demo', 'bromello', 'Capsule X Pro Medium', 'Cursus', 'GoodMorningAfternoon', 'Hey Now', 'Permanent Marker'];
  let randomFont = fontArray[Math.floor(Math.random() * fontArray.length)];
  a.forEach(text => text.style.fontFamily = randomFont)
}