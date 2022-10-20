<template> 
  <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
  
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/first.jpg" alt="First slide">
        <div class="carousel-caption d-md-block">
          <div class="carousel-caption d-md-block">
            <button type="button" class="btn btn-success">Enroll with us</button>
  
          </div>

        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/kids3.avif" alt="Second slide">
        <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-success">Kids</button>

        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/shutterstock_200438552.jpg" alt="Third slide">
        <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-success">IT Lessons</button>

        </div>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/WhatsApp Image 2022-10-14 at 8.15.03 PM.jpeg" alt="Fourth slide">
        <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-success">High school students</button>

        </div>
      </div>
       <div class="carousel-item">
        <img class="d-block w-100" src="../assets/2022-black-teacher-teen-library3840x2160.jpg" alt="Fifth slide">
        <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-success">Writing assistance</button>

        </div>
      </div>
      
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

</template>
<style scoped>
.carousel{
  padding: 10px;
}
.d-block{
  border-radius: 10px;
}
.carousel-item{
   height: 720px;
   border-radius: 10px;
   display: flex;
  
}
@media only screen and (max-width: 720px) {
  .carousel-item{
    height: 300px;
    border-radius: 10px;
    display: flex;
   
 }
}
</style>

