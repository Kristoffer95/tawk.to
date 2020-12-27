<template>
  <div class="article">
    <i class="fas fa-file file-icon" />
    <div class="article-detail">
      <span>{{ article.title }}</span>
      <span>Updated {{ article.updatedOn | moment(" MMM Do YYYY") }}</span>
    </div>
    <i class="fas fa-chevron-right next-icon" />
  </div>
</template>

<script>
export default {
  name: "Article",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
.article {
  width: 100%;
  height: 92px;
  border: 1px solid #eeeeee;
  background-color: white;
  border-radius: 4px;
  padding: 19px 40px 22px 40px;
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  cursor: pointer;

  .file-icon {
    margin-right: 24px;
    font-size: 20px;
  }
  .article-detail {
    display: flex;
    flex-direction: column;
    flex: 1;

    :first-child {
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
      color: $text-black;
    }

    :nth-child(2) {
      font-size: 11px;
      font-weight: 400;
      line-height: 22px;
      color: $text-gray;
    }
  }

  .next-icon {
    font-size: 20px;
  }
}
i {
  color: $green;
}
</style>