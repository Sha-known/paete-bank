<script setup>
defineProps({
  isCollapsed: Boolean,
  formattedDate: String
})

// We define signals that this component can send to the parent
const emit = defineEmits(['toggleSidebar', 'openModal'])

const topNav = ['File', 'Data Entry', 'Reports', 'FRP Templates', 'Tools']
</script>

<template>
  <header class="m-4 bg-[#00a6e6] rounded-xl flex items-center justify-between px-6 py-3 text-white shadow-sm z-30">
    <div class="flex items-center gap-4">
      <button @click="emit('toggleSidebar')" class="hover:bg-white/20 p-1 rounded transition-colors">
        <span class="material-icons-outlined">{{ isCollapsed ? 'menu' : 'menu_open' }}</span>
      </button>
      
      <div @click="emit('openModal')" class="text-sm font-medium cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-colors select-none">
        {{ formattedDate }}
      </div>
    </div>
    
    <div class="flex items-center gap-6">
      <ul class="flex gap-6 text-sm">
        <li v-for="link in topNav" :key="link" class="cursor-pointer hover:underline">
          {{ link }}
        </li>
      </ul>
      <div class="w-8 h-8 bg-white rounded-full overflow-hidden border border-white/50 shadow-inner">
        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
      </div>
    </div>
  </header>
</template>