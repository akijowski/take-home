<template>
  <div class="ui segment">
    <div v-if="!messageList.length">
      No Messages
    </div>
    <div v-else-if="messageList.length > maxListSize">
      <div class="ui small buttons">
        <div v-if="startIndex > 1" class="ui button" @click="decrease">prev</div>
        <div class="ui disabled button">{{startIndex}} -- {{endIndex}}</div>
        <div v-if="remaining > 1" class="ui button" @click="increase">next</div>
      </div>
      <SourceMessage v-for="message in currentList" :key="message.id" :message="message"/>
    </div>
    <div v-else>
      <SourceMessage v-for="message in messageList" :key="message.id" :message="message"/>
    </div>
  </div>
</template>

<script>
import SourceMessage from "./SourceMessage.vue";
export default {
  data: function() {
    return {
      startIndex: 0,
      endIndex: 0,
      currentList: [],
      maxListSize: 100,
    };
  },
  props: {
    messageList: { type: Array, required: true }
  },
  components: {
    SourceMessage
  },
  computed: {
    remaining: function() {
      return this.messageList.length - this.endIndex;
    }
  },
  methods: {
    setCurrentList: function() {
      let end = this.startIndex + this.maxListSize;
      this.endIndex = end >= this.messageList.length ? this.messageList.length : end;
      this.currentList = this.messageList.slice(this.startIndex, this.endIndex);
    },
    increase: function() {
      this.startIndex = this.startIndex + this.maxListSize;
      this.setCurrentList();
    },
    decrease: function() {
      this.startIndex -= this.maxListSize;
      this.setCurrentList();
    }
  },
  mounted: function() {
    this.setCurrentList();
  }
};
</script>