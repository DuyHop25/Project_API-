<template>
  <div class="container">
    <b-card no-body class="overflow-hidden mb-3" v-for="(item, index) in postList" :key="index">
      <b-row no-gutters>
        <b-col md="2">
          <nuxt-link :to="'/' + item.slug">
            <b-card-img :src="item.image" alt="Image" class="thumbnail-first" id="img"></b-card-img>
          </nuxt-link>
        </b-col>
        <b-col md="10">'
          <b-card-body :title="item.title" @click="navigateToPost(item.slug)" id="title">
            <b-card-text id="content" style="color: black;">
              {{ item.content }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
  
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      postList: [],
      url_media: "https://cdn.codegym.vn/wp-content/uploads/"
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const axios = await import('axios');
        const response = await axios.get('http://localhost:8000/api/v1/news');
        this.postList = response.data.data;
      } catch (error) {
        console.error(error);
      }
    },
    navigateToPost(slug) {
      this.$router.push('/' + slug);
    },
  },
};
</script>
<style>
.cent {
  text-align: center;
  margin: 30px 0px;
}

h1 {
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#img {
  width: 150px;
  height: 150px;
}

#title{
  cursor: pointer;
  color: rgb(14, 99, 102);
  
}

#content{
  color: black;
}
#title:hover{
  cursor: pointer;
  color: rgb(185, 81, 81);
  animation: 0.3s;
}
</style>