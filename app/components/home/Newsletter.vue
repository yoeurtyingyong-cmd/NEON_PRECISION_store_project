<!-- components/NewsletterSection.vue -->
<template>
  <section class="bg-[#111111] text-white py-20 px-6 flex flex-col items-center text-center">
    <div class="max-w-2xl w-full flex flex-col items-center">
      <!-- Header Icon -->
      <div class="mb-6 text-slate-400 p-3 bg-zinc-900/60 rounded-2xl border border-zinc-800/60">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </div>

      <!-- Title & Description -->
      <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
        Stay Updated
      </h2>
      <p class="text-slate-400 text-base md:text-lg max-w-lg mb-8 leading-relaxed">
        Get exclusive deals, early access to drops, and new product alerts straight to your inbox.
      </p>

      <!-- Subscription Form -->
      <form @submit.prevent="handleSubscribe" class="w-full max-w-md space-y-3">
        <div class="flex flex-col sm:flex-row gap-3">
          <!-- Input Field with Inner Icon -->
          <div class="relative flex-grow">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
            <input 
              v-model="email" 
              type="email" 
              required 
              placeholder="Enter your email address" 
              class="w-full pl-11 pr-4 py-3.5 bg-white text-slate-900 rounded-xl placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm font-medium transition"
            />
          </div>

          <!-- Submit Button -->
          <button 
            type="submit" 
            :disabled="isSubmitting"
            class="bg-[#3b82f6] hover:bg-blue-600 disabled:opacity-70 text-white font-medium px-6 py-3.5 rounded-xl transition flex items-center justify-center gap-2 text-sm shrink-0"
          >
            <span>{{ isSubmitting ? 'Submitting...' : 'Subscribe' }}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>

        <!-- Success Message -->
        <p v-if="submitted" class="text-emerald-400 text-xs mt-2">
          Thank you for subscribing!
        </p>
      </form>

      <!-- Terms Notice -->
      <p class="text-xs text-zinc-500 mt-6">
        By subscribing, you agree to our 
        <NuxtLink to="/privacy-policy" class="underline hover:text-zinc-400 transition">
          Privacy Policy
        </NuxtLink>.
      </p>
    </div>
  </section>
</template>

<script setup>
const email = ref('')
const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubscribe = async () => {
  isSubmitting.value = true
  
  // Simulated API submission
  await new Promise((resolve) => setTimeout(resolve, 800))
  
  submitted.value = true
  email.value = ''
  isSubmitting.value = false
}
</script>