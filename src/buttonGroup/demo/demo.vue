<template>
  <div>
    <d-button-group>
      <d-button type="primary" icon="arrow-left">上一页</d-button>
      <d-button type="primary"
        >下一页<i class="arrow-right d-icon--right"></i
      ></d-button>
    </d-button-group>
    <d-button-group>
      <d-button type="primary" icon="edit"></d-button>
      <d-button type="primary" icon="share"></d-button>
      <d-button type="primary" icon="delete"></d-button>
    </d-button-group>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DButton, DButtonGroup } from 'day-ui'
export default defineComponent({
  components: {
    DButton,
    DButtonGroup
  }
})
</script>

<style lang="scss" scoped>
.d-button-group + .d-button-group {
  margin-left: 15px;
}
</style>