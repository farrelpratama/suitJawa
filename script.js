function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp > 0.67) return "orang";
  return "semut";
}

function getResult(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "semut" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComp = document.querySelector(".img-computer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute(
      "src",
      "suwit-jawa-2.0/img-suwit-jawa/img/" + gambar[i++] + ".png"
    );
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll(".user div img");
pilihan.forEach(function (user) {
  user.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = user.className;
    const hasil = getResult(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      //tampil hasil
      const tampilHasil = document.querySelector(".hasil p");
      tampilHasil.innerText = hasil;

      //ganti gambar
      const tampilGambar = document.querySelector(".comp div img");
      tampilGambar.src =
        "suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanComputer + ".png";
    }, 1000);
  });
});

// const playerGajah = document.querySelector(".gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getResult(pilihanComputer, pilihanPlayer);

//   //tampil hasil
//   const tampilHasil = document.querySelector(".hasil p");
//   tampilHasil.innerText = hasil;

//   //ganti gambar
//   const tampilGambar = document.querySelector(".comp div img");
//   tampilGambar.src =
//     "suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanComputer + ".png";
// });

// const playerOrang = document.querySelector(".orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getResult(pilihanComputer, pilihanPlayer);

//   //tampil hasil
//   const tampilHasil = document.querySelector(".hasil p");
//   tampilHasil.innerText = hasil;

//   //ganti gambar
//   const tampilGambar = document.querySelector(".comp div img");
//   tampilGambar.src =
//     "suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanComputer + ".png";
// });

// const playerSemut = document.querySelector(".semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getResult(pilihanComputer, pilihanPlayer);

//   //tampil hasil
//   const tampilHasil = document.querySelector(".hasil p");
//   tampilHasil.innerText = hasil;

//   //ganti gambar
//   const tampilGambar = document.querySelector(".comp div img");
//   tampilGambar.src =
//     "suwit-jawa-2.0/img-suwit-jawa/img/" + pilihanComputer + ".png";
// });
