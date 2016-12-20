<style scoped>
  .explore_graph_style {
    width: 271px;
    height: 400px;
    overflow-y: scroll;
    float: left;
  }

</style>

<template>
  <div>


    <!--样式-->
    <div class="explore_graph_style ">
      <dl>
        <dt>多项效果</dt>
        <dd>
          <ul>
            <li>
              <div @click="displaySwitch('tab')" class="qualitative_tit"
                   v-bind:class="[display=='tab' ?'qualitative_choose':'']">
                <span class="icon-option"><i></i><i></i><i></i></span>
              </div>
              <div class="qualitative_con">选项卡</div>
            </li>
            <li>
              <div @click="displaySwitch('merge')" class="qualitative_tit"
                   v-bind:class="[display=='merge' ?'qualitative_choose':'']">
                <span class="icon-linet icon-bg"></span>
              </div>
              <div class="qualitative_con r">多线条</div>
            </li>
          </ul>
        </dd>
      </dl>

      <dl>
        <dt>辅助元素</dt>
        <dd>
          <ul>
            <li class="aided">
              <input type="checkbox" v-model="legendShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示图列</label>
            </li>
            <li>

              <input type="checkbox" v-model="xGridShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示横网格</label>
            </li>
            <li>
              <input type="checkbox" v-model="xTagsShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示横标签</label>
            </li>
            <li>

              <input type="checkbox" v-model="yGridShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示纵网格</label>
            </li>
            <li>
              <input type="checkbox" v-model="yTagsShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示纵标签</label>
            </li>
          </ul>
        </dd>
      </dl>

      <dl>
        <dt>值</dt>
        <dd>
          <ul>
            <li>
              <input type="checkbox" v-model="valueShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示“值” </label>
            </li>
            <li>

              <input type="checkbox" v-model="avLineShow" value="true" name="checkbox"
                     class="regular-check">
              <label>显示平均线</label>
            </li>
            <li>
              <input type="checkbox" v-model="maxValueShow" value="true" name="checkbox"
                     class="regular-check">
              <label>突出显示最大</label>
            </li>
            <li>

              <!--<input type="checkbox" v-model="minValueShow" value="true" name="checkbox"-->
              <!--class="regular-check">-->
              <!--<label>突出显示最小</label>-->
            </li>
          </ul>
        </dd>
      </dl>
    </div>

  </div>
</template>

<script>

  export default{
    props: {
      'item': {
        type: Object,
        default: function () {
          return {}
        }
      }
    }
    ,
    data()
    {
      return {
        display: this.item.display, //是否拆成选项卡  tab 是否拆成选项卡  merge 是否合并到一张统计图中
        smooth: this.item.smooth,//     是否平滑曲线显示。
        lineWidth: this.item.lineWidth, //线的粗细
        circleType: this.item.circleType, // circle 实心圆  circleBig 实心大圆 emptyCircle 空心圆 none 隐藏标记
        //   symbol: "",// 中空标记'emptyCircle','circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
        circleSize: this.item.circleSize, //圆的大小
        emptyCircleSize: this.item.emptyCircleSize,//中空标记大小

        legendShow: this.item.legendShow,//显示图例
        xTagsShow: this.item.xTagsShow,//显示横轴标签
        yTagsShow: this.item.yTagsShow,// 显示纵轴标签
        xGridShow: this.item.xGridShow,// 显示横轴网格
        yGridShow: this.item.yGridShow,//显示纵轴网格
        valueShow: this.item.valueShow,//显示值
        avLineShow: this.item.avLineShow,// 显示平均线
        maxValueShow: this.item.maxValueShow,//最大值价值显示
        minValueShow: this.item.minValueShow,//最小值显示 暂时删除
      }
    }
    ,
    methods: {
      displaySwitch: function (val) {
        this.display = val;
      }
      ,
      setStatus: function (obj) {
        for (var o in this.$data) {
          this.$data[o] = obj[o] || false;
        }
      }

    }
    ,
    mounted: function () {
//      if (!this.item)return;
//      // this.setStatus(this.item);
//
//      this.setStatus(JSON.parse(JSON.stringify(this.item)));
    }
  }

</script>
