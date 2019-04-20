<template>
  <div id="app" class="ui container">
    <TopBar />
    <router-view/>
  </div>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
export default {
  components: {
    TopBar
  }
}
</script>