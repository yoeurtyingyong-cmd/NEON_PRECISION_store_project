<template>
    <div class="w-96 bg-white rounded-3xl border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] p-8 sm:p-10 transition-all duration-300">
        <form id="registerForm" class="space-y-5" onsubmit="handleRegister(event)">
            <div>
                <label for="fullName" class="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Full Name
                </label>
                <input type="text" id="fullName" name="fullName" placeholder="John Doe"
                    class="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 text-black placeholder-[#94A3B8] text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all bg-white"
                    required />
            </div>
            <div>
                <label for="email" class="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Email Address
                </label>
                <input type="email" id="email" name="email" placeholder="admin@angkormass.com"
                    class="w-full px-4 py-3.5 rounded-xl bg-[#EBF2FE] border border-transparent text-black text-sm font-normal focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:bg-white focus:border-gold-500 transition-all"
                    required />
            </div>
            <div>
                <label for="password" class="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Password
                </label>
                <input type="password" id="password" name="password" placeholder=""
                    class="w-full px-4 py-3.5 rounded-xl bg-[#EBF2FE] border border-transparent text-black text-base tracking-widest focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:bg-white focus:border-gold-500 transition-all"
                    required />
            </div>
            <div>
                <label for="confirmPassword" class="block text-xs sm:text-sm font-bold text-gray-700 mb-2">
                    Confirm Password
                </label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Re-enter password"
                    class="w-full px-4 py-3.5 rounded-xl border border-slate-200/80 text-black placeholder-admin@angkormass.com text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500 transition-all bg-white"
                    required />
            </div>
            <div id="alertBox" class="hidden p-3 rounded-xl text-xs font-medium text-center"></div>
            <div class="pt-2">
                <button type="submit" id="submitBtn"
                    class="w-full py-3.5 px-4 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white font-bold text-base rounded-xl transition-colors duration-200 shadow-sm flex items-center justify-center">
                    <span>Register</span>
                </button>
            </div>
        </form>
        <footer class="mt-7 text-center">
            <p class="text-xs sm:text-sm text-[#687693]">
                Already have an account?
                <a href="#" onclick="handleLoginRedirect(event)"
                    class="text-blue-400 hover:text-blue-500 font-bold hover:underline transition-colors">
                    Login here
                </a>
            </p>
        </footer>
    </div>
</template>

