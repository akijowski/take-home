<template>
  <div class="ui segment fluid accordion">
    <div class="title">
      <i class="dropdown icon"></i>
      Messages
    </div>
    <div class="content">
      <SourceMessage v-for="message in messageList" :key="message.id" :message="message" />
    </div>
  </div>
</template>

<script>
import SourceMessage from './SourceMessage.vue';
export default {
  props: {
    messageList: { type: Array, required: true }
  },
  components: {
    SourceMessage
  },
  mounted: function() {
    // eslint-disable-next-line
    $(this.$el).accordion();
  }
};
</script>