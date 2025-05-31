<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n/i18n';
  import Header from '$lib/components/Header.svelte';
  
  let isVisible = false;

  
  onMount(() => {
    isVisible = true;
  });
</script>

<svelte:head>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" rel="stylesheet">
</svelte:head>

<Header />

<div class="relative">
  <!-- Hero Section -->
  <div class="relative flex content-center items-center justify-center h-screen">
    <div class="absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat bg-fixed" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');">
      <span class="absolute inset-0 w-full h-full bg-black opacity-30"></span>
    </div>
    <div class="container relative mx-auto px-4">
      <div class="items-center flex flex-wrap justify-center">
        <div class="w-full lg:w-6/12 px-4 text-center">
          <div class="text-white font-playfair text-5xl md:text-6xl my-2">
            {$t('hero.name')}
          </div>
          <div class="text-white font-poppins text-2xl md:text-3xl my-4 font-light">
            {$t('hero.title')}
          </div>
          <div class="text-white font-poppins text-xl md:text-2xl my-4 font-light">
            {$t('hero.subtitle')}
          </div>
          <a href="/contact" class="bg-white text-gray-800 active:bg-gray-100 text-sm font-poppins font-semibold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 transition-all duration-300" type="button">
            {$t('hero.contact')}
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto">
          <div class="text-indigo-700 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gradient-to-r from-indigo-100 to-white">
            <i class="fas fa-user-circle text-3xl"></i>
          </div>
          <h3 class="text-4xl font-bold mb-4 text-indigo-600">
            {$t('about.title')}
          </h3>
          <p class="text-lg font-poppins leading-relaxed mt-4 mb-4 text-gray-600">
            {$t('about.description')}
          </p>
          <a href="/about" class="font-bold font-poppins text-indigo-700 mt-8 hover:text-indigo-500 transition-colors duration-300">
            {$t('about.learnMore')}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section class="relative py-20 bg-gray-300">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap justify-end">
        <div class="w-full lg:w-6/12 px-4 text-left">
          <div class="text-purple-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i class="fas fa-code text-3xl"></i>
          </div>
          <h3 class="text-4xl font-bold mb-4 text-indigo-600">
            {$t('skills.title')}
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            {$t('skills.description')}
          </p>
          <a href="/skills" class="font-bold text-gray-800 mt-8 hover:text-gray-600">
            {$t('skills.viewSkills')}
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="relative py-20">
    <div class="container mx-auto px-4">
      <div class="items-center flex flex-wrap justify-start">
        <div class="w-full lg:w-6/12 px-4 text-left">
          <div class="text-green-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <i class="fas fa-lightbulb text-3xl"></i>
          </div>
          <h3 class="text-4xl font-bold mb-4 text-indigo-600">
            {$t('services.title')}
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            {$t('services.description')}
          </p>
          <a href="/services" class="font-bold text-gray-800 mt-8 hover:text-gray-600">
            {$t('services.viewServices')}
          </a>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .min-h-screen-75 {
    min-height: 75vh;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    letter-spacing: 1px;
  }
  
  .font-poppins {
    font-family: 'Poppins', sans-serif;
    letter-spacing: 0.5px;
  }

  [dir="rtl"] .ml-auto {
    margin-left: 0;
    margin-right: auto;
  }

  [dir="rtl"] .mr-auto {
    margin-right: 0;
    margin-left: auto;
  }

  .logo {
    max-width: 200px;
    height: auto;
    display: block;
  }

  header {
    height: 8vh;
  }

  /* Nouveaux styles pour le texte */
  .text-5xl, .text-6xl {
    font-weight: 700;
    background: linear-gradient(120deg, #ffffff 0%, #f0f0f0 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
  }

  .text-2xl, .text-3xl {
    font-weight: 300;
    letter-spacing: 1.2px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  }

  /* Style pour le bouton */
  a[href="/contact"] {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 600;
    transition: all 0.3s ease;
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    color: white !important;
  }

  a[href="/contact"]:hover {
    background: white;
    color: #1a1a1a !important;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  /* Styles pour l'alternance des sections */
  section:nth-child(odd) {
    background-color: #ffffff;
  }

  section:nth-child(even) {
    background-color: #f3f4f6;
  }

  @media (min-width: 1024px) {
    section:nth-child(odd) .container > div {
      justify-content: flex-start;
    }

    section:nth-child(even) .container > div {
      justify-content: flex-end;
    }
  }
</style>
