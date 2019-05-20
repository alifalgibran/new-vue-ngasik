<template>
    <nav>
        <v-toolbar flat app>
            <v-toolbar-side-icon class="grey--text" @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="text-uppercase gret--text">
                <span class="font-weight-light"> Admin </span>
                <span class=".font-weight-blac"> Ngaji Asik </span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn   v-on:click="logout()" flat color="grey">
                <span > Sign Out </span>
                <v-icon right> exit_to_app </v-icon>
            </v-btn>
        </v-toolbar>
        
        <v-navigation-drawer v-model="drawer" app class="primary">
            <v-list>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">{{link.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                           {{ link.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

    </nav>
</template>

<script>
export default {
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'person', text: 'Daftar User', route: '/'},
                {icon: 'folder', text: 'Daftar Request', route: '/request'},
                {icon: 'dashboard', text: 'Daftar Kelas', route: '/class'},
            ]
        }
    },
    methods:{
        logout(){
            this.$router.go(0);
            window.history.forward(1)
            // this.$router.push({ name: "login" });
            // this.authenticated = false;
           // this.$emit("authenticated", false);
        }
    },
   
}
</script>

