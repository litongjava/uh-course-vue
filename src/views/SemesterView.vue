<template>
<div>
  <div class="bodydiv">
    <p>
      <b>Active and upcoming terms at {{insitutionName}} :</b>
    </p>
    <ul class="terms">
      <li v-for="(item,index) in semesters" :key="index">
        <a :href="'#/classes?i='+i+'&s='+item.name">{{item.name}}</a>
      </li>
    </ul>
  </div>
  <div class="footer">
    <hr SIZE="1" WIDTH="100%">
    <p class="copyright">&copy;2023 <a HREF="http://www.hawaii.edu/">University of Hawaii</a></p>
    <!--    <p class="updated">Updated: 08/06/2023 03:30:58 PM HST</p>-->
  </div>
</div>
</template>

<script>
import api from "../api";

export default {
  name: "SemesterView",
  data() {
    return {
      i: "",
      insitutionName: "",
      semesters: []
    }
  },
  mounted() {
    this.i = this.$route.query.i;
    this.getInsitutionName(this.i);
    this.initData(this.$route.query.id);

  },
  methods: {
    initData(id) {
      api.getSemestersByInstitution(id).then(response => {
        this.semesters=response.data.data;
      }).catch(function (error) {
        console.error(error);
      });
    },
    getInsitutionName(i) {
      if (i === 'HAW') {
        this.insitutionName = 'Hawaii Community College';
        return;
      } else if (i === 'HON') {
        this.insitutionName = 'Honolulu Community College';
        return
      } else if (i == 'KAP') {
        this.insitutionName = "Kapi'olani Community College";
        return;
      } else if (i == 'KAU') {
        this.insitutionName = 'Kauai Community College';
        return;
      } else if (i == 'LEE') {
        this.insitutionName = 'Leeward Community College';
        return;
      } else if (i == 'MAU') {
        this.insitutionName = 'University of Hawaii Maui College';
        return;
      } else if (i == 'WOA') {
        this.insitutionName = 'University of Hawaii West Oahu';
        return;
      } else if (i == 'HIL') {
        this.insitutionName = 'University of Hawaii at Hilo';
        return;
      } else if (i == 'MAN') {
        this.insitutionName = 'University of Hawaii at Manoa';
        return;
      } else if (i == 'WIN') {
        this.insitutionName = 'Windward Community College';
        return;
      }
    }
  }
}
</script>

<style scoped>

</style>