function pilihRating(elemen) {
    const kontainer = elemen.parentElement;
    kontainer.querySelectorAll('.lingkaran').forEach(lingkaran => {
        lingkaran.classList.remove('aktif');
    });
    elemen.classList.add('aktif');
}