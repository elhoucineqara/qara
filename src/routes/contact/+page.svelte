<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly, scale } from 'svelte/transition';
  import { t } from '$lib/i18n/i18n';
  
  let isVisible = false;
  let showModal = false;
  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  function handleSubmit() {
    console.log('Form submitted:', formData);
    closeModal();
  }
  
  function openModal() {
    showModal = true;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    showModal = false;
    document.body.style.overflow = 'auto';
  }
  
  onMount(() => {
    isVisible = true;
    createParticles();
    createScanline();
    initMatrixRain();
  });

  const createParticles = () => {
    const container = document.querySelector('.absolute.inset-0');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(particle);
    }
  };

  const createScanline = () => {
    const container = document.querySelector('.absolute.inset-0');
    if (!container) return;

    const scanline = document.createElement('div');
    scanline.className = 'scanline';
    container.appendChild(scanline);
  };

  const initMatrixRain = () => {
    const canvas = document.getElementById('matrix-rain') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const matrixArray = matrix.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * (canvas.height / fontSize));
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    setInterval(draw, 33);
  };
</script>

<div class="min-h-screen w-full relative">
  <div class="absolute inset-0">
    <div class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
    <!-- Matrix rain effect -->
    <canvas id="matrix-rain" class="absolute inset-0 opacity-10"></canvas>
    <!-- Add a subtle grid pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
    <svg class="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      <!-- Main curved shape -->
      <path 
        d="M 100 0 C 100 0, 100 30, 90 50 C 80 70, 60 80, 40 85 C 20 90, 10 95, 0 100" 
        fill="rgba(0, 255, 255, 0.05)"
        class="transition-all duration-300"
      />
      <!-- Decorative circles -->
      <circle cx="20%" cy="20%" r="30" fill="rgba(0, 255, 255, 0.1)" class="animate-float">
        <animate attributeName="r" values="30;32;30" dur="8s" repeatCount="indefinite" />
      </circle>
      <circle cx="80%" cy="60%" r="20" fill="rgba(255, 0, 255, 0.1)" class="animate-float-delayed">
        <animate attributeName="r" values="20;22;20" dur="6s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>

  <div class="relative z-10 px-8 pt-32 pb-8">
    <!-- En-tête centré -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4 text-cyan-400">{$t('contact.title')}</h1>
      <p class="text-gray-200 text-lg">{$t('contact.subtitle')}</p>
      <p class="mt-4 text-gray-300 max-w-2xl mx-auto">
        {$t('contact.description')}
      </p>
    </div>
    
    <!-- Formulaire -->
    <div class="w-full max-w-2xl mx-auto">
      <form class="space-y-8 p-10 bg-slate-900/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-cyan-500/20" on:submit|preventDefault={handleSubmit}>      
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative">
            <label for="firstName" class="block text-sm font-semibold text-cyan-400 mb-2">{$t('contact.form.firstName')}</label>
            <input
              id="firstName"
              type="text"
              bind:value={formData.firstName}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
          <div class="relative">
            <label for="lastName" class="block text-sm font-semibold text-cyan-400 mb-2">{$t('contact.form.lastName')}</label>
            <input
              id="lastName"
              type="text"
              bind:value={formData.lastName}
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
            />
          </div>
        </div>

        <div class="relative">
          <label for="email" class="block text-sm font-semibold text-cyan-400 mb-2">{$t('contact.form.email')}</label>
          <input
            id="email"
            type="email"
            bind:value={formData.email}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>

        <div class="relative">
          <label for="phone" class="block text-sm font-semibold text-cyan-400 mb-2">{$t('contact.form.phone')}</label>
          <input
            id="phone"
            type="tel"
            bind:value={formData.phone}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          />
        </div>

        <div class="relative">
          <label for="message" class="block text-sm font-semibold text-cyan-400 mb-2">{$t('contact.form.message')}</label>
          <textarea
            id="message"
            rows="5"
            bind:value={formData.message}
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
          ></textarea>
        </div>

        <button 
          type="submit" 
          class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-4 px-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-0.5 text-lg"
        >
          {$t('contact.form.sendMessage')}
        </button>
      </form>
    </div>
  </div>
</div>

<!-- Modal -->
{#if showModal}
  <div 
    class="fixed inset-0 z-50 overflow-y-auto" 
    transition:fade={{ duration: 100 }}
    on:click|self={closeModal}
  >
    <!-- Backdrop -->
    <div 
      class="fixed inset-0 bg-black bg-opacity-50"
    ></div>

    <!-- Modal Content -->
    <div class="flex items-center justify-center min-h-screen p-4">
      <div 
        class="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl w-full m-auto border border-cyan-500/20"
        transition:scale={{ duration: 200, start: 0.95, opacity: 1 }}
      >
        <!-- Close button -->
        <button 
          class="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 transition-colors z-10 w-8 h-8 flex items-center justify-center rounded-full hover:bg-cyan-500/20"
          on:click={closeModal}
          type="button"
        >
          <i class="fas fa-times text-xl"></i>
        </button>

        <!-- Form Content -->
        <div class="p-8">
          <h4 class="text-2xl font-bold mb-6 text-cyan-400">{$t('contact.modal.title')}</h4>
          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-cyan-400 mb-2">{$t('contact.modal.name')}</label>
              <input
                type="text"
                id="name"
                bind:value={formData.firstName}
                class="w-full px-4 py-3 border-2 border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 bg-slate-800/50 text-gray-200 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-cyan-400 mb-2">{$t('contact.form.email')}</label>
              <input
                type="email"
                id="email"
                bind:value={formData.email}
                class="w-full px-4 py-3 border-2 border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 bg-slate-800/50 text-gray-200 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-cyan-400 mb-2">{$t('contact.modal.subject')}</label>
              <input
                type="text"
                id="subject"
                bind:value={formData.message}
                class="w-full px-4 py-3 border-2 border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 bg-slate-800/50 text-gray-200 placeholder-gray-400"
                required
              />
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-cyan-400 mb-2">{$t('contact.form.message')}</label>
              <textarea
                id="message"
                bind:value={formData.message}
                rows="4"
                class="w-full px-4 py-3 border-2 border-cyan-500/20 rounded-xl focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 hover:border-cyan-500/40 bg-slate-800/50 text-gray-200 placeholder-gray-400 resize-none"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                class="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-cyan-500/20 transform hover:-translate-y-0.5"
              >
                {$t('contact.form.sendMessage')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* Remove unused selectors */
  .particle,
  .scanline,
  .crt-overlay,
  .distortion,
  .glitch-effect,
  a,
  a::before,
  a:hover::before {
    display: none;
  }
</style> 