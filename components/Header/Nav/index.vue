<template>
  <nav class="bg-black p-0 border-b-2 border-yellow">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <img src="~/assets/img/logo/Transparent-Logo.png" alt="Menuiserie Gibilaro logo" class="w-56" />

        <!-- Burger Menu for Mobile -->
        <div v-if="!mobileMenuOpen" class="lg:hidden">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none mr-8">
            <i class="fa-solid fa-bars menu-hamburger-logo text-3xl"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div v-show="mobileMenuOpen" :class="{ 'mobile-menu-open': mobileMenuOpen }"
          class="bg-black lg:hidden absolute inset-0 bg-gray-800 bg-opacity-100 z-50 origin-right">
          <div class="flex justify-end pr-8 pt-8">
            <button @click="toggleMobileMenu" class="text-white focus:outline-none">
              <svg class="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="flex flex-col">
            <NuxtLink to="/" @click="toggleMobileMenu" class="mx-auto w-64">
              <img src="~/assets/img/logo/Transparent-Logo.png" />
            </NuxtLink>
            <NuxtLink to="/" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center">
              Accueil
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/realisations" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center">
              Nos réalisations
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/a-propos" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center">
              À propos
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/contact" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center">
              Contact
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/devis" @click="toggleMobileMenu"
              class="text-black bg-yellow text-xl font-semibold mt-3 p-5 hover:bg-black hover:text-yellow hover:border flex justify-between items-center">
              Devis gratuit
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
          </div>
          <HeaderNavFooterMobileMenu />
        </div>

        <!-- Regular Menu for Desktop - Hidden on Mobile -->
        <div class="hidden lg:flex lg:flex-grow justify-center items-center xl:text-xl mt-12 space-x-12">
          <NuxtLink to="/" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/' }">
            Accueil
          </NuxtLink>
          <NuxtLink to="/realisations" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/realisations' }">
            Nos réalisations
          </NuxtLink>
          <NuxtLink to="/a-propos" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/a-propos' }">
            À propos
          </NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/contact' }">
            Contact
          </NuxtLink>
          <NuxtLink
      to="/devis"
      class="nav-devis text-black"
      :class="[$route.path === '/devis' ? 'bg-black border text-yellow' : 'bg-yellow', 'p-2 font-semibold hover:bg-black hover:text-yellow hover:border']"
    >
      Devis gratuit
    </NuxtLink>
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

//Close the mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
/** Mobile menu **/
.mobile-menu-open {
  max-height: 100vh;
}

.menu-hamburger-logo {
  font-size: 2rem;
  margin-bottom: 15px;
  margin-right: 10px;
}</style>
