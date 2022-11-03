<script setup>
defineProps({
  presentations: Array,
})
</script>

<template>
  <div class="overflow-hidden bg-white">
    <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
      <h3 class="text-xl pl-4 font-medium leading-8 text-gray-900">Prezentacje</h3>
    </div>
    <ul role="list" class="divide-y divide-gray-200">
      <li v-for="(presentation, id) in presentations" :key="id">
        <div class="block hover:bg-gray-50">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="flex min-w-0 flex-1 items-center">
              <div class="w-[36em] pl-4">
                <div class="truncate font-medium text-lg">{{ presentation.title }}</div>
                <div class="mt-2 flex gap-3 items-center text-sm" v-for="speaker in presentation.speakers">
                  <img class="h-6 w-6 rounded-full shadow-lg" :src="speaker.avatar" :alt="speaker.name">
                  <span v-if="speaker.company">{{ speaker.name }}, {{ speaker.company }}</span>
                  <span v-else>{{ speaker.name }}</span>
                </div>
              </div>
              <div class="min-w-0 flex-1 px-4 md:grid md:grid-cols-1 md:gap-4">
                <div class="hidden md:block">
                  <p class="flex items-center text-sm text-gray-500">
                    Jakie są zasady działania licencji otwartego oprogramowania?
                    Na to pytanie podczas jednej z prelekcji Laravel Poland MeetUp #22 odpowie Joanna Rewak - Radca Prawny, pasjonatka zagadnień z zakresu prawa nowych technologii, prawa autorskiego oraz ochrony danych osobowych, która współpracuje z Blumilk.
                    ✅ Joanna podczas swojej prelekcji opowie o zasadach działania licencji na przykładzie licencji MIT (X11), która pozwala udostępniać kod źródłowy Laravela.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
