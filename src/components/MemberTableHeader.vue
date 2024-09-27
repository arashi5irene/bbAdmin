<template>
        <div class="tableHeader">
            <div class="pageTab">
                <div class="tabItem active">會員列表</div>
                <div class="tabItem">健康異常</div>
            </div>
            <div class="tableHeaderAction">
                <div class="mr-3">
                    <el-input
                    v-model="queryValue"
                    style="max-width: 400px;font-size: 18px;height:48px"
                    placeholder="搜尋"
                    class="input-with-select"
                    size="large"
                    >
                    <template #prepend>
                        <el-select v-model="queryType" placeholder="Select" style="width: 115px;background-color: #fff;height: 48px;">
                        <el-option label="姓名" value="1" />
                        <el-option label="身份證" value="2" />
                        <el-option label="年齡" value="3" />
                        </el-select>
                    </template>
                    <template #append>
                        <el-button :icon="Search" />
                    </template>
                    </el-input>
                </div>
                <el-button type="primary" plain class="blueBtn" color="#1292BE">
                    匯出報表
                    <SvgIcon name="btn_export_report_default" class="btnIcon"/>
                </el-button>
                <el-button type="success" plain class="greenBtn" color="#8ebb28">
                    重新整理
                    <SvgIcon name="btn_refresh_default" class="btnIcon"/>
                </el-button>
                <el-button class="darkBlueBtn" color="#334D6E" @click="setMemberDialogShow(true)">
                    新增會員
                    <SvgIcon name="btn_add_black_default" class="btnIcon"/>
                </el-button>
            </div>
    </div>
</template>
<script setup lang="ts">
import {ref, inject} from 'vue'
import { Search } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon.vue';

const queryValue = ref('')
const queryType = ref('1')
const setMemberDialogShow = inject('setMemberDialogShow') as (dialogVisible: boolean)=>void
</script>
<style lang="scss" scoped>
.el-select {
  ::v-deep {
    .el-select {
      height: 48px;
    }

    .el-input__prefix, .el-input__suffix , .el-select__wrapper{
      height: 48px;
      font-size: 18px;
    }

    /* 下面设置右侧按钮居中 */
   .el-input__suffix {
      top: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      flex-direction: row;
      align-content: flex-start;
    }
    .el-input__icon {
      line-height: 50px;
    }
  }
}
</style>
