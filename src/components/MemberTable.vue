<template>
    <div class="pageTable">
       <MemberTableHeader/>
        <el-table
            ref="multipleTableRef"
            stripe 
            :data="memberData"
            style="width: 100%"
            cell-class-name="tableCol"
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55" />
            <el-table-column label="姓名/身份證號" sortable :sort-by="['date', 'name']" width="220">
            <template #default="scope">
                <div class="flex items-center">
                    <img src="/images/avatar_user_48px.svg" class="h-12 rounded-full mr-3"/>
                    <div>
                        <div>{{ scope.row.date }}</div>
                        <div>{{ scope.row.name }}</div>
                    </div>
                </div>
            </template>
            </el-table-column>
            <el-table-column label="性別/年齡" sortable :sort-by="['id', 'id']" width="120">
            <template #default="scope">
                <div class="flex items-center">
                    <SvgIcon name="ic_gender_female" class="w-6 h-6 mr-2"/>
                    <div>{{ scope.row.id }}</div>
                </div>
            </template>
            </el-table-column>
            <el-table-column property="address" label="手機" />
            <el-table-column label="最近量測日期" sortable sort-by="date">
                <template #default="scope">
                    <div>手動新增</div>
                    <div>{{ scope.row.date }}</div>
                </template>
            </el-table-column>

            <el-table-column label="健康/異常" />
            <el-table-column property="date" label="功能" >
                <template #default="scope">
                    <div>
                        <el-button circle color="#ebeef4" class="btnReBlue" @click="editMember(scope.row)">
                            <SvgIcon name="btn_edit_default" class="w-6 h-6"/>
                        </el-button>
                        <el-button circle color="#ebeef4" class="btnReDarkBlue">
                            <SvgIcon name="btn_enter_default" class="w-6 h-6"/>
                        </el-button>
                    </div>
                </template>
            </el-table-column>
            <template #empty>
                <div class="flex justify-center flex-wrap">
                    <img src="/images/img_user_nodata.svg" class="block w-[220px]">
                    <p class="w-full text-center">尚無會員資料</p>
                </div>
            </template>

        </el-table>

        <div v-if="memberData.length!=0" class="pageFooter h-[88px] flex items-center justify-between px-6">
            <div class="flex items-center">
                <el-button plain @click="setMemDelDialogShow(true)" :disabled="memberSelection.length == 0">
                    刪除會員
                </el-button>
                <p class="ml-6">已選中<span class="text-secondary">{{ memberSelection.length }}</span>人</p>
            </div>
            <div class="flex items-center">
                <el-pagination
                size="large" background
                layout="jumper, prev, pager, next, total"
                :default-page-size="defaultPageSize"
                :current-page="curPage"
                :total="1000" 
                @current-change="handleCurrentChange"
                />
            </div>
        </div>
        <MemberEditDialog v-if="memberDialogVisible" :docType="memDetailType" :nowMember="nowMember"/>
        <MemberDelDialog v-if="memDelDialogVisible" :delMembers="memberSelection"/>
    </div>
    
</template>
<script setup lang="ts">
import {provide, ref} from 'vue'
import MemberTableHeader from '../components/MemberTableHeader.vue'
import MemberEditDialog from '@/components/MemberEditDialog.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import type { Member } from '@/types/member';
const defaultPageSize = ref(8)
const memberDialogVisible  = ref(false)
provide('memberDialogVisible', memberDialogVisible)
const setMemberDialogShow = (val:boolean)=>{
    memDelDialogVisible.value = false
    memberDialogVisible.value = val
}
provide('setMemberDialogShow', setMemberDialogShow)
const memDelDialogVisible  = ref(false)
provide('memDelDialogVisible', memDelDialogVisible)
const setMemDelDialogShow = (val:boolean)=>{
    memberDialogVisible.value = false
    memDelDialogVisible.value = val
}
provide('setMemDelDialogShow', setMemDelDialogShow)
const memDetailType = ref('insert')
const setMemDetailType= (val:string='insert')=>{
    memDetailType.value = val
}
provide('setMemDetailType', setMemDetailType)

const curPage = ref(1)
const memberSelection = ref<Member[]>([])
const handleSelectionChange = (val: Member[]) => {
    memberSelection.value = val
  console.log('val', val)
}
const memberData: Member[] = [
  {
    id: 1,
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 4,
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 5,
    date: '2016-05-08',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 6,
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 7,
    date: '2016-05-07',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 8,
    date: '2016-05-06',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  }
]

const handleCurrentChange = (val:number)=>{
    curPage.value = val
}
const nowMember = ref<Member>({})
const editMember = (row:Member)=>{
 nowMember.value = row
 memDetailType.value = 'edit'
 memberDialogVisible.value = true
}
</script>
<style lang="scss" scoped></style>