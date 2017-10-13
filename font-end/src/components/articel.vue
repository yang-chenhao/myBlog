<template>
    <div class="articel">
        <h1>所有文章</h1>
        <articelList></articelList>
        <pagination></pagination>
        <tagsList></tagsList>
    </div>
</template>

<script>
import articelList from './articelList'
import pagination from './pagination'
import tagsList from './tagsList'

export default {
  components: {articelList, pagination, tagsList}
}
</script>

<style scoped>
</style>
