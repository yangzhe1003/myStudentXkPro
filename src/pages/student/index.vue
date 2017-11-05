<template lang="html">
  <div class="Student">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Student',
  data:function () {
    return {
      msg:"hello!this is student Module!"
    }
  }
}
</script>

<style lang="css" scoped>
</style>
