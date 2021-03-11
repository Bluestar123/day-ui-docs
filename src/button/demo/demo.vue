<template>
  <div>
    <p>
      <span style="padding: 0 16px 0 4px; font-size: 14px; color: #777"
        >点击次数:</span
      >
      <span>{{ count }}</span>
    </p>
    <d-button @click="onClick">按钮</d-button>
  </div>
</template>

<script lang="ts">
import { DButton } from 'day-ui'
import { ref } from 'vue'

export default {
  components: {
    DButton
  },
  setup() {
    const count = ref(0)
    function onClick() {
      count.value++
    }

    return {
      count,
      onClick
    }
  }
}
</script>
