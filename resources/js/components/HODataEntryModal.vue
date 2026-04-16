<script setup>
import { useForm } from '@inertiajs/vue3'

const isVisible = defineModel('show')

const form = useForm({
  transactionDate: '09/10/24',
  ticketNumber: 0,
  accountName: '',
  accountCode: '',
  subCode1: '',
  subCode2: '',
  debit: '0.00',
  credit: '0.00',
  explanationLine1: '',
  explanationLine2: '',
})

const handleSave = () => {
  console.log('Saving entry...', form.data())
}
</script>

<template>
  <div v-if="isVisible" class="absolute inset-0 z-40 flex items-center justify-center bg-black/5 p-4">
    
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-[850px] max-h-[90vh] overflow-hidden border border-[#00a6e6]/30 animate-in flex flex-col">
      
      <div class="bg-[#00a6e6] p-2 flex justify-between items-center text-white px-6">
        <span class="font-bold text-xs uppercase tracking-widest">Data Entry</span>
        <button @click="isVisible = false" class="hover:bg-red-500 rounded px-2 text-xl leading-none transition-colors">&times;</button>
      </div>

      <div class="p-6 bg-[#f0f9ff] overflow-y-auto">
        
        <div class="flex flex-wrap items-center gap-3 mb-4 text-[#0f7598] font-semibold">
          <span class="text-[10px] uppercase text-gray-400">Today:</span>
          <div class="bg-[#dcf4ff] border border-[#a3e2f6] px-3 py-1 rounded-lg text-xs">Tuesday</div>
          <div class="bg-[#dcf4ff] border border-[#a3e2f6] px-3 py-1 rounded-lg text-xs">September 10, 2024</div>
          <div class="bg-[#00a6e6] text-white px-3 py-1 rounded-lg shadow-sm text-xs">10:18:27 am</div>
        </div>

        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-8">
            <div class="flex items-center gap-3">
              <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap">Transaction Date:</label>
              <input v-model="form.transactionDate" type="text" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-center text-xs outline-none">
            </div>
            <div class="flex items-center gap-3">
              <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap">Ticket Number:</label>
              <input v-model="form.ticketNumber" type="number" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-center text-xs outline-none">
            </div>
          </div>

          <div class="space-y-1">
            <label class="text-[#0f7598] font-bold text-[10px] uppercase px-1">Account Name</label>
            <input v-model="form.accountName" type="text" placeholder="Input Account Name" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-4 py-2 text-xs outline-none placeholder-[#0f7598]/40">
          </div>

          <div class="flex items-center gap-4">
            <label class="text-[#0f7598] font-bold text-xs w-32">Account Code:</label>
            <input v-model="form.accountCode" type="text" class="flex-1 bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-xs">
            <label class="text-[#0f7598] font-bold text-xs">Subcode:</label>
            <div class="flex gap-2">
              <div v-for="i in 2" :key="i" class="bg-[#dcf4ff] border border-[#a3e2f6] rounded px-2 py-1 flex items-center">
                <input type="text" class="w-8 bg-transparent text-xs outline-none">
                <span class="material-icons-outlined text-[#00a6e6] text-sm">expand_more</span>
              </div>
            </div>
          </div>

          <div class="flex gap-6 items-end">
            <div class="flex-1 space-y-1">
               <label class="text-[#0f7598] font-bold text-xs">Debit:</label>
               <input v-model="form.debit" type="text" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-right font-mono text-xs text-[#0f7598]">
            </div>
            <div class="flex-1 space-y-1">
               <label class="text-[#0f7598] font-bold text-xs">Credit:</label>
               <input v-model="form.credit" type="text" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-right font-mono text-xs text-[#0f7598]">
            </div>
            <div class="flex flex-col gap-0.5">
               <div v-for="n in 4" :key="n" class="w-5 h-5 bg-[#dcf4ff] border border-[#a3e2f6] rounded flex items-center justify-center">
                 <span class="material-icons-outlined text-[#00a6e6] text-[10px]">expand_more</span>
               </div>
            </div>
          </div>

          <div class="space-y-2">
            <label class="text-[#0f7598] font-bold text-[10px] uppercase px-1">Explanation [F6 - Clear]</label>
            <input v-model="form.explanationLine1" type="text" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-xs outline-none">
            <input v-model="form.explanationLine2" type="text" class="w-full bg-[#dcf4ff] border border-[#a3e2f6] rounded-lg px-3 py-1.5 text-xs outline-none">
          </div>
        </div>

        <div class="flex justify-between items-center mt-8">
          <div class="flex gap-2">
            <button @click="handleSave" class="bg-[#00a6e6] text-white px-8 py-2 rounded-lg font-bold text-[10px] uppercase shadow-md active:scale-95">Save</button>
            <button class="bg-white border border-[#a3e2f6] text-[#0f7598] px-6 py-2 rounded-lg font-bold text-[10px] uppercase">Cancel</button>
            <button class="bg-white border border-[#a3e2f6] text-[#0f7598] px-6 py-2 rounded-lg font-bold text-[10px] uppercase">List</button>
          </div>
          <button @click="isVisible = false" class="bg-white border border-[#a3e2f6] text-[#0f7598] px-8 py-2 rounded-lg font-bold text-[10px] uppercase">Return</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

.animate-in { 
  animation: zoomIn 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; 
}
@keyframes zoomIn { 
  from { opacity: 0; transform: scale(0.95); } 
  to { opacity: 1; transform: scale(1); } 
}
</style>