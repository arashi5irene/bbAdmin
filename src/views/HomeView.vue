<script setup lang="ts">

</script>

<template>
  <div class="flex flex-wrap min-w-full w-fit">
    <div class="flex bg-[#EBEEF4] p-3 w-full">
      <div class="card topCard">
        <img src="/images/ic_dashboard_1.svg">
        <div class="m-6">
          <div class="text-base">本月測量測數</div>
          <div class="text-[32px]">122,053<span class="text-base ml-2">次</span></div>
        </div>
      </div>
      <div class="card topCard bGreen">
        <img src="/images/ic_dashboard_2.svg">
        <div class="m-6">
          <div class="text-base">本月各項次數排行榜</div>
          <div class="text-[32px]">122,053<span class="text-base ml-2">次/體溫</span></div>
        </div>
      </div>
      <div class="card topCard bOrange">
        <img src="/images/ic_dashboard_3.svg">
        <div class="m-6">
          <div class="text-base">本月健康異常數</div>
          <div class="text-[32px]">122,053<span class="text-base ml-2">筆</span></div>
        </div>
      </div>
      <div class="card topCard bRed">
        <img src="/images/ic_dashboard_4.svg">
        <div class="m-6">
          <div class="text-base">本月異常項目排行</div>
          <div class="text-[32px]">122,053<span class="text-base ml-2">次/血壓</span></div>
        </div>
      </div>
    </div>
    <div class="flex w-full p-3">
      <HomeChart/>
      <div class="flex w-1/4 flex-wrap min-w-[324px]">
        <div class="card w-full">e</div>
        <div class="card w-full">f</div>
      </div>
    </div>
  </div>
  
</template>
<script setup lang="ts">
import HomeChart from '@/components/HomeChart.vue'
</script>
<style lang="scss" scoped>
.topCard{
  @apply min-w-[300px] w-1/4 h-[120px] relative flex flex-nowrap items-center p-6 pr-0;
  &::after {
    position: absolute;
    left: 0;
    right:0;
    margin:auto;
    bottom: 0px;
    content: "";  /*即使不需要文字也要給"", 才會顯示出來*/
    width: 195px;
    height: 4px;
    background-color: var(--primary);
    border-radius: 4px 4px 0px 0px;
  }
  &.bGreen{
    &::after {
      background-color: var(--secondary);
    }
  }
  &.bOrange{
    &::after {
      background-color: var(--waring);
    }
  }
  &.bRed{
    &::after {
      background-color: var(--danger);
    }
  }
}
</style>
