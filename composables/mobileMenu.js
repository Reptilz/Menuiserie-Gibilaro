import { ref } from 'vue';

const mobileMenuOpen = ref(false);

//Close the mobile menu
const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

//Open submenu for mobile menu
const isSubMenuMobileVisible = ref(false);

const toggleSubMenuMobile = () => {
  isSubMenuMobileVisible.value = !isSubMenuMobileVisible.value;
};

export { mobileMenuOpen, toggleMobileMenu, isSubMenuMobileVisible, toggleSubMenuMobile };
