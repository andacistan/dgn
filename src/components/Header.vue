<template>
  <div class="header">
   <span>Ücretsiz fiyat teklifi al</span>
    <router-link tag="span" class="formClose" to="/" @click.native="changeShowPopUp">
      <i class="fas fa-times"></i>
    </router-link>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['changeShowPopUp'])
  }
}
</script>
<style lang="scss">
  .header{
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 4px #1A1A1A33;
    padding: 15px;
    text-align: left;
    font: normal normal 600 15px/20px Montserrat;
    letter-spacing: -0.27px;
    color: #1A1A1A;
  }
  .formClose{
    float: right;
    color: #A5A5A5;
  }
</style>
