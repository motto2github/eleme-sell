<template>
  <div>
    <div class="ratingselect">
      <div class="rating-type">
        <span>{{desc.all}}</span>
        <span>{{desc.positive}}</span>
        <span>{{desc.negative}}</span>
      </div>
      <div class="switch">
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
    }
  };
</script>

<style type="text/stylus" lang="stylus">
</style>
