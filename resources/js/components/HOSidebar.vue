<script setup>
import { useAuth } from '@/composables/useAuth'
import bankLogo from '../../images/new assets/logo.png'

// We define 'isCollapsed' as a prop so the Layout can control it
defineProps({
  isCollapsed: Boolean
})

const { logout } = useAuth()

const navItems = [
  { name: 'Dashboard', icon: 'monitor_weight', active: true },
  { name: 'Book', icon: 'menu_book', active: false },
  { name: 'Entry', icon: 'login', active: false },
  { name: 'Post', icon: 'add_box', active: false },
  { name: 'Report', icon: 'assessment', active: false },
  { name: 'Backup', icon: 'history', active: false },
  { name: 'Setup', icon: 'settings', active: false },
]
</script>

<template>
  <aside :class="['bg-white border-r border-gray-200 flex flex-col transition-all duration-300 z-50', isCollapsed ? 'w-20' : 'w-64']">
    <div class="p-6 flex flex-col items-center border-b border-gray-100">
      <div :class="['flex items-center justify-center bg-white overflow-hidden', isCollapsed ? 'w-12 h-12' : 'w-24 h-24 mb-2']">
        <img :src="bankLogo" alt="Rural Bank of Paete Logo" :class="['transition-all duration-300 object-contain', isCollapsed ? 'w-8 h-8' : 'w-20 h-20']" />
      </div>
      <h1 v-show="!isCollapsed" class="text-center text-[#00a6e6] font-bold uppercase whitespace-nowrap leading-tight mt-2">
        Rural bank <br/> 
        <span class="inline-block border-b-4 border-[#00a6e6] px-2 pb-0.5">
            of Paete, Inc.
        </span>
      </h1>
    </div>

    <nav class="flex-1 mt-2">
      <div v-for="item in navItems" :key="item.name" 
        :class="[
          'flex items-center py-3 cursor-pointer', 
          isCollapsed ? 'justify-center' : 'px-6', 
          item.active ? 'bg-[#00a6e6] text-white' : 'text-gray-600 hover:bg-gray-50'
        ]"
      >
        <span class="material-icons-outlined text-xl">{{ item.icon }}</span>
        <span v-show="!isCollapsed" class="ml-3 text-lg">{{ item.name }}</span>
      </div>
    </nav>

    <div @click="logout" class="p-6 border-t border-gray-100 flex items-center text-gray-600 cursor-pointer hover:text-red-500">
      <span class="material-icons-outlined">logout</span>
      <span v-show="!isCollapsed" class="ml-3 text-lg">Log out</span>
    </div>
  </aside>
</template>