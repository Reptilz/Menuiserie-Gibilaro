<template>
    <div class="hidden lg:flex lg:flex-grow justify-center items-center xl:text-xl mt-12 space-x-12 font-poppins">
          <NuxtLink to="/" class="text-white hover:text-yellow opacity-90 transition-all duration-300 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/' }">
            Accueil
          </NuxtLink>


          <div class="relative group" @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false">
            <NuxtLink to="/realisations" class="text-white transition-all duration-300 hover:text-yellow opacity-90 hover:opacity-100 group"
              :class="{ 'text-yellow': $route.path === '/realisations' }">
              Nos réalisations <i class="fa-solid fa-chevron-down"></i>
            </NuxtLink>
            <!-- Sous-menu -->
            <div v-show="showSubMenu" class="subMenu absolute z-50 mt-0 top-full left-0 bg-black text-white p-2 shadow-md"
              @mouseover="showSubMenu = true" @mouseleave="showSubMenu = false">
              <NuxtLink to="/realisations#escaliers" class="block mb-4 pb-2 pl-2 border-b transition-all duration-300 hover:text-yellow">
                <i class="fa-solid fa-stairs pr-1"></i> Escaliers
              </NuxtLink>
              <NuxtLink to="/realisations#meubles-sur-mesure"
                class="block mb-4 pb-2 pl-2 border-b transition-all duration-300 hover:text-yellow">
                <i class="fa-solid fa-ruler-combined pr-1"></i> Meubles sur mesure
              </NuxtLink>
              <NuxtLink to="/realisations#portes" class="block mb-4 pb-2 pl-2 border-b transition-all duration-300 hover:text-yellow">
                <i class="fa-solid fa-door-closed pr-1"></i> Portes
              </NuxtLink>
            </div>
          </div>


          <NuxtLink to="/a-propos" class="text-white hover:text-yellow opacity-90 transition-all duration-300 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/a-propos' }">
            À propos
          </NuxtLink>
          <NuxtLink to="/contact" class="text-white hover:text-yellow opacity-90 transition-all duration-300 hover:opacity-100"
            :class="{ 'text-yellow': $route.path === '/contact' }">
            Contact
          </NuxtLink>
          <NuxtLink to="/devis" class="nav-devis text-black" :class="[
            $route.path === '/devis'
              ? 'bg-black border text-yellow'
              : 'bg-yellow',
            'p-2 font-semibold border border-yellow hover:bg-black transition-all duration-300 hover:text-yellow hover:border',
          ]">
            Devis gratuit
          </NuxtLink>
        </div>
</template>

<script setup>

const showSubMenu = ref(false);

</script>


<style lang="scss" scoped>
/** Sous-menu **/
.subMenu {
  width: 200px;
  font-size: .9rem;
  border-left: 1px solid #caa673;
  background: rgba(16, 16, 15, 1);
}
</style>