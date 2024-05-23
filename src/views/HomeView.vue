<template>
<div>
  <div class="header">
    <p class="system">
      University of Hawaii
    </p>
    <p class="institution">
      Class Availability
    </p>
  </div>
  <div class=bodydiv>
    <p><b>By institution<sup>*</sup>:</b></p>
    <ul class="institutions">
      <li v-for="(item,index) in insitutions" :key="index">
        <a :href="'#/semester?i='+item.abbr_name+'&id='+item.id">{{item.name}}</a>
      </li>
      <li class="SYS">
        <a href="https://www.uhonline.hawaii.edu/courses/">System-wide Distance Learning</a>
      </li>
    </ul>
    <p style="font-size: small"><sup>*</sup> The University of Hawaii System comprises ten institutions.</p>
  </div>
  <div class="footer">
    <hr SIZE="1" WIDTH="100%">
    <p class="copyright">&copy;2023 <a HREF="http://www.hawaii.edu/">University of Hawaii</a></p>
  </div>
</div>
</template>
<script>
import api from "../api";

export default {
  data() {
    return {
      insitutions: []
    }
  },
  mounted() {
    this.getInsitutions()
  },
  methods: {
    getInsitutions() {
      api.getInsitutions().then(response => {
        this.insitutions = response.data.data;
        //this.insitutions = response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    }
  }

}
</script>
