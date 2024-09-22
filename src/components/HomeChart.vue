<template>
    <div class="flex w-1/4 flex-wrap min-w-[324px] h-[380px]">
        <div class="card w-full">
            <div class="cardTitle">
                <p>本月量測次數分佈</p>
            </div>
            <div class="p-6 w-full flex items-center" >
                <div class='relative w-3/4'>
                    <div class="w-full flex justify-center">
                        <div ref="chart" style="width: 100%; height: 270px" />
                    </div>
                    <div class="absolute top-0 bottom-0 left-0 right-0 m-auto h-24">
                        <div class="w-full text-base text-center" style="color:#65758D">體溫</div>
                        <div class="w-full text-5xl text-center">210</div>
                        <div class="w-full text-base text-center" style="color:#65758D">次</div>
                    </div>
                </div>
                <div class="list-nones w-1/4s">
                    <div v-for="(item, i) in chartData" :key="i" class="w-full pt-1">
                        <div class="w-4 h-4 inline-block" :style="getBgColorStyle(i)"></div>
                        {{ item.name }}
                    </div>
                </div>
            </div>

        </div>
        <div class="card w-full">b</div>
    </div>
    <div class="flex w-1/2 flex-wrap min-w-[648px]">
        <div class="card w-full">c</div>
        <div class="card w-full">d</div>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  TooltipComponentOption,
  LegendComponent,
  LegendComponentOption
} from 'echarts/components';
import { PieChart, PieSeriesOption } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout
]);


const chart = ref(null)
const chartData = ref([
        { value: 1048, name: '體溫' },
        { value: 735, name: '血壓' },
        { value: 580, name: '血氧' },
        { value: 484, name: '血糖' },
        { value: 484, name: '身高' },
        { value: 300, name: '體重' }
      ])
const chartColor=ref(['#1292BE','#8EBB28','#29B5BB','#A8DBEA','#C2CFE0','#607FA7'])
function render() {
  const myChart = echarts.init(chart.value)

  const option = {
    
    tooltip: {
        trigger: 'item'
    },
//   legend: {
//     top: 'center',
//     left: '80%',
//      orient :'vertical',
//      align:'left',
//      itemGap:24,
//      itemWidth:16,
//      itemHeight:16,
//      textStyle:{
//        overflow:'break',
//        width:80
//        }
//   },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['65%', '85%'],
      avoidLabelOverlap: true,
      padAngle: 5,
      width:'100%',
      label: {
        show: false
      },
      labelLine: {
        show: false
      },
      color:chartColor.value,
      data: chartData.value
    }
  ]
  }

  myChart.setOption(option)
}
const getBgColorStyle = (i:number)=>{
    console.log('aaaa', i, chartColor.value[i])
    return `background:${chartColor.value[i]}`||''
}
onMounted(() => {
  render()
})
</script>