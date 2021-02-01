<template>
  <div>
    <select
      :name="details.fieldName"
      required
      @input="addUser({val:$event.target.value,name:details.fieldName})">
      <option
        v-for="(item, index) in details.infoRequestFormOptions"
        :key="index"
        :disabled="item.optionValue==0"
        :selected="item.optionValue==0">{{item.optionText}}
      </option>
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
