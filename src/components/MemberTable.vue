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
            <el-table-column label="姓名/身份證號" sortable :sort-by="['name_member', 'no_national']" width="220">
            <template #default="scope">
                <div class="flex items-center">
                    <img v-if="scope.row.file_base64" :src="scope.row.file_base64" alt="Red dot" class="h-12 rounded-full mr-3"/>
                    <img v-else src="/images/avatar_user_48px.svg" class="h-12 rounded-full mr-3"/>
                    <div>
                        <div>{{ scope.row.name_member }}</div>
                        <div>{{ scope.row.no_national }}</div>
                    </div>
                </div>
            </template>
            </el-table-column>
            <el-table-column label="性別/年齡" sortable :sort-by="['sex_member', 'age_member']" width="120">
            <template #default="scope">
                <div class="flex items-center">
                    <SvgIcon :name="scope.row.sex_member == 'M'?'ic_gender_male':'ic_gender_female'" class="w-6 h-6 mr-2"/>
                    <div>{{ scope.row.age_member }}</div>
                </div>
            </template>
            </el-table-column>
            <el-table-column property="phone_member" label="手機" />
            <el-table-column label="最近量測日期" sortable sort-by="date">
                <template #default="scope">
                    <div>{{scope.row.measure_from== '1'?"手動新增":"設備同步"}}</div>
                    <div>{{scope.row.date_measure }}</div>
                </template>
            </el-table-column>

            <el-table-column label="健康/異常">
                <template #default="scope">
                    <el-tag :type="item.type" v-for="(item) in getMeasureStatus(scope.row.detail_measure)" style="margin:0 3px">{{ item.data}}</el-tag>
                </template>
            </el-table-column>
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
                :default-page-size="pageCnt"
                :current-page="curPage"
                :total="totalRec" 
                @current-change="handleCurrentChange"
                />
            </div>
        </div>
        <MemberEditDialog v-if="memberDialogVisible" :docType="memDetailType" :nowMember="nowMember"/>
        <MemberDelDialog v-if="memDelDialogVisible" :delMembers="memberSelection"/>
    </div>
    
</template>
<script setup lang="ts">
import {provide, ref, onMounted} from 'vue'
import MemberTableHeader from '../components/MemberTableHeader.vue'
import MemberEditDialog from '@/components/MemberEditDialog.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import { fetchApi } from '@/utils/common.ts'
import type { Member } from '@/types/member';

const showNewMember = ()=>{
    
}
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

const memberSelection = ref<Member[]>([])
const handleSelectionChange = (val: Member[]) => {
    memberSelection.value = val
  console.log('val', val)
}

const handleCurrentChange = (val:number)=>{
    curPage.value = val
}
const nowMember = ref<Member>({})

const editMember = (row:Member)=>{
 nowMember.value = row
 memDetailType.value = 'update'
 memberDialogVisible.value = true
}

const totalRec = ref(0)
const listLoading = ref(false)
const curPage = ref(1)
const setCurPage = (val:number)=>{
    curPage.value = val
}
provide('curPage', curPage)
provide('setCurPage', setCurPage)

const pageCnt = ref(10)
const setPageCnt = (val:number)=>{
    pageCnt.value = val
}
provide('pageCnt', pageCnt)
provide('setPageCnt', setPageCnt)

provide('listLoading', listLoading)
let apiData = {}
const setApiData = (searchData:object = apiData)=>{
    apiData = {
        ...searchData
    }
    queryMember()
}
provide('setApiData', setApiData)
const memberData = ref<Member[]>([])
const queryMember = async ()=>{
    const data = {
        id_platform:'11',
        id_agent:'22',
        id_hospital:'33',
        page:`${curPage.value},${pageCnt.value}`,
       ...apiData
    }

    const res = await fetchApi('ListMember', data)
    if(res.Result == 'T'){
        totalRec.value = Number(res.TotalRec)
      memberData.value = res.Data
    }
}
provide('queryMember', queryMember)
const getMeasureStatus = (detail_measure:any) =>{
    const measureType = {
        pressure:'血壓',
        sugar:'血糖',
        heartbeat:'心跳',
        oxygen:'血氧',
        temp:'體溫'
    }
    const measureData = detail_measure[0]||{}
    let measureStatus = []
    for (let i = 0; i<Object.keys(measureData).length;i++) {
        const key = Object.keys(measureData)[i]
        if (measureData[key] && measureData[key] == 'N'&&measureType[key]) {
            measureStatus.push({data:measureType[key], type:'danger'})
        }
        if( measureData['normal'] == 'Y' ){
            return [{type:'info',data:'正常'}]
        }
    }
    return measureStatus
}
onMounted(()=>{
    setApiData()
})
</script>
<style lang="scss" scoped></style>