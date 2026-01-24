// 参考にしたURL：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString

const event = new Date(Date.UTC(2026, 0, 24));
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));