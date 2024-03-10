<template>
    <section class="bg-dark relative mt-12 md:mt-20 md:mb-20 overflow-hidden">
        <div class="square-opacity bg-yellow"></div>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">
                Nos réalisations
            </h1>
            <p class="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48">
                Explorez les réalisations remarquables de notre menuiserie à Liège, où l'artisanat authentique se marie
                harmonieusement avec un style contemporain. Nous façonnons avec passion des meubles sur mesure, des
                escaliers élégants, des portes et fenêtres personnalisées, ainsi que d'autres pièces de menuiserie
                intérieure et extérieure. Chaque création témoigne de notre engagement envers la qualité et le souci du
                détail, apportant une touche d'élégance à votre espace de vie. Parcourez notre galerie de réalisations
                pour découvrir notre expertise et laissez-nous transformer vos idées en œuvres d'art fonctionnelles.
            </p>
        </div>
    </section>




    <!-- GALLERY -->
    <div class="w-full mx-auto container bg-black px-2 py-16 sm:px-0 mb-40">
        <TabGroup>
            <TabList
                class="grid grid-cols-3 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-12 bg-black p-1 text-grayInactive md:mx-12">
                <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                    'rounded-lg py-1 text-sm font-semibold leading-2',
                    'ring-yellow ring-offset-2 ring-offset-yellow focus:outline-none',
                    selected
                        ? 'bg-yellow text-black'
                        : '',
                ]">
                        {{ category }}
                    </button>
                </Tab>
            </TabList>

            <TabPanels class="mt-2">
                <TabPanel v-for="(categorie, idx) in Object.values(categories)" :key="idx">
                    <div class="img-gallery">
                        <div class="mx-auto max-w-screen-2xl mx-4 md:mx-12">
                            <div
                                class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                                <div v-for="(cat, index) in categorie" :key="index"
                                    class="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
                                    <img :src="cat.img" loading="lazy" :alt="`Menuiserie Gibilaro - ${cat.title}`"
                                        class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

//Escaliers
import EscaliersImg01 from '../assets/img/realisations/escaliers/escaliers-01.jpg'

//Meubles
import MeublesImg01 from '../assets/img/realisations/meubles/meubles-01.jpg'
import MeublesImg02 from '../assets/img/realisations/meubles/meubles-02.jpg'

//Portes
import PortesImg01 from '../assets/img/realisations/portes/portes-01.jpg'

//Terrasses
import TerrassesImg01 from '../assets/img/realisations/terrasses/terrasses-01.jpg'

const categories = ref({
    Escaliers: [
        {
            id: 1,
            cat: 'Escaliers',
            title: 'Escaliers01',
            img: EscaliersImg01,
        },
        {
            id: 2,
            cat: 'Escaliers',
            title: "escaliers-02",
            img: EscaliersImg01,
        },
        {
            id: 3,
            cat: 'Escaliers',
            title: "escaliers-03",
            img: EscaliersImg01,
        },
        {
            id: 4,
            cat: 'Escaliers',
            title: "escaliers-04",
            img: EscaliersImg01,
        },
        {
            id: 5,
            cat: 'Escaliers',
            title: "escaliers-05",
            img: EscaliersImg01,
        },
    ],
    Meubles: [
        {
            id: 1,
            cat: 'Meubles sur mesure',
            title: 'meubles-01',
            img: MeublesImg01,
        },
        {
            id: 2,
            cat: 'Meubles sur mesure',
            title: 'meubles-02',
            img: MeublesImg02,
        },
    ],
    Portes: [
        {
            id: 1,
            cat: 'Portes sur mesure',
            title: 'meubles-01',
            img: PortesImg01,
        },
        {
            id: 2,
            cat: 'Portes',
            title: 'meubles-02',
            img: PortesImg01,
        },
    ],
    Terrasses: [
        {
            id: 1,
            cat: 'Terrasses',
            title: 'terrasses-01',
            img: TerrassesImg01,
        },
        {
            id: 2,
            cat: 'Portes',
            title: 'terrasses-02',
            img: TerrassesImg01,
        },
    ],
})
</script>

<style lang="scss" scoped>
.square-opacity {
    position: absolute;
    opacity: .1;
    top: 20%;
    left: 50%;
    width: 300px;
    height: 300px;
    transform: rotate(45deg);
    z-index: 1;
}
</style>