  <template>
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color: #e3f2fd;">
      <a class="navbar-brand" href="#"><img src="https://w7.pngwing.com/pngs/854/555/png-transparent-vue-js-hd-logo-thumbnail.png" alt="" style="width: 100%; height: 20px;"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">Blog</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Landing Page
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div>
      <img src="../assets/css/image/main.jpg" alt="alt" style="width: 100%; margin-bottom: 5rem;">
    </div>
  </div>
    
  </template>


<style>
/* Tùy chỉnh màu nền và font chữ của header */
/* Tùy chỉnh màu nền và font chữ của header */
.b-navbar {
  background-color: #007bff;
  font-family: 'Arial', sans-serif;
  height: 100px; /* Tùy chỉnh chiều cao */
  padding: 20px 0; /* Tùy chỉnh padding */
}

/* Tùy chỉnh màu chữ của các liên kết trong header */
.b-navbar-nav a {
  color: white !important;
  font-size: 18px; /* Tùy chỉnh kích thước font cho liên kết */
  text-decoration: none; /* Loại bỏ gạch chân cho liên kết */
}

/* Điều chỉnh khoảng cách giữa các liên kết trong header */
.b-navbar-nav {
  display: flex;
  align-items: center; /* Căn giữa theo chiều dọc */
}

/* Tùy chỉnh kích thước hình ảnh nền */
.img__drop img {
  width: 100%;
  height: 300px; /* Tùy chỉnh chiều cao của hình ảnh nền */
}

.navbar-nav .nav-item + .nav-item {
  margin-left: 20px; /* Thêm khoảng cách 20px giữa các liên kết */
}

/* Điều chỉnh màu nền và font chữ của container chứa header */
.b-container {
  background-color: #f8f9fa;
  font-family: 'Arial', sans-serif;
}

</style>
