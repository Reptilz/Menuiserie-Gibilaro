<template>
  <nav class="bg-black p-0 border-b-2 border-yellow">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <img
          src="~/assets/img/logo/Transparent-Logo.png"
          alt="Menuiserie Gibilaro logo"
          class="w-56"
        />

        <!-- Burger Menu for Mobile -->
        <div v-if="!mobileMenuOpen" class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-white focus:outline-none mr-8"
          >
            <i class="fa-solid fa-bars menu-hamburger-logo text-3xl"></i>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="mobileMenuOpen"
          :class="{ 'mobile-menu-open': mobileMenuOpen }"
          class="bg-black lg:hidden absolute inset-0 bg-gray-800 bg-opacity-100 z-50 origin-right"
        >
          <div class="flex justify-end pr-8 pt-8">
            <button
              @click="toggleMobileMenu"
              class="text-white focus:outline-none"
            >
              <svg
                class="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div class="flex flex-col">
            <a href="#" class="mx-auto w-64"
              ><img src="~/assets/img/logo/Transparent-Logo.png"
            /></a>
            <a
              href="#"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center"
            >
              <span>Accueil</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a
              href="#"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center"
            >
              <span>À propos</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a
              href="#"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center"
            >
              <span>Nos réalisations</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
            <a
              href="#"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow flex justify-between items-center"
            >
              <span>Contact</span>
              <i class="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <HeaderNavFooterMobileMenu />
        </div>

        <!-- Regular Menu for Desktop - Hidden on Mobile -->
        <div class="hidden lg:flex lg:flex-grow justify-center xl:text-xl space-x-12">
          <a href="#" class="text-white hover:text-gray-300">Accueil</a>
          <a href="#" class="text-white hover:text-gray-300"
            >À propos</a
          >
          <a href="#" class="text-white hover:text-gray-300"
            >Nos réalisations</a
          >
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
        </div>

        <!-- Phone zone - Hidden on Mobile -->
        <div class="hidden lg:flex items-center space-x-2 xl:text-xl">
          <i class="fas fa-phone-alt text-white"></i>
          <a href="tel:+32498800504" class="text-white">+32 498 80 05 04</a>
          <span class="text-xs text-gray-300 pr-12 xl:pr-0">(Appelez-nous)</span>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>

<style scoped>
.mobile-menu-open {
  max-height: 100vh;
}
.menu-hamburger-logo {
  font-size: 2rem;
  margin-bottom: 15px;
  margin-right: 10px;
}
</style>
