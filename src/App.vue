<template>
    <v-app>
      <Navbar v-if="authenticated" />
       <!-- <router-link v-if="authenticated" to="/masuk" v-on:click.native="logout()" replace>Logout</router-link> -->
    <v-content>
        <router-view  @authenticated="setAuthenticated" />
     </v-content>
   </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import VueSession from 'vue-session'
    export default {
        name: 'App',
        components: {
             Navbar
        },
        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username1: "123",
                    password1: "123"
                }
            }
        },
        beforeCreate(){
            if (this.$session.get("logged_in") == false) {
            this.$router.push('/')
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                window.history.forward(1)
                this.authenticated = false;
            }
        }
    }
</script>
