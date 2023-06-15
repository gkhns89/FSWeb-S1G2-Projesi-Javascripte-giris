/* Görev 1: Isınalım Biraz :) */

/* TÜM CEVAPLARINI BİR FUNCTION İÇİNDE VERDİĞİNİZ EMİN OL (GÖREV 1D - GÖREV 6). AKSİ TAKTİRDE, OTOMATİK TEST SİSTEMİ ÇALIŞMAYACAKTIR. */

// Görev 1a, 1b ve 1c puanlamaya dahil değildir

/*
Bu görevleri yaparken, yazdığın kod'un doğru çıktı verdiğini kontrol etmek için console.log'u kullanmanı öneririz.
Bunun için cevabı direk console'a logla veya çağırdığın fonksiyondan dönen değeri console'a logla.  
Örneğin:  console.log(ornekFonksiyon(deger1,deger2))
*/

/*
Görev 1a - Ehliyet Yaşı (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. surucuYasi isimli bir değişken yaz ve bir sayı ata.
   2. Eğer yaş 18'den büyük ise Console'da true, değilse false değeri yazdırın.

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
const surucuYasi = 33;

if (surucuYasi >= 18) {
  console.log("True");
} else {
  console.log("False");
}
/*
Görev 1b - Değerler (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. 2 değişken tanımla ve bunlara değerler ata (isimlendirme olarak birinciDeger ikinciDegeri kullanabilirsin)
   2. 1. değeri 2. değer ile karşılaştıran bir koşul oluşturun
   3. 2. adımdaki koşul doğru olduğunda 1. değeri değiştirin
   4. 1. değeri Console'a yazdırın

   İPUCU: fonksiyon oluşturmaya gerek yok
*/
let birinciDeger = "Sarı";
let ikinciDeger = "Kırmızı";

if (birinciDeger === ikinciDeger) {
  birinciDeger = "Değişmez!";
  console.log(birinciDeger);
}
/*
Görev 1c - String bir değeri Number'a dönüştürün (puanlamaya dahil değildir)

Aşağıdakileri yap:   
   1. String tipinde ve değeri "1999" olan bir değişken oluşturun
   2. Değeri "1999" olan bu String'i değeri 1999 olan bir integer'a dönüştürün
   3. Sonucu Console'a yazdırın

   İPUCU: Number metoduna bakabilirsin
*/
let nToString = "1999";
console.log(Number(nToString));
/*
Görev 1d - Çarpma
 
Aşağıdakileri yaparak carpma isimli fonksiyonu tamamla:   
   1. 2 argüman alsın(a ve b olarak tanımlayabilirsin)
   2. a ve b'yi çarpıp, sonucu dönsün
   3. console.log(carpma(7,4)) ile yazdığın fonsiyonu test edin. Console'da sonucu 28 olarak görmelisin.
*/
function carpma(a, b) {
  let carpim = a * b;

  return carpim;
}

console.log(carpma(7, 4));

/* Görev 2 : Köpeğin Yaşı */

/*
Aşağıdakileri yap:
 1. Aşağıdaki kopeginYasi fonsiyonunu bir argüman alacak şekilde tanımla.
 2. Gelen değeri kullanarak köpeğin yaşını hesapla (insanlarda 1 yıl köpeklerde 7 yıla denk gelir)
 3. Hesaplanan köpeğin yaşını dönün.
 */

function kopeginYasi(actualDogAge) {
  let kopekYas = actualDogAge;

  kopekYas = 7 * kopekYas;

  return kopekYas;
}

/* Görev 3 */
/*
Aşağıdakileri oyun isimli fonksiyonu kullanarak yap.
1. 2 argüman alın: oyuncunun tercihini alan bir string değer: "Taş", "Kağıt" veya "Makas" 
   ve bilgisayarınkini alan: "Taş", "Kağıt" veya "Makas"
   Not: string değerlerin yazımına dikkat! İlk harf büyük ve türkçe karakterler kullanarak. Yoksa testi geçemez.
2. Aşağıdaki oyun kurallarına göre oyuncunun kazanıp kazanamadığını veya berabere kalıp kalmadığını dönün - (uygulamanın oluşturduğu çıktı tam olarak aşağıdakinin aynısı olmalı)
 - kazanma durumunda "Kazandın!" dönmeli
 - kaybetme durumunda "Kaybettin!" dönmeli
 - beraberlikte "Beraberlik" dönmeli

OYUNUN KURALLARI: Makas Kağıdı yener| Kağıt Taşı yener | Taş Makas'ı yener | veya beraberlik olur.
*/

function oyun(rPlayer, rComputer) {
  /*buraya kodunu yazabilirsin*/
  let g = ["Kazandın!", "Kaybettin!", "Beraberlik"];
  let gRslt = String;
  let player = rPlayer;
  let computer = rComputer;

  if (player == computer) {
    gRslt = g[2];
  } else if (player == "Makas" && computer == "Kağıt") {
    gRslt = g[0];
  } else if (player == "Kağıt" && computer == "Taş") {
    gRslt = g[0];
  } else if (player == "Taş" && computer == "Makas") {
    gRslt = g[0];
  } else {
    gRslt = g[1];
  }
  return gRslt;
}
console.log(oyun("Makas", "Taş"));
// Şimdi Taş, Kağıt, Makas oyununu bilgisayara karşı oynayalım!
/*
Öncelikle aşağıdakileri yap:
1. Bilgisayarın seçimini rastgele oluşturacağım bir fonksiyon tanımla. Örn: 
   function bilgisayarinSecimi() {
   
   }
2. Fonsiyonun içinde bilgisayarın seçimi için bir değişken tanımla
3. Math.random'ı kullanarak bilgisayarın seçimini oluşturun (Math.random 0-1 arasında bir değer verecek)
4. Bu rastgele değeri "Taş", "Kağıt" veya "Makas"a dönüştüren bir koşul oluşturun
5. Oluşan değeri geri dönün

Şimdi kendi seçtiğin bir seçime karşı bilgisayarın rastgele oluşturduğu seçimi yukarıda yazdığın oyun fonsiyonu ile oynayın ve sonucu console'a yazdırın.
Örn: console.log(oyun("Makas",bilgisayarinSecimi()))
*/
function bilgisayarinSecimi() {
  let cSelect = Int8Array;
  let game = ["Taş", "Kağıt", "Makas"];
  let gResult = String;

  cSelect = Math.floor(Math.random() * game.length);

  if (cSelect == 0) {
    gResult = game[0];
  } else if (cSelect == 1) {
    gResult = game[1];
  } else if (cSelect == 2) {
    gResult = game[2];
  }
  return gResult;
}

console.log(oyun("Makas", bilgisayarinSecimi()));

/* Görev 4 : Metrik Dönüştürücü */

//Görev 4a - Kilometreden Mil
/*
Aşağdaki milDonusturucu fonksiyonunu aşağıdakileri kullanarak tamamla:
1. Kilometre değerini argüman olarak alın.
2. Aldığın bu değeri Mil'e dönüştürün
3. Mil değerini geri dönün
*/
/*buraya kodunu yazabilirsin*/
function milDonusturucu(givenKmValue) {
  let vMile = givenKmValue * 0.621371;

  return vMile;
}

//Görev 4b - Santimetreden Feet
/*
Aşağıdakileri feetDonusturucu fonsiyonunu kullanarak yap:
1. Santimetre değerini argüman olarak alın.
2. Aldığın bu değeri feet'e dönüştürün
3. feet değerini geri dönün

Google'da arama ipucu: "feet cm dönüştürme"
*/

function feetDonusturucu(givenCmValue) {
  /*buraya kodunu yazabilirsin*/
  let vFeet = givenCmValue / 30.48;

  return vFeet;
}

/* Görev 5 : 5 küçük maymun yatakta zıplamış şarkısını çocuklar için hazırladığımı varsayalım. https://www.youtube.com/watch?v=e4EJ34xnlxk */

/*
Aşağıdakileri cocukSarkisi fonksiyonunda yap:
1. Başlangıçta var olan maymun sayısını alın.
2. cocukSarkisi fonksiyonu aşağıdaki satırı sadece 1 kere yazacak şekilde kodunuzu yazın:

    "{sayı} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!"

3. Bu fonksiyonun dışında bir yerde, maymun sayısının her seferinde 1 azaldığı ve maymun sayısı 1 olana kadar devem eden bir döngü oluşturun. 
4. Bu döngüde, her seferinde cocukSarkisi fonsiyonu çalışsın ve console.log'a dönen metni yazdırsın.
*/
let apes = Int8Array;

for (apes = 6; apes >= 1; apes--) {
  cocukSarkisi(apes);
}

function cocukSarkisi(apeValue) {
  /*buraya kodunu yazabilirsin*/
  let musicResult = `${apeValue} küçük maymun yatakta zıplamış, biri düşüp başını çarpmış, Anne doktoru aramış, Doktor çok kızmış: Bir daha yatakta zıplamak yok!`;
  console.log(musicResult);
  return musicResult;
}

/* Görev 6 : Not Hesaplayıcı *

/*
Aşağdakileri notHesapla fonksiyonunda yap.
1. 100'lük sistemde bir sınav sonucu alın.
2. Aşağıdaki tabloya göre notu dönün.

 90-100 arasında 'A aldın' 
 80-89 arasında 'B aldın'
 70-79 arasında 'C aldın'
 60-69 arasında 'D aldın'
 daha aşağıda 'F aldın'
 dönün
*/

function notHesapla(alinanNot) {
  /*buraya kodunu yazabilirsin*/
  let harfNotu = String;

  if (alinanNot >= 90 && alinanNot <= 100) {
    harfNotu = "A aldın";
  } else if (alinanNot >= 80 && alinanNot <= 89) {
    harfNotu = "B aldın";
  } else if (alinanNot >= 70 && alinanNot <= 79) {
    harfNotu = "C aldın";
  } else if (alinanNot >= 60 && alinanNot <= 69) {
    harfNotu = "D aldın";
  } else if (alinanNot < 60) {
    harfNotu = "F aldın";
  }

  return harfNotu;
}

/* Bonus Çalışma: Sesli harf sayacı - Kaç tane sesli harf var? */

/*
Aşağıdakileri sesliHarfSayaci fonskiyonunda yap.
1. Bir argüman alın, string olsun.
2. Bu string'in içindeki sesli harfleri sayın ve sayısını geri dönün.  (hem büyük hem de küçük harflerin sayısını dönmeli).

İPUCU - yarın işlenecek array(dizi) konusunu önden araştırman gerekecek. (https://www.w3schools.com/js/js_arrays.asp)
İPUCU - .includes() methoduna bakabilirsin. (https://www.w3schools.com/jsref/jsref_includes.asp)
*/

function sesliHarfSayaci(/*buraya kodunu yazabilirsin*/) {
  /*buraya kodunu yazabilirsin*/
}

/* Lütfen bu satırın alt tarafını değiştirmeyin */
function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
/* Bu satırdan sonrasını değiştirmeyin */
module.exports = {
  sa,
  carpma,
  kopeginYasi,
  oyun,
  milDonusturucu,
  feetDonusturucu,
  cocukSarkisi,
  notHesapla,
};
