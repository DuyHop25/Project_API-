<template>
  <div class="TitleContainer">
    <div class="single-content">
      <h1 class="text-center" style="color: brown;">{{ combinedContent }}</h1>
      <span>Ngày đăng: {{ combinedDate }}</span>
      <hr>
      <div class="single-content" v-html="combinedText"></div>
    </div>
  </div>
</template>

<script>
const axios = require('axios')
export default {
  name: 'IndexPage',
  data() {
    return {
      postList: null,
      combinedContent: "",
      combinedDate: "",
      combinedText: "",
    };
  },
  mounted() {
    this.getPost(this.$route.params.slug);
  },
  methods: {
    async getPost(slug) {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/news/' + slug);
        const postData = response.data.data;

        // Kiểm tra nếu có ít nhất một phần tử trong mảng
        if (postData.length > 0) {
          const post = postData[0];
          this.combinedContent = post.title;
          this.combinedDate = post.date;
          this.combinedText = post.content_full;
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.TitleContainer{
  padding: 5rem 0px;
}
</style>