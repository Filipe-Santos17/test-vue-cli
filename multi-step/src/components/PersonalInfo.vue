<template>
  <div class="container">
    <section class="title-section">
      <h1 class="title">Personal info</h1>
      <h3 class="subtitle">Please provide your name, email address, and phone number.</h3>
    </section>

    <section class="form-section">
      <div class="input-section">
        <label for="info_name">Name</label>
        <input
          type="text"
          name="info_name"
          id="info_name"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div class="input-section">
        <label for="info_email">Email Address</label>
        <input
          type="email"
          name="info_email"
          id="info_email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div class="input-section">
        <label for="info_phone">Phone Number</label>
        <input
          type="tel"
          name="info_phone"
          id="info_phone"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </section>
    <button class="btn">Next Step</button>
  </div>
</template>

<script>
export default {
  name: "PersonalInfo",
};
</script>

<style scoped>
  .btn{
    align-self: end;
    margin-top: 3rem;
  }
</style>