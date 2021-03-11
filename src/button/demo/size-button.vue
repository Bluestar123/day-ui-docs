<template>
  <div>
    <d-button>默认按钮</d-button>
    <d-button size="medium">中等按钮</d-button>
    <d-button size="small">小型按钮</d-button>
    <d-button size="mini">超小按钮</d-button>
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
