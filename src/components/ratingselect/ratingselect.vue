<template>
  <div>
    <div class="ratingselect">
      <div class="rating-type">
        <span class="block positive" :class="{'active': selectType === 2}" @click="selectTypeChange(2, $event)">{{desc.all}}<span class="count">{{ratings.length}}</span></span>
        <span class="block positive" :class="{'active': selectType === 0}" @click="selectTypeChange(0, $event)">{{desc.positive}}<span class="count">{{positives.length}}</span></span>
        <span class="block negative" :class="{'active': selectType === 1}" @click="selectTypeChange(1, $event)">{{desc.negative}}<span class="count">{{negatives.length}}</span></span>
      </div>
      <div class="switch" :class="{'on': onlyContent}" @click="toggleOnlyContent">
        <span class="icon-check_circle"></span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  const SELECT_TYPE = {POSITIVE: 0, NEGATIVE: 1, ALL: 2};
  export default {
    props: {
      ratings: {
        type: Array,
        default () {
          return [];
        }
      },
      selectType: {type: Number, default: SELECT_TYPE.ALL},
      onlyContent: {type: Boolean, default: false},
      desc: {
        type: Object,
        default () {
          return {all: '全部', positive: '满意', negative: '不满意'};
        }
      }
    },
    computed: {
      positives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === SELECT_TYPE.POSITIVE;
        });
      },
      negatives () {
        return this.ratings.filter((rating) => {
          return rating.rateType === SELECT_TYPE.NEGATIVE;
        });
      }
    },
    methods: {
      selectTypeChange (type, event) {
        if (!event._constructed) return;
        // 这里不能直接修改props的值，因为是上级组件传递进来的，如果要修改，必须通知上级组件，让他自己来改，本组件没有这个权利
        // this.selectType = type;
        this.$emit('select-type-change', type);
      },
      toggleOnlyContent (event) {
        if (!event._constructed) return;
        // 这里不能直接修改props的值，因为是上级组件传递进来的，如果要修改，必须通知上级组件，让他自己来改，本组件没有这个权利
        // this.onlyContent = !this.onlyContent;
        this.$emit('only-content-toggle', !this.onlyContent);
      }
    }
  };
</script>

<style type="text/stylus" lang="stylus">
  @import "../../common/stylus/mixin.styl";
  .ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7, 17, 27, .1))
      font-size 0
      .block
        display inline-block
        padding 8px 12px
        margin-right 8px
        line-height 16px
        border-radius 1px
        font-size 12px
        color rgb(77, 85, 93)
        &.active
          color #fff
        &.positive
          background-color rgba(0, 160, 220, .2)
          &.active
            background-color rgb(0, 160, 220)
        &.negative
          background-color rgba(77, 85, 93, .2)
          &.active
            background-color rgb(77, 85, 93)
        .count
          font-size 8px
          margin-left 2px
    .switch
      padding 12px 18px
      line-height 24px
      border-bottom 1px solid rgba(7, 17, 27, .1)
      color rgb(147, 153, 159)
      font-size 0
      &.on
        .icon-check_circle
          color #00c850
      .icon-check_circle
        display inline-block
        vertical-align top
        margin-right 4px
        font-size 24px
      .text
        display inline-block
        vertical-align top
        font-size 12px
</style>
