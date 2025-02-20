<template>
  <div
    class="mx-auto bg-white pt-[149px] pb-[70px] sm:p-16 sm:rounded-[2.25rem] lg:max-w-[31.5rem] h-screen sm:h-auto"
  >
    <div class="flex flex-col gap-8 text-design-blue-800 font-roboto px-6">
      <div>
        <img src="../assets/images/icon-success.svg" alt="" class="w-16 h-16" />
      </div>
      <div>
        <h1 class="text-[3.5rem] leading-none font-bold">Thanks for subscribing!</h1>
      </div>
      <div class="text-base font-normal">
        A confirmation email has been sent to
        <span class="font-bold">ash@loremcompany.com</span>. Please open it and click the button
        inside to confirm your subscription.
      </div>
      <a
        href="mailto:ash@loremcompany.com"
        class="text-white bg-design-blue-800 flex justify-center items-center py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:via-[#FF5A5A] hover:to-[#FF527B] w-full"
      >
        Dismiss message
      </a>
    </div>
  </div>
</template>
