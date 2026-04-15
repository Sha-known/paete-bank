<script setup>
import { useForm } from '@inertiajs/vue3'
import logoImg from '../../images/new assets/logo.png'

const form = useForm({
  email: '',
  password: '',
})

const submitLogin = () => {
  form.post('/login')
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-[#e9f8ff] via-[#cceffd] to-[#09abe4] flex flex-col items-center px-4 py-10 text-[#0f7598]"
  >
    <h1
      class="text-center text-3xl md:text-5xl font-extrabold tracking-wide text-[#10a8d8] drop-shadow-sm mb-10"
    >
      Maniguro, Magbangko, Umasenso
    </h1>

    <section
      class="w-full max-w-4xl bg-[#f8fcff]/95 rounded-[28px] shadow-xl border border-[#c7edf9] p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
    >
      <div class="rounded-2xl bg-[#d9f3fd] border border-[#9edff5] p-6 flex items-center justify-center min-h-[280px]">
        <img :src="logoImg" alt="Rural Bank of Paete logo" class="w-full max-w-[280px] object-contain" />
      </div>

      <div class="px-2 md:px-4">
        <div class="flex justify-center mb-4">
          <img :src="logoImg" alt="Bank mark" class="w-20 h-20 object-contain rounded-full border border-[#9edff5] bg-white p-1" />
        </div>

        <h2 class="text-center text-2xl font-bold text-[#1198c2] leading-tight">Rural Bank of Paete, Inc.</h2>
        <p class="text-center text-3xl font-bold text-[#0f8db4] mt-1">User Log</p>
        <p class="text-center text-[#4f7d8f] text-sm mb-6">Head Office - Regular</p>

        <form class="space-y-3" @submit.prevent="submitLogin">
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            class="w-full rounded-xl border border-[#6dcde9] focus:border-[#1eaad8] focus:ring-2 focus:ring-[#a3e2f6] outline-none px-4 py-2.5 bg-white/95"
          />
          <p v-if="form.errors.email" class="text-sm text-red-500">{{ form.errors.email }}</p>
          <input
            v-model="form.password"
            type="password"
            placeholder="Password"
            class="w-full rounded-xl border border-[#6dcde9] focus:border-[#1eaad8] focus:ring-2 focus:ring-[#a3e2f6] outline-none px-4 py-2.5 bg-white/95"
          />
          <p v-if="form.errors.password" class="text-sm text-red-500">{{ form.errors.password }}</p>

          <button
            type="submit"
            :disabled="form.processing"
            class="w-full rounded-xl bg-[#0aa5d8] hover:bg-[#0895c2] text-white font-semibold py-2.5 transition-colors"
          >
            {{ form.processing ? 'Logging in...' : 'Log in' }}
          </button>
        </form>
      </div>
    </section>

    <footer class="mt-10 text-white text-center space-y-2 max-w-3xl">
      <p class="text-lg font-medium">(049) 557 0006 &nbsp; | &nbsp; rbpaete1967@gmail.com</p>
      <p class="text-base">J. Rizal corner J.V. Quesada Streets, Brgy. Ilaya del Sur, Paete, Laguna, 4016</p>
      <p class="text-base">www.paetebank.ph</p>
      <p class="text-base">Facebook • X</p>
    </footer>
  </div>
</template>
