<template>
  <div class="home">
    <Header />
    <Sidebar />
    <Content />
  </div>
</template>

<script>
import Header from '@/views/common/Header.vue'
import Sidebar from '@/views/common/Sidebar.vue'
import Content from '@/views/common/Content.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Header,
    Sidebar,
    Content
  }
})
</script>
