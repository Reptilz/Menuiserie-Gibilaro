<script setup>

onMounted(async () => {
  const { SmoothScroll, Animate, initTE } = await import('tw-elements')
  initTE({ SmoothScroll, Animate }, { allowReinits: true })
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '',
});

const errors = ref(false);
const succsess = ref(false);

//Define route API for dev or prod 
const { apiMailerUrlDev, apiMailerUrlProd } = useRuntimeConfig().public;
const isProdEnv = process.env.NODE_ENV === "production";
const apiUrl = isProdEnv ? apiMailerUrlDev : apiMailerUrlProd;

console.log(apiUrl);


async function submit(form) {
  await $fetch(`${apiUrl}/contact`, {
    method: 'POST',
    body: form,
  }).then(() => {
    this.errors = false;
    this.succsess = true;
    this.form = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    };
  }).catch(() => {
    this.errors = true;
    this.succsess = false;
  });
}

</script>

<template>
  <div class="px-8 py-8 bg-black border-2 border-yellow rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800">
    <form @submit.prevent="submit(form)">
      <div class="mb-6">
        <h2 class="text-xl font-bold text-gray-00 dark:text-gray-400">
          Avez-vous une idée ou une question ? Contactez-nous !
        </h2>
      </div>
      <div class="flex flex-wrap mb-4 -mx-2">
        <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
          <input v-model="form.name"
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text" placeholder="Nom*" required />
        </div>
        <div class="w-full px-2 lg:w-1/2">
          <input v-model="form.email"
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="email" placeholder="Votre adresse mail*" required />
        </div>
      </div>
      <div class="flex flex-wrap mb-4 -mx-2">
        <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
          <input v-model="form.subject"
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text" placeholder="Titre du sujet" />
        </div>
        <div class="w-full px-2 lg:w-1/2">
          <input v-model="form.phone"
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text" placeholder="Votre numéro de téléphone" />
        </div>
      </div>
      <textarea v-model="form.message" rows="4" type="message" placeholder="Écrire un message..." required
        class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"></textarea>
      <button type="submit"
        class="w-full py-4 mt-2 text-md font-bold leading-normal text-black bg-yellow transition-all duration-300 rounded-md hover:border-darkYellow hover:bg-darkYellow">
        Envoyer le message
      </button>

      <!--message error-->
      <div v-if="errors" class="alert-error animated-alert border-t-4 rounded-b px-4 mt-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg></div>
          <div>
            <p class="font-bold text-black">Erreur lors de l'envoi du message.</p>
            <p class="text-sm text-black">Veuillez réessayer plus tard ou nous contacter directement.</p>
          </div>
        </div>
      </div>

      <!--success message-->
      <div v-if="succsess" class="alert-success animated-alert border-t-4 rounded-b px-4 mt-4 py-3 shadow-md"
        role="alert">
        <div class="flex">
          <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path
                d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
            </svg></div>
          <div>
            <p class="font-bold text-black">Message envoyé avec succès.</p>
            <p class="text-sm text-black">Nous vous répondrons dans les plus brefs délais.</p>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<style lang="scss" scoped>
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
    transform: translateY(0%);
  }

  to {
    opacity: 0;
    transform: translateY(-100%);
  }
}

.alert-success {
  animation: slideInFromTop 0.5s ease-in-out 1 forwards, fadeOut 0.5s linear forwards 8s;
}


.alert-success {
  background: #b7fcdd;
  border-color: #78cda8;
}

.alert-error {
  background: rgb(248, 163, 163);
  border-color: rgb(246, 122, 122);
}
</style>