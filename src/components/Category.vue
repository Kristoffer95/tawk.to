<template>
  <div class="component-category">
    <div class="category-detail">
      <i class="fa" :class="`fa-${category.icon}`"></i>

      <span class="category-title">{{ category.title }}</span>

      <div class="category-footer">
        <span class="category-totalArticle" v-if="$route.name === 'Home'"
          >{{ category.totalArticle }} articles</span
        >
        <span class="category-updatedOn">
          Updated {{ category.updatedOn | moment("from", "now") }}</span
        >
      </div>
    </div>
    <div class="category-info" v-if="$route.name === 'Category'">
      <i class="fas fa-info-circle"></i>
      <span>
        Lorem ipsum dolor sit amet consec adipisicing elit. Sequi odio aliquam
        voluptas illum explicabo reiciendis
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
.component-category {
  border: 1px solid #eeeeee;
  background: #ffffff;
  max-width: 315px;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 21px;
  height: fit-content;

  .category-detail {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
    width: 100%;
    height: 220px;
    // margin-bottom: 21px;

    i {
      font-size: 50px;
      color: $green;
    }

    .category-title {
      color: $text-black;
      font-size: 20px;
      font-weight: 700px;
      line-height: 24px;
    }

    .category-footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 11px;
      font-weight: 400px;

      .category-totalArticle {
        line-height: 13.2px;
        color: $green;
        font-weight: bold;
      }
      .category-updatedOn {
        line-height: 15.6px;
        color: $text-gray;
      }
    }
  }
  .category-info {
    border-top: 1px solid #eeeeee;
    // width: 220px;
    width: 100%;
    height: 158px;
    // word-break: break-all;
    white-space: wrap;
    // height: 50px;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 14px;
    }

    span {
      font-size: 13px;
      line-height: 18px;
      color: $text-gray;
    }
  }
}

i {
  color: $green;
}
</style>