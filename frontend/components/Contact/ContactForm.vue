<script setup>
import PulseBackgroundAnimation from '@/components/ReusableComponents/PulseBackgroundAnimation.vue'

let url = import.meta.env['VITE_CONTACT_FORM_URL'] + '/formResponse?embedded=true'
let emailName = import.meta.env.VITE_CONTACT_FORM_EMAIL_NAME
let messageName = import.meta.env.VITE_CONTACT_FORM_MESSAGE_NAME

function handleFormSubmit () {
  document.getElementById('contact').submit()
}



</script>

<template>
  <div class="relative my-12 overflow-hidden bg-white tracking-tight text-zinc-700 shadow-lg">
    <PulseBackgroundAnimation/>
    <div class="relative mx-auto max-w-7xl p-4 sm:px-6 lg:py-24 lg:px-8">
      <div class="block space-y-12 md:flex">
        <div class="block md:w-1/2">
          <div class="my-12 space-y-6">
            <h2 class="text-laravel text-xl font-semibold lg:text-3xl">
              Napisz do nas
            </h2>
            <p class="text-base md:text-lg">
              Masz pytanie? Napisz, a chętnie Ci odpowiemy!
            </p>
            <p class="text-base md:text-lg">
              Jeśli chcesz dołączyć do nas i współtworzyć <strong>Laravel <span class="text-laravel">Poland</span> Meetup</strong> i promować swoją firmę, to daj nam znać - odezwiemy się. 
            </p>
          </div>
          <form id="contact"  onsubmit="" class="relative z-10 text-base" method="POST" target="_blank" :action="url">
            <div class="space-y-4 py-4 md:px-4">
              <div>
                <label :for="emailName" class="block text-left text-gray-700">Email</label>
                <input :id="emailName" type="text" :name="emailName" placeholder="example@example.com" class="my-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm">
              </div>
              <div>
                <label :for="messageName" class="block text-left text-gray-700">Wiadomość</label>
                <textarea :id="messageName" rows="8" :name="messageName"
                          placeholder="Zadaj nam pytanie"
                          class="mt-1 block w-full rounded-md border-gray-300 px-4 py-2 shadow-sm"
                />
              </div>
              <div class="md:flex md:justify-end">
                <button :click="handleFormSubmit" class="mt-1 cursor-pointer rounded-md bg-zinc-200 px-4 py-2 text-center text-zinc-700">
                  Wyślij przez Google Forms
                </button>
                <input type='submit' value='Submit'>
              </div>
            </div>
          </form>
        </div>
        <div class="flex w-full items-center justify-center md:w-1/2">
          <img class="opacity-0.5" src="images/placeholders/workingon.webp">
        </div>
      </div>
    </div>
  </div>
</template>
