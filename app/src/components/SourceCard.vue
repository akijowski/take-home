<template>
  <div class="ui centered link card" @click="handleCardClick">
    <div class="image">
      <i class="huge olive plug icon"></i>
    </div>
    <div class="content">
      <div class="header">{{ source.name }}</div>
      <div class="meta">Created At: {{ source.created_at }}</div>
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
      this.$router.push({ name: "source", params: { sid: this.source.id } });
    }
  }
};
</script>