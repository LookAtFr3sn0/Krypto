<script setup lang="ts">
import { ref } from 'vue';
import { GeneratePassword } from './composables/GeneratePassword.composable';
import { PasswordStrength } from './composables/PasswordStrength.composable';

const minLen = 4;
const maxLen = 512;

const password = ref('');
const passwordStrength = ref(0);
const charset = ref("");
const length = ref(64);

const updatePassword = () => {
  password.value = GeneratePassword(length.value , charset.value);
  passwordStrength.value = Math.floor(PasswordStrength(length.value, charset.value));
}

updatePassword();
</script>

<template>
  <div class="flex flex-col gap-2">

    <div class="flex flex-col" >
      <div class="flex justify-between">
        <span class="label">Password</span>
        <div class="flex gap-1 align-middle mr-8"><span class="label">Entropy:</span><span class="text-blue-500">{{ passwordStrength }}</span></div>
      </div>
      <div class="flex place-items-center gap-1">
        <span class="select-text border-1 py-0.5 px-2 border-gray-300 rounded-md w-full break-all min-h-6">
          {{ password }}
        </span>
        <span class="material-symbols-outlined" @click="updatePassword">replay</span>
      </div>
    </div>
    
    <div>
      <div class="flex flex-col w-full">
        <label class="label" for="length">Length</label>
        <label class="flex gap-1" for="length">
          <input @input="updatePassword" type="range" id="length" v-model="length" :min="minLen" :max="maxLen">
          <span>{{ length }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
