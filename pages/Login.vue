<script setup>
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/users';
  const userStore = useUserStore();

  const username = ref(null);
  const password = ref("");
//   const {user, isUserLoggin}= storeToRefs(userStore);
function handleSubmit() {
    userStore.login({
            username: username.value,
            password: password.value,
        })
    navigateTo('/')
}
</script>

<template>
  <div class="bg-corn-field text-trinidad font-medium ">
    <div class="max-w-3xl mx-auto py-5">
      <header class="text-center my-5 bg-white p-3 rounded text-xl uppercase tracking-wider font-bold">
        Welcom to our shop!
      </header>
      <main>
        <form @submit.prevent="handleSubmit" class="bg-white max-w-2xl mx-auto rounded py-3 px-5">
            <div class="mb-2">
              <label for="username">Username:</label>
              <div class="mt-1">
                  <input type="text" placeholder="mahu" v-model="username" />
              </div>
            </div>
            <div>
              <label for="password">Password:</label>
              <div class="mt-1">
                <input type="password" placeholder="din in" v-model="password" />
              </div>
            </div>
            <button class="w-full my-6 mx-auto border rounded-md bg-corn-field px-5 py-2">
              <!-- <svg width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M12 18V6m-6 6h12"/></svg> -->
              Login
            </button>
          </form>
      </main>
    </div>
  </div>
</template>

<style scoped>
input {
    @apply border border-acapulco px-2 text-black font-normal w-full rounded
}
</style>