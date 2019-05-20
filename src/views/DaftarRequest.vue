<template>

  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
   
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-middle">{{ props.item.alamat }}</td>
      <td class="text-xs-middle">{{ props.item.noTelp }}</td>
      <td class="text-xs-middle">{{ props.item.status }}</td>
      <td class="text-xs-middle">{{ props.item.jenisKelamin }}</td>
      <td class="text-xs-middle">
      <viewer :images="desserts">
          <img width="50dp" :src="props.item.foto" :key="props.item.foto">
      </viewer>
      </td>
      <td class="text-xs-middle"><a target="_blank" :href="props.item.portofolio">Buka</a></td>
      <td>
         <v-btn class="success" @click="updatePengajar(props.item.id,props.item.status)">Terima</v-btn>
         <v-btn class="error" @click="rejectPengajar(props.item.id,props.item.status )">Reject</v-btn>
      </td>
    </template>
    <simplert 
          :useRadius="true"
          :useIcon="true"
          ref="simplert">
    </simplert>
  </v-data-table>
</template>

<script>
import db from '@/fb'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import Popup from '../components/Popup'
import Simplert from 'vue2-simplert'
require('vue2-simplert/dist/simplert.css')
Vue.use(Viewer)
Vue.use(Simplert)

export default {
    components:{
        Popup,
        Simplert
    },
    data(){
        return{
            headers: [
                 {
                    text: 'Nama',
                    align: 'left',
                    value: 'name'
                },
                { text: 'Alamat', value: 'alamat', sortable: false },
                { text: 'No. Telp', value: 'noTelp', sortable: false },
                { text: 'Status', value: 'status', sortable: true },
                { text: 'Jenis Kelamin', value: 'jenisKelamin', sortable: true },
                { text: 'Foto Terbaru', value: 'foto', sortable: false },
                { text: 'Portofolio', value: 'portfolio', sortable: false },
                { text: 'Aksi', value: 'aksi', sortable: false },
                ],
            desserts: [],
            dialog: true
        }
    },
     methods:{
            updatePengajar(idPengajar, status){         
                if(status == "pengajar"){

               }else{
                this.desserts = [];
               }
                var washingtonRef = db.collection("requestPengajar").doc(idPengajar);
                // Set the "capital" field of the city 'DC'
                return washingtonRef.update({
                    status: "pengajar",
                    statusDiterima: "sukses"
                })
                .then(function() {
                    console.log("Document successfully updated!");

                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
            },
            rejectPengajar(idPengajar, status){
                         
               if(status == "santri"){

               }else{
                this.desserts = [];
               }

                var washingtonRef = db.collection("requestPengajar").doc(idPengajar);
                // Set the "capital" field of the city 'DC'
                return washingtonRef.update({
                    status: "santri",
                    statusDiterima: "ditolak"
                })
                .then(function() {
                    console.log("Document successfully updated!");
                    // window.alert('Tetap Menjadi Santri');
                })
                .catch(function(error) {
                    // The document probably doesn't exist.
                    console.error("Error updating document: ", error);
                });
          
            }

        },
    created(){
       db.collection("requestPengajar").onSnapshot(querySnapshot => {
           const change = querySnapshot.docChanges();
                        querySnapshot.forEach(doc => {
                        // if (change.type === 'modified'){
                           this.desserts.push(
                            {
                                name: doc.data().name,
                                alamat: doc.data().alamat,
                                noTelp: doc.data().noTelp,
                                status: doc.data().status,
                                jenisKelamin: doc.data().jenisKelamin,
                                foto: doc.data().newestPhotoPath,
                                portofolio: doc.data().portofolioPath,
                                id: doc.id
                            }                               
                               );
                        //  }
                       
                        });

                    })

        // db.collection("requestPengajar").get().then((querySnapshot) => {
        //                 querySnapshot.forEach((doc) => {
        //                    this.desserts.push(
        //                     {
        //                         name: doc.data().name,
        //                         alamat: doc.data().alamat,
        //                         noTelp: doc.data().noTelp,
        //                         status: doc.data().status,
        //                         jenisKelamin: doc.data().jenisKelamin,
        //                         foto: doc.data().newestPhotoPath,
        //                         portofolio: doc.data().portofolioPath,
        //                         id: doc.id
        //                     }                               
        //                        );
        //                  console.log(doc.data())

        //                 });
        //             })
    }
}
</script>
