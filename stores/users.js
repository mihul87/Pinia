// Setup Store
export const useUserStore = defineStore("user", () => {
    const user = ref(null);

    const isUserLoggedIn = computed(() => {
        return user.value !== null
    })
    const fullname = computed(() => {
        return user.value !== null ? `${user.value.name} ${user.value.surname} ` : null
    })

    function login(userdata) {
        // if (!userdata) {
            user.value = {
                id: '1',
                name: "Vasile",
                surname: "Mahu",
                username: userdata.username,
                email: "mahu@gmail.com"
            }  
        // }
    }

    function logout() {
        user.value = null;
    }
  return { user, isUserLoggedIn, fullname, login, logout}  
})