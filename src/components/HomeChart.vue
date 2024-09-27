<template>
    <div class="flex w-1/4 flex-wrap min-w-[324px] h-[380px]">
        <div class="card w-full">
            <div class="cardTitle">
                <p>本月量測次數分佈</p>
            </div>
            <div class="p-6 w-full h-[300px] flex items-center" >
                <div class='relative w-3/4'>
                    <div class="w-full flex items-center">
                        <div ref="pieChart1" style="width: 100%; height: 270px" />
                    </div>
                    <div class="absolute top-0 bottom-0 left-0 right-0 m-auto h-24">
                        <div class="w-full text-base text-center" style="color:#65758D">體溫</div>
                        <div class="w-full text-5xl text-center">210</div>
                        <div class="w-full text-base text-center" style="color:#65758D">次</div>
                    </div>
                </div>
                <div class="list-nones w-1/4 h-4/5 flex flex-col justify-between">
                    <div v-for="(item, i) in pieChart1tData" :key="i" class="w-full pt-1 flex items-center">
                        <div class="w-4 h-4 inline-block mr-1" :style="getBgColorStyle(i)"></div>
                        <p class="leading-4 inline-block">{{ item.name }}</p>
                    </div>
                </div>
            </div>

        </div>
        <div class="card w-full">b</div>
    </div>
    <div class="flex w-1/2 flex-wrap min-w-[648px]">
        <div class="card w-full">
            <div class="cardTitle flex justify-between">
                <p>本月量測次數趨勢</p>
                <div>
                    <div v-for="(item, i) in pieChart1tData" :key="i" class="inline-block pt-1 mr-6">
                        <div class="w-4 h-4 inline-block rounded-full border-solid mr-1" :style="getBorderColorStyle(i)"></div>
                        {{ item.name }}
                    </div>
                </div>
            </div>
            <div class="p-6 w-full flex items-center h-[300px]" >
                <div ref="lineChart1" style="width: 100%; height: 270px" />
            </div>
        </div>
        <div class="card w-full">d</div>
    </div>
</template>
<script setup lang="ts">
import {ref, onMounted} from 'vue'
import * as echarts from 'echarts/core';
import {
  TooltipComponent,
  ToolboxComponent,
  GridComponent
} from 'echarts/components';
import { PieChart,LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
TooltipComponent,
  GridComponent,
  PieChart,
  LineChart,
  CanvasRenderer,
  UniversalTransition
]);

const chartColor=ref(['#1292BE','#8EBB28','#29B5BB','#A8DBEA','#C2CFE0','#607FA7'])
const lineChart1 = ref(null)
const lineChart1Data = ref( [
    {
      name: '體溫',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230, 210, 90, 230, 210]
    },
    {
      name: '血壓',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330, 310, 290, 330, 310]
    },
    {
      name: '血氧',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330, 410, 190, 330, 410]
    },
    {
      name: '血糖',
      type: 'line',
      data: [320, 332, 301, 334, 390, 330, 320, 390, 330, 320]
    },
    {
      name: '身高',
      type: 'line',
      data: [220, 532, 901, 434, 290, 330, 320, 901, 434, 290]
    }
    ,
    {
      name: '體重',
      type: 'line',
      data: [532, 901, 434, 290, 330, 320, 220, 901, 434, 290]
    }
  ])
  function renderLineChart1() {
    const myChart = echarts.init(lineChart1.value)
    const option = {
  tooltip: {
    trigger: 'axis'
  },
  grid: {
    // show:true,
    top:10,
    left: 15,
    right: 15,
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['8/01', '8/04', '8/07', '8/10', '8/13', '8/16', '8/19', '8/22', '8/25', '8/25'],
    splitLine:{
        show:true,
        interval :0,
        lineStyle:{
            type:'dashed'
        }
    },
  },
  yAxis: {
    type: 'value',
    splitLine:{
        show:true,
        lineStyle:{
            type:'dashed'
        }
    },
  },
  color:chartColor.value,
  series: lineChart1Data.value
    }
    myChart.setOption(option)
  }
const pieChart1 = ref(null)
const pieChart1tData = ref([
        { value: 1048, name: '體溫' },
        { value: 735, name: '血壓' },
        { value: 580, name: '血氧' },
        { value: 484, name: '血糖' },
        { value: 484, name: '身高' },
        { value: 300, name: '體重' }
      ])
function renderPieChart1() {
  const myChart = echarts.init(pieChart1.value)

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
      data:pieChart1tData.value
    }
  ]
  }

  myChart.setOption(option)
}
const getBorderColorStyle = (i:number)=>{
    return `border-color:${chartColor.value[i]}`||''
}
const getBgColorStyle = (i:number)=>{
    return `background:${chartColor.value[i]}`||''
}
onMounted(() => {
    renderPieChart1()
    renderLineChart1()
})
</script>