<template>
  <form class="ui form" @submit.prevent="handleFormSubmit">
    <div class="field">
      <label>ID</label>
      <input type="text" v-model="source.id" disabled>
    </div>
    <div class="field">
      <label>Name</label>
      <input type="text" v-model="source.name">
    </div>
    <div class="field">
      <label>Environment</label>
      <input type="text" v-model="source.environment">
    </div>
    <div class="field">
      <label>Encoding</label>
      <input type="text" v-model="source.encoding">
    </div>
    <div class="field">
      <label>Created At</label>
      <input type="text" v-model="source.created_at" disabled>
    </div>
    <div class="field">
      <label>Updated At</label>
      <input type="text" v-model="source.updated_at" disabled>
    </div>
    <div class="field">
      <label>Deleted At</label>
      <input type="text" v-model="source.deleted_at" disabled>
    </div>
    <button class="ui olive button" type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  props: {
    source: { type: Object, required: true }
  },
  methods: {
    handleFormSubmit: function() {
      // eslint-disable-next-line
      console.log(this.source);
    }
  }
};
</script>