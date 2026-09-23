"use strict";

// Sabit qiymətlər
const PARK_NAME = "Aqua Baku";
const HOURLY_RATE = 4;
const LOCKER_FEE = 2;
const DEPOSIT = 20;
const VAT_RATE = 0.18;


// İstifadəçidən məlumatların alınması
let customerName = prompt("Ad və soyad:");
let hoursInput = prompt("Neçə saat qalınacaq?");
let guestCountInput = prompt("Neçə nəfər?");
let lockerSelected = confirm("Şkaf lazımdırmı?");


// Cavabların ilkin tipləri
console.log("Çevirmədən əvvəl saatın tipi:", typeof hoursInput);
console.log("Şkaf cavabının tipi:", typeof lockerSelected);


// Mətnləri rəqəmə çevirmək
let hours = parseFloat(hoursInput);
let guestCount = parseInt(guestCountInput);


// Saatın tipini yoxlamaq
console.log("Çevirmədən sonra saatın tipi:", typeof hours);
console.log("Saat düzgün yazılmayıb:", Number.isNaN(hours));


// Adın daxil edilib-edilmədiyini yoxlamaq
let hasCustomerName = Boolean(customerName);


// Bilet haqqının hesablanması
let ticketFee = hours * guestCount * HOURLY_RATE;


// Şkaf haqqı və şkaf mətni
let lockerFee = lockerSelected ? LOCKER_FEE : 0;
let lockerText = lockerSelected ? "Bəli" : "Xeyr";


// Ara cəm
let subtotal = ticketFee + lockerFee;


// ƏDV
let vat = subtotal * VAT_RATE;


// Yekun məbləğ
let totalAmount = subtotal + vat;


// Hesab cədvəli
console.table({
  "Park": PARK_NAME,
  "Müştəri": customerName,
  "Ad daxil edilib": hasCustomerName,
  "Saat": hours,
  "Nəfər sayı": guestCount,
  "Şkaf seçimi": lockerSelected,
  "Bilet haqqı (AZN)": ticketFee,
  "Şkaf": lockerText,
  "Şkaf haqqı (AZN)": lockerFee,
  "Depozit (AZN)": DEPOSIT,
  "ƏDV 18% (AZN)": vat.toFixed(2),
  "Yekun məbləğ (AZN)": totalAmount.toFixed(2)
});


// Yekun bildiriş
alert(`Aqua Baku — ${customerName} üçün hesab hazırdır.
Ödəniləcək məbləğ: ${totalAmount.toFixed(2)} AZN
Depozit ${DEPOSIT} AZN çıxışda geri qaytarılır.`);
