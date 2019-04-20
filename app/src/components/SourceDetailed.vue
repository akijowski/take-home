<template>
    <div>{{sid}}</div>
</template>

<script>
import ApiUtils from '@/utils/apiUtils';
export default {
    data: function() {
        return {
            source: {}
        }
    },
    props: {
        sid: {type: String, required: true}
    },
    mounted: function() {
        ApiUtils.getSourceById(this.sid)
        .then(resp => {
            //eslint-disable-next-line
            console.log(resp);
            this.source = resp.data;
        })
        .catch(err => {
            // eslint-disable-next-line
            console.error(err);
        });
    }
}
</script>