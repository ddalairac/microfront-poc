<template>
  <div class="container">
    <h1>DEMO: Module federation</h1>
    <h2>host-App (red color)</h2>
    <div class="title">Framework: vue2 (red color scoped)</div>
    <AppMF class="card" host-app="Vue2 App (module federation)"/>
    <AppMF class="card" />
    <StoreHOST />
  </div>
</template>

<script>
import AppMF from 'remote/AppMF';
import StoreHOST from './components/StoreHOST';

export default {
  components: { AppMF, StoreHOST },
};
</script>
<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
}

.title {
  color: #b74763;
  font-size: 20px;
}
</style>
