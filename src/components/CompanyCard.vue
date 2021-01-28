<template>
  <div class="card">
    <div class="cover">
      <img :src="company.imageUrl" alt="">
      <p class="district">{{company.district.name}}</p>
    </div>
    <div class="details">
     <p class="information">
       <span>{{company.listingDataBrief[1].label}} {{company.listingDataBrief[1].value}}</span>
       <span class="seperator">•</span>
       <span>Max. {{company.listingDataBrief[0].value}}</span>
     </p>
      <h4 class="companyName">{{company.name}}</h4>
      <div class="row">
        <div class="stars" v-for="(i, index) in 5" :key="index">
          <i class="fa fa-star nullStar"
             :class="{'filledStar':company.score>=i}">
          </i>
        </div>
        <span class="valuation">{{company.commentCount}}</span>
        <div v-if="company.category.leadType=='pricing'">
          <i class="fas fa-award fa-lg award"></i>
          <span>İnceleme</span>
        </div>
      </div>
      <div class="row">
        <button class="buttons view">İncele</button>
        <button class="buttons offer"  @click="changeCompanyDetails({id:company.id,name:company.name})">Ücretsiz teklif al</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: ['company'],
  methods: {
    ...mapMutations(['changeShowPopUp', 'changeCompanyDetails'])
  }
}
</script>
<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');

  .card {
    padding: 0;
    width: 375px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 0px 2px #00000066;
    margin-bottom: 15px;
    text-align: left;
    font: normal normal normal 13px/16px Montserrat;
    letter-spacing: -0.2px;
    color: #5F5F5F;
  }
    .cover {
      height: 250px;
      height: 250px;
      position: relative;

      img {
        height: 250px;
        width: 375px;
      }

      .district {
        margin-bottom: 0;
        position: absolute;
        color: #FFFFFF;
        margin-left: 15px;
        bottom: 7px;
      }
    }
    .details {
      padding: 10px 15px 15px 15px!important;
      .information{
        padding: 0;
        margin-top: 0;
        margin-bottom: 10px;
        .seperator {
          margin: 0px 10px;
        }
      }
      .companyName{
        padding: 0;
        margin: 0 0 12px 0;
        font: normal normal 600 20px/28px Montserrat;
        letter-spacing: 0px;
        color: #1A1A1A;
      }
      .row{
        display: flex;
        .nullStar {
          margin: 0 3px 15px 0;
          color: #e1e1e1;
        }

        .filledStar {
          color: #00abaa;
        }
        .valuation, .award {
          margin: 0px 5px;
          color: #5F5F5F;
        }
      }
      .buttons{
        width: 168px;
        height: 45px;
        border-radius: 4px;
        font: normal normal 600 15px/20px Montserrat;
        letter-spacing: -0.27px;
      }
      .view {
        color: #DB0962;
        margin-right: 9px;
        background: #FFFFFF;
        border: 1px solid #DB0962;
      }
      .offer {
        background: #DB0962;
        color: #FFFFFF;
        border: none;
      }
    }
</style>
