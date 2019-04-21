<template>
  <div v-if="loading">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading...</div>
    </div>
  </div>
  <div v-else>
    <SourceList :sourceArray="sourcesList"/>
  </div>
</template>

<script>
import ApiUtils from "@/utils/apiUtils";
import SourceList from "@/components/SourceList.vue";

export default {
  name: "home",
  components: {
    SourceList
  },
  data: function() {
    return {
      loading: false,
      fullSourcesList: []
    };
  },
  computed: {
    sourcesList: function() {
      return this.fullSourcesList.map(s => {
        return { id: s.id, name: s.name, created_at: s.created_at };
      });
    }
  },
  created: function() {
    this.loading = true;
    ApiUtils.getAllSources()
      .then(resp => {
        this.loading = false;
        // eslint-disable-next-line
        console.log(resp);
        this.fullSourcesList = resp.data;
      })
      .catch(err => {
        this.loading = false;
        // eslint-disable-next-line
        console.warn("Is the API Server running?");
        // eslint-disable-next-line
        console.error(err.response);
      });
  }
};
</script>
