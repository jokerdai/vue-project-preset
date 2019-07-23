<template>
  <Card dis-hover>
    <Search></Search>
    <Operation></Operation>
    <List></List>
    <Edit></Edit>
  </Card>
</template>
<script>
import List from './List'
import Search from './Search'
import Operation from './Operation'
import Edit from './Edit'

export default {
  components: {
    List,
    Search,
    Operation,
    Edit
  }
}
</script>
