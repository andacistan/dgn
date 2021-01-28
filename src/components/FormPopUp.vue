<template>
  <div class="popUp">
    <Header></Header>
    <div v-if="isLoading" class="loading">
      <div class="lds-ellipsis">
        <div></div><div></div><div></div><div></div></div>
    </div>
    <div class="details" v-show="!isLoading">
      <form>
        <label v-for="(details, index) in companyDetails" :key="index">
          <span>{{details.fieldLabel}}</span>
          <div v-if="details.fieldType=='text'">
            <div class="phoneGroup" v-if="details.fieldDataType=='phone'">
              <div class="inputWrapper">
                <select v-model="user['phoneCode']" name="" id="">
                  <option
                    v-for="(country,index) in countryList"
                    :key="index"
                    :selected="country.code=='TR'"
                    :value="country.dial_code">
                    {{country.code}}
                  </option>
                </select>
              </div>
              <div class="inputWrapper">
                  <input v-model="user[details.fieldName]" type="tel">
                <i class="ico fas fa-phone"></i>
              </div>
            </div>
            <div v-else class="inputWrapper">
             <input v-model="user[details.fieldName]" :type = "details.fieldDataType=='email'?'email':'text'"
                    :class="details.fieldDataType=='weddate' || details.fieldDataType=='date'?'dates':''">
              <i :class="icon(details.fieldDataType)" class="ico"></i>
            </div>
          </div>
          <div class="inputWrapper" v-else-if="details.fieldType=='textarea'">
            <textarea v-model="user[details.fieldName]"
              name=""
              cols="30"
              rows="4">
            </textarea>
          </div>
          <div class="inputWrapper" v-else-if="details.fieldType=='select'">
            <select v-model="user[details.fieldName]" name="">
              <option
                v-for="(val,index) in details.infoRequestFormOptions"
                :key="index"
                :disabled="val.optionValue==0"
                :selected="val.optionValue==0"
                :value="val.optionText">
                {{val.optionText}}
              </option>
            </select>
          </div>
          <small
            v-if="
              user[details.fieldName]!=undefined &&
              user[details.fieldName]=='' &&
              details.isRequired" class="error">Bu alan zorunludur.<br>
          </small>
        </label>
        <div class="row kvkk">
          <input
            v-model="user['kvkk']"
            class="kvkkCheck"
            type="checkbox"
            required>
          <p>
            <span><a href="">Kullanıcı sözleşmesi</a></span> ve
            <span><a href="">pazarlama izni</a></span>metinlerini okudum ve kabul ediyorum.
          </p>
        </div>
        <router-link tag="button" @click.native="changeUser(user)" to="thanks" class="buttons offer">Ücretsiz teklif al</router-link>
      </form>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import Header from './Header'
import axios from 'axios'
import { Turkish } from 'flatpickr/dist/l10n/tr.js'
import flatpickr from 'flatpickr'
const countryUrl = 'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json'

export default {
  data () {
    return {
      companyDetails: [],
      user: {},
      countryList: [],
      isLoading: false
    }
  },
  created () {
    this.isLoading = true
    axios
      .get('/' + this.$store.state.companyId + '/forms')
      .then(response => (this.companyDetails = response.data))
      .catch((error) => {
        this.error = true
        console.log(error)
      }).finally(() => {
        this.isLoading = false
        this.calendar()
      })
    axios
      .get(countryUrl)
      .then((response) => (this.countryList = response.data))
  },
  components: {
    Header
  },
  methods: {
    ...mapMutations(['changeShowPopUp', 'changeUser']),
    icon (dataType) {
      if (dataType === 'name') {
        return 'fas fa-id-card'
      } else if (dataType === 'date' || dataType === 'weddate') {
        return 'far fa-calendar-alt'
      } else if (dataType === 'email') {
        return 'far fa-envelope'
      }
    },
    calendar () {
      flatpickr('.dates', {
        minDate: 'today',
        disableMobile: 'true',
        defaultDate: '',
        dateFormat: 'd-M-Y',
        locale: Turkish
      })
    }
  }
}
</script>
<style lang="scss">
  .popUp{
    position: fixed;
    width: 375px;
    height: 100%;
    z-index: 1;
    background: #FFFFFF;
    overflow: auto;
    text-align: left;
    font: normal normal normal 15px/20px Montserrat;
    letter-spacing: -0.27px;
    color: #1A1A1A;
  }
  .details{
    padding: 15px 15px 75px 15px;
  }
  label{
    span{
      display: block;
      margin-bottom: 5px;
    }
  }
  .phoneGroup{
    display: flex;
    select{
      margin-right: 9px;
      padding: 0 15px 0 15px !important;
    }
  }
  .inputWrapper{
    display: flex;
    position: relative;
    flex-grow: 1;
    align-items: center;
    justify-content: flex-end;
    input, select, textarea{
      height: 45px;
      width: 100%;
      margin-bottom: 10px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      border: 1px solid #A5A5A5;
      border-radius: 4px;
      padding: 0 45px 0 15px;
      text-align: left;
      font: normal normal normal 15px/20px Montserrat;
      letter-spacing: -0.27px;
      color: #A5A5A5;
    }
    .ico {
      position: absolute;
      font-size: 25px;
      color: #A5A5A5;
      float: right;
      margin: 15px;
    }
  }
  .error{
    color: red;
  }
  .kvkk {
    margin-bottom: 15px;

    .kvkkCheck {
      width: 50px;
      height: 22px;
      margin-right: 10px;
      margin-top: 15px;
    }
  }
  .buttons {
    width: 100% !important;
  }
  .loading{
    height: 100px;
    width: 100px;
    margin: auto;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rebeccapurple;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
</style>
