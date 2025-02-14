const daxilEt = document.getElementById("daxilEt");
const elaveEt = document.getElementById("elaveEt");
const sil = document.getElementById("sil");
const siyahi = document.getElementById("siyahi");
const bitdi = document.getElementById("bitdi");
const bitenler = document.getElementById("bitenler");
const silinenler = document.getElementById("silinenler");

const gorulecekler = [];
const bitmisler = [];

elaveEt.onclick = function () {
  gorulecekler.push(daxilEt.value);
  yenile();
  daxilEt.value = "";
};

sil.onclick = function () {
  if (gorulecekler.length > 0) {
    for (let i = 0; i < gorulecekler.length; i++) {
      bitmisler.push(gorulecekler[i]);
    }
    gorulecekler.length = 0;
    yenile();
    bitenleriGoster();
  }
};

function silin(j) {
  bitmisler.push(gorulecekler[j]);
  gorulecekler.splice(j, 1);
  yenile();
  bitenleriGoster();
}

function temizle() {
  bitmisler.length = 0;
  silinenler.innerHTML = "";
}

function yenile() {
  siyahi.innerHTML = "";
  for (let i = 0; i < gorulecekler.length; i++) {
    siyahi.innerHTML += `<li>${gorulecekler[i]}<button onclick="silin(${i})">Sil</button></li>`;
  }
}

bitdi.onclick = function () {
  bitenler.style.display =
    bitenler.style.display === "none" || bitenler.style.display === ""
      ? "block"
      : "none";
};

function bitenleriGoster() {
  silinenler.innerHTML = "";
  for (let i = 0; i < bitmisler.length; i++) {
    silinenler.innerHTML += `<li>${bitmisler[i]}</li>`;
  }
}
