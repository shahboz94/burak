console.log("--- ---");
// TASK ZE

function removeDuplicate(text: string): string {
  const result = Array.from(new Set(text)).join("");
  console.log(result);
  return result;
}

removeDuplicate("hello");
removeDuplicate("stringg");

// Shunday function yozing, uniygona string parametri mavjud bo'lsin.
// Bu function string tarkibidagi takrorlangan xarflarni olib tashlab qolgan
// qiymatni qaytarsin.

// MASALAN: removeDuplicate('stringg') return 'string'

// Yuqoridagi misolda, 'stringg' so'zi tarkibida 'g' harfi takrorlanmoqda
// funktsiyamiz shu bittadan ortiq takrorlangan harfni olib natijani
// qaytarmoqda.

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

// TASK ZD

function changeNumberInArray(
  index: number,
  arr: number[],
  newValue: number
): number[] {
  const result = [...arr];

  result[index] = newValue;
  console.log(result);
  return result;
}

changeNumberInArray(1, [1, 3, 7, 2], 2);

// Shunday function yozing. Bu function o'ziga, parametr sifatida
// birinchi oddiy number, keyin yagona array va uchinchi bo'lib oddiy number
// qabul qilsin. Berilgan birinchi number parametr, arrayning tarkibida indeks bo'yicha hisoblanib,
// shu aniqlangan indeksni uchinchi number parametr bilan alashtirib, natija sifatida
// yangilangan arrayni qaytarsin.

// MASALAN: changeNumberInArray(1, [1,3,7,2], 2) return [1,2,7,2];

// Yuqoridagi misolda, birinchi raqam bu '1' va arrayning '1'chi indeksi bu 3.
// Bizning function uchinchi berilgan '2' raqamini shu '3' bilan almashtirib,
// yangilangan arrayni qaytarmoqda.
*/

/*

// TASK ZC
function celsiusToFahrenheit(celsius: number): number {
  const fahrenheit = (celsius * 9) / 5 + 32;
  console.log(fahrenheit);
  return fahrenheit;
}
celsiusToFahrenheit(0);
celsiusToFahrenheit(10);
celsiusToFahrenheit(25);
celsiusToFahrenheit(-10);

// Selisy (°C) shkalasi bo'yicha raqam qabul qilib, uni
// Ferenhayt (°F) shkalisaga o'zgaritib beradigan function yozing.

// MASALAN: celsiusToFahrenheit(0) return 32;
// MASALAN: celsiusToFahrenheit(10) return 50;

// Yuqoridagi misolda, 0°C, 32°F'ga teng.
// Yoki 10 gradus Selsiy, 50 Farenhaytga teng.

// °C va °F => Tempraturani o'lchashda ishlatiladigan o'lchov birligi.

*/

/*

//TASK ZA
function sortByAge(arr: { age: number }[]): { age: number }[] {
  const sortAgeArray = arr.sort((a, b) => a.age - b.age);
  console.log(sortAgeArray);
  return sortAgeArray;
}
sortByAge([{ age: 43 }, { age: 31 }, { age: 15 }, { age: 55 }]);

// Shunday function yozing, u array ichidagi objectlarni
// 'age' qiymati bo'yicha sortlab bersin.

// MASALAN: sortByAge([{age:23}, {age:21}, {age:13}]) return [{age:13}, {age:21}, {age:23}]

// Yuqoridagi misolda, kichik raqamlar katta raqamlar tomon
// tartiblangan holatda return bo'lmoqda.

*/
/*

// TASK Z

function sumEvens(numbers: number[]): number {
  const result = numbers
    .filter((num) => num % 2 === 0)
    .reduce((sum, num) => sum + num, 0);

  console.log("return:", result);
  return result;
}

sumEvens([4, 5, 8]);
sumEvens([3, 6, 7, 8]);

// Shunday function yozing. Bu function sonlardan iborat array
// qabul qilsin. Function'ning vazifasi array tarkibidagi juft
// sonlarni topib ularni yig'disini qaytarsin.

// MASALAN:
// sumEvens([1, 2, 3]); return 2;
// sumEvens([1, 2, 3, 2]); return 4;

// Yuqoridagi misolda, bizning funktsiya
// berilayotgan array tarkibidagi sonlar ichidan faqatgina juft bo'lgan
// sonlarni topib, ularni hisoblab yig'indisini qaytarmoqda.

*/

/*
TASK Y

function findIntersection(arr1: number[], arr2: number[]): number[] {
  const number = arr1.filter((item) => arr2.includes(item));
  return [...new Set(number)].sort((a, b) => a - b);
  console.log(intersection); // optional: filter qilingan natijani ko‘rish uchun
  return result;
}

function findIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection = arr1.filter((item) => arr2.includes(item));
  const result = [...new Set(intersection)].sort((a, b) => a - b);
  console.log(intersection);
  return result;
}

findIntersection([5, 7, 9], [3, 7, 9]);
findIntersection([5, 6, 9], [3, 6, 9]);

Shunday function yozing, uni 2'ta array parametri bo'lsin.
Bu function ikkala arrayda ham ishtirok etgan bir xil
qiymatlarni yagona arrayga joylab qaytarsin.

MASALAN: findIntersection([1,2,3], [3,2,0]) return [2,3]

Yuqoridagi misolda, argument sifatida berilayotgan array'larda
o'xshash sonlar mavjud. Function'ning vazifasi esa ana shu
ikkala array'da ishtirok etgan o'xshash sonlarni yagona arrayga
joylab return qilmoqda.

*/
/*

// TASK X

function countOccurrences(obj: Record<string, any>, keyName: string): any {
  const result = Object.keys(obj).reduce((count, key) => {
    const text = key === keyName ? 1 : 0;
    const text2 =
      typeof obj[key] === "object" && obj[key] !== null
        ? countOccurrences(obj[key], keyName)
        : 0;
    return count + text + text2;
  }, 0);
  return result;
}

console.log(
  countOccurrences(
    { model: "Genesis", steer: { model: "HANKOOK", size: 20 } },
    "model"
  )
);

// Shunday function yozing, uni object va string parametrlari bo'lsin.
// Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
// necha marotaba takrorlanganlini sanab qaytarsin.

// Eslatma => Nested object'lar ham sanalsin

// MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

// Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
// Funktsiya, shu ikkinchi argument 'model', birinchi argument object
// tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda

*/
/*

//TASK W

function chunkArray(arr: number[], size: number): number[][] {
  if (arr.length === 0) return [];

  const result: number[][] = [
    arr.slice(0, size),
    ...chunkArray(arr.slice(size), size),
  ];

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

// Shunday function yozing, u o'ziga parametr sifatida
// yagona array va number qabul qilsin. Siz tuzgan function
// arrayni numberda berilgan uzunlikda kesib bo'laklarga
// ajratgan holatida qaytarsin.
// MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
// return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

// Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
// asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
*/

/*
//TASK V

function countChars(text: string): { [key: string]: number } {
  const result: { [key: string]: number } = {};
  text.split("").forEach((i: string) => {
    if (i !== " ") {
      result[i] = (result[i] || 0) + 1;
    }
  });
  console.log("result:", result);
  return result;
}

countChars("hello");

// Shunday function yozing, uni string parametri bo'lsin.
// Va bu function stringdagi har bir harfni o'zi bilan
// necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.

// MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

// Yuqoridagi misolda, 'hello' so'zi tarkibida
// qatnashgan harflar necha marotaba takrorlangini bilan
// object sifatida qaytarilmoqda.

*/
/*

// TASK U
function sumOdds(n: number): number {
  const result = Array.from({ length: n }, (_, i) => i).filter(
    (i) => i % 2 === 1
  ).length;
  console.log(result);
  return result;
}
sumOdds(8.9); // Output: 4
sumOdds(6); // Output: 3

sumOdds(7); // Output: 3
sumOdds(11); // Output: 5

// Shunday function tuzing, uni number parametri bo'lsin.
// Va bu function berilgan parametrgacha, 0'dan boshlab
// oraliqda nechta toq sonlar borligini aniqlab return qilsi.

// MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

// Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
// Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud.
// Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.

*/

/*

//TASK T
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  const mergedArray = [...arr1, ...arr2];
  mergedArray.sort((a, b) => a - b);
  console.log(mergedArray);
  console.log(`Tartiblangan sonlar:${mergedArray}`);
  return mergedArray;
}

mergeSortedArrays([0, 3, 4, 7, 11], [4, 6, 9, 10]);
// Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
// Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

// MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

// Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda.

*/

/*
//TASK S
function missingNumber(nums: number[]): number {
  const missing = Array(nums.length + 1)
    .fill(0)
    .map((_, i) => i)
    .filter((x) => !nums.includes(x))[0];

  console.log(`Tushib qolgan son: ${missing}`);
  return missing;
}

missingNumber([3, 0, 5, 4, 1]);

// Shunday function tuzing, u numberlardan tashkil topgan array qabul qilsin
// va o'sha numberlar orasidagi tushib qolgan sonni topib uni return qilsin.

// MASALAN: missingNumber([3, 0, 1]); return 2

// Yuqoridagi misolda, berilayotgan sonlar tarkibini tartiblasak
// '2' soni tushib qolgan


*/
/*
//TASK R

function calculate(str: string): number {
  const result = str
    .replace(/\s/g, "")
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  console.log(`Natija: ${result}`);
  return result;
}

calculate("2 + 8");
// Shunday function yozing, u string parametrga ega bo'lsin.
// Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
// string ichidagi sonlarin yig'indisni hisoblab, number holatida qaytarsin

// MASALAN: calculate("1 + 3"); return 4;
// 1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.



*/

/*

//TASK G:

function getHighestIndex(arr: any[]): number {
  const max = Math.max(...arr);
  return arr.indexOf(max);
}

console.log(getHighestIndex([5, 21, 12, 21, 8]));

// Yagona parametrga ega function tuzing.
// Va bu function parametr orqalik integer ma'lumot turlariga ega bo'lgan bir arrayni qabul qilsin.
// Ushbu function bizga arrayning tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.

// MASALAN: getHighestIndex([5, 21, 12, 21 ,8]); return qiladi 1 sonini
// Yuqoridagi misolda, birinchi indeksda 21 joylashgan.
// Va bu 21 soni arrayning tarkibidagi birinchi eng katta son hisobladi va bizga uning indeksi 1 qaytadrildi.

*/

/*
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

*/
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
