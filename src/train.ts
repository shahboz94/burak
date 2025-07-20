console.log("--- ---");

//TASK P:

function objectToArray(obj: Record<string, any>): [string, any][] {
  const result = Object.entries(obj);
  console.log(result);
  return result;
}

objectToArray({ a: 10, b: 20 });

// Parametr sifatida yagona object qabul qiladigan function yozing.
// Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

// MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]

/*

Project Standards:
-Logging standards
-Naming standards
-Commenting standards
    function, method, variable => CAMEL Case,  //goHome
    class => PASCAL Case,                      //MemberService
    folder,file => KEBAB-case,
    css => SNAKE Case,
    -Error handling 

*/

/* Request:

Traditional Api
Rest Api
Graphql Api
...

*/

/* Frontend Development

Traditional FD      => SSR (Admin)   =>   EJS
Modern FD           => SPA           =>   REACT

*/

/* cookies
 request join
 self destroy

*/

/* Validation:
 Frontend validation
 Backend  validation
 Databese validation
 ? pipe validation ?
*/

//.                           TASKLAR:

/*
//TASK O:

function calculateSumOfNumbers(raqam: any[]): number {
  const result = raqam.reduce((son: number, item: any) => {
    return typeof item === "number" ? son + item : son;
  }, 0);

  console.log("Yig'indi:", result);
  return result;
}

calculateSumOfNumbers([15, "16", { son: 17 }, true, 45]);

// Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
// Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

// MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

// Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
// Qolganlari nested bo'lib yoki type'lari number emas.

*/

/*
//TASK N:

function palindromCheck(text: string) {
  let reversed_text = text.split("").reverse().join("");
  let result = text === reversed_text;
  console.log("Palindrom textmi?", result);
  return result;
}

palindromCheck("dad");
palindromCheck("anna");
palindromCheck("function");

// Parametr sifatida yagona string qabul qiladigan function tuzing.
// Va bu function string'ni palindrom so'z yoki palindrom so'z emasligini aniqlab (boolean)
// 'true' yokida 'false' qaytarsin.

// MASALAN: palindromCheck("dad") return true; palindromCheck("son") return false;
// Birinchi misolda 'dad' so'zini ikkala tarafdan o'qilganda ham bir xil ma'noni beradi (true)
// Ikkinchi misolda 'son' so'zini ikkala tarafdan o'qilganda bir xil ma'noni bermaydi (false)

// *Palindrom so'z deb o'ngdan chapga ham ~ chapdan o'ngga ham o'qilganda
// bir xil ma'noni beradigan so'zga aytiladi

*/

/*

//TASK L:
function reverseSentence(text: string): string {
  const result = text
    .split(" ")
    .map((soz) => soz.split("").reverse().join(""))
    .join(" ");

  console.log(result);
  return result;
}

reverseSentence("we like coding!");

//So'zlarni ketma - ketligini buzmasdan har bir so'zni
//alohida teskarisiga o'girib beradigan fucntion tuzing.
//Funtion yagona string qabul qilsin

//MASALAN: reverseSentence("we like coding!") return "ew ekil !gnidoc";
//Qaytayotgan natijaga e'tibor bersangiz, so'zlar joyi o'zgarmasdan turgan o'rnida teskarisiga o'girilmoqda

*/
/*


//TASK M:

function getSquareNumbers(arr: number[]) {
  const result = arr.map((num) => ({
    number: num,
    square: num * num,
  }));
  console.log(result);
  return result;
}

getSquareNumbers([1, 2, 3]); //return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

// Shunday function tuzing, u raqamlardan tashkil topgan array qabul qilsin
// va array ichidagi har bir raqam uchun raqamning o'zi va hamda o'sha raqamni kvadratidan
// tashkil topgan object hosil qilib, hosil bo'lgan objectlarni array ichida qaytarsin

// MASALAN: MASALAN: getSquareNumbers([1, 2, 3]) return [{ number: 1, square: 1 }, { number: 2, square: 4 }, { number: 3, square: 9 }];

/*



/*

//TASK:K
function countvowels(text: string): number {
  let counter = 0;
  let str = text.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      counter++;
    }
  }
  console.log(counter);
  return counter;
}

countvowels("helloA");
// Berilayotgan parametr tarkibida nechta unli harf bor ekanligini
// aniqlovchi function tuzing masalan: countvowels("string");
// return 1 yuqoridagi misolda 'string' so'zi tarkibida yagona
// unli harf 'i' bo'lganligi uchun '1'ni qaytarmoqda

*/

/*
//TASK J:
function findLongestWord(text: string): string {
  const words = text.split(" ");
  const new_text = words.sort((a, b) => b.length - a.length)[0];

  console.log(new_text); // Natijani shu yerda konsolga chiqaradi
  return new_text;
}

findLongestWord("I came from Uzbekistan!");

// Shunday function tuzing, u string qabul qilsin.
// Va string ichidagi eng uzun so'zni qaytarsin.

// MASALAN: findLongestWord("I came from Uzbekistan!"); return "Uzbekistan!"

// Yuqoridagi text tarkibida 'Uzbekistan'
// eng uzun so'z bo'lganligi uchun 'Uzbekistan'ni qaytarmoqda


*/

/*

//TASK I:
function majorityElement(arr: number[]): number[] {
  const countMap = arr.reduce<Record<number, number>>((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  const maxCount = Math.max(...Object.values(countMap));

  return Object.entries(countMap)
    .filter(([_, count]) => count === maxCount)
    .map(([num, _]) => Number(num));
}

console.log(majorityElement([1, 2, 6, 3, 4, 5, 4, 5, 5, 6, 3, 6, 4]));


// Shunday function tuzing, u parametrdagi array ichida eng ko'p
// takrorlangan raqamni topib qaytarsin.

// MASALAN: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]); return 4

// Yuqoridag misolda argument sifatida kiritilayotgan array tarkibida 4 soni ko'p takrorlanganligi uchun 4'ni return qilmoqda.


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


// shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
// MASALAN: getPositive([1, -4, 2]) return qiladi "12"

*/

/* 
// TASK G:

 
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

// Yagona string argumentga ega findDoublers nomli function tuzing
// Agar stringda bittadan ortiq bir xil harflar ishtirok etgan bo'lsa
// true yokida false natija qaytarsin.

// MASALAN: findDoublers("hello"); natija true qaytadi. Sababi ikki marotaba takrorlangan 'll' harfi mavjud!

*/

/*
//       TASK-E

function getReverse(text) {
  let result = text.split("").reverse().join("");
  console.log(result);
}

getReverse("hello");

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"


*/
/*

//       TASK-D
function checkContent(text1, text2) {
  let result1 = text1.split("");
  let result2 = text2.split("");

  result1.sort();
  result2.sort();

  return result1.join() == result2.join();
}

const result = checkContent("mitgroup", "gmtiprou");

console.log(result);

console.log(checkContent("hello", "world"));
console.log("====");

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

*/
/*

//       TASK-C
const moment = require("moment");
class Shop {
  non;
  lagmon;
  cola;
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  qoldiq() {
    console.log(
      `hozir ${moment().format("HH:mm")} da ${this.non}ta non, ${
        this.lagmon
      }ta lagmon, ${this.cola}ta cola mavjud.`
    );
  }

  sotish(name, amount) {
    if (name === "non") {
      this.non -= amount;
    } else if (name === "lagmon") {
      this.lagmon -= amount;
    } else if (name === "cola") {
      this.cola -= amount;
    } else {
      console.log("bunday mahsulot mavjud emas");
    }
  }

  qabul(name, amount) {
    if (name === "non") {
      this.non += amount;
    } else if (name === "lagmon") {
      this.lagmon += amount;
    } else if (name === "cola") {
      this.cola += amount;
    } else {
      console.log("bunday mahsulot mavjud emas");
    }
  }
}
const shop = new Shop(6, 8, 4);
shop.qoldiq();
console.log("mahsulotlarimizni  yangilan royhati");
shop.sotish("non", 4);
shop.sotish("lagmon", 4);

shop.qoldiq();

shop.qabul("lagmon", 5);

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!

*/

/* 
      TASK B      
function countDigits(text) {
  const result = text.split("");
  const lastResult = result.filter((ele) => {
    return ele >= 0 && ele !== " ";
  });
  console.log(`${text} ning ichida raqamlar ${lastResult.length}ta bor`);
}
countDigits("ad2 a54f05y79w");

//Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
//MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.



*/

/*  

//. TASK A  

function countDigits("ad2a54y79wet0sfgb9") {
  const result = misra.split();
  const lastResult = result.filter((e) => e === alfabit);
  console.log(`${misra} ning ichida ${alfabit} dan ${lastResult.length}ta bor`);
}
countLetter("e", "enginee");

// Harf sifatida kiritilgan birinchi parametr, 
// kiritilgan ikkinchi parametr tarkibida nechta ekanligini qaytaruvchi
// Funktsiya tuzing

// Masalan: countLetter("e", "engineer")
// 'engineer' so'zi tarkibida 'e' harfi 3 marotaba takrorlanganligi uchun
// 3 sonini qaytaradi

*/
