<template>
  <div class="ui segment">
    <div class="ui large labels">
      <div class="ui label">
        <i class="list alternate outline icon"></i>
        Enqueued: {{ messageStats.enqueued }}
      </div>
      <div class="ui red label">
        <i class="exclamation triangle icon"></i>
        Error: {{ messageStats.error }}
      </div>
      <div class="ui green label">
        <i class="check icon"></i>
        Finished: {{ messageStats.finished }}
      </div>
      <div class="ui blue label">
        <i class="hourglass half icon"></i>
        Processing: {{ messageStats.processing }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messageList: { type: Array, required: true }
  },
  computed: {
    messageStats: function() {
      return this.messageList.reduce((acc, curr) => {
        let count = acc[curr.status] || 0;
        acc[curr.status] = count + 1;
        return acc;
      }, {});
    }
  }
};
</script>