<template>
  <div>
    <d-button type="text">文字按钮</d-button>
    <d-button type="text" disabled>禁用文字按钮</d-button>
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
