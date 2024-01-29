<template>
  <div
    class="px-8 py-8 bg-black border-2 border-yellow rounded-md shadow-md dark:border-gray-800 dark:bg-gray-800"
  >
    <form action="">
      <div class="mb-6">
        <h2 class="text-xl font-bold text-gray-00 dark:text-gray-400">
          Avez-vous une idée ou une question ? Contactez-nous !
        </h2>
      </div>
      <div class="flex flex-wrap mb-4 -mx-2">
        <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
          <input
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text"
            placeholder="Nom*"
            required
          />
        </div>
        <div class="w-full px-2 lg:w-1/2">
          <input
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text"
            placeholder="Prénom"
          />
        </div>
      </div>
      <div class="flex flex-wrap mb-4 -mx-2">
        <div class="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
          <input
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="email"
            placeholder="Votre adresse mail*"
            required
          />
        </div>
        <div class="w-full px-2 lg:w-1/2">
          <input
            class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
            type="text"
            placeholder="Votre numéro de téléphone"
          />
        </div>
      </div>
      <input
        class="w-full px-3 mb-4 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
        type="text"
        placeholder="Titre du sujet"
        required
      />
      <textarea
        rows="4"
        type="message"
        placeholder="Écrire un message..."
        required
        class="w-full px-3 py-2 text-white bg-black font-semibold leading-loose border rounded-md focus:ring focus:ring-yellow"
      ></textarea>
      <button
        class="w-full py-4 mt-2 text-md font-bold leading-normal text-black bg-yellow transition-all duration-300 bg-black rounded-md hover:border-darkYellow hover:bg-darkYellow"
      >
        Envoyer le message
      </button>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
