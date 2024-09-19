<template>
    <div class="flex justify-end items-center">
        <SvgIcon name="nav_homepage_default" fill="#1292BE" class="h-4 w-4 mx-[18px]"/>
        <el-breadcrumb :separator-icon="ArrowRight" class="flex-auto">
            <el-breadcrumb-item :to="{ path: '/' }" class="bread-item"><span class="bread-text">首頁</span></el-breadcrumb-item>
            <el-breadcrumb-item class="bread-item"><span class="bread-text">promotion management</span></el-breadcrumb-item>
            <el-breadcrumb-item class="bread-item"><span class="bread-text">promotion list</span></el-breadcrumb-item>
        </el-breadcrumb>
        <div class="headerDiv w-16 h-12 mr-2">
            <SvgIcon name="nav_notification_default" fill="#1292BE" class="h-12 w-12"/>
        </div>
        <el-dropdown trigger="click" placement="bottom" popper-class="headerDrop">
            <div class="flex flex-nowrap items-center bor" >
                <img src="/images/avatar_user_48px.svg" class="h-12 rounded-full m-4"/>
                <div class="w-[100px] h-12 flex flex-wrap items-center">
                    <div class="w-full">IM0003</div>
                    <div>于卉澄</div>
                </div>
                <SvgIcon name="btn_dropdown_black_default" fill="#334D6E" class="h-4 w-4 m-1"/>
            </div>

            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <div class="h-12 flex justify-between items-center w-full text-[18px]">
                            <div>變更密碼</div>
                            <SvgIcon name="btn_passward_default" fill="#334D6E" class="icon h-6 w-6 m-1"/>
                        </div>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <div class="h-12 flex justify-between items-center w-full text-[18px]">
                            <div>登出</div>
                            <SvgIcon name="btn_logout_default" fill="#334D6E" class="icon h-6 w-6 m-1"/>
                        </div>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>
<script setup lang="ts">
import { ArrowRight } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon.vue';
</script>
<style lang="scss" scoped>
.el-breadcrumb{
    font-size: 16px;
    .bread-text{
        margin: 0 4px;

    }
    .bread-item:last-child {
        .bread-text{
            color:var(--primary)
        }
    }
}
.el-dropdown-menu{
    width: 186px;
    border-radius: 24px;
}
.headerDiv{
    border-right: 1.5px solid #DBE2EB;
}
</style>