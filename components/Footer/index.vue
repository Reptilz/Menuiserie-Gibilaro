<template>
  <!-- Footer -->
  <footer class="mt-auto">
    <section class="bg-white text-black">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <NuxtLink to="/" class="text-base leading-6 text-gray-500 hover:font-semibold">
              Accueil
            </NuxtLink>
          </div>
          <div class="px-5 py-2">
            <NuxtLink to="a-propos" class="text-base leading-6 text-gray-500 hover:font-semibold">
              À propos de nous
            </NuxtLink>
          </div>
          <div class="px-5 py-2">
            <NuxtLink to="realisations" class="text-base leading-6 text-gray-500 hover:font-semibold">
              Nos réalisations
            </NuxtLink>
          </div>
          <div class="px-5 py-2">
            <NuxtLink to="contact" class="text-base leading-6 text-gray-500 hover:font-semibold">
              Contactez-nous
            </NuxtLink>
          </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <a href="https://www.facebook.com/profile.php?id=61555018767781"
            class="text-gray-400 text-2xl hover:text-gray-500" target="_blank">
            <span class="sr-only">Facebook</span>
            <i class="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://www.instagram.com/menuiserie.gibilaro/?igsh=d3E2MWh3eDV0YmMz&utm_source=qr&fbclid=IwAR08BN-U_iU-Nhuc-eVAnQABNKDhNPJiYcyfs-JqPZSvj2Ti27MtCon5_gc"
            class="text-gray-400 text-2xl hover:text-gray-500" target="_blank">
            <span class="sr-only">Instagram</span>
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="#" class="text-2xl text-gray-400 hover:text-gray-500" target="_blank">
            <span class="sr-only">Linkedin</span>
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © Menuiserie Gibilaro 2024 — Created by Jordan Morlet
        </p>
      </div>
    </section>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
footer .fa-square-facebook:hover {
  color: #0866FF;
}

footer .fa-instagram:hover {
  color: #BA2E92;
}

footer .fa-linkedin:hover {
  color: #0A66C2;
}
</style>
