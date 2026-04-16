<script setup>
import { ref, computed } from 'vue'
import { router } from '@inertiajs/vue3'
import HODateTimeModal from '@/pages/HODateTimeModal.vue' // Adjust path if moved

const isCollapsed = ref(false)
const showTimeModal = ref(false)
const selectedDate = ref('2024-08-01')
const selectedTime = ref('09:00:00')

const formattedHeaderDate = computed(() => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(selectedDate.value).toLocaleDateString('en-US', options);
})

const navItems = [
  { name: 'Dashboard', icon: 'monitor_weight', active: true },
  { name: 'Book', icon: 'menu_book', active: false },
  { name: 'Entry', icon: 'login', active: false },
  { name: 'Post', icon: 'add_box', active: false },
  { name: 'Report', icon: 'assessment', active: false },
  { name: 'Backup', icon: 'history', active: false },
  { name: 'Setup', icon: 'settings', active: false },
]

const topNav = ['File', 'Data Entry', 'Reports', 'FRP Templates', 'Tools']

const logout = () => { router.post('/logout') }
</script>

<template>
  <div class="flex h-screen bg-[#f0f7ff] font-sans overflow-hidden relative">
    <aside :class="['bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-50', isCollapsed ? 'w-20' : 'w-64']">
      <div class="p-6 flex flex-col items-center border-b border-gray-100">
        <div :class="['rounded-full border-[3px] border-[#00a6e6] flex items-center justify-center bg-white', isCollapsed ? 'w-10 h-10' : 'w-20 h-20 mb-2']">
          <span :class="['text-[#00a6e6] font-black', isCollapsed ? 'text-xl' : 'text-4xl']">B</span>
        </div>
        <h1 v-show="!isCollapsed" class="text-center text-[#00a6e6] font-bold uppercase whitespace-nowrap">Rural bank <br/> of Paete, Inc.</h1>
      </div>
      <nav class="flex-1 mt-2">
        <div v-for="item in navItems" :key="item.name" :class="['flex items-center py-3 cursor-pointer', isCollapsed ? 'justify-center' : 'px-6', item.active ? 'bg-[#00a6e6] text-white' : 'text-gray-600 hover:bg-gray-50']">
          <span class="material-icons-outlined text-xl">{{ item.icon }}</span>
          <span v-show="!isCollapsed" class="ml-3 text-lg">{{ item.name }}</span>
        </div>
      </nav>
      <div @click="logout" class="p-6 border-t border-gray-100 flex items-center text-gray-600 cursor-pointer hover:text-red-500">
        <span class="material-icons-outlined">logout</span>
        <span v-show="!isCollapsed" class="ml-3 text-lg">Log out</span>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0 relative">
      <header class="m-4 bg-[#00a6e6] rounded-xl flex items-center justify-between px-6 py-3 text-white shadow-sm z-30">
        <div class="flex items-center gap-4">
          <button @click="isCollapsed = !isCollapsed"><span class="material-icons-outlined">{{ isCollapsed ? 'menu' : 'menu_open' }}</span></button>
          <div @click="showTimeModal = true" class="text-sm font-medium cursor-pointer hover:bg-white/20 px-2 py-1 rounded">{{ formattedHeaderDate }}</div>
        </div>
        <div class="flex items-center gap-6">
          <ul class="flex gap-6 text-sm">
            <li v-for="link in topNav" :key="link" class="cursor-pointer hover:underline">{{ link }}</li>
          </ul>
          <div class="w-8 h-8 bg-white rounded-full overflow-hidden border border-white/50">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      <div class="flex-1 flex flex-col relative">
        <slot />

        <HODateTimeModal v-model:show="showTimeModal" v-model:date="selectedDate" v-model:time="selectedTime" />
      </div>
    </main>
  </div>
</template>