<template>
  <div class="category">
    <!-- {{ $route.params }} -->
    <!-- <div v-for="cat in category" :key="cat.id" :category="cat">
      {{ cat.id }}
    </div> -->
    <Search-C />
    <div class="category-inner-wrapper">
      <div class="category-inner">
        <div class="category-inner-breadcrumbs">
          <span class="all-cat" @click="$router.push({ name: 'Home' })"
            >All Categories</span
          >
          <span>
            <i class="fas fa-chevron-right" />
            {{ category.title }}</span
          >
        </div>
        <div class="category-detail">
          <Category-C :category="category" />

          <div class="articles">
            <Article-C
              v-for="article in articles.filter(
                (art) => art.status === 'published'
              )"
              :key="article.id"
              :article="article"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <pre>
      {{ category }}
    </pre> -->
  </div>
</template>

<script>
import { categoriesM, categoryM } from "../models/category";

// Components
import CategoryC from "../components/Category.vue";
import SearchC from "../components/Search.vue";
import ArticleC from "../components/Article.vue";

export default {
  name: "Category",
  components: {
    "Category-C": CategoryC,
    "Search-C": SearchC,
    "Article-C": ArticleC,
  },
  data() {
    return {
      category: {},
      articles: [],
    };
  },
  async created() {
    const categories = await categoriesM.getAll();
    this.category = await categories.data.find(
      (category) => category.id === this.$route.params.id
    );

    const articles = await categoryM.getId(this.$route.params.id);
    this.articles = articles.data || [];
  },
};
</script>

<style lang="scss">
@import "../scss/_variables.scss";
.category {
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;

  .category-inner-wrapper {
    width: 100%;
    margin-top: 74px;
    background-color: #fafafa;
    height: calc(100vh - 256px);

    .category-inner {
      margin: 0 auto;
      max-width: 980px;
      padding-top: 21px;
      // display: flex;
      // justify-content: space-between;

      .category-inner-breadcrumbs {
        display: inline;
        font-size: 13px;
        font-weight: 400;
        line-height: 22px;
        color: $text-gray;
        cursor: pointer;

        i {
          font-size: 10px;
          margin: 0 10px;
          color: $text-gray;
        }

        .all-cat {
          color: $green;
        }
      }

      .category-detail {
        display: flex;
        justify-content: space-between;
        margin-top: 21px;

        .articles {
          max-width: 640px;
          flex: 1;
          // border: 1px solid red;
        }
      }
    }
  }
}
</style>