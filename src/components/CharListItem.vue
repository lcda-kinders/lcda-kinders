<template>
  <li>
    <a
      v-on:click="$emit('activate')"
      href="#">{{title}}</a>
  </li>
</template>

<script>
export default {
  name: 'char-list-item',
  props: ['title']
}
</script>

<style scoped>

li {
  width: 100%;
}

</style>
