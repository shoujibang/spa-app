<template>
  <div class="echarts-line">
    <div class="illmsg_title">
      <div class="left_title">
        <p class="red_line"></p>
        <span>疫情趋势</span>
      </div>
    </div>
    <div ref="ct" class="ct"></div>
  </div>
</template>

<script>
export default {
  name:"EchartsLine",
  props: ["list"],
  data() {
    return {
      chart: null,
      historyList: []
    };
  },
  watch: {
    // list() {
    //   this.init();
    // }
  },
  methods: {
    init() {
      // const cp = this.list;
      // const createTime = cp.map(x =>
      //   x.createTime
      //     .slice(5)
      //     .split("-")
      //     .map(y => parseInt(y))
      //     .join(".")
      // );
      // const confirmedCount = cp.map(x => x.confirmedCount);
      // const deadCount = cp.map(x => x.deadCount);
      // const curedCount = cp.map(x => x.curedCount);
      this.draw();
    },
    draw() {
    
      this.chart && this.chart.dispose();
      const colors = ["#d14a61", "#000", "#58a88a"];
    
      this.chart = this.$echarts.init(this.$refs.ct);
      // 指定图表的配置项和数据
      const option = {
        // title: {
        // text: '堆叠区域图'
        // },
        animation: false,
        // color: colors,
        backgroundColor: "#fff",
        legend: {
          top: 12,
          right: 10,
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        grid: {
          top: 80,
          left: 20,
          right: 20,
          bottom: 10,
          containLabel: true
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        xAxis: {
          type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      this.chart.setOption(option);
    }
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.init.bind(this));
  },
  destroyed() {
    window.removeEventListener("resize", this.init.bind(this));
  }
};
</script>

<style lang="less" scoped>
.echarts-line {
  margin-top: 50px;
  height: 6rem;
  position: relative;
  .left_title{
    width: 100%;
    span{
      font-size: 30px;
      font-weight: bold;
      text-align: left;
    }
  }
  .ct {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
