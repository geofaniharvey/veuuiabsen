<template>

<div class="home">
    <Carousl />
        <div class="alert alert-warning" role="alert">
          <marquee>Selamat Datang di Website Sistem Informasi UCIC -- by Geofani Harvey G</marquee>
        </div>

        <div class="row row-cols-1 row-cols-md-3">

  <div class="col-md-auto">
    <div class="card" style="width: 18rem;">
        <img src="img/mhs.jpg" class="card-img-top" alt="Profil">
    <div class="card-body">
        <p class="card-text"><a href="/mahasiswa">Lihat Daftar Mahasiswa</a></p>
  </div>
        </div>
    </div>

    <div class="col-md-auto">
            <div class="card" style="width: 18rem;">
  <img src="img/matkul.jpg" class="card-img-top" alt="Matakuliah">
  <div class="card-body">
    <p class="card-text"><a href="/matakuliah">Daftar Matakuliah Semester 5</a></p>
</div>
        </div>
    </div>

    <div class="col-md-auto">
            <div class="card" style="width: 18rem;">
  <img src="img/abs.jpg" class="card-img-top" alt="Absensi">
  <div class="card-body">
    <p class="card-text"><a href="/absensi">Absensi</a></p>
</div>
        </div>
    </div>

  </div>
</div>

</template>

<script>
import Carousl from "@/components/Carousl.vue"

export default {
    name: "Home",
    components: {
        Carousl
    }
}
</script>