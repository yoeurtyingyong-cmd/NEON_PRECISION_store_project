<template>
    <div class="  rounded-2xl bg-[#111111] p-6 border border-zinc-800/80 shadow-2xl">
      <div class="flex items-center gap-3 mb-6">
        <span class="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-800 text-xs font-semibold text-zinc-300">
          1
        </span>
        <h2 class="text-xl font-bold tracking-tight text-white">
          Shipping Details
        </h2>
      </div>
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
            Email Address
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="transmission@void.net"
            class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              First Name
            </label>
            <input
              v-model="form.firstName"
              type="text"
              placeholder="Enter first name"
              class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
          </div>
          <div>
            <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              Last Name
            </label>
            <input
              v-model="form.lastName"
              type="text"
              placeholder="Enter last name"
              class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
          </div>
        </div>
        <div>
          <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
            Street Address
          </label>
          <input
            v-model="form.streetAddress"
            type="text"
            placeholder="123 Sector 7G"
            class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
          <div class="md:col-span-6">
            <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              City
            </label>
            <input
              v-model="form.city"
              type="text"
              placeholder="Neo-Tokyo"
              class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
          </div>
          <div class="md:col-span-3">
            <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              State/Prov
            </label>
            <input
              v-model="form.state"
              type="text"
              placeholder="NT"
              class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
          </div>
          <div class="md:col-span-3">
            <label class="block text-xs font-bold tracking-wider text-zinc-400 uppercase mb-2">
              Zip/Postal
            </label>
            <input
              v-model="form.zip"
              type="text"
              placeholder="100-0001"
              class="w-full rounded-lg bg-black border border-zinc-800/60 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition"/>
          </div>
        </div>
      </form>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  streetAddress: '',
  city: '',
  state: '',
  zip: '',
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
}
</script>