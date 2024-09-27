<template>
    <el-dialog v-model="memDelDialogVisible" width="742">
        <template #header>
            <div class="h-16 text-lg font-medium flex items-center ml-6">
                <p class="text-danger">
                    刪除會員
                </p>
            </div>
        </template>
        <div class="dialogContainer">
            <div>
                請確認是否刪除<span class="text-danger" v-for="(item, i) in props.delMembers" :key="item.id">「{{item.name}}」 </span>的會員資料(含過往量測紀錄)？
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer px-6 py-4 bg-[#F4F6F9] rounded-b-xl">
                <el-button @click="setMemDelDialogShow(false)" style="width:132px">取消</el-button>

                <el-button color="#1292BE" @click="setMemDelDialogShow(false)" style="width:132px">
                確定
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref, inject, defineProps } from 'vue'
import type { Ref } from 'vue'
import type { Member } from '@/types/member';


const props = defineProps({
    delMembers:{
        type:Array,
        default:[]
    }
  })

const memDelDialogVisible = inject('memDelDialogVisible') as Ref<boolean>

const setMemDelDialogShow = inject('setMemDelDialogShow') as (dialogVisible: boolean)=>void



</script>