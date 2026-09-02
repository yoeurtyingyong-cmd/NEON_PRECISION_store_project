<template>
    <div class=" w-96 items-center justify-center bg-white border  border-gray-200 rounded-3xl shadow-sm px-8 py-10">
        <div class="text-center mb-6">
            <h1 class="text-2xl md:text-3xl font-bold text-black">
                Welcome Back
            </h1>

            <p class="mt-2 text-black text-sm md:text-base">
                Please log in to your account
            </p>
        </div>
        <form>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-semibold text-gray-900">
                    Email Address
                </label>
                <input id="email" type="email" value="admin@angkormass.com" placeholder="Enter your email"
                    class="w-full h-11 px-4 bg-blue-50 border border-blue-100 rounded-lg
                    text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition">
            </div>
            <div class="mb-6">
                <label for="password" class="block mb-2 text-sm font-semibold text-gray-900">
                    Password
                </label>
                <input id="password" type="password" value="admin123" placeholder="Enter your password"
                    class="w-full h-11 px-4 bg-blue-50 border border-blue-100 rounded-lg
                    text-sm text-gray-900 outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300 transition">
            </div>
            <button type="submit" class="w-full h-11 bg-gradient-to-r bg-blue-400 hover:bg-blue-500 active:bg-blue-600 hover
                    text-gray-900 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-200">
                Log In
            </button>
        </form>
        <div class="text-center mt-5 text-sm">
            <span class="text-gray-500">
                Don't have an account?
            </span>
            <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
                Register here
            </a>
        </div>
    </div>
</template>