<template>
    <div class="h-20 flex">
        <img src="/images/logo_hcc_noward.svg" class="w-12 mx-5 object-contain"/>
        <div class="text-2xl leading-[4.5rem]">iMVS-HCC</div>
    </div>
    <el-scrollbar>
        <el-menu>
            <MenuItem />
        </el-menu>
    </el-scrollbar>
    <div class="h-20 flex justify-center">
        <img src="/images/logo_imedtac.svg" class="w-40 object-contain"/>
    </div>
</template>
<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
</script>
<style lang="scss" scoped>
.el-scrollbar{
    height: calc(100vh - 160px);
}
.el-menu{
    border-right: 0;
}
</style>