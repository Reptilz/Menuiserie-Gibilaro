<template>
  <nav class="bg-black p-0 border-b-2 border-yellow">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <img
          src="~/assets/img/logo/logo-nav.png"
          alt="Menuiserie Gibilaro logo"
        />

        <!-- Burger Menu for Mobile -->
        <div v-if="!mobileMenuOpen" class="lg:hidden">
          <button
            @click="toggleMobileMenu"
            class="text-white focus:outline-none"
          >
            <svg
              class="lg:hidden h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Menu -->
        <div
          v-show="mobileMenuOpen"
          :class="{ 'mobile-menu-open': mobileMenuOpen }"
          class="bg-black lg:hidden fixed inset-0 bg-gray-800 bg-opacity-95 z-50 transition-transform transform origin-right"
        >
          <div class="flex justify-end pr-4 pb-0">
            <button
              @click="toggleMobileMenu"
              class="text-white focus:outline-none"
            >
              <svg
                class="h-8 w-8"
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

          <div class="flex flex-col items-center">
            <a href="#" class="mx-auto"><img src="~/assets/img/logo/Transparent-Logo.png" /></a>
            <a href="#" class="text-white p-3 hover:text-gray-300">Accueil</a>
            <a href="#" class="text-white p-3 hover:text-gray-300">À propos</a>
            <a href="#" class="text-white p-3 hover:text-gray-300">Nos réalisations</a>
            <a href="#" class="text-white p-3 hover:text-gray-300">Contact</a>
            <span class="text-white p-3 hover:text-gray-300">
              <i class="fas fa-phone-alt text-white mr-2"></i>
              <a href="tel:+32498800504">+32 498 80 05 04</a>
            </span>
          </div>
        </div>

        <!-- Regular Menu for Desktop - Hidden on Mobile -->
        <div class="hidden lg:flex lg:flex-grow justify-center space-x-12">
          <a href="#" class="text-white text-xl hover:text-gray-300">Accueil</a>
          <a href="#" class="text-white text-xl hover:text-gray-300"
            >À propos</a
          >
          <a href="#" class="text-white text-xl hover:text-gray-300"
            >Nos réalisations</a
          >
          <a href="#" class="text-white text-xl hover:text-gray-300">Contact</a>
        </div>

        <!-- Phone zone - Hidden on Mobile -->
        <div class="hidden lg:flex items-center space-x-2 text-xl">
          <i class="fas fa-phone-alt text-white"></i>
          <a href="tel:+32498800504" class="text-white">+32 498 80 05 04</a>
          <span class="text-xs text-gray-300">(Appelez-nous)</span>
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
</style>
