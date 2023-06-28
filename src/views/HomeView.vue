<template>
<json-single-table-view :config="singleTableViewConfig"></json-single-table-view>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      singleTableViewConfig: {
        tableName: 'course',
        lang: 'en-US'
      }
    }
  }
}
</script>
