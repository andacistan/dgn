<template>
  <div class="home">
    <companyCard  v-show="!getShowPopUp" v-for="(company,index) in companyList" :key="index" :company="company"></companyCard>
    <transition name="fade">
       <formPopUp v-if="getShowPopUp"></formPopUp>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import CompanyCard from '../components/CompanyCard'
import FormPopUp from '../components/FormPopUp'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {
    CompanyCard,
    FormPopUp
  },
  data () {
    return {
      companyList: []
    }
  },
  created () {
    axios
      .get('')
      .then(response => (this.companyList = response.data))
  },
  computed: {
    ...mapGetters(['getShowPopUp'])
  }
}
</script>
<style lang="scss">
.home{
  width: 375px;
  margin-left: auto;
  margin-right: auto;
}
  .fade-enter{
    opacity: 0;
  }
  .fade-enter-active{
    transition: opacity 1s ease-out;
  }
  .fade-leave-active{
    transition: opacity 1s ease-out;
    opacity: 0;
  }
</style>
