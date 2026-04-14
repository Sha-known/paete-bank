<script setup>
import { ref } from 'vue'

// Sidebar navigation items
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
</script>

<template>
  <div class="flex h-screen bg-[#f0f7ff] font-sans overflow-hidden">
    
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div class="p-6 flex flex-col items-center border-b border-gray-100">
        <div class="w-20 h-20 rounded-full border-2 border-[#00a6e6] flex items-center justify-center mb-2">
          <span class="text-[#00a6e6] font-bold text-4xl">B</span>
        </div>
        <h1 class="text-center text-[#00a6e6] font-bold leading-tight uppercase tracking-tight">
          Rural bank <br/> of Paete, Inc.
        </h1>
      </div>

      <nav class="flex-1 mt-2">
        <template v-for="item in navItems" :key="item.name">
          <div 
            :class="[
              'flex items-center px-6 py-3 cursor-pointer transition-colors',
              item.active ? 'bg-[#00a6e6] text-white' : 'text-gray-600 hover:bg-gray-50'
            ]"
          >
            <span class="material-icons-outlined mr-3 text-xl">{{ item.icon }}</span>
            <span class="text-lg">{{ item.name }}</span>
          </div>
        </template>
      </nav>

      <div class="p-6 border-t border-gray-100 flex items-center text-gray-600 cursor-pointer hover:text-red-500">
        <span class="material-icons-outlined mr-3">logout</span>
        <span class="text-lg">Log out</span>
      </div>
    </aside>

    <main class="flex-1 flex flex-col">
      <header class="m-4 bg-[#00a6e6] rounded-xl flex items-center justify-between px-6 py-3 text-white shadow-sm">
        <div class="text-sm font-medium">
          Friday, August 1, 2024
        </div>
        
        <div class="flex items-center gap-6">
          <ul class="flex gap-6 text-sm">
            <li v-for="link in topNav" :key="link" class="cursor-pointer hover:underline">
              {{ link }}
            </li>
          </ul>
          <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden">
             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
          </div>
        </div>
      </header>

      <div class="flex-1 flex items-center justify-center opacity-20 select-none">
        <h1 class="text-[12rem] font-black text-[#00a6e6] tracking-tighter italic">
          GLKEEPER
        </h1>
      </div>
    </main>

  </div>
</template>

<style>
/* Ensure Material Icons are available in your index.html */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
</style>