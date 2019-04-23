<template>
  <div v-if="loading">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading...</div>
    </div>
  </div>
  <div v-else>
    <SourceForm :source="source"/>
    <SourceMessageContainer :sid="sid"/>
  </div>
</template>

<script>
import ApiUtils from "@/utils/apiUtils";
import SourceForm from "./SourceForm.vue";
import SourceMessageContainer from "./SourceMessage/SourceMessageContainer.vue";
export default {
  data: function() {
    return {
      loading: false,
      source: {}
    };
  },
  props: {
    sid: { type: String, required: true }
  },
  components: {
    SourceForm,
    SourceMessageContainer
  },
  methods: {
    handleFormSubmit: function() {
      // eslint-disable-next-line
      console.log(this.source);
    }
  },
  mounted: function() {
    this.loading = true;
    ApiUtils.getSourceById(this.sid)
      .then(resp => {
        this.loading = false;
        //eslint-disable-next-line
        // console.log(resp);
        this.source = resp.data;
      })
      .catch(err => {
        this.loading = false;
        // eslint-disable-next-line
        console.error(err);
      });
  }
};
</script>