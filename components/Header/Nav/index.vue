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
                <NuxtLink @click="toggleMobileMenu" to="/realisations">
                  <div class="px-8 py-2 my-2 bg-blackLight bg-opacity-30 hover:bg-yellow hover:text-black"><i class="fa-solid fa-minus mr-2"></i> Portes</div>
                </NuxtLink>
                <NuxtLink @click="toggleMobileMenu" to="/realisations">
                  <div class="px-8 py-2 my-2 bg-blackLight bg-opacity-30 hover:bg-yellow hover:text-black"><i class="fa-solid fa-minus mr-2"></i> Portes</div>
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
        <HeaderNavMenuDesktop />
      </div>
    </div>
  </nav>
</template>

<script setup>
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
</style>
