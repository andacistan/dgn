<template>
  <div>
    <textarea :type="details.fieldType"
              :name="details.fieldName"
              :required="details.isRequired"
              cols="30"
              rows="10"
              @input="addUser({val:$event.target.value,name:details.fieldName})">
    </textarea>
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
