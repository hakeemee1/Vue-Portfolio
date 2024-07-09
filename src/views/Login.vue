<template>
    <div>
        <v-card>
            <v-card-title primary-title>
                Login
            </v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="username"
                    label="username"
                    required
                ></v-text-field>
            </v-card-text>
        </v-card>

        <v-btn @click="login">Login</v-btn>
    </div>
</template>

<script>
export default {
    data() {    
        return {
            username :''
        }
    },
    
    methods: {
        login() {
            if(this.username === 'admin') {
                localStorage.setItem('username', this.username)
                this.$router.push({name: 'portfolio'})
            }else {
                alert('Login failed')
            }
        }   
    }
}
</script>
    
<style>

</style>