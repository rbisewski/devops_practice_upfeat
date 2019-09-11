<template>
 <div>
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <br>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <br>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },

  methods: {
    login: function() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(() => this.$router.push("/"))
        .catch(err => err);
    }
  }
};
</script>
