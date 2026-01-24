// 参考URL：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString#%E6%A7%8B%E6%96%87
const event = new Date();
const options = {
  year: "numeric",
  month: "long",
  day: "numeric"
}
console.log(event.toLocaleDateString('ja-JP', options));

/*
// getFullYearについて：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
const today = new Date();
const fullYear = today.getFullYear();
console.log(fullYear);

// getMonthについて：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
const today1 = new Date();
const month =today1.getMonth();
console.log(month);

// getDateについて：https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate
const today2 = new Date();
const day = today2.getDate();
console.log(day);
*/