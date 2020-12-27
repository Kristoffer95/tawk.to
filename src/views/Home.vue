<template>
  <div class="home">
    <Search-C />
    <div class="category-section">
      <div class="category-wrapper">
        <Category-C
          v-for="category in categories.filter((cat) => cat.enabled)"
          :key="category.id"
          :category="category"
          @click.native="goToCategory(category.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { categoriesM } from "../models/category";

import SearchC from "../components/Search.vue";
import CategoryC from "../components/Category.vue";

export default {
  name: "Home",
  components: {
    "Search-C": SearchC,
    "Category-C": CategoryC,
  },
  data() {
    return {
      categories: [],
    };
  },
  async created() {
    const { data } = await categoriesM.getAll();
    this.categories = data || {};
  },
  methods: {
    goToCategory(categoryId) {
      this.$router.push({ name: "Category", params: { id: categoryId } });
    },
  },
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;

  .category-section {
    display: flex;
    justify-content: center;
    padding: 60px 0;
    margin-top: 74px;
    width: 100%;
    background-color: #fafafa;

    .category-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 100%;
      max-width: 982px;
    }
  }
}
</style>
