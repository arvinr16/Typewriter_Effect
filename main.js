const texts = ["Halo ini kalimat yang mempunyai effect typewriter",
               "Sekarang kalimat berganti",
               "Looping terus kalimat-kalimat yang ada"
];

let x = 0;
let y = 0;
let currentText = texts[y];
let isDeleting = false;
const speeds = 100; // Kecepatan mengetik
const deleteSpeed = 50; // Kecepatan menghapus
const delay = 1000; // Jeda sebelum memulai mengetik

function typeWriter2() {
    const element = document.getElementById('typewriter2');

    if (!isDeleting && x < currentText.length) {
        // Mengetik maju
        element.innerHTML = currentText.substring(0, x + 1);
        x++;
        setTimeout(typeWriter2, speeds);
    } else if (isDeleting && x > 0) {
        // Menghapus (reverse)
        element.innerHTML = currentText.substring(0, x - 1);
        x--;
        setTimeout(typeWriter2, deleteSpeed);
    } else if (!isDeleting && x === currentText.length) {
        // Selesai mengetik > tunggu lalu hapus
        isDeleting = true;
        setTimeout(typeWriter2, delay);
    } else if (isDeleting && x === 0) {
        // Selesai menghapus > lanjut ke kalimat berikutnya
        isDeleting = false;
        y = (y + 1) % texts.length; // Looping array texts atau kalimat
        currentText = texts[y];
        setTimeout(typeWriter2, delay);
    }
}

document.addEventListener("DOMContentLoaded", typeWriter2);
