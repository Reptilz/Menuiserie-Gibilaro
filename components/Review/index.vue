<script setup>
import { TransitionRoot } from '@headlessui/vue'

import TestimonialImg01 from '../assets/img/testimonial/logo-man.png'
import TestimonialImg02 from '../assets/img/testimonial/logo-women.png'
import TestimonialImg03 from '../assets/img/testimonial/logo-man-2.png'

const active = ref(0)


const testimonials = [
    {
        img: TestimonialImg01,
        quote: "Extrêmement satisfait du travail accompli ! Une rapidité d'exécution impressionnante et un service d'une amabilité remarquable. Recommandation assurée !",
        name: 'Jean-Luc',
    },
    {
        img: TestimonialImg02,
        quote: "Une expérience vraiment géniale avec cette menuiserie ! Le résultat final est au-delà de mes attentes.",
        name: 'Mélissa',
    },
    {
        img: TestimonialImg03,
        quote: "Incroyableee! Je suis très content des travaux réalisés ! Merci Flavio, je vous recommande cette menuiserie !",
        name: 'Damien',
    }
]


//timer pour changer de témoignage
let timer = setInterval(() => {
    active.value = (active.value + 1) % testimonials.length
}, 4000)

// Arrête le timer lorsqu'un bouton est cliqué pour changer de témoignage
watch(active, () => {
    clearInterval(timer)
    timer = setInterval(() => {
        active.value = (active.value + 1) % testimonials.length
    }, 4000)
})
</script>

<template>
    <div class="section-review w-full max-w-3xl mx-auto text-center mt-48 lg:mt-64 mb-24">
        <h5 class="text-center font-bold text-3xl md:text-5xl">Quelques avis de clients</h5>
        <!-- Testimonial image -->
        <div class="relative h-28">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                <div
                    class="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">

                    <template :key="index" v-for="(testimonial, index) in testimonials">
                        <TransitionRoot :show="active === index" class="absolute inset-0 h-full -z-10"
                            enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                            enterFrom="opacity-0 -rotate-[60deg]" enterTo="opacity-100 rotate-0"
                            leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                            leaveFrom="opacity-100 rotate-0" leaveTo="opacity-0 rotate-[60deg]">
                            <img class="relative top-11 left-1/2 -translate-x-1/2 rounded-full" :src="testimonial.img"
                                width="56" height="56" :alt="testimonial.name" />
                        </TransitionRoot>
                    </template>

                </div>
            </div>
        </div>
        <!-- Text -->
        <div class="mb-9 transition-all duration-150 delay-300 ease-in-out">
            <div class="relative flex flex-col" ref="testimonialsRef">

                <template :key="index" v-for="(testimonial, index) in testimonials">
                    <TransitionRoot :show="active === index"
                        enter="transition ease-in-out duration-500 delay-200 order-first"
                        enterFrom="opacity-0 -translate-x-4" enterTo="opacity-100 translate-x-0"
                        leave="transition ease-out duration-300 delay-300 absolute"
                        leaveFrom="opacity-100 translate-x-0" leaveTo="opacity-0 translate-x-4">
                        <div class="text-yellow font-bold">{{ testimonial.name }}</div>
                        <div
                            class="text-2xl px-4 md:px-0 mt-8 font-normal text-slate-900 before:content-['\201C'] after:content-['\201D']">
                            {{ testimonial.quote }}</div>
                    </TransitionRoot>
                </template>

            </div>
        </div>
        <!-- Buttons -->
        <div class="flex flex-wrap justify-center -m-1.5">

            <template :key="index" v-for="(testimonial, index) in testimonials">
                <button
                    class="inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-yellow transition-colors duration-150"
                    :class="active === index ? 'bg-yellow text-black border-2 border-yellow' : 'bg-black border-2 border-yellow'"
                    @click="active = index">
                    <span>{{ testimonial.name }}</span> <span
                        :class="active === index ? 'text-yellow' : 'text-white'"></span>
                </button>
            </template>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.section-review {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>