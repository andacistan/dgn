<template>
  <div>
    <select
      :name="details.fieldName"
      :required="details.isRequired"
      @input="addUser({val:$event.target.value,name:details.fieldName})">
      <option v-for="(item, index) in details.infoRequestFormOptions" :key="index">{{item.optionText}}</option>
    </select>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  props: ['details'],
  methods: {
    ...mapMutations(['addUser'])
  }
}
</script>
