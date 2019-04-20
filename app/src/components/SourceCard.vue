<template>
  <div class="ui centered link card" @click="handleCardClick">
    <div class="content">
      <div class="header">{{ source.name }}</div>
      <div class="description">A Source</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    source: { type: Object, required: true }
  },
  methods: {
      handleCardClick: function() {
          this.$router.push({name: 'source', params: {sid: this.source.id}});
      }
  }
};
</script>