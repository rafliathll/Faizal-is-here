// ===============================
//  PENGARUH POLA TIDUR TERHADAP LATIHAN - SCRIPT LENGKAP
// ===============================

// ----- ANIMASI TEKS JUDUL -----
function animateTitle() {
  const title = document.getElementById("judul");
  if (!title) return;

  let text = title.innerText;
  title.innerText = "";
  let index = 0;

  function type() {
    if (index < text.length) {
      title.innerText += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  type();
}
animateTitle();

// ----- DATA PENJELASAN ILMIAH -----
const efekTidur = [
  "Kurang tidur dapat menurunkan performa otot karena tubuh tidak sempat memperbaiki jaringan otot yang rusak setelah latihan.",
  "Tidur yang cukup meningkatkan daya fokus, koordinasi gerak, dan reaksi tubuh saat berolahraga.",
  "Kurang tidur dapat menyebabkan produksi hormon kortisol meningkat, sehingga tubuh lebih cepat lelah dan sulit meningkatkan massa otot.",
  "Kualitas tidur yang buruk mengurangi kemampuan tubuh menyimpan glikogen, sumber energi utama untuk latihan intens.",
  "Tidur cukup membantu tubuh menjaga keseimbangan hormon seperti testosteron dan hormon pertumbuhan yang penting untuk perkembangan otot.",
];

// Menampilkan penjelasan secara bertahap
function tampilkanEfek() {
  const list = document.getElementById("penjelasan");
  if (!list) return;

  list.innerHTML = "";
  efekTidur.forEach((efek, i) => {
    setTimeout(() => {
      const li = document.createElement("li");
      li.innerText = efek;
      li.style.opacity = 0;
      list.appendChild(li);

      // animasi fade-in
      setTimeout(() => {
        li.style.transition = "0.5s";
        li.style.opacity = 1;
      }, 100);
    }, i * 800);
  });
}
tampilkanEfek();

// ----- FITUR CEK KUALITAS TIDUR -----
function cekTidur() {
  const jam = document.getElementById("jamTidur").value;
  const hasil = document.getElementById("hasilTidur");

  if (!jam || jam < 0 || jam > 24) {
    hasil.innerText = "Masukkan angka 0 - 24!";
    return;
  }

  if (jam >= 8) {
    hasil.innerText =
      "👍 Tidurmu cukup! Tubuh siap untuk latihan dengan performa maksimal.";
  } else if (jam >= 6) {
    hasil.innerText =
      "👌 Tidurmu lumayan, tapi tidak ideal. Latihan masih bisa, tapi performa bisa menurun.";
  } else if (jam >= 4) {
    hasil.innerText =
      "⚠️ Kamu kurang tidur. Latihan berat tidak dianjurkan karena risiko cedera meningkat.";
  } else {
    hasil.innerText =
      "❌ Sangat kurang tidur! Istirahat lebih penting daripada latihan hari ini.";
  }
}

// ----- TIPS OTOMATIS BEDASARKAN JAM TIDUR -----
function tipsTidur() {
  const tipsBox = document.getElementById("tipsTidur");
  if (!tipsBox) return;

  const tips = [
    "Hindari konsumsi kafein 6 jam sebelum tidur.",
    "Gunakan lampu redup 1 jam sebelum tidur agar tubuh lebih rileks.",
    "Coba tidur dan bangun pada jam yang sama setiap hari.",
    "Hindari bermain HP dalam 30 menit sebelum tidur.",
    "Lakukan peregangan ringan untuk membuat tubuh lebih santai.",
  ];

  tipsBox.innerHTML = "";
  tips.forEach((t) => {
    const p = document.createElement("p");
    p.innerText = "• " + t;
    tipsBox.appendChild(p);
  });
}
tipsTidur();

// ----- TOMBOL DARK MODE -----
function toggleMode() {
  document.body.classList.toggle("dark");

  const modeStatus = document.getElementById("modeStatus");
  if (document.body.classList.contains("dark")) {
    modeStatus.innerText = "Dark Mode Aktif";
  } else {
    modeStatus.innerText = "Light Mode Aktif";
  }
}
