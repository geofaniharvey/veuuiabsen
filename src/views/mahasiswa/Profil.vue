<template>
    <div class="home">
    <hr class="my-3">
    <router-link class="btn btn-primary" to="/Addmhs">Tambah Mahasiswa</router-link>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">NIM</th>
      <th scope="col">Nama Mahasiswa</th>
      <th scope="col">Nomor Telepon</th>
      <th scope="col">Email</th>
      <th scope="col">Alamat</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(profils, index) in Mahasiswa" :key="index">
      <td>{{ profils.nim_mhs }}</td>
      <td>{{ profils.nama_mhs }}</td>
      <td>{{ profils.notelp_mhs }}</td>
      <td>{{ profils.email_mhs }} </td>
      <td>{{ profils.alamat_mhs }} </td>
      <td> 
        <router-link class="btn btn-warning" :to="{name: 'Editmhs', params:{id:profils.id}}">Edit</router-link>
        <button @click.prevent="Deletemhs(profils.id)" class="btn btn-danger"> Delete </button>
      </td>
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
import axios from 'axios'
import { onMounted, ref } from 'vue'
export default {
  name: 'Mhs',
  components: {
    
},
setup(){
    let Profils = ref([])
    onMounted(() => {
      axios.get('localhost:8000/api/Profils/')
      .then(response => {
        Profils.value = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
    })
    function Deletemhs(id){
      axios.delete(`localhost:8000/api/Mahasiswa/${id}`)
      .then(() =>{
        let x = this.Profils.map(Profils => Profils.id).indexOf(id);
        this.Profils.splice(x, 1)
      }).catch(error =>{
        console.log(error)
      })
    }
    return  {
      Profils,
      Deletemhs
    }
  } 
};
</script>
