<template>
    <div class="absen">
        <hr class="my-3" />
    <router-link class="btn btn-warning" to="/Absen"
      >Absen disini!</router-link
    >
    <h4 class="title" align="center"><br>Dafatar Absensi Mahasiswa Sistem Informasi Semester 5</h4>

    <table class="table table-success table-stripe">
      <thead>
        <tr>
          <th scope="col">Waktu</th>
          <th scope="col">Nama Mahasiswa</th>
          <th scope="col">Bidang Mata Kuliah</th>
          <th scope="col">Keterangan</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(absen, index) in absens" :key="index">
          <td>{{ absen.waktu_absen }}</td>
          <td>{{ absen.nama_absen }}</td>
          <td></td>
          <td>
            <router-link class="btn btn-light" :to="{name:'Editabsen', params:{id:absen.id}}"
              >Edit</router-link
            >
            <button @click.prevent="absenDelete(absen.id)" class="btn btn-secondary">Delete</button>
          </td></tr>
      </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'
import { onMounted } from 'vue'
import { response } from 'express'


export default {
    name: "Absen",
    components: {

    },
    setup() {
        let absens = ref([])

        onMounted(() =>{
            axios.get('localhost:8000/api/absen/')
            .then(response => {
                console.log(response)
                absens.value - response.data.data
            }).catch(error => {
                console.log(error)
            })
        })
        
        function absenDelete(id){
            axios.delete('localhost:8000/api/absens/${id')
            .then(() => {
                let z = this.absen.map(absens => absens.id).indexOf(id)
                this.absens.splice(z, 1)
            }).catch(error => {
                console.log(error)
            })
        }

        return {
            absen,
            absenDelete
        }
    },
}
</script>