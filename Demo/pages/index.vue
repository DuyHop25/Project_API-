<template>
  <div class="#">
    <div v-if="userData.length > 0">
      <div v-for="user in userData" :key="user.Id">
        <h1>{{ user.Id }}</h1>
        <p>{{ user.UserName }}</p>
        <p>{{ user.DateOfBirth }}</p>
        <p>{{ user.Address }}</p>
      </div>
    </div>
    <div v-else>
      <p>Đang tải dữ liệu...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      userData: [],
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    async getPost() {
      try {
        const axios = await import('axios');
        const response = await axios.get('http://localhost:8000/api/v1/users');
        this.userData = response.data.data;
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
