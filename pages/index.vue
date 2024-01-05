<script setup>
useHead({
    title: 'Menuiserie Gibilaro',
})
</script>

<template>
    <div class="bg-black h-screen flex flex-col items-center justify-center">
        <div class="text-center">
            <h1 class="text-white text-5xl font-bold mb-2">Site en construction</h1>
            <p class="text-yellow text-xl">Nous sommes en train de peaufiner les détails. Revenez bientôt pour découvrir notre nouveau site !</p>
            <img src="~/assets/img/waiting.gif" alt="Image de construction" class="img-construct max-w-md mx-auto"/>
        </div>
    </div>
</template>

<style lang="scss">
.img-construct {
    position: relative;
    bottom: 100px;
}
</style>