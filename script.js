window.onload = function () {

    // Array pilihan
    let pilihanProdi = [
        "Informatika",
        "Sistem Informasi",
        "Teknik Informatika"
    ];

    let pilihanHobi = [
        "Sepak Bola",
        "Futsal",
        "Voli",
        "Basket"
    ];

    let pilihanWaktu = [
        "Pagi",
        "Siang",
        "Sore",
        "Malam"
    ];


    // Membuat form dengan JavaScript
    document.body.insertAdjacentHTML("beforeend", `

        <hr>

        <h2>FORM INPUT JAVASCRIPT</h2>

        Nama:
        <br>
        <input type="text" id="nama">

        <br><br>

        Jumlah Pilihan:
        <br>
        <input type="number" id="jumlah" min="1" max="4">

        <br><br>

        Email:
        <br>
        <input type="text" id="email">

        <br><br>

        Pilihan Prodi:
        <br>
        <select id="prodi"></select>

        <br><br>

        Hobi:
        <br>
        <div id="hobi"></div>

        <br>

        Waktu:
        <br>
        <div id="waktu"></div>

        <br>

        <button onclick="tampilkanData()">
            Tampilkan Data
        </button>

        <div id="hasil"></div>
    `);


    // Loop membuat dropdown
    for (let i = 0; i < pilihanProdi.length; i++) {

        document.getElementById("prodi").innerHTML +=
            "<option value='" + pilihanProdi[i] + "'>" +
            pilihanProdi[i] +
            "</option>";
    }


    // Loop membuat checkbox
    for (let i = 0; i < pilihanHobi.length; i++) {

        document.getElementById("hobi").innerHTML +=
            "<input type='checkbox' name='hobi' value='" +
            pilihanHobi[i] +
            "'> " +
            pilihanHobi[i] +
            "<br>";
    }


    // Loop membuat radio button
    for (let i = 0; i < pilihanWaktu.length; i++) {

        document.getElementById("waktu").innerHTML +=
            "<input type='radio' name='waktu' value='" +
            pilihanWaktu[i] +
            "'> " +
            pilihanWaktu[i] +
            "<br>";
    }

};


// Fungsi tombol
function tampilkanData() {

    let nama = document.getElementById("nama").value;
    let jumlah = document.getElementById("jumlah").value;
    let email = document.getElementById("email").value;
    let prodi = document.getElementById("prodi").value;


    // Error handling jumlah
    if (jumlah == "" || jumlah < 1 || jumlah > 4) {

        alert("Jumlah pilihan harus antara 1 sampai 4!");

        return;
    }


    // Pattern matching email
    let polaEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (!polaEmail.test(email)) {

        alert("Email tidak valid! Masukkan email yang benar.");

        document.getElementById("email").focus();

        return;
    }


    // Array untuk menyimpan checkbox
    let checkbox =
        document.querySelectorAll(
            "input[name='hobi']:checked"
        );

    let daftarHobi = [];


    for (let i = 0; i < checkbox.length; i++) {

        daftarHobi.push(checkbox[i].value);
    }


    // Mengambil radio button
    let radio =
        document.querySelector(
            "input[name='waktu']:checked"
        );

    let waktu;


    if (radio) {

        waktu = radio.value;

    } else {

        waktu = "Belum dipilih";
    }


    // Output menggunakan DOM
 // Output menggunakan DOM
document.getElementById("hasil").innerHTML =

    "<hr>" +

    "<div style='color: red;'>" +

    "<h3 style='color: yellow;'>HASIL INPUT</h3>" +

    "<p>Nama: " + nama + "</p>" +

    "<p>Jumlah Pilihan: " + jumlah + "</p>" +

    "<p>Email: " + email + "</p>" +

    "<p>Prodi: " + prodi + "</p>" +

    "<p>Hobi: " +
    daftarHobi.join(", ") +
    "</p>" +

    "<p>Waktu: " + waktu + "</p>" +

    "</div>";
}