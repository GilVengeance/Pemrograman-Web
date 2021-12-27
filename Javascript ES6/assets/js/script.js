// Login Authentication
// eslint-disable-next-line no-unused-vars
function login() {
  var username = document.getElementById("username").value;
  console.log(username);
  var password = document.getElementById("password").value;
  console.log(password);

  if (username == "ahmad2017" && password == "integrity") {
    alert("Login berhasil");
    location.replace("/berhasil.html");
  } else {
    alert("Login gagal");
  }
}

// Kurs Converter
// eslint-disable-next-line no-unused-vars
function hitung() {
  var input1 = parseInt(document.getElementById("input").value);
  console.log(input1);
  var kurs = parseInt(document.getElementById("kurs").value);
  var hasil = input1 * kurs;
  // output
  document.getElementById("hasil").value = hasil;
}

//   Chatbox
// eslint-disable-next-line no-unused-vars
function chat() {
  var input = document.getElementById("input").value;
  console.log(input);
  // eslint-disable-next-line no-unused-vars
  var output = (document.getElementById("output").innerHTML += input + "<br>");
}

// Image Picker

// eslint-disable-next-line no-unused-vars
function cetak_gambar() {
  const hewan = document.getElementById("hewan");
  const gambar = document.getElementById("gambar");

  if (hewan.value === "monyet") {
    gambar.src =
      "http://c.files.bbci.co.uk/18034/production/_97765389_naruto.jpg";
    alert("Gambar yang anda pilih monyet");
  }

  if (hewan.value === "bison") {
    gambar.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/American_bison_k5680-1.jpg/1200px-American_bison_k5680-1.jpg";
    alert("Gambar yang anda pilih bison");
  }

  if (hewan.value === "katak") {
    gambar.src =
      "https://stillwaterlogjam.com/wp-content/uploads/2018/11/katak-pohon.jpg";
    alert("Gambar yang anda pilih katak");
  }

  if (hewan.value === "kucing") {
    gambar.src =
      "https://www.greeners.co/wp-content/uploads/2021/03/Kucing-Domestik-1.jpg";
    alert("Gambar yang anda pilih kucing");
  }

  if (hewan.value === "rubah") {
    gambar.src =
      "https://cdn1-production-images-kly.akamaized.net/_-2-ddYgzsk05D70GArdoGz_e78=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1508144/original/037219300_1487138043-_0__kingofwallpapers_com.jpg";
    alert("Gambar yang anda pilih rubah");
  }
}

// Form Validation

function pesan() {
  let nama = document.getElementById("nama").value;
  let area_nama = document.getElementById("hasil_nama");
  area_nama.innerHTML = nama;

  let email = document.getElementById("email").value;
  let area_email = document.getElementById("hasil_email");
  area_email.innerHTML = email;

  let tujuan = document.getElementById("tujuan").value;
  let area_tujuan = document.getElementById("hasil_tujuan");
  area_tujuan.innerHTML = tujuan;

  let banyakTiket = document.getElementById("banyak_tiket").value;
  let area_banyakTiket = document.getElementById("hasil_banyakTiket");
  area_banyakTiket.innerHTML = banyakTiket;

  let jamBerangkat = document.getElementById("jam_berangkat").value;
  let area_jamBerangkat = document.getElementById("hasil_jamBerangkat");
  area_jamBerangkat.innerHTML = jamBerangkat;
}
