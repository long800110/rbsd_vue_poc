<template>
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">
  <template slot="header">
    {{ $t("home.title") }}
  </template>
  <template slot="lead">
    {{ $t("home.discription") }}
  </template>
  <hr class="my-4">
  <b-btn variant="success" :to="{ path: 'portalling' }">{{ $t("home.click_me") }}</b-btn>
  <hr class="my-4">
    <span class="icon-home"></span>
    <hr class="my-4">
    <b-btn :disabled="englishButtonDisabled" variant="primary" size="sm" @click="changeLocale('en')">English</b-btn>
    <b-btn :disabled="chineseButtonDisabled" variant="danger" size="sm" @click="changeLocale('zh')">简体中文</b-btn>
</b-jumbotron>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    englishButtonDisabled: function () {
      return this.$i18n.locale === 'en'
    },
    chineseButtonDisabled: function () {
      return this.$i18n.locale === 'zh'
    }
  },
  methods: {
    changeLocale (language) {
      this.$i18n.locale = language
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
