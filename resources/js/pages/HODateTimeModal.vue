<script setup>
import { ref } from 'vue'

const isVisible = defineModel('show')
const selectedDate = defineModel('date')
const selectedTime = defineModel('time')

const activeTab = ref('datetime')
</script>

<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]">
      <div class="bg-white rounded-xl shadow-2xl w-[500px] overflow-hidden border border-gray-200 animate-in">
        
        <div class="bg-[#00a6e6] p-3 flex justify-between items-center text-white">
          <span class="font-bold text-xs uppercase tracking-widest px-2">Date and Time</span>
          <button @click="isVisible = false" class="hover:bg-red-500 rounded px-2 text-xl leading-none transition-colors">&times;</button>
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
          <div v-if="activeTab === 'datetime'" class="animate-fade-in">
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

          <div v-if="activeTab === 'clocks'" class="animate-fade-in text-center py-6">
            <span class="material-icons-outlined text-gray-200 text-8xl mb-4">watch_later</span>
            <p class="text-gray-600 text-sm font-medium">Show time for other regions</p>
          </div>

          <div v-if="activeTab === 'internet'" class="animate-fade-in">
            <div class="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-100 mb-6">
              <span class="material-icons-outlined text-blue-500">info</span>
              <p class="text-sm text-blue-800 leading-relaxed">Automatically synchronize with <strong>time.windows.com</strong>.</p>
            </div>
            <button class="w-full border-2 border-[#00a6e6] text-[#00a6e6] py-3 rounded-xl text-sm font-bold">Update now</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.animate-fade-in { animation: fadeIn 0.3s ease-out; }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.animate-in { animation: slideIn 0.2s ease-out; }
@keyframes slideIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>