<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="/images/logo/logo.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Login</h4>
                  <p>Welcome back, please login to your account.</p>
                </div>

                <div>
                  <vs-input
                      name="email"
                      icon-no-border
                      icon="icon icon-user"
                      icon-pack="feather"
                      label-placeholder="Usuario"
                      v-model="email"
                      class="w-full"/>

                  <vs-input
                      type="password"
                      name="password"
                      icon-no-border
                      icon="icon icon-lock"
                      icon-pack="feather"
                      label-placeholder="Password"
                      v-model="password"
                      class="w-full mt-6" />

                  <div class="flex flex-wrap justify-between my-5">
                      <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox> -->
                  </div>
                  <vs-button @click.prevent="login()">Login</vs-button>


                </div>

              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      email: "",
      password: "",
      checkbox_remember_me: false,
    }
  },
  mounted(){
      this.verifyAuth();
  },
  methods: {
    login(){
        axios.post('/auth/login', {'email': this.email, 'password': this.password}).then(response => {
            console.log(response.data);
            localStorage.setItem('userCode', response.data.CodUsuario);
            localStorage.setItem('CodAgencia', response.data.CodAgencia);
            localStorage.setItem('agencia', response.data.NombreAgencia);
            localStorage.setItem('userName', response.data.LoginUsuario);
            window.location.reload();
            // this.$router.push('/');
        }).catch(error => {
            alert('Falló la autenticación');
        });
    },
    verifyAuth(){
        axios.get('/auth/who-am-i').then(response => {
            console.log(response.data);
            if(response.data == true){
                if(localStorage.getItem('userName')){
                    this.$router.push('/');
                }else{
                    this.logout();
                }
            }
        });
    },
    logout(){
        axios.get('/auth/logout').then(response => {
            this.$router.push('/pages/login');
        });
    }
  }
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
