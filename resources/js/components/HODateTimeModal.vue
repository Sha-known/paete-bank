<script setup>
import { ref } from 'vue'
import HOModal from './HOModal.vue'

const isVisible = defineModel('show')
const selectedDate = defineModel('date')
const selectedTime = defineModel('time')
const activeTab = ref('datetime')
</script>

<template>
  <HOModal 
    v-model:show="isVisible" 
    title="Date and Time" 
    widthClass="max-w-[480px]"
  >
    <div class="flex px-4 mt-4 gap-1">
      <button @click="activeTab = 'datetime'" 
        :class="[activeTab === 'datetime' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-400']"
        class="px-5 py-2 rounded-t-lg text-[10px] font-bold uppercase transition-all">
        Date & Time
      </button>
      <button @click="activeTab = 'clocks'" 
        :class="[activeTab === 'clocks' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-400']"
        class="px-5 py-2 rounded-t-lg text-[10px] font-bold uppercase transition-all">
        Additional Clocks
      </button>
      <button @click="activeTab = 'internet'" 
        :class="[activeTab === 'internet' ? 'bg-[#00a6e6] text-white shadow-md' : 'bg-gray-100 text-gray-400']"
        class="px-5 py-2 rounded-t-lg text-[10px] font-bold uppercase transition-all">
        Internet Time
      </button>
    </div>

    <div class="p-8 border-t border-gray-100 min-h-[300px] bg-white">
      <div v-if="activeTab === 'datetime'" class="animate-fade-in">
        <div class="flex gap-8 items-center mb-8">
          <div class="w-24 h-24 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100 shadow-inner">
            <span class="material-icons-outlined text-[#00a6e6] text-6xl">calendar_today</span>
          </div>
          <div class="flex-1 space-y-4">
            <div class="flex items-center justify-start gap-4">
              <span class="text-gray-400 text-[10px] font-bold uppercase tracking-tighter w-12">Date</span>
              <input type="date" v-model="selectedDate" class="border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 ring-blue-100 flex-1">
            </div>
            <div class="flex items-center justify-start gap-4">
              <span class="text-gray-400 text-[10px] font-bold uppercase tracking-tighter w-12">Time</span>
              <div class="flex items-center gap-2 flex-1">
                <input type="time" step="1" v-model="selectedTime" class="border border-gray-200 bg-gray-50 px-3 py-1.5 rounded-lg text-sm outline-none focus:ring-2 ring-blue-100 flex-1">
                <button class="w-auto bg-[#00a6e6] text-white px-4 py-2 rounded-lg text-[10px] font-bold uppercase hover:bg-[#008fca] shadow-md transition-transform active:scale-95 whitespace-nowrap">Change Date & Time</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="border-t border-gray-50 pt-6">
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-1 text-center">Time Zone</p>
          <p class="text-sm text-gray-800 font-bold text-center">(UTC+08:00) Beijing, Hong Kong</p>
          <button class="w-full mt-6 bg-[#00a6e6] text-white py-3 rounded-xl text-xs font-bold hover:bg-[#008fca] shadow-lg transition-transform active:scale-95">
            Change Time Zone
          </button>
          <p class="text-[10px] text-gray-400 font-bold uppercase mb-1 text-center">Daylight Saving Time is not observed by this time zone.</p>
        </div>
      </div>
      
      <div v-if="activeTab === 'clocks'" class="text-center py-10 animate-fade-in">
        <span class="material-icons-outlined text-gray-200 text-8xl">public</span>
        <p class="text-xs text-gray-400 mt-4 uppercase font-bold">World Clock Sync</p>
      </div>
    </div>
  </HOModal>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

/* Only keep the tab-specific fade-in. The zoomIn is now in HOModal */
.animate-fade-in { animation: fadeIn 0.3s ease-in; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
</style>