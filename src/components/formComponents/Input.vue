<template>
  <div>
    <div class="phoneGroup" v-if="details.fieldType === 'phone'">
      <select @input="addUser({val:$event.target.value,name:'countryCode'})" name="" id="">
      <option
        v-for="(country,index) in countryList"
        :value="country.dial_code"
        :selected="country.code=='TR'"
        :key="index">
        {{country.name}}
      </option>
      </select>
    </div>
    <input
      :type="changeType"
      :name="details.fieldName"
      :required="details.isRequired"
      :class="details.fieldType=='date'?'dates':false"
      @input="addUser({val:$event.target.value,name:details.fieldName})">
    <i :class="icon(details.fieldType)" class="ico"></i>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import axios from 'axios'

const countryUrl = 'https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json'

export default {
  props: ['details'],
  data () {
    return {
      countryList: []
    }
  },
  created () {
    axios
      .get(countryUrl)
      .then((response) => (this.countryList = response.data))
  },
  computed: {
    changeType () {
      if (this.details.fieldType === 'phone') return 'number'
      else return this.details.fieldType
    }
  },
  methods: {
    ...mapMutations(['addUser']),
    icon (type) {
      if (type === 'text') return 'fas fa-id-card'
      else if (type === 'date') return 'far fa-calendar-alt'
      else if (type === 'email') return 'far fa-envelope'
      else if (type === 'phone') return 'fas fa-phone'
    }
  }
}
</script>
