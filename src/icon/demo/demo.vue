<template>
  <div>
    <i class="d-icon-edit"></i>
    <i class="d-icon-share"></i>
    <i class="d-icon-delete"></i>
    <d-icon name="setting"></d-icon>
  </div>
</template>

<script lang="ts">
import { DIcon } from 'day-ui'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    DIcon
  }
})
</script>
<style lang="scss" scoped>
i + i {
  margin-left: 10px;
}
</style>
