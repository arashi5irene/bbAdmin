<script setup lang="ts">
</script>
<template>
  <el-config-provider :locale="tw">
    <RouterView />
  </el-config-provider>
</template>
<script setup lang="ts">
import tw from 'element-plus/es/locale/lang/zh-tw'
</script>
<style lang="less">
</style>

