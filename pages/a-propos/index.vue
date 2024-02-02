<template>
    <div class="about-us bg-black">
        <div class="text-center bg-black pt-16 pb-4">
            <div class="relative flex flex-col items-center mx-auto lg:py-10 md:px-7">
                <h1 class="text-3xl md:text-5xl font-bold dark:text-white">
                    À propos de nous
                </h1>
                <div class="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                    <div class="flex-1 mt-2 h-2 bg-yellow"></div>
                    <div class="flex-1 mt-3 h-2 bg-yellow"></div>
                    <div class="flex-1 mt-4 h-2 bg-yellow"></div>
                </div>
            </div>
        </div>

        <!-- SECTION: ABOUT US -->
        <section class="flex items-center font-poppins bg-black">
            <div class="justify-center flex-1 max-w-6xl mx-auto">
                <div class="flex flex-wrap">
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <img src="~/assets/img/menuiserie-about.jpg" alt="about-us"
                            class="relative z-40 object-cover w-full h-96" />
                    </div>
                    <div class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
                        <h2 class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-yellow">
                            Un service sur mesure
                        </h2>
                        <p class="mb-4 text-base leading-7 opacity-75">
                            Plongez dans notre monde de menuiserie sur mesure, où chaque projet raconte une histoire
                            personnelle. Avec joie et savoir-faire, nous transformons vos idées en pièces uniques, créant
                            ainsi
                            une expérience chaleureuse et exceptionnelle.
                        </p>
                        <ul class="mb-10">
                            <li class="flex items-center mb-4 font-semibold">
                                <span class="mr-3 text-yellow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Personnalisation Totale
                            </li>
                            <li class="flex items-center mb-4 font-semibold">
                                <span class="mr-3 text-yellow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Matériaux de Qualité Supérieure
                            </li>
                            <li class="flex items-center mb-4 font-semibold">
                                <span class="mr-3 text-yellow">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="w-5 h-5 bi bi-patch-check-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                                    </svg>
                                </span>
                                Devis Gratuit
                            </li>
                        </ul>
                        <NuxtLink :to="{ hash: '#team' }"
                            class="btn-team px-4 py-3 font-bold transition-all duration-300 transform border text-black bg-yellow border-2 border-yellow hover:bg-black hover:text-yellow">
                            Découvrir notre équipe <i class="arrow-transition pl-1 fa-solid fa-arrow-right-long"></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION: TEAM -->
        <div class="bg-black container mt-56 mb-24 md:mb-64 lg:mt-96 lg:mb-96 mx-auto md:px-6">
            <section class="mb-32 text-center bg-black text-white">
                <h2 class="mb-32 text-3xl font-bold" id="team">
                    Notre équipe
                </h2>

                <div class="grid gap-x-6 md:grid-cols-2 lg:gap-x-12 text-black">
                    <div class="mb-32 md:mb-0">
                        <div class="block h-full rounded-lg bg-white">
                            <div class="flex justify-center">
                                <div class="rounded-full shadow-xl dark:shadow-black/20 w-[150px]">
                                    <img src="~/assets/img/team/flavio.jpg" alt="Flavio"
                                        class="mx-auto rounded-full shadow-lg w-[150px]" />
                                </div>
                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 text-lg font-bold">Flavio</h5>
                                <p class="mb-6">Gérant — Menuisier</p>
                                <ul class="mx-auto flex list-inside justify-center">
                                    <a href="https://www.facebook.com/profile.php?id=61555018767781" class="px-2"
                                        target="_blank">
                                        <!-- Facebook -->
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="h-4 w-4 text-primary transition-all duration-300 hover:text-yellow"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/menuiserie.gibilaro/" class="px-2" target="_blank">
                                        <!-- Instagram -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="h-4 w-4 text-primary transition-all duration-300 hover:text-yellow">
                                            <path fill="currentColor"
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="mb-24 md:mb-0">
                        <div class="block h-full rounded-lg bg-white">
                            <div class="flex justify-center">
                                <div class="flex justify-center -mt-[75px]">
                                    <img src="~/assets/img/team/jordan.jpg"
                                        class="mx-auto rounded-full shadow-xl dark:shadow-black/20 w-[150px]"
                                        alt="Jordan" />
                                </div>
                            </div>
                            <div class="p-6">
                                <h5 class="mb-2 text-lg font-bold">Jordan</h5>
                                <p class="mb-6">Développeur Web</p>
                                <ul class="mx-auto flex list-inside justify-center">
                                    <a href="https://github.com/Reptilz" class="px-2" target="_blank">
                                        <!-- Github -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="h-4 w-4 text-primary transition-all duration-300 hover:text-yellow">
                                            <path fill="currentColor"
                                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                        </svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jordan-morlet-18481619a/" class="px-2" target="_blank">
                                        <!-- Linkedin -->
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                            class="h-3.5 w-3.5 text-primary transition-all duration-300 hover:text-yellow">
                                            <path fill="currentColor"
                                                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                        </svg>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss">
//BTN BUTTON WITH ARROW
.btn-team {
    .arrow-transition {
        transition: transform 0.3s ease;
    }

    &:hover {
        .arrow-transition {
            transform: rotate(90deg);
        }
    }
}
</style>
