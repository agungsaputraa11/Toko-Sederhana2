const nama = "Agung Saputra";
let usia = 22; 
let alamat = "Jl H Asmawi";

let biodata = document.getElementById('biodata');
console.log(biodata);


function generasiSaya() {
    let generasi;

    if(usia >= 17 && usia < 24) {
        generasi = "Generasi Remaja";
    } else if(usia >= 24 && usia < 50) {
        generasi = "Generasi Dewasa";
    } else if(usia >= 50) {
        generasi = "Generasi Lansia";
    } else if(usia >= 4 && usia < 17) {
        generasi = "Generasi Anak - Anak";
    } else {
        generasi = "Generasi Bayi";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(usia);

generasiSaya()

