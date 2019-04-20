<template>
  <div class="ui cards">
    <SourceCard v-for="source in sourceArray" :key="source.id" :source="source"/>
  </div>
</template>

<script>
import SourceCard from "./SourceCard.vue";
export default {
  components: {
    SourceCard
  },
  props: {
    sourceArray: Array
  }
};
</script>