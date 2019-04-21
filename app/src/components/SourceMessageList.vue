<template>
  <div class="ui fluid accordion">
    <div class="title">
      <i class="dropdown icon"></i>
      Messages
    </div>
    <div class="content">
      <div v-for="message in messageList" :key="message.id">
        <strong>Message:</strong> {{ message.message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageList: { type: Array, required: true }
  },
  mounted: function() {
    // eslint-disable-next-line
    $(this.$el).accordion();
  }
};
</script>