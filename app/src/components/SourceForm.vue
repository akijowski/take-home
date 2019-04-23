<template>
  <form class="ui segment equal width form" @submit.prevent="handleFormSubmit">
    <div class="fields">
      <div class="field">
        <label>ID</label>
        <input type="text" v-model="source.id" disabled>
      </div>
      <div class="required field">
        <label>Name</label>
        <input type="text" v-model="source.name">
      </div>
    </div>
    <div class="fields">
      <div class="required field">
        <label>Environment</label>
        <input type="text" v-model="source.environment">
      </div>
      <div class="required field">
        <label>Encoding</label>
        <input type="text" v-model="source.encoding">
      </div>
    </div>
    <div class="fields">
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
    </div>
    <button class="ui olive button" type="submit" disabled>Submit</button>
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