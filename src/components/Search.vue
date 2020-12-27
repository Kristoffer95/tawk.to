<template>
  <div class="search">
    <!-- <input type="text"> -->
    <div class="search-bar">
      <input type="text" placeholder="Search for answers" />
    </div>
    <div class="search-icon">
      <i class="fas fa-search"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  margin-top: 17px;
  width: 720px;
  height: 60px;

  .search-bar {
    border: 1px solid #eeeeee;
    border-right: 0px;
    border-radius: 4px;
    display: flex;
    flex: 1;
    padding: 22px 20px;

    input {
      height: 19px;
      outline: none;
      width: 100%;
      align-self: center;
      border: none;
      font-size: 16px;
      font-weight: 400;
      line-height: 19px;
      letter-spacing: 0px;
    }
  }
  .search-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #03a84e;
    border-radius: 0 4px 4px 0;
    width: 80px;
    height: 60px;
    cursor: pointer;

    i {
      font-size: 16px;
      color: white;
    }
  }
}
</style>