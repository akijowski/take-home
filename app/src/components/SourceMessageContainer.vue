<template>
  <div v-if="loading"></div>
  <div v-else>
    <SourceMessageInfo :messageList="messageList"/>
    <SourceMessageList :messageList="messageList"/>
  </div>
</template>

<script>
import ApiUtils from "@/utils/apiUtils";
import SourceMessageList from "./SourceMessageList.vue";
import SourceMessageInfo from './SourceMessageInfo.vue';
export default {
  props: {
    sid: { type: String, required: true }
  },
  data: function() {
    return {
      loading: false,
      messageList: []
    };
  },
  components: {
    SourceMessageList,
    SourceMessageInfo
  },
  mounted: function() {
    this.loading = true;
    ApiUtils.getMessagesBySourceId(this.sid)
      .then(resp => {
        this.loading = false;
        // eslint-disable-next-line
        console.log(resp);
        this.messageList = resp.data;
      })
      .catch(err => {
        this.loading = false;
        // eslint-disable-next-line
        console.error(err);
      });
  }
};
</script>