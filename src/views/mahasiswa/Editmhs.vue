<template>
  <div class="card shadow mt-3">
    <div class="card-body">
      <form @submit.prevent="update">
      <h5 class="card-title"> Edit Profil </h5>

    <div class="form-group">
    <label for="exampleInputEmail1">NIM Mahasiswa</label>
    
    <input type="text" class="form-control"  placeholder="Nama Mahasiswa ..." v-model="profils.nim_mhs">
  </div>
  <div class="alert alert-danger" v-if="validation.nim_mhs">
    {{ validation.nim_mhs=[0] }}
  </div>

  <div class="form-group">
    <label for="exampleInputEmail1">Nama Mahasiswa</label>
    
    <input type="text" class="form-control"  placeholder="Nama Mahasiswa ..." v-model="profils.nama_mhs">
  </div>
  <div class="alert alert-danger" v-if="validation.nama_mhs">
    {{ validation.nama_mhs=[0] }}
  </div>
  
    <div class="form-group">
    <label for="exampleInputPassword1">Nomor Telepon</label>
    <input type="text" class="form-control" placeholder="Masukkan Nomor Telepon ..." v-model="profils.notelp_mhs">
  </div>
  <div class="alert alert-danger" v-if="validation.notelp_mhs">
    {{ validation.notelp_mhs=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" class="form-control" placeholder="Masukkan Email ..." v-model="profils.email_mhs">
  </div>
  <div class="alert alert-danger" v-if="validation.email_mhs">
    {{ validation.email_mhs=[0] }}
  </div>

    <div class="form-group">
    <label for="exampleInputPassword1">Alamat</label>
    <input type="text" class="form-control" placeholder="Masukkan Alamat ..." v-model="profils.alamat_mhs">
  </div>
  <div class="alert alert-danger" v-if="validation.alamat_mhs">
    {{ validation.alamat_mhs=[0] }}
  </div>

  
  <button type="submit" class="btn btn-primary">Confirm</button>
  </form>
    </div>
  </div>
  
</template>

<script>
import { onMounted, reactive, ref } from 'vue'
import {useRouter } from 'vue-router'
import axios from 'axios'
import {useRoute} from 'vue-router'
export default {
  setup() {
    const profils = reactive({
      nim_mhs: '',
      nama_mhs: '',
      notelp_mhs: '',
      email_mhs: '',
      alamat_mhs: ''
    })
    const validation = ref ([])
    const router = useRouter()
    const route = useRoute()
    onMounted(() =>{
      axios.get(`localhost:8000/api/profils/${route.params.id}`)
      .then(response => {
        profils.nim_mhs = response.data.data.nim_mhs
        profils.nama_mhs = response.data.data.nama_mhs
        profils.notelp_mhs = response.data.data.notelp_mhs
        profils.email_mhs = response.data.data.email_mhs
        profils.alamat_mhs = response.data.data.alamat_mhs

      }).catch(error =>{
        console.log(error)
      })
    })
    function update(){
      let nim_mhs = profils.nim_mhs
      let nama_mhs = profils.nama_mhs
      let notelp_mhs = profils.notelp_mhs
      let email_mhs = profils.email_mhs
      let alamat_mhs = profils.alamat_mhs
      axios.put(`localhost:8000/api/profils/${route.params.id}`, {
        nim_mhs: nim_mhs,
        nama_mhs: nama_mhs,
        notelp_mhs: notelp_mhs,
        email_mhs: email_mhs,
        alamat_mhs: alamat_mhs,
      }).then(() => {
        router.push({
          name: 'Home'
        })
      }).catch(error => {
        console.log(error)
      })
    }
    return {
      profils,
      validation,
      router,
      update,
      route
    }
  },
}
</script>