<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
<script setup>
// 运行在服务端
if (process.server) {
  console.log("运行在server");
}
if (process.client) {
  console.log("运行在客户端");
}
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
</script>
