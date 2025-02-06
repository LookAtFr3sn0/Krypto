<script setup lang="ts">
import { ref } from 'vue';
import { GeneratePassword } from './composables/GeneratePassword.composable';
import { PasswordStrength } from './composables/PasswordStrength.composable';

const minLen = 4;
const maxLen = 512;

const password = ref('');
const passwordStrength = ref(0);
const charset = ref("abc");
const length = ref(64);

const update = () => {
  password.value = GeneratePassword(length.value, charset.value);
  passwordStrength.value = Math.floor(PasswordStrength(length.value, charset.value));
}

update();
</script>

<template>
  <div>
    <div class="flex flex-col max-w-md" >
      <span class="text-sm pl-1">Password</span>
      <span class="border-1 border-gray-300 rounded-md break-all min-h-6">{{ password }}</span>
      <button @click="update">Generate</button>
    </div>
    <div>
      <div class="flex flex-col w-full">
        <label for="length">Length</label>
        <label for="length">
          <input @input="update" type="range" id="length" v-model="length" :min="minLen" :max="maxLen" />
          {{ length }}
        </label>
      </div>
    </div>
    <span>Entropy: <span class="text-blue-500">{{ passwordStrength }}</span></span>
  </div>
</template>
