function navigate() {
    const opsiPilihan = document.getElementsByName("feedback");
    let yangDipilih = "";

    for (const pilihan of opsiPilihan) {
        if (pilihan.checked) {
            yangDipilih = pilihan.value;
            break;
        }
    }

    if (yangDipilih === "penilaian") {
        window.location.href = "FeedbackPenilaian.html"; 
    } else if (yangDipilih === "saran") {
        window.location.href = "FeedbackSaran.html";
    } else {
        alert("Tolong pilih salah satu opsi feedback sebelum melanjutkan.");
    }
}