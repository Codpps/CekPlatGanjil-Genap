function cek() {
  //plat user
  const platnomor = document.getElementById("InPlat").value;
  const UserPlatNO = platnomor.replace(/[^0-9]/g, "");
  const platNumber = parseInt(UserPlatNO);

  // hasil user
  const platCek = document.getElementById("PlatCek");
  const keteranganCek = document.getElementById("KeteranganCek");
  const infoCek = document.getElementById("infoCek");

  // built in
  const hariini = new Date();
  const tanggal = hariini.getDate();

  // logika genap
  if (platNumber % 2 === 0) {
    platCek.innerHTML = "Plat: " + platnomor;
    keteranganCek.innerHTML = "Keterangan: genap";
    if (tanggal % 2 === 0) {
      infoCek.innerHTML =
        "Info: tanggal " +
        tanggal +
        " adalah genap, kendaraan anda boleh melintas pada hari ini";
    } else {
      infoCek.innerHTML =
        "Info: tanggal " +
        tanggal +
        " adalah ganjil, kendaraan anda tidak boleh melintas pada hari ini";
    }
  } else {
    // logika ganjil
    platCek.innerHTML = "Plat: " + platnomor;
    keteranganCek.innerHTML = "Keterangan: ganjil";
    if (tanggal % 2 === 0) {
      infoCek.innerHTML =
        "Info: tanggal " +
        tanggal +
        " adalah genap, kendaraan anda tidak boleh melintas pada hari ini";
    } else {
      infoCek.innerHTML =
        "Info: tanggal " +
        tanggal +
        " adalah ganjil, kendaraan anda boleh melintas pada hari ini";
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const rainContainer = document.querySelector(".rain");

  // Create raindrops
  for (let i = 0; i < 5; i++) {
    const drop = document.createElement("div");
    drop.className = "drop";
    drop.style.left = `${Math.random() * window.innerWidth}px`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    rainContainer.appendChild(drop);
  }
});
