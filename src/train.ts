console.log("--- ---");

//TASK I:

/*
Shunday function tuzing, u parametrdagi array ichida eng ko'p
takrorlangan raqamni topib qaytarsin.

MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.


*/
/*
Project Standards:
-Logging standards
-Naming standards
-Commenting standards
    function, method, variable => CAMEL Case,  //goHome
    class => PASCAL Case,                      //MemberService
    folder => KEBAB-case,
    css => SNAKE Case,
    -Error handling 

*/
/*
Traditional Api
Rest Api
Graphql Api
...

*/

/*
// TASK H2

function getDigits(text: string): string {
  const result = text
    .split("")
    .filter((i) => i >= "0" && i <= "9")
    .join("");
  console.log(`Quydagi text ichidagi raqamlar: ${result}`);
  console.log(typeof result);
  return result;
}

getDigits("m14i1t gu5ru80h0i");

//. shunday function tuzing, unga string argument pass bolsin. function ushbu agrumentdagi digitlarni yangi stringda return qilsin
//. masalan: getdigits("m14i1t") return qiladi "141"
*/
/*

// TASK H

function getPositive(text: number[]): string {
  const result = text.filter((i) => i > 0).join("");
  console.log(result);
  console.log(typeof result);
  return result;
}

getPositive([3, -1, 0, 8, 7, -3]);
*/

// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

// TASK G:

/*  
function getHighestIndex(son) {
  let raqam = son[0];
  let index = 0;

  for (let i = 1; i < son.length; i++) {
    if (son[i] > raqam) {
      raqam == son[i];
      index = i;
    }
  }

  return console.log(index);
}

getHighestIndex([8, 23, 12, 21, 213, 3]);
*/
// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadi.

/*       TASK-F
function findDoublers(text) {
  const result = text.split("");
  for (let i = 0; i < result.length; i++) {
    if (result.indexOf(result[i]) !== i) {
      console.log(true);
      return true;
    }
  }
  console.log(false);
  return false;
}

findDoublers("hello");
*/

//       TASK-E

// function getReverse(text) {
//   let result = text.split("").reverse().join("");
//   console.log(result);
// }

// getReverse("hello");

//       TASK-D
// function checkContent(text1, text2) {
//   let result1 = text1.split("");
//   let result2 = text2.split("");

//   result1.sort();
//   result2.sort();

//   return result1.join() == result2.join();
// }

// const result = checkContent("mitgroup", "gmtiprou");

// console.log(result);

// console.log(checkContent("hello", "world"));
// console.log("====");

//       TASK-C
// const moment = require("moment");
// class Shop {
//   non;
//   lagmon;
//   cola;
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(
//       `hozir ${moment().format("HH:mm")} da ${this.non}ta non, ${
//         this.lagmon
//       }ta lagmon, ${this.cola}ta cola mavjud.`
//     );
//   }

//   sotish(name, amount) {
//     if (name === "non") {
//       this.non -= amount;
//     } else if (name === "lagmon") {
//       this.lagmon -= amount;
//     } else if (name === "cola") {
//       this.cola -= amount;
//     } else {
//       console.log("bunday mahsulot mavjud emas");
//     }
//   }

//   qabul(name, amount) {
//     if (name === "non") {
//       this.non += amount;
//     } else if (name === "lagmon") {
//       this.lagmon += amount;
//     } else if (name === "cola") {
//       this.cola += amount;
//     } else {
//       console.log("bunday mahsulot mavjud emas");
//     }
//   }
// }
// const shop = new Shop(6, 8, 4);
// shop.qoldiq();
// console.log("mahsulotlarimizni  yangilan royhati");
// shop.sotish("non", 4);
// shop.sotish("lagmon", 4);

//shop.qoldiq();

//shop.qabul("lagmon", 5);

/*       TASK B      */
// function countDigits(text) {
//   const result = text.split("");
//   const lastResult = result.filter((ele) => {
//     return ele >= 0 && ele !== " ";
//   });
//   console.log(`${text} ning ichida raqamlar ${lastResult.length}ta bor`);
// }
// countDigits("ad2 a54f05y79w");

/*       TASK A      */
// function countDigits("ad2a54y79wet0sfgb9") {
//   const result = misra.split();
//   const lastResult = result.filter((e) => e === alfabit);
//   console.log(`${misra} ning ichida ${alfabit} dan ${lastResult.length}ta bor`);
// }
// countLetter("e", "enginee");
