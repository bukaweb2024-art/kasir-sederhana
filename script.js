let totalBelanja = 0;

function hitungTotal() {
  const harga = document.getElementById("harga").value;
  const jumlah = document.getElementById("jumlah").value;

  totalBelanja = harga * jumlah;

  document.getElementById("total").innerText =
    "Total: Rp " + totalBelanja.toLocaleString("id-ID");
}

function hitungKembalian() {
  const bayar = document.getElementById("bayar").value;
  const kembalian = bayar - totalBelanja;

  document.getElementById("kembalian").innerText =
    "Kembalian: Rp " + kembalian.toLocaleString("id-ID");
}
