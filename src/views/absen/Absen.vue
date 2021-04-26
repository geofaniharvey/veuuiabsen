<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <h5 class="card-title">isi Absensi</h5>
      <form class="row g-3" @submit.prevent="store">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Nama Mahasiswa</label>
          <input
            type="text"
            class="form-control"
            id="inputEmail4"
            v-model="absen.nama_absen"
          />
          <div class="alert alert-warning" v-if="validation.nama_absen">
            {{ validation.nama_absen[0] }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="matkultitle">Mata Kuliah</label>
      <div class="input-group mb-3">

        <select class="custom-select" id="mk">
          <option selected>Pilih Mata Kuliah</option>
          <option value="ERP terapan I">ERP terapan I</option>
          <option value="Integrasi Sistem Enterprise">Integrasi Sistem Enterprise</option>
          <option value="Jaringan Komputer">Jaringan Komputer</option>
          <option value="Pemrograman Internet Lanjut Modern web deveopment">Pemrograman Internet Lanjut Modern web deveopment</option>
          <option value="Rekayasa Perangkat Lunak : Agile Implementation">Rekayasa Perangkat Lunak : Agile Implementation</option>
          <option value="Manajemen Keamanan Sistem Infromasi">Manajemen Keamanan Sistem Infromasi</option>
        </select>
      </div>
          </div>
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-light">Submit</button>
        </div>
  </div>
</template>
<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
export default {
  setup() {
    const absen = reactive({
      nama_absen: "",
      waktu_absen: "",
      
    });

    const validation = ref([]);

    const router = useRouter();

    function store() {
      let nama_absen = absens.nama_absen;
      let waktu_absen = absens.waktu_absen;

      axios
        .post("localhost:8000/api/absens/", {
          nama_absen: nama_absen,
          waktu_absen: waktu_absen,
        })
        .then(() => {
          router.push({
            name: "Home",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return {
      absen,
      store,
      validation,
      router,
    };
  },
};
</script>