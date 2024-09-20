// Darsdagi mashqlar

// Begin1

// let R = prompt(''); // kiritish uchun
// let L = 2 * Math.PI * R; // uzunligini formulasi
// let S = Math.PI * R * R; // yuzini formulasi

// console.log("Doiraning uzunligi: " + L); // outpuda koringanda
// console.log("Doiraning yuzasi: " + S);

// Begin2

// let a = prompt('a qiymatni kiriting'); // Birinchi son
// let b = prompt('b qiymatni kiriting'); // Ikkinchi son
// let G = Math.sqrt(a * b); // O'rta geometrik

// console.log("O'rta geometrik: " + G);

// Begin3. Funksiya qiymati Bu yerda  x qiymati berilgan va  y funksiyaning qiymatini hisoblaymiz:

// let x = prompt('x ga qiymat kiriting'); // x qiymat kiritish
// let y = prompt('y ga qiymat kiriting') * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7; // Funksiyaning qiymati

// console.log("Funksiya qiymati: " + y);

// 4 Begin4. Konfet narxini hisoblash Bu yerda   X kg konfetning narxi   A so'm berilgan. Biz 1 kg va  Y kg konfet qancha turishini topishimiz kerak

// let X = prompt('x kgni kiriting');
// let A = prompt('kanfentni kgsini kiriting');
// let Y = prompt('Y kgni kiriting');

// let narxKg = A / X;
// let YkgNarx = narxKg * Y;

// console.log("1 kg konfet narxi: " + narxKg);
// console.log(Y + " kg konfet narxi: " + YkgNarx);

// Begin5. Sonlarni almashtirish

// let A = prompt(' a son kiriting'); // A ning dastlabki qiymati
// let B = prompt(' b son kiriting'); // B ning dastlabki qiymati

// // Qiymatlarni almashtiramiz
// let temp = A;
// A = B;
// B = temp;

// console.log("A ning yangi qiymati: " + A);
// console.log("B ning yangi qiymati: " + B);

// INteger 1

// let num = prompt('Ikki xonali son kitiying');

// let tens = Math.floor(num / 10); // O'nliklar raqami
// let ones = num % 10; // Birlar raqami
// let sum = tens + ones; // Yig'indi

// console.log("O'nliklar raqami: " + tens);
// console.log("Birlar raqami: " + ones);
// console.log("Yig'indisi: " + sum);

// Intejer 2

// let num = prompt('xonali son ');

// let tens = Math.floor(num / 10); // O'nliklar raqami
// let ones = num % 10; // Birlar raqami
// let swapped = ones * 10 + tens; // Raqamlarni almashtirish

// console.log("Raqamlar almashtirilgan son: " + swapped);

// integer 3

// let num = prompt('3 xonali son kiriting'); // Uch xonali son

// let hundreds = Math.floor(num / 100); // Yuzliklar raqami

// console.log("Yuzliklar raqami: " + hundreds);

//  Integer 4

// let num = prompt('999 dan katta sin  kiriting'); // 999 dan katta son

// let hundreds = Math.floor((num % 1000) / 100); // Yuzliklar raqami

// console.log("Yuzliklar raqami: " + hundreds);

// integer 5

// let N = prompt('soniyani kiriting'); // N soniyada vaqt o'tdi

// let hours = Math.floor(N / 3600); // Soatni aniqlash
// let remainingSeconds = N % 3600; // Qolgan sekundlar
// let minutes = Math.floor(remainingSeconds / 60); // Minutni aniqlash
// let seconds = remainingSeconds % 60; // Qolgan sekundlarni aniqlash

// console.log("Soatlar: " + hours);
// console.log("Minutlar: " + minutes);
// console.log("Sekundlar: " + seconds);

// uyga vazifa

// Begin 1

// let a = prompt('togri tortburchakning bir tomoni');
// let b = prompt('togri tortburchakning ikkinchi tomoni');

// let S = a * b;
// let P = 2 * (a + b);

// console.log("Yuzasi: " + S);
// console.log("Perimetri: " + P);

// Begin 2

// let d = prompt(' Aylananing diametrini kiriting');
// let pi = 3.14;

// let L = pi * d;  // Aylananing uzunligi
// let r = d / 2;  // Radiusi
// let S = pi * r * r;  // Aylananing yuzasi

// console.log("Aylananing uzunligi: " + L);
// console.log("Aylananing yuzasi: " + S);

// Begin 3

// let a = prompt('Kubning yon tomonini kiriting');

// let V = a * a * a; // Hajmi
// let S = 6 * (a * a); // To‘la sirti

// console.log("Kubning hajmi: " + V);
// console.log("Kubning to‘la sirti: " + S);

//  Begin 4

// let a = prompt('a tomonini kiriting');
// let b = prompt('b tomonini kiriting');
// let c = prompt('c tomonini kiriting');

// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);

// console.log("Hajmi: " + V);
// console.log("To‘la sirti: " + S);

// Begin 5

// let a = prompt('a sonni kitiring');
// let b = prompt('b sonni kitiring');

// let M = (a + b) / 2;

// console.log("O'rta arifmetik: " + M);

// Begin 6

// let a = prompt("a katetni kiriting:");
// let b = prompt("b katetni kiriting:");
// let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
// let P = parseFloat(a) + parseFloat(b) + c;
// console.log("Gipotenuza:", c);
// console.log("Perimetr:", P);

// Begin 7

// let r1 = prompt("Birinchi aylananing radiusini kiriting:");
// let r2 = prompt("Ikkinchi aylananing radiusini kiriting:");
// const pi = 3.14;
// let S1 = pi * Math.pow(r1, 2);
// let S2 = pi * Math.pow(r2, 2);
// let S = S1 - S2;
// console.log("Birinchi aylananing yuzi:", S1);
// console.log("Ikkinchi aylananing yuzi:", S2);
// console.log("Yuzalar ayirmasi:", S);

// Begin 8

// let L = prompt("Aylananing uzunligini kiriting:");
// const pi = 3.14;
// let R = L / (2 * pi);
// let S = pi * Math.pow(R, 2);
// console.log("Aylananing radiusi:", R);
// console.log("Aylananing yuzasi:", S);

// Begin 9

// let x1 = prompt("Birinchi nuqtaning x koordinatasini kiriting:");
// let y1 = prompt("Birinchi nuqtaning y koordinatasini kiriting:");
// let x2 = prompt("Ikkinchi nuqtaning x koordinatasini kiriting:");
// let y2 = prompt("Ikkinchi nuqtaning y koordinatasini kiriting:");
// let L = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
// console.log("Ikki nuqta orasidagi masofa:", L);

// Begin 10

// let A = prompt("A sonini kiriting:");
// let B = prompt("B sonini kiriting:");
// let C = prompt("C sonini kiriting:");
// let temp = A;
// A = B;
// B = C;
// C = temp;
// console.log("A ning yangi qiymati:", A);
// console.log("B ning yangi qiymati:", B);
// console.log("C ning yangi qiymati:", C);

// Begin 11

// let x = prompt("x ning qiymatini kiriting:");
// let y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
// console.log("y ning qiymati:", y);

// Begin 12

// let A = prompt("A sonini kiriting:");
// let A3 = Math.pow(A, 3);
// let A6 = Math.pow(A, 6);
// let A9 = Math.pow(A, 9);
// let A15 = Math.pow(A, 15);
// console.log("A^3:", A3);
// console.log("A^6:", A6);
// console.log("A^9:", A9);
// console.log("A^15:", A15);

// Begin 13

// let Tf = prompt("Farengeytdagi temperaturani kiriting:");
// let Tc = (Tf - 32) * 5 / 9;
// console.log("Selsiydagi temperatura:", Tc);

// Begin 14

// let X = prompt("Shokoladning kg miqdorini kiriting:");
// let A = prompt("Shokoladning narxini kiriting:");
// let Y = prompt("Konfetning kg miqdorini kiriting:");
// let B = prompt("Konfetning narxini kiriting:");
// let diff = (A / X) - (B / Y);
// console.log("1 kg shokolad 1 kg konfetdan", diff, "so'm qimmat turadi.");

// Begin 15

// let X = prompt("Abdulaziz olgan olma kg miqdori (X):");
// let A = prompt("1 kg olma narxi (A):");
// let Y = prompt("Y kg olma miqdori:");
// let B = prompt("B narxi (konfet):");
// let total = X * A + Y * B;
// console.log("Abdulaziz jami qancha savdo qilgan:", total);

//  Integer 1

// let number = prompt("Uch xonali son kiriting:");
// let birliklar = number % 10;
// let onliklar = Math.floor((number % 100) / 10);
// console.log("birliklar:", birliklar);
// console.log("onliklar:", onliklar);

// // Integer2
// let number2 = prompt("Uch xonali son kiriting:");
// let yigindi = Math.floor(number2 / 100) + Math.floor((number2 % 100) / 10) + (number2 % 10);
// console.log("Raqamlar yigindisi:", yigindi);

// // Integer3
// let number3 = prompt("Uch xonali son kiriting:");
// let teskari = number3.toString().split('').reverse().join('');
// console.log("Teskari son: ",teskari);

// // Integer4
// let number4 = prompt("Uch xonali son kiriting:");
// let onlik = Math.floor((number4 % 100) / 10);
// let yuzlik = Math.floor(number4 / 100);
// let natija1 = yuzlik * 100 + onlik * 10 + (number4 % 10);
// console.log("Natija: ",natija1);

// // Integer5
// let number5 = prompt("Uch xonali son kiriting:");
// let birlik = number5 % 10;
// let natija2 = Math.floor(number5 / 10) * 10 + birlik;
// console.log("Natija: ",natija2);

// // Integer6
// let number6 = prompt("999 dan katta son kiriting:");
// let minglik = Math.floor(number6 / 1000);
// console.log("Mingliklar xonasidagi raqam: ",minglik);

// // Integer7
// let seconds = prompt("N sekundni kiriting:");
// let minut = Math.floor(seconds / 60);
// console.log("To'la o’tgan minut: ",minut);

// // Integer8
// let seconds2 = prompt("N sekundni kiriting:");
// let soat = Math.floor(seconds2 / 3600);
// console.log("To'la o’tgan soat: ",soat);

// // Integer9
// let seconds3 = prompt("N sekundni kiriting:");
// let minut2 = Math.floor(seconds3 / 60);
// let sekund2 = seconds3 % 60;
// console.log("Otgan vaqt:", minut2 ,"minut", sekund2, "sekund");


// // Integer10
// let seconds4 = prompt("N sekundni kiriting:");
// let soat2 = Math.floor(seconds4 / 3600);
// let sekund3 = seconds4 % 60;
// console.log("O’tgan vaqt:", soat2, " soat" , sekund3 , "sekund");