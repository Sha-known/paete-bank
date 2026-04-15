<script setup>
import { ref, computed } from 'vue'

// 1. Sidebar & Modal State
const isCollapsed = ref(false)
const showTimeModal = ref(false)
const activeTab = ref('datetime') // 'datetime', 'clocks', 'internet'

// 2. Date/Time State
const selectedDate = ref('2024-09-11')
const selectedTime = ref('11:12:50')

const formattedHeaderDate = computed(() => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(selectedDate.value).toLocaleDateString('en-US', options);
})

// 3. Navigation Data
const navItems = [
  { name: 'Dashboard', icon: 'monitor_weight', active: true },
  { name: 'Book', icon: 'menu_book', active: false },
  { name: 'Entry', icon: 'login', active: false },
  { name: 'Post', icon: 'add_box', active: false },
  { name: 'Report', icon: 'assessment', active: false },
  { name: 'Backup', icon: 'history', active: false },
  { name: 'Setup', icon: 'settings', active: false },
]

const topNav = ['File', 'Date Entry', 'Reports', 'FRP Templates', 'Tools']

const toggleSidebar = () => { isCollapsed.value = !isCollapsed.value }
</script>

<template>
  <div class="flex h-screen bg-[#f0f7ff] font-sans overflow-hidden relative">
    
    <aside 
      :class="[
        'bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out flex-shrink-0 z-10',
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

      <div :class="['p-6 border-t border-gray-100 flex items-center text-gray-600 cursor-pointer hover:text-red-500', isCollapsed ? 'justify-center' : '']">
        <span :class="['material-icons-outlined', !isCollapsed && 'mr-3']">logout</span>
        <span v-show="!isCollapsed" class="text-lg">Log out</span>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0">
      <header class="m-4 bg-[#00a6e6] rounded-xl flex items-center justify-between px-6 py-3 text-white shadow-sm">
        <div class="flex items-center gap-4">
          <button @click="toggleSidebar" class="flex items-center justify-center p-1 hover:bg-white/20 rounded-md transition-colors">
            <span class="material-icons-outlined">{{ isCollapsed ? 'menu' : 'menu_open' }}</span>
          </button>
          <div @click="showTimeModal = true" class="text-sm font-medium cursor-pointer hover:bg-white/20 px-2 py-1 rounded transition-colors">
            {{ formattedHeaderDate }}
          </div>
        </div>
        
        <div class="flex items-center gap-6">
          <ul class="flex gap-6 text-sm">
            <li v-for="link in topNav" :key="link" class="cursor-pointer hover:underline">
              {{ link }}
            </li>
          </ul>
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden border border-white/50 shadow-sm">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      <div class="flex-1 flex items-center justify-center opacity-10 select-none pointer-events-none">
        <h1 class="text-[12rem] font-black text-[#00a6e6] tracking-tighter italic">GLKEEPER</h1>
      </div>
    </main>

    <div v-if="showTimeModal" class="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-2xl w-[500px] overflow-hidden border border-gray-200 animate-fade-in">
        
        <div class="bg-[#00a6e6] p-3 flex justify-between items-center text-white">
          <span class="font-bold text-xs uppercase tracking-widest px-2">Date and Time</span>
          <button @click="showTimeModal = false" class="hover:bg-red-500 rounded px-2 text-xl leading-none transition-colors">&times;</button>
        </div>

        <div class="flex px-4 mt-4 gap-1">
          <button @click="activeTab = 'datetime'" 
            :class="[activeTab === 'datetime' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200']"
            class="px-5 py-2 rounded-t-lg text-xs font-bold transition-all">Date & Time</button>
          
          <button @click="activeTab = 'clocks'" 
            :class="[activeTab === 'clocks' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200']"
            class="px-5 py-2 rounded-t-lg text-xs font-bold transition-all">Additional Clocks</button>
          
          <button @click="activeTab = 'internet'" 
            :class="[activeTab === 'internet' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200']"
            class="px-5 py-2 rounded-t-lg text-xs font-bold transition-all">Internet Time</button>
        </div>

        <div class="p-8 border-t border-gray-200 min-h-[320px]">
          
          <div v-if="activeTab === 'datetime'" class="animate-in">
            <div class="flex gap-8 items-center mb-8">
              <div class="w-28 h-28 bg-white rounded-xl flex items-center justify-center border-2 border-gray-100 shadow-sm">
                  <span class="material-icons-outlined text-[#ff4d4d] text-7xl">calendar_month</span>
              </div>
              <div class="flex-1 space-y-5">
                <div class="flex items-center justify-between">
                  <span class="text-gray-500 font-medium text-sm">Date:</span>
                  <input type="date" v-model="selectedDate" class="border-2 border-cyan-100 bg-cyan-50/30 px-3 py-2 rounded-lg text-sm text-cyan-900 outline-none w-48 focus:border-[#00a6e6]">
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-gray-500 font-medium text-sm">Time:</span>
                  <div class="flex gap-2">
                    <input type="time" step="1" v-model="selectedTime" class="border-2 border-cyan-100 bg-cyan-50/30 px-3 py-2 rounded-lg text-sm text-cyan-900 outline-none w-32 focus:border-[#00a6e6]">
                    <button class="bg-[#00a6e6] text-white px-3 py-2 rounded-lg text-xs font-bold hover:bg-[#008fca]">Change</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-t border-gray-100 pt-6 text-center">
              <p class="text-sm text-gray-700 font-semibold mb-4">(UTC+08:00) Beijing, Hong Kong, Urumqi</p>
              <button class="bg-[#00a6e6] text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-[#008fca]">Change Time Zone</button>
            </div>
          </div>

          <div v-if="activeTab === 'clocks'" class="animate-in text-center py-6">
            <span class="material-icons-outlined text-gray-200 text-8xl mb-4">watch_later</span>
            <p class="text-gray-600 text-sm font-medium">Show time for other regions</p>
            <div class="mt-6 space-y-3">
              <label class="flex items-center justify-center gap-3 p-3 bg-gray-50 rounded-lg border border-dashed border-gray-300 cursor-pointer">
                <input type="checkbox" class="w-4 h-4 accent-[#00a6e6]">
                <span class="text-sm text-gray-700">Show this clock</span>
              </label>
            </div>
          </div>

          <div v-if="activeTab === 'internet'" class="animate-in">
            <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
              <span class="material-icons-outlined text-blue-500">info</span>
              <p class="text-sm text-blue-800 leading-relaxed">This computer is set to automatically synchronize with <strong>time.windows.com</strong>.</p>
            </div>
            <p class="text-xs text-gray-400 px-2 mb-8 uppercase tracking-widest font-bold">Status</p>
            <p class="text-sm text-gray-600 px-2">Last successful sync: Today at 8:00 AM</p>
            <button class="w-full mt-6 border-2 border-[#00a6e6] text-[#00a6e6] py-3 rounded-xl text-sm font-bold hover:bg-blue-50 transition-colors">Change synchronization settings...</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.animate-fade-in {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.98); }
  to { opacity: 1; transform: scale(1); }
}

.animate-in {
  animation: slideIn 0.2s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>