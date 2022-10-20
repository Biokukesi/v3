<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="about">
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <h5>Contact details</h5>
    <p>Phone number: +260961762309</p>
    <p>Email: <a href="#">Camelotcademyzm@gmail.com</a></p>
   
  </WelcomeItem>

  

  <WelcomeItem>
    <template #icon>
  <EcosystemIcon />
    </template>
    <h5>Location</h5>

    We are currently located on the copperbelt. Specifically Mine Masala Ndola
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <h5>Community</h5>

    Our team comprises well trained teachers here to meet your demands
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <h5>Support us</h5>

    You can can help support our community by sharing this webpage with your friends and family
    
  </WelcomeItem>
</div>
</template>
<style>
.about{
 padding: 20px;
 color: black;
}

</style>