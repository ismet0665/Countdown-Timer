let time = 0.2; //dk cinsinden
let timeSn = time * 60; //sn cinsinden

let sayac = document.getElementById("sayac");
// https://www.w3schools.com/jsref/met_win_setinterval.asp
// setInterval(displayHello, 1000); süreklilik kazanması için.1000 ms cinsinden oldugu için 1000ms = 1sn

let sayacBaslat = setInterval(() => {
  if (timeSn <= 0) {
    clearInterval(sayacBaslat); //burda sıfır olunca setInterval i kapatıyoruz.
    sayac.innerText = "Sayac Sonlandı...";
  } else {
    timeSn--; //sayac gerisayım basladı.

    const gun = Math.floor(timeSn / 3600 / 24); // Math.floor(süreSn / 24*60*60)?
    const saat = Math.floor(timeSn / 3600) % 24; // 24 ten büyük olmaması için
    const dakika = Math.floor(timeSn / 60) % 60; // 60 dk büyük olmaması için
    const saniye = Math.floor(timeSn % 60); // 60 sn den büyük olmaması için.

    sayac.innerText = `Gün: ${sifirEkle(gun)} / Saat: ${sifirEkle(
      saat
    )} / Dakika: ${sifirEkle(dakika)} / Saniye: ${sifirEkle(saniye)}`;
  }
}, 1000);

function sifirEkle(s) {
  return s < 10 ? `0${s}` : s;
}

// 1gün = 24saat = 24*60 dakika = 24*60*60 saniye
// 1 saat = 60 dk = 60*60 saniye
