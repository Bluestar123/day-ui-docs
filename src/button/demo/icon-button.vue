<template>
  <div>
    <d-button type="primary" icon="edit"></d-button>
    <d-button type="primary" icon="share"></d-button>
    <d-button type="primary" icon="delete"></d-button>
    <d-button type="primary" icon="search">搜索</d-button>
    <d-button type="primary"
      >上传<i class="d-icon-upload d-icon--right"></i
    ></d-button>
    <d-button type="primary" loading>加载中</d-button>
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
