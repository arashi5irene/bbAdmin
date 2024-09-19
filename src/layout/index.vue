<template>
    <el-container class="h-screen">
        <el-aside width="240px">
            <Menu/>
        </el-aside>
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-main>
                <el-scrollbar>
                    <router-view/>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>
<script lang="ts" setup>
import Header from './Header.vue'
import Menu from './Menu/Menu.vue'
</script>
<style lang="scss" scoped>
.el-aside{
    box-shadow: 0px 3px 10px rgba(51, 77, 110, 0.1)
}
.el-header{
    height: 80px;
    box-shadow: 14px 0px 24px rgba(51, 77, 110, 0.1);
}
</style>
