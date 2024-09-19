<template>
    <el-menu-item index="1-1">
        <SvgIcon name="nav_homepage_default" class="menu-icon w-5 mr-6"/>
        首頁
    </el-menu-item>
    <el-menu-item index="1-3">
        <SvgIcon name="nav_user_default" class="menu-icon w-5 mr-6"/>
        會員照護
    </el-menu-item>
    <el-menu-item index="1-4">
        <SvgIcon name="nav_device_default" class="menu-icon w-5 mr-6"/>
        設備管理
    </el-menu-item>
    <el-menu-item index="1-5">
        <SvgIcon name="nav_report_default" class="menu-icon w-5 mr-6"/>
        數據統計
    </el-menu-item>
    <el-menu-item index="1-6">
        <SvgIcon name="nav_account_default" class="menu-icon w-5 mr-6"/>
        權限管理
    </el-menu-item>
</template>
<script setup lang="ts">
import SvgIcon from '@/components/SvgIcon.vue';
</script>
<style lang="scss" scoped>
.el-menu-item{
    margin:16px 8px;
    border-radius: 8px;
    font-size: 18px;
    transition-duration: 0.3s ;
    .menu-icon{
        fill:#C2CFE0;
    }
    &:hover{
        background-color: #F2F9FC;
    }
    &.is-active{
        background-color: var(--primary);
        color:#fff;
        .menu-icon{
            fill:#fff;
        }
    }
    
}
</style>