<template>
  <div class="thanks">
    <Header></Header>
    <div class="row success">
      <i class="tik far fa-check-circle"></i>
      <div>
        <p class="p1">Fiyat teklifin başarıyla iletildi!</p>
        <p class="p2">
         {{getCompanyName}} sana en kısa sürede dönüş yapacak.
        </p>
        <div v-for=" (data,index) in getUser" :key="index">
          <div  v-for=" (i,index) in data" :key="index">
            <br>
          <p class="p2">{{i}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/Header'
export default {
  computed: {
    ...mapGetters(['getUser', 'getCompanyName'])
  },
  components: {
    Header
  }
}
</script>
<style lang="scss">
  .thanks{
    width: 375px;
    margin: auto;
    font: normal normal normal 13px/16px Montserrat;
  }
  .row{
    display: flex;
  }
  .success {
    margin: 20px 15px;
  }

  .tik {
    margin-right: 5px;
    padding-bottom: 10px;
    color: #00ABAA;
    font-size: 18px;
  }

  .p1 {
    font: normal normal 600 15px/20px Montserrat;
    letter-spacing: -0.27px;
    color: #00ABAA;
    padding: 0;
    margin: 0;
  }

  .p2 {
    font: normal normal normal 13px/16px Montserrat;
    letter-spacing: -0.2px;
    color: #5F5F5F;
    margin: 0;
  }
</style>
