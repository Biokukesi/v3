<template>

     <div class="header">
     <h1 >SERVICES</h1>
     <p>----------Swipe for more-------------</p>
    </div>
     <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :slidesPerGroup="1"
    :loop="true"
    :loopFillGroupWithBlank="true"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >

  <swiper-slide>
    <div class="card swiper-slide">
      <div class="image-content">
         <span class="overlay"></span>
              <div class="card-image">
                 <img class="card-img" src="../assets/WhatsApp Image 2022-10-14 at 8.15.03 PM (1).jpeg" alt="">
              </div>
      </div>
       <div class="card-content">
          <h2 class="name">Day care</h2>
          <p class="description">Child care, otherwise known as day care, is the care and supervision of a child or multiple children at a time, whose ages range from two weeks of age to 18 years. Child care is a broad topic that covers a wide spectrum of professionals, institutions, contexts, activities, and social and cultural conventions. Early child care is an equally important and often overlooked component of child's developments.</p>
         
       </div>
    </div>
  </swiper-slide>
    <swiper-slide>
        
             <div class="card swiper-slide">
               <div class="image-content">
                  <span class="overlay"></span>
                       <div class="card-image">
                          <img class="card-img" src="../assets/Black-Students-FCAN-tile.png" alt="">
                       </div>
               </div>
                <div class="card-content">
                   <h2 class="name">Mental health</h2>
                   <p class="description">Mental health service providers with expertise in this area are important to provide assistance to parents for coping with the stresses arising from having a child with a DSD and the complex decisions in which they need to participate on the child’s behalf as well as for psychological assessments of the child that are often desirable at later stages of development.</p>
                   
                </div>
             </div>
         
    </swiper-slide>
    
    <swiper-slide>
      <div class="card swiper-slide">
        <div class="image-content">
           <span class="overlay"></span>
                <div class="card-image">
                   <img class="card-img" src="../assets/services/photo-1455390582262-044cdead277a.avif" alt="">
                </div>
        </div>
         <div class="card-content">
            <h2 class="name">Research</h2>
            <p class="description">Your next breakthrough needs a market research panel designed for faster, more consistent, and higher quality insights. With our proprietary online sample, you can get insights from any audience around the world and accurately track trends and shifts in your market over time</p>
           
         </div>
      </div>
      
    </swiper-slide
    ><swiper-slide>
      <div class="card swiper-slide">
        <div class="image-content">
           <span class="overlay"></span>
                <div class="card-image">
                   <img class="card-img" src="../assets/services/photo-1494883759339-0b042055a4ee.avif" alt="">
                </div>
        </div>
         <div class="card-content">
            <h2 class="name">Carrer Guidance</h2>
            <p class="description">It is basic that anybody found engaged in a long lasting job called career would have explanation to give on how he came about joining such a job. Some people display happiness and contentment while others regret to find themselves in the particular career either because their goal in the career cannot be accomplished or for the fact that the demands they have to meet are incongruent with their expectations and resources. Most people who are in teaching career often show regret and disappointment simply for economic reasons whereas members in the law, medical and engineering profession seems to be happier. It is however a common knowledge to find lawyers changing to the teaching or pasturing careers simply because they feel they are not comfortable with the conditions or demands of their career in law. All these point to the fact that there is a need to plan, collect and be accessible to relevant information that are needed before a decision is taken on which career to pursue in life.</p>
           
         </div>
      </div>
    </swiper-slide><swiper-slide>
      <div class="card swiper-slide">
        <div class="image-content">
           <span class="overlay"></span>
                <div class="card-image">
                   <img class="card-img" src="../assets/services/photo-1600195077077-7c815f540a3d.avif" alt="">
                </div>
        </div>
         <div class="card-content">
            <h2 class="name">Writing assistance</h2>
            <p class="description">There are various skills you need in order to be able to write good academic English texts. Whether you are writing a simplr essay, a report, or a research paper you will find the support and resources you need here</p>
           
         </div>
      </div>
      </swiper-slide
    ><swiper-slide>
      <div class="card swiper-slide">
        <div class="image-content">
           <span class="overlay"></span>
                <div class="card-image">
                   <img class="card-img" src="../assets/services/photo-1587440871875-191322ee64b0.avif" alt="">
                </div>
        </div>
         <div class="card-content">
            <h2 class="name">Mentoring</h2>
            <p class="description">This intense, life-changing coaching program will transform you
              from an online nobody, to having infinite options with the hottest
              women on Tinder - regardless of your age, looks, or location...</p>
           
         </div>
      </div>
    </swiper-slide>
  <swiper-slide>
    <div class="card swiper-slide">
      <div class="image-content">
         <span class="overlay"></span>
              <div class="card-image">
                 <img class="card-img" src="../assets/services/photo-1527624834076-ab23297b1a58.avif" alt="">
              </div>
      </div>
       <div class="card-content">
          <h2 class="name">Academic Advising</h2>
          <p class="description">Delivering affordable advising services to high school and college students
            through our Afford and Succeed programs</p>
         
       </div>
    </div></swiper-slide
    ><swiper-slide>
      <div class="card swiper-slide">
        <div class="image-content">
           <span class="overlay"></span>
                <div class="card-image">
                   <img class="card-img" src="../assets/istockphoto-883657418-170667a.jpg" alt="">
                </div>
        </div>
         <div class="card-content">
            <h2 class="name">Online lessons</h2>
            <p class="description">Use online tutoring to learn a new skill or hobby from the comfort of your home.</p>
           
         </div>
      </div>
    </swiper-slide>
   

  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";


import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";




import { Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Oswald', sans-serif;
}
.header{
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: green;
  
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: azure;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


  body .slide-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
     
  }
  .slide-container{
    max-width: 1120px;
    width: 100%;
    background-color: grey;

  }
  .slide-content{
    margin: 0 40px;
  }
  .card{
    width: 320px;
    border-radius: 25px;
    background-color: azure;
  }
  .image-content, 
  .card-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 14px;
  }
  .image-content{
    position: relative;
    row-gap: 5px;
    padding: 25px 0;
  }
  .overlay{
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(84, 181, 84);
    border-radius: 25px 25px 0 25px;
  }
  .overlay::before,
  .overlay::after{
    content: '';
    position: absolute;
    right: 0;
    bottom: -40px;
    height: 40px;
    width: 40px;
    background-color: rgb(84, 181, 84);

  }
  .overlay::after{
    border-radius: 0 25px 0 0;
    background-color: azure;
  }
  .card-image{
    position: relative;
    height: 150px;
    width: 150px;
  }
  .card-image .card-img{
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid green;
  }
  .name{
    font-size: 18px;
    font-weight: 800px;
    color: #333;
  }
  .description{
    font-size: 14px;
    color: #707070;
    text-align: center;
  }
  .button{
    border: none;
    font-size: 16px;
    color: #FFF;
    padding: 8px 16px;
    background-color:green;
    border-radius: 6px;
    margin: 14px;
  }
  .button:hover{
    background: rgb(5, 248, 167);
  }
</style>