<template>
  <div :class="getSegmentClass()">
    <div class="ui dividing header">Message: {{message.message}}</div>
    <div class="ui small header">Status: {{message.status}}</div>
    <div>ID: {{message.id}} | Source ID: {{message.source_id}}</div>
    <div>Created: {{message.created_at}} | Updated: {{message.updated_at}} | Deleted: {{message.deleted_at}}</div>
  </div>
</template>

<script>
export default {
  props: {
    message: { type: Object, required: true }
  },
  methods: {
      getSegmentClass: function() {
          let {message: {status}} = this;
          return {
              ui: true,
              red: status === 'error',
              green: status === 'finished',
              blue: status === 'processing',
              segment: true
          }
      }
  }
};
</script>