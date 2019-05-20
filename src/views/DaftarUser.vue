<template>
  <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
 
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-middle">{{ props.item.alamat }}</td>
      <td class="text-xs-middle">{{ props.item.noTelp }}</td>
      <td class="text-xs-middle">
      <viewer :images="items">
          <img width="50dp" :src="props.item.foto" :key="props.item.foto">
      </viewer>
      </td>
    </template>
  </v-data-table>


</template>

<script>
import db from '@/fb'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
Vue.use(Viewer)

export default {
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
                { text: 'Foto', value: 'foto', sortable: false },
                ],
            items: [
                
            ]
        }
    },
    created(){
       db.collection("users").get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                           this.items.push(
                            {
                                name: doc.data().name,
                                alamat: doc.data().alamat,
                                noTelp: doc.data().noTelp,
                                foto: doc.data().profilePicturePath
                            }                               
                               );
                        });
                    })
    }
}
</script>
