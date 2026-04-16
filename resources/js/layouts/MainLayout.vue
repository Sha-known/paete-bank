<script setup>
import { ref, computed } from 'vue'
import HOSidebar from '@/components/HOSidebar.vue'
import HOTopbar from '@/components/HOTopbar.vue'
import HODateTimeModal from '@/components/HODateTimeModal.vue'
import HODataEntryModal from '@/components/HODataEntryModal.vue'

const isCollapsed = ref(false)
const showTimeModal = ref(false)
const showEntryModal = ref(false)
const selectedDate = ref('2024-08-01')
const selectedTime = ref('09:00:00')

const formattedHeaderDate = computed(() => {
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return new Date(selectedDate.value).toLocaleDateString('en-US', options);
})
</script>

<template>
  <div class="flex h-screen bg-[#f0f7ff] font-sans overflow-hidden relative">
    
    <HOSidebar :isCollapsed="isCollapsed" />

    <main class="flex-1 flex flex-col min-w-0 relative">
      
      <HOTopbar 
        :isCollapsed="isCollapsed" 
        :formattedDate="formattedHeaderDate"
        @toggleSidebar="isCollapsed = !isCollapsed"
  
        @openModal="() => { 
          showTimeModal = true; 
          showEntryModal = false; // Close entry when opening time
        }"
  
        @openEntry="() => { 
          showEntryModal = true; 
          showTimeModal = false; // Close time when opening entry
        }" 
      />

      <div class="flex-1 flex flex-col relative">
        <slot />
        <HODateTimeModal v-model:show="showTimeModal" v-model:date="selectedDate" v-model:time="selectedTime" />
        <HODataEntryModal v-model:show="showEntryModal" />
      </div>

    </main>
  </div>
</template>