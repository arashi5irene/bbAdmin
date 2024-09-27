<template>
    <el-dialog v-model="memberDialogVisible" width="742">
        <template #header>
            <div class="h-16 text-lg font-medium flex items-center ml-6">
                <p>
                    {{ props.docType=='insert'?'新增會員':'編輯會員' }}
                </p>
            </div>
        </template>
        <el-form
            :model="memberData"
            label-position="top"
            label-width="auto"
            require-asterisk-position="right"
            >
            <el-tabs v-model="activeTab" class="demo-tabs" @tab-click="clickTab">
                <el-tab-pane label="基本資料" name="first">
                    <el-form-item label="會員照片(請上傳JPG、PNG格式的圖片，建議尺寸200x200，圖檔大小不得超過5MB)">
                        <UploadPic />
                    </el-form-item>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="會員姓名" required>
                                <el-input v-model="memberData.name" placeholder="請輸入會員姓名" size="large" style="width: 328px;font-size:16px"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="性別" required>
                                <el-select
                                    v-model="memberData.name"
                                    placeholder="請選擇性別"
                                    size="large"
                                    style="width: 328px;font-size:16px"
                                >
                                    <el-option label="男" value="men" />
                                    <el-option label="女" value="felmen" />
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="身份證號" required>
                        <el-input v-model="memberData.name" placeholder="請輸入身分證號" size="large" style="width: 678px;font-size:16px"/>
                    </el-form-item>
                    <el-form-item label="生日" required>
                        <el-date-picker
                            v-model="memberData.date"
                            type="date"
                            placeholder="請選擇日期"
                            size="large"
                            style="width: 328px;font-size:16px"
                        />
                    </el-form-item>
                </el-tab-pane>
                <el-tab-pane label="聯絡方式" name="second">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="手機" required>
                                <el-input v-model="memberData.name" placeholder="請輸入手機" size="large" style="width: 328px;font-size:16px"/>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="電子郵件" required>
                                <el-input v-model="memberData.name" placeholder="請輸入電子郵件" size="large" style="width: 328px;font-size:16px"/>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="通訊地址">
                        <el-col :span="8">
                            <el-select
                                    v-model="memberData.name"
                                    placeholder="請選擇國家"
                                    size="large"
                                    style="width: 210px;font-size:16px"
                                >
                                    <el-option label="男" value="men" />
                                    <el-option label="女" value="felmen" />
                                </el-select>
                        </el-col>
                        <el-col :span="8">
                            <el-select
                                    v-model="memberData.name"
                                    placeholder="請選擇縣市"
                                    size="large"
                                    style="width: 210px;font-size:16px"
                                >
                                    <el-option label="男" value="men" />
                                    <el-option label="女" value="felmen" />
                                </el-select>
                        </el-col>
                        <el-col :span="8">
                            <el-select
                                    v-model="memberData.name"
                                    placeholder="請選擇鄉鎮市區"
                                    size="large"
                                    style="width: 210px;font-size:16px"
                                >
                                    <el-option label="男" value="men" />
                                    <el-option label="女" value="felmen" />
                                </el-select>
                        </el-col>
                        <el-col :span="24">
                            <el-input
                                v-model="memberData.name"
                                style="width: 678px;height: 96px;padding-top:24px"
                                 :autosize="{ minRows: 4, maxRows: 4 }"
                                type="textarea"
                                placeholder="輸入地址"
                            />
                        </el-col>
                    </el-form-item>
                </el-tab-pane>
            </el-tabs>
        </el-form>
        <template #footer>
            <div class="dialog-footer px-6 py-4 bg-[#F4F6F9] rounded-b-xl">
                <el-button @click="setMemberDialogShow(false)" style="width:132px">取消</el-button>
                <el-button v-if="activeTab== 'first'" color="#1292BE" @click="activeTab = 'second'" style="width:132px">
                下一步
                </el-button>
                <el-button v-else color="#1292BE" @click="setMemberDialogShow(false)" style="width:132px">
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
import type { TabsPaneContext} from 'element-plus'
import UploadPic from '@/components/UploadPic.vue'
const props = defineProps({
    docType: {
      type: String,
      default: 'insert' 
    },
    nowMember:{
        type:Object as () => Member,
        default:() => ({})
    }
  })

const memberDialogVisible = inject('memberDialogVisible') as Ref<boolean>

const setMemberDialogShow = inject('setMemberDialogShow') as (dialogVisible: boolean)=>void


const memberData = ref<Member>({})
const activeTab = ref('first')
const clickTab = (tab: TabsPaneContext)=>{
    console.log(tab)
}

</script>