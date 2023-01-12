<template>
  <section class="Image">
    <article class="menu">
      <div class="item active">
        <p class="item-number">1</p>
        <div>
          <p class="step">Step 1</p>
          <p class="step-title">Your info</p>
        </div>
      </div>
      <div class="item">
        <p class="item-number">2</p>
        <div>
          <p class="step">Step 2</p>
          <p class="step-title">Select plan</p>
        </div>
      </div>
      <div class="item">
        <p class="item-number">3</p>
        <div>
          <p class="step">Step 3</p>
          <p class="step-title">Add-ons</p>
        </div>
      </div>
      <div class="item">
        <p class="item-number">4</p>
        <div>
          <p class="step">Step 4</p>
          <p class="step-title">Summary</p>
        </div>
      </div>
    </article>
    <img src="../assets/bg-sidebar-desktop.svg" alt="sidebar desktop" />
  </section>
</template>

<script>
export default {
  name: "ArticleMenu",
};
</script>

<style scoped>
img{
  height: 520px;
}
</style>