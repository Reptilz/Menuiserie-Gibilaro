<script setup>
useHead({
    title: 'Menuiserie Gibilaro',
})
</script>


<template>
    <!-- Banner: TABLET AND DESKTOP -->
    <section class="mb-40 hidden md:block">
        <div class="relative overflow-hidden">
            <img src="~/assets/img/banner-menuiserie.webp" class="banner-image-header w-full object-cover"
                alt="Banner Menuiserie Gibilaro">
            <div
                class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.80)] bg-fixed">
                <div class="flex h-full items-center justify-center">
                    <div class="px-6 text-center text-white md:px-12">
                        <h1 class="block-text-banner mt-2 mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                            La menuiserie d'exception <br /><span class="text-5xl">Donnez vies à vos idées</span>
                        </h1>
                        <NuxtLink
                            class="btn-team cursor-pointer text-xl px-4 py-3 font-bold transition-all duration-300 transform border text-black bg-yellow border-2 border-yellow hover:bg-black hover:text-yellow">
                            Nous découvrir <i class="arrow-transition pl-1 fa-solid fa-arrow-right-long"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.banner-image-header {
    height: 800px;
    object-position: bottom;
}

.block-text-banner {
    line-height: .8;
}
</style>