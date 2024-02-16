<script setup>
useHead({
    title: 'Menuiserie Gibilaro',
})

onMounted(async () => {
    const { SmoothScroll, initTE } = await import('tw-elements')
    initTE({ SmoothScroll }, { allowReinits: true })
})
</script>


<template>
    <div class="main-index bg-black">
        <!-- Banner: TABLET AND DESKTOP -->
        <section class="mb-0 lg:mb-44 hidden md:block">
            <div class="relative overflow-hidden">
                <img src="~/assets/img/banner-menuiserie.webp" class="banner-image-header w-full object-cover"
                    alt="Banner Menuiserie Gibilaro">
                <div
                    class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.80)] bg-fixed">
                    <div class="flex h-full items-center justify-center">
                        <div class="px-6 text-center text-white md:px-12">
                            <h1
                                class="block-text-banner mt-2 mb-16 text-3xl font-bold tracking-tight md:text-6xl xl:text-7xl">
                                La menuiserie d'exception <br /><span class="text-5xl">Donnez vies à vos idées</span>
                            </h1>
                            <a href="#title-index" data-te-smooth-scroll-init
                                class="btn-transition btn-scroll-animate cursor-pointer text-xl px-8 py-3 font-bold transition-all duration-300 transform border text-black bg-yellow border-2 border-yellow hover:bg-black hover:text-yellow">
                                Nous découvrir <i class="arrow-transition pl-1 fa-solid fa-arrow-right-long"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- SECTION: PRESENT -->
        <section class="mb-40 md:mt-0 bg-black">
            <h5 class="text-center text-3xl md:text-5xl hidden lg:block"><span class="font-thin">Notre</span> <span
                    class="font-bold underline decoration-yellow">expertise</span></h5>
            <div class="px-4 py-12 text-center md:px-12 lg:text-left">
                <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl xl:px-32">
                    <div class="grid items-center lg:grid-cols-2">
                        <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                            <div
                                class="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-2 pb-0 pt-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                                <h1 id="title-index"
                                    class="mt-2 mb-8 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
                                    Menuiserie <span class="text-yellow">Gibilaro</span>
                                </h1>
                                <p class="pb-16">Artisan menuisier passionné, nous façonnons des créations sur mesure pour
                                    embellir votre
                                    espace de vie. Expertise dans la conception et l'installation de meubles, portes,
                                    fenêtres et agencements intérieurs. Transformez votre espace avec notre savoir-faire
                                    exceptionnel. Qualité, durabilité et design au cœur de notre engagement. Contactez-nous
                                    pour donner vie à vos projets de menuiserie résidentielle ou commerciale.</p>
                                <div class="devis-index md:relative md:left-1/4 lg:left-0">
                                    <NuxtLink to="/contact">
                                        <!--hidden on mobile-->
                                        <button class="btn-devis pb-12 font-bold text-yellow hidden md:block">
                                            <span class="textBtn-devis">Demander votre devis gratuitement</span> <i
                                                class="arrow-transition pl-1 fa-solid fa-arrow-right-long"></i>
                                        </button>
                                        <!--hidden on desktop-->
                                        <button
                                            class="px-4 py-3 font-bold md:hidden transition-all duration-300 transform border text-black bg-yellow border-2 border-yellow hover:bg-black hover:text-yellow">
                                            <span>Demander votre devis gratuit</span> <i
                                                class="arrow-transitions pl-1 fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div class="md:mb-12 lg:mb-0 right-0 left-0 hidden lg:block">
                            <img src="~/assets/img/aboutmenuiserie.jpg" class="w-full rounded-lg shadow-lg"
                                alt="Menuiserie Gibilaro - About" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss" scoped>
.banner-image-header {
    height: 800px;
    object-position: bottom;
}

.block-text-banner {
    line-height: .8;
}

//button devis animations
.devis-index {

    .arrow-transition,
    .textBtn-devis::before {
        transition: transform 1s ease, width 1s ease;
    }

    .textBtn-devis::before {
        content: '';
        position: absolute;
        bottom: -8px;
        left: 0;
        width: 0;
        height: 3px;
        background-color: #caa673;
    }

    .textBtn-devis {
        position: relative;
    }

    &:hover {
        .arrow-transition {
            transform: translateX(20px) scale(2);
        }

        .textBtn-devis::before {
            width: 100%;
        }
    }
}
</style>