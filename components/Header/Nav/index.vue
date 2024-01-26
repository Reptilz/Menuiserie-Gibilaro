<template>
  <nav class="bg-black p-0 border-b-2 border-yellow">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <!-- LOGO -->
        <NuxtLink to="/">
          <img src="~/assets/img/logo/Transparent-Logo.png" alt="Menuiserie Gibilaro logo" class="w-56" />
        </NuxtLink>

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
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow hover:text-black hover:font-semibold flex justify-between items-center"
              :class="[
                $route.path === '/'
                  ? 'bg-yellow text-black' : ''
              ]">
              Accueil
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>


            <div>
              <NuxtLink to="/realisations"
                class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow hover:text-black hover:font-semibold flex justify-between items-center"
                :class="[$route.path === '/realisations' ? 'bg-yellow text-black' : '']" @click="toggleSubMenuMobile">
                Nos réalisations
                <i :class="{'fa-solid fa-chevron-right': !isSubMenuMobileVisible, 'fa-solid fa-chevron-down': isSubMenuMobileVisible}"></i>
              </NuxtLink>
              <div class="subMenuMobile" v-if="isSubMenuMobileVisible">
                <NuxtLink @click="toggleMobileMenu" to="/realisations">
                  <div class="px-8 py-2 my-2 bg-blackLight bg-opacity-30 hover:bg-yellow hover:text-black"><i class="fa-solid fa-minus mr-2"></i> Escaliers</div>
                </NuxtLink>
                <NuxtLink @click="toggleMobileMenu" to="/realisations">
                  <div class="px-8 py-2 my-2 bg-blackLight bg-opacity-30 hover:bg-yellow hover:text-black"><i class="fa-solid fa-minus mr-2"></i> Meubles sur mesure</div>
                </NuxtLink>
                <NuxtLink @click="toggleMobileMenu" to="/realisations">
                  <div class="px-8 py-2 my-2 bg-blackLight bg-opacity-30 hover:bg-yellow hover:text-black"><i class="fa-solid fa-minus mr-2"></i> Portes</div>
                </NuxtLink>
              </div>
            </div>


            <NuxtLink to="/a-propos" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow hover:text-black hover:font-semibold flex justify-between items-center"
              :class="[
                $route.path === '/a-propos'
                  ? 'bg-yellow text-black' : ''
              ]">
              À propos
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/contact" @click="toggleMobileMenu"
              class="text-white bg-blackLight bg-opacity-30 text-xl mt-3 p-5 hover:bg-yellow hover:text-black hover:font-semibold flex justify-between items-center"
              :class="[
                $route.path === '/contact'
                  ? 'bg-yellow text-black' : ''
              ]">
              Contact
              <i class="fa-solid fa-chevron-right"></i>
            </NuxtLink>
            <NuxtLink to="/devis" @click="toggleMobileMenu"
              class="text-yellow bg-black border text-xl font-semibold mt-3 p-5 hover:bg-yellow hover:text-black flex justify-between items-center"
              :class="[
                $route.path === '/devis'
                  ? 'text-black' : ''
              ]">
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


          <div class="relative group" @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false">
            <NuxtLink to="/realisations" class="text-white hover:text-yellow opacity-90 hover:opacity-100 group"
              :class="{ 'text-yellow': $route.path === '/realisations' }">
              Nos réalisations <i class="fa-solid fa-chevron-down"></i>
            </NuxtLink>
            <!-- Sous-menu -->
            <div v-show="showSubMenu" class="subMenu absolute z-50 mt-0 top-full left-0 bg-black text-white p-2 shadow-md"
              @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false">
              <NuxtLink to="/realisations#escaliers" class="block mb-4 pb-2 pl-2 border-b hover:text-yellow transition">
                <i class="fa-solid fa-stairs pr-1"></i> Escaliers
              </NuxtLink>
              <NuxtLink to="/realisations#meubles-sur-mesure"
                class="block mb-4 pb-2 pl-2 border-b hover:text-yellow transition">
                <i class="fa-solid fa-ruler-combined pr-1"></i> Meubles sur mesure
              </NuxtLink>
              <NuxtLink to="/realisations#portes" class="block mb-4 pb-2 pl-2 border-b hover:text-yellow transition">
                <i class="fa-solid fa-door-closed pr-1"></i> Portes
              </NuxtLink>
            </div>
          </div>


          <NuxtLink to="/a-propos" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/a-propos' }">
            À propos
          </NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-yellow opacity-90 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/contact' }">
            Contact
          </NuxtLink>
          <NuxtLink to="/devis" class="nav-devis text-black" :class="[
            $route.path === '/devis'
              ? 'bg-black border text-yellow'
              : 'bg-yellow',
            'p-2 font-semibold hover:bg-black hover:text-yellow hover:border',
          ]">
            Devis gratuit
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";

//Close the mobile menu
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

//Submenu
const showSubMenu = ref(false);



//Submenu mobile
const isSubMenuMobileVisible = ref(false);

const toggleSubMenuMobile = () => {
  isSubMenuMobileVisible.value = !isSubMenuMobileVisible.value;
};

// Fermer le sous-menu lors du changement de route
const closeSubMenuOnRouteChange = () => {
  isSubMenuVisible.value = false;
};

</script>

<style scoped lang="scss">
/** Mobile menu **/
.mobile-menu-open {
  max-height: 100vh;
}

.menu-hamburger-logo {
  font-size: 2rem;
  margin-bottom: 15px;
  margin-right: 10px;
}


/** Desktop menu **/
/** Sous-menu **/
.subMenu {
  width: 200px;
  font-size: .9rem;
  border-left: 1px solid #caa673;
  background: rgba(16, 16, 15, 1);
}
</style>
