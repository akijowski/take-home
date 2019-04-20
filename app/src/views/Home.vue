<template>
  <SourceList :sourceArray="sourcesList"/>
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
      fullSourcesList: []
    };
  },
  computed: {
    sourcesList: function() {
      return this.fullSourcesList.map(s => {
        return { id: s.id, name: s.name };
      });
    }
  },
  created: function() {
    ApiUtils.getAllSources()
      .then(resp => {
        // eslint-disable-next-line
        console.log(resp);
        this.fullSourcesList = resp.data;
      })
      .catch(err => {
        // eslint-disable-next-line
        console.warn("Is the API Server running?");
        // eslint-disable-next-line
        console.error(err.response);
      });
  }
};
</script>
