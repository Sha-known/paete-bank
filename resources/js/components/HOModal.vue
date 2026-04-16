<script setup>
defineProps({
  show: Boolean,
  title: String,
  widthClass: {
    type: String,
    default: 'max-w-[480px]' 
  }
})
const emit = defineEmits(['close'])
</script>

<template>
  <div v-if="show" class="absolute inset-0 z-40 flex items-center justify-center bg-black/10 p-4">
    <div 
      :class="[widthClass]" 
      class="bg-white rounded-xl shadow-xl w-full overflow-hidden border border-gray-200 animate-in flex flex-col"
    >
      <div class="bg-[#00a6e6] p-3 flex justify-between items-center text-white px-4">
        <span class="font-bold text-[11px] uppercase tracking-widest">{{ title }}</span>
        <button @click="emit('close')" class="hover:bg-red-500 rounded px-2 text-xl leading-none transition-colors">
          &times;
        </button>
      </div>

      <slot />
    </div>
  </div>
</template>

<style scoped>
.animate-in { 
  animation: zoomIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; 
}
@keyframes zoomIn { 
  from { opacity: 0; transform: scale(0.9); } 
  to { opacity: 1; transform: scale(1); } 
}
</style>