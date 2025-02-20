<template>
  <div
    class="font-roboto flex flex-col lg:gap-[2rem] gap-6 text-design-blue-800 lg:max-w-[23.5rem] justify-center sm:px-0 px-6"
  >
    <h1 class="text-[3.5rem] font-bold leading-none">Stay updated!</h1>

    <div class="text-base font-normal">
      Join 60,000+ product managers receiving monthly updates on:
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-4">
        <div>
          <img src="../assets/images/icon-list.svg" alt="" />
        </div>
        <div class="text-base font-normal">Product discovery and building what matters</div>
      </div>
      <div class="flex items-center gap-4">
        <div>
          <img src="../assets/images/icon-list.svg" alt="" />
        </div>
        <div class="text-base font-normal">Measuring to ensure updates are a success</div>
      </div>
      <div class="flex items-center gap-4">
        <div>
          <img src="../assets/images/icon-list.svg" alt="" />
        </div>
        <div class="text-base font-normal">And much more!</div>
      </div>
    </div>

    <!-- Email  -->
    <div class="flex flex-col">
      <Form :validation-schema="schema" @submit="submitForm">
        <div class="mb-8 flex flex-col">
          <div class="flex items-center mb-2 text-xs font-bold leading-normal justify-between">
            <div class=" ">Email address</div>
            <ErrorMessage name="email" class="text-design-red" />
          </div>

          <Field
            name="email"
            type="email"
            class="py-4 px-6 text-design-grey border-design-grey border rounded-lg w-full"
            placeholder="email@company.com"
          />
        </div>
        <button
          class="text-white bg-design-blue-800 flex justify-center items-center py-4 rounded-lg hover:bg-gradient-to-r hover:from-[#FF6A3A] hover:via-[#FF5A5A] hover:to-[#FF527B] w-full"
        >
          Subscribe to monthly newsletter
        </button>
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'
import { setLocale } from 'yup'
import { useRouter } from 'vue-router'

// 🔹 設定 yup 全域錯誤訊息（確保 email 錯誤時顯示 "請輸入正確的 email"）
setLocale({
  string: {
    email: '請輸入正確的Email',
  },
})

// 🔹 定義驗證規則（使用 validationSchema）
const schema = yup.object({
  email: yup.string().required('Valid email required').email(),
})

const router = useRouter()

// 🔹 表單提交處理
const submitForm = (values) => {
  console.log('表單已提交 ✅', values)
  router.push('/success')
}
</script>
