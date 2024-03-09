<template>
    <div class="w-full mx-auto container bg-black px-2 py-16 sm:px-0">
        <TabGroup>
            <TabList class="flex space-x-1 rounded-xl bg-black p-1 text-grayInactive">
                <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
                    <button :class="[
                    'w-52 rounded-lg py-1 text-xs font-normal leading-5',
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
                    <h1>{{ getCapitalizedCategory(categorie[0].cat) }}</h1>
                    <div class="container mx-auto py-2 lg:pt-12 bg-black">
                        <div class="-m-1 flex flex-wrap md:-m-2">
                            <div v-for="(cat, index) in categorie" :key="index" class="flex w-1/3 flex-wrap">
                                <div class="w-full p-1 md:p-2">
                                    <img :alt="`Menuiserie Gibilaro - ${cat.title}`"
                                        class="block rounded-lg object-cover object-center" :src="cat.img" />
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

//Portes
import PortesImg01 from '../assets/img/realisations/portes/portes-01.jpg'

const categories = ref({
    Escaliers: [
        {
            id: 1,
            cat: 'escaliers',
            title: 'Escaliers01',
            img: EscaliersImg01,
        },
        {
            id: 2,
            cat: 'escaliers',
            title: "escaliers-02",
            img: EscaliersImg01,
        },
    ],
    Meubles: [
        {
            id: 1,
            cat: 'meubles',
            title: 'meubles-01',
            img: MeublesImg01,
        },
        {
            id: 2,
            cat: 'meubles',
            title: 'meubles-02',
            img: MeublesImg01,
        },
    ],
    Portes: [
        {
            id: 1,
            cat: 'portes',
            title: 'meubles-01',
            img: PortesImg01,
        },
        {
            id: 2,
            cat: 'portes',
            title: 'meubles-02',
            img: PortesImg01,
        },
    ],
})

const getCapitalizedCategory = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
};
</script>