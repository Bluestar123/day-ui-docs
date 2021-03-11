<template>
  <div>
    <div class="mb">
      <d-button>默认按钮</d-button>
      <d-button type="primary">主要按钮</d-button>
      <d-button type="success">成功按钮</d-button>
      <d-button type="info">信息按钮</d-button>
      <d-button type="warning">警告按钮</d-button>
      <d-button type="danger">危险按钮</d-button>
    </div>
    <div class="mb">
      <d-button plain>朴素按钮</d-button>
      <d-button plain type="primary">主要按钮</d-button>
      <d-button plain type="success">成功按钮</d-button>
      <d-button plain type="info">信息按钮</d-button>
      <d-button plain type="warning">警告按钮</d-button>
      <d-button plain type="danger">危险按钮</d-button>
    </div>
    <div class="mb">
      <d-button round>圆角按钮</d-button>
      <d-button round type="primary">主要按钮</d-button>
      <d-button round type="success">成功按钮</d-button>
      <d-button round type="info">信息按钮</d-button>
      <d-button round type="warning">警告按钮</d-button>
      <d-button round type="danger">危险按钮</d-button>
    </div>
    <div class="mb">
      <d-button circle icon="search"></d-button>
      <d-button circle type="primary" icon="edit"></d-button>
      <d-button circle type="success" icon="remove"></d-button>
      <d-button circle type="info" icon="menu"></d-button>
      <d-button circle type="warning" icon="setting"></d-button>
      <d-button circle type="danger" icon="download"></d-button>
    </div>
  </div>
</template>

<script lang='ts'>
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
