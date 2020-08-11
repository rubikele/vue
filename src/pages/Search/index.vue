<template>
  <div>
    Search params: {{ $route.params.keyword }} query参数:{{
      $route.query.keyword
    }}
  </div>
</template>

<script>
export default {
  name: "Search",
  // props: ["keyword", "keyword2"],
  // props: ["keyword", "keyword2", "name"],
};
</script>

<style lang="less" scoped></style>
