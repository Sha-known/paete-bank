<script setup>
import { useForm } from '@inertiajs/vue3'
import HOModal from './HOModal.vue' 

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
  <HOModal 
    v-model:show="isVisible" 
    title="Data Entry" 
    widthClass="max-w-[850px] max-h-[calc(100vh-140px)]"
  >
    <div class="flex flex-col h-full bg-[#f8fdff] overflow-hidden">
      
      <div class="p-6 pb-2">
        <div class="flex flex-wrap items-center justify-between mb-4 pb-4 border-b border-[#00a6e6]/10">
          <div class="flex items-center gap-3">
            <span class="text-[10px] uppercase text-gray-400 font-bold">Today:</span>
            <div class="flex gap-2">
              <div class="bg-[#dcf4ff] border border-[#a3e2f6] px-3 py-1 rounded-lg text-[11px] text-[#0f7598] font-bold">Tuesday</div>
              <div class="bg-[#dcf4ff] border border-[#a3e2f6] px-3 py-1 rounded-lg text-[11px] text-[#0f7598] font-bold">September 10, 2024</div>
            </div>
          </div>
          <div class="bg-[#00a6e6] text-white px-4 py-1 rounded-lg shadow-sm text-xs font-mono font-bold">
            10:18:27 am
          </div>
        </div>
      </div>

      <div class="flex-1 overflow-y-auto px-6 space-y-6">
        <div class="grid grid-cols-12 gap-6 items-center">
          <div class="col-span-6 flex items-center gap-4">
            <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap w-32 text-right">Transaction Date:</label>
            <input v-model="form.transactionDate" type="text" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-3 py-2 text-center text-xs outline-none">
          </div>
          <div class="col-span-6 flex items-center gap-4">
            <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap w-32 text-right">Ticket Number:</label>
            <input v-model="form.ticketNumber" type="number" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-3 py-2 text-center text-xs outline-none">
          </div>
        </div>

        <div class="flex items-center gap-4">
          <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap w-32 text-right">Account Name:</label>
          <input v-model="form.accountName" type="text" placeholder="Input Account Name" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-4 py-2 text-xs outline-none">
        </div>

        <div class="grid grid-cols-12 gap-6 items-center">
          <div class="col-span-8 flex items-center gap-4">
            <label class="text-[#0f7598] font-bold text-xs w-32 text-right">Account Code:</label>
            <input v-model="form.accountCode" type="text" class="flex-1 bg-white border border-[#a3e2f6] rounded-lg px-3 py-2 text-xs outline-none">
          </div>
          <div class="col-span-4 flex items-center gap-3">
            <label class="text-[#0f7598] font-bold text-xs">Sub:</label>
            <div class="flex gap-2">
              <div v-for="i in 2" :key="i" class="bg-white border border-[#a3e2f6] rounded-lg px-2 py-1 flex items-center">
                <input type="text" class="w-8 bg-transparent text-xs outline-none text-center font-bold">
                <span class="material-icons-outlined text-[#00a6e6] text-sm">expand_more</span>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[#00a6e6]/5 p-4 rounded-xl border border-[#00a6e6]/10">
          <div class="grid grid-cols-12 gap-6 items-end">
            <div class="col-span-5 space-y-2">
               <label class="text-[#0f7598] font-bold text-[10px] uppercase tracking-wider px-1">Debit Amount</label>
               <input v-model="form.debit" type="text" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-4 py-2 text-right font-mono text-sm text-[#0f7598] font-bold">
            </div>
            <div class="col-span-5 space-y-2">
               <label class="text-[#0f7598] font-bold text-[10px] uppercase tracking-wider px-1">Credit Amount</label>
               <input v-model="form.credit" type="text" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-4 py-2 text-right font-mono text-sm text-[#0f7598] font-bold">
            </div>
          </div>
        </div>

        <div class="flex gap-4 pb-4">
          <label class="text-[#0f7598] font-bold text-xs whitespace-nowrap w-32 text-right pt-2">Explanation:</label>
          <div class="flex-1 space-y-2">
            <input v-model="form.explanationLine1" type="text" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-3 py-2 text-xs outline-none">
            <input v-model="form.explanationLine2" type="text" class="w-full bg-white border border-[#a3e2f6] rounded-lg px-3 py-2 text-xs outline-none">
          </div>
        </div>
      </div>

      <div class="p-6 mt-auto border-t border-[#00a6e6]/10 bg-white">
        <div class="flex justify-between items-center">
          <div class="flex gap-3">
            <button @click="handleSave" class="bg-[#00a6e6] text-white px-10 py-2.5 rounded-xl font-bold text-xs uppercase shadow-md active:scale-95">Save Entry</button>
            <button class="bg-white border border-[#a3e2f6] text-[#0f7598] px-8 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-[#dcf4ff]">Cancel</button>
          </div>
          <div class="flex gap-3">
            <button class="bg-white border border-[#a3e2f6] text-[#0f7598] px-8 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-[#dcf4ff]">List</button>
            <button @click="isVisible = false" class="bg-[#0f7598] text-white px-8 py-2.5 rounded-xl font-bold text-xs uppercase hover:bg-[#0c5d7a]">Return</button>
          </div>
        </div>
      </div>
    </div>
  </HOModal>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');

/* Custom scrollbar for the internal content area */
.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}
.overflow-y-auto::-webkit-scrollbar-track {
  background: transparent;
}
.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #a3e2f6;
  border-radius: 10px;
}
</style>