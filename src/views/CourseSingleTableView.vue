<template>
<json-single-table :config="config"></json-single-table>
</template>

<script>
import config from './CourseSingleTableViewConfig'

export default {
  data() {
    return {
      config
    }
  }
}
</script>