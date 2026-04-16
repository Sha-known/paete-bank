<script setup>
import { computed } from 'vue';
import { ref } from 'vue'
import { router } from '@inertiajs/vue3'
import HODateTimeModal from './HODateTimeModal.vue';



// 1. Sidebar & Modal State
const isCollapsed = ref(false)
const showTimeModal = ref(false)

// 2. Date/Time State
const selectedDate = ref('2024-08-01')
const selectedTime = ref('09:00:00')

const formattedHeaderDate = computed(() => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(selectedDate.value).toLocaleDateString('en-US', options);
})

// 3. Navigation Items
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

const toggleSidebar = () => {
  isCollapsed.value = !isCollapsed.value
}

const logout = () => {
  router.post('/logout')
}
</script>

<template>
  <div class="flex h-screen bg-[#f0f7ff] font-sans overflow-hidden relative">
    
    <aside 
      :class="[
        'bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 z-50',
        isCollapsed ? 'w-20' : 'w-64'
      ]"
    >
      <div class="p-6 flex flex-col items-center border-b border-gray-100 overflow-hidden">
        <div 
          :class="[
            'rounded-full border-[3px] border-[#00a6e6] flex items-center justify-center transition-all duration-300 bg-white shadow-sm',
            isCollapsed ? 'w-10 h-10' : 'w-20 h-20 mb-2'
          ]"
        >
          <span :class="['text-[#00a6e6] font-black', isCollapsed ? 'text-xl' : 'text-4xl']">B</span>
        </div>
        <h1 v-show="!isCollapsed" class="text-center text-[#00a6e6] font-bold leading-tight uppercase tracking-tight whitespace-nowrap">
          Rural bank <br/> of Paete, Inc.
        </h1>
      </div>

      <nav class="flex-1 mt-2">
        <div v-for="item in navItems" :key="item.name" 
          :class="[
            'flex items-center py-3 cursor-pointer transition-colors',
            isCollapsed ? 'justify-center px-0' : 'px-6',
            item.active ? 'bg-[#00a6e6] text-white' : 'text-gray-600 hover:bg-gray-50'
          ]"
        >
          <span :class="['material-icons-outlined text-xl', !isCollapsed && 'mr-3']">{{ item.icon }}</span>
          <span v-show="!isCollapsed" class="text-lg whitespace-nowrap">{{ item.name }}</span>
        </div>
      </nav>

      <div 
        @click="logout"
        :class="[
          'p-6 border-t border-gray-100 flex items-center text-gray-600 cursor-pointer hover:text-red-500',
          isCollapsed ? 'justify-center' : ''
        ]"
      >
        <span :class="['material-icons-outlined', !isCollapsed && 'mr-3']">logout</span>
        <span v-show="!isCollapsed" class="text-lg">Log out</span>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0 relative">
      <header class="m-4 bg-[#00a6e6] rounded-xl flex items-center justify-between px-6 py-3 text-white shadow-sm z-30">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="flex items-center justify-center p-1 hover:bg-white/20 rounded-md transition-colors">
            <span class="material-icons-outlined">{{ isCollapsed ? 'menu' : 'menu_open' }}</span>
          </button>
          <div @click="showTimeModal = !showTimeModal" class="text-sm font-medium cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-colors select-none">
            {{ formattedHeaderDate }}
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <ul class="flex gap-6 text-sm">
            <li v-for="link in topNav" :key="link" class="cursor-pointer hover:underline">
              {{ link }}
            </li>
          </ul>
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/50">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      <div class="flex-1 relative flex items-center justify-center p-4">
        
        <HODateTimeModal 
          v-model:show="showTimeModal" 
          v-model:date="selectedDate"
          v-model:time="selectedTime"
        />

        <div class="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none z-0">
          <h1 class="text-[10rem] font-black text-[#00a6e6] tracking-tighter italic">GLKEEPER</h1>
        </div>
      </div>
    </main>

  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.transition-all {
  transition-property: all;
}
</style>