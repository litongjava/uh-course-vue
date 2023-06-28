<template>
<div class="home">
  <json-single-table :config="config"></json-single-table>
</div>
</template>

<script>
import config from './HomeViewConfig'

export default {
  name: 'HomeView',
  data() {
    return {
      config
    }
  }
}
</script>
