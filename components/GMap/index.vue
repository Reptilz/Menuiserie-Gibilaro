<template>
  <section class="bg-gray-100 mt-24">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">
          Rendez-nous visite !
        </h2>
      </div>
      <div class="mt-12">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
          <div class="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.4888217651915!2d5.655753377516376!3d50.61803547528199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0f6b6f9bf63cb%3A0x71c88f414798c9fc!2sRue%20de%20la%20Station%2012%2C%204610%20Beyne-Heusay!5e0!3m2!1sfr!2sbe!4v1706514307392!5m2!1sfr!2sbe"
              width="100%"
              height="480"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div
              class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-full mx-auto rounded-lg overflow-hidden"
            >
              <div class="col-span-1 border-t md:border-r border-yellow px-6 py-4">
                <h3 class="text-lg font-medium text-yellow">Notre adresse</h3>
                <p class="mt-1 text-gray-600">
                  Rue de la Station 12, <br /> 4610 Beyne-Heusay <br /> Liège, Belgique
                </p>
              </div>
              <!-- <div class="col-span-1 border-r border-yellow px-6 py-4">
                <h3 class="text-lg font-medium text-yellow">
                  Heures d'ouverture
                </h3>
                <p class="mt-1 text-gray-600">Lundi - Vendredi: 8h30 - 18h30</p>
                <p class="mt-1 text-gray-600">Samedi : 10h00 - 17h30</p>
                <p class="mt-1 text-gray-600">Dimanche : Fermé</p>
              </div> -->
              <div class="col-span-2 border-t md:border-l border-yellow px-6 lg:px-8 py-4">
                <h3 class="text-lg font-medium text-yellow">Contact</h3>
                <p class="mt-1 text-gray-600 transition-all duration-300 hover:text-yellow">
                  <a href="mailto:menuiseriegibilaro.flavio@gmail.com"><i class="fa-solid fa-envelope"></i> menuiseriegibilaro.flavio@gmail.com</a>
                </p>
                <p class="mt-1 text-gray-600 transition-all duration-300 hover:text-yellow">
                  <a href="tel:+32498800504"><i class="fa-solid fa-phone"></i> +32 498 80 05 04</a>
                </p>
                <div class="logo-contact-gmap mt-2 text-xl">
                  <a href="https://www.facebook.com/profile.php?id=61555018767781" target="_blank"><i class="fa-brands fa-square-facebook pr-4 hover:text-yellow"></i></a>
                  <a href="https://www.instagram.com/menuiserie.gibilaro" target="_blank"><i class="fa-brands fa-instagram pr-4 transition-all duration-300 hover:text-yellow"></i></a>
                  <a href="#"><i class="fa-brands fa-linkedin transition-all duration-300 hover:text-yellow"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
