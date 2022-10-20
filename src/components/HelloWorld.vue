<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <nav class="navbar navbar-expand-lg navbar-light bg-success fixed-top" >
      <a class="navbar-brand"  href="#" style="color: white;">
        <img src="../assets/296157301_1486813791731632_4314539626657822759_n.jpg" width="30" height="30"  class="d-inline-block align-top" alt="">

       Camelot Academy
      </a>
      <button class="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse" style="color: white;" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" >
            <RouterLink class="nav-link" style="color: white;"  to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" style="color: white;"  to="/about">About</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style="color: white;" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Research</a>
              <a class="dropdown-item" href="#">Online Lessons</a>
              <a class="dropdown-item" href="#">Career Guidance</a>
              <a class="dropdown-item" href="#">Writing Assistance</a>      
              <a class="dropdown-item" href="#">Mentoring</a>
              <a class="dropdown-item" href="#">Academic Advising</a>
              <a class="dropdown-item" href="#">Mental Health</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.greetings{ 
  margin: 20px;
  padding: 20px;
  color: aliceblue;
}
.navbar{
  padding: 10px;
  border-radius: 10px;
  margin: 20px;
}

</style>
