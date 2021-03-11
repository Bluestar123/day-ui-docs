<template>
  <div>
    <div class="mb">
      <d-button disabled>默认按钮</d-button>
      <d-button disabled type="primary">主要按钮</d-button>
      <d-button disabled type="success">成功按钮</d-button>
      <d-button disabled type="info">信息按钮</d-button>
      <d-button disabled type="warning">警告按钮</d-button>
      <d-button disabled type="danger">危险按钮</d-button>
    </div>
    <div class="mb">
      <d-button disabled plain>朴素按钮</d-button>
      <d-button disabled plain type="primary">主要按钮</d-button>
      <d-button disabled plain type="success">成功按钮</d-button>
      <d-button disabled plain type="info">信息按钮</d-button>
      <d-button disabled plain type="warning">警告按钮</d-button>
      <d-button disabled plain type="danger">危险按钮</d-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { DButton } from 'day-ui'

export default defineComponent({
  components: { DButton },
  setup() {
    return {}
  }
})
</script>
<style lang='scss' scoped>
.mb {
  margin-bottom: 15px;
}
</style>
