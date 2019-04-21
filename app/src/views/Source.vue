<template>
  <SourceDetailed :sid="sid"/>
</template>

<script>
import SourceDetailed from '@/components/SourceDetailed.vue';
export default {
  name: 'sourceView',
  components: {
    SourceDetailed
  },
  computed: {
    sid: function() {
      return this.$route.params.sid;
    }
  }
}
</script>