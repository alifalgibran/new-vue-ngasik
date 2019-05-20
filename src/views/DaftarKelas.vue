<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >
 
    <template v-slot:items="props">
      <td>{{ props.item.tanggal }}</td>
      <td class="text-xs-middle">{{ props.item.namaPengajar }}</td>
      <td class="text-xs-middle">{{ props.item.namaSantri }}</td>
      <td class="text-xs-middle"><img :src="props.item.foto" alt="" width="50"></td>
    </template>
  </v-data-table>

</template>

<script>
import db from '@/fb'

export default {
    data(){
        return{
            headers: [
                 {
                    text: 'Nama Pengajar',
                    align: 'left',
                    value: 'namaPengajar'
                },
                { text: 'Tanggal', value: 'tanggal', sortable: false },
                { text: 'Nama Santri', value: 'namaSantri', sortable: false }
                ],
            desserts: [
                
            ]
        }
    },
    created(){
       db.collection("classes").get().then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                           this.desserts.push(
                            {
                                tanggal: doc.data().dateInSearch,
                                namaPengajar: doc.data().namaPengajar,
                                namaSantri: doc.data().namaSantri
                            }                               
                               );
                        });
                    })
    }
}
</script>
