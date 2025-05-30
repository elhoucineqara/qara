<script lang="ts">
  import { page } from '$app/stores';
  import { clickOutside } from '$lib/actions/clickOutside';

  let isScrolled = false;
  let isMenuOpen = false;
  
  function handleScroll() {
    isScrolled = window.scrollY > 50;
  }
  
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', handleScroll);
  }

  // Determine if the current page requires a transparent background
  $: isTransparentPage = $page.url.pathname === '/';
  
  // Determine text color based on page and scroll
  $: textColor = isTransparentPage && !isScrolled ? 'text-white' : 'text-white';
  $: hoverColor = isTransparentPage && !isScrolled ? 'hover:text-gray-200' : 'hover:text-gray-300';
  $: headerBg = isScrolled || !isTransparentPage 
    ? 'bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-md bg-opacity-95 shadow-lg' 
    : 'bg-transparent';
</script>

<header class="fixed w-full z-50 transition-all duration-500 ease-in-out {headerBg}">
  <nav class="container mx-auto px-4 py-4">
    <div class="flex justify-between items-center">
      <a href="/" class="text-xl font-playfair font-bold {textColor} hover:scale-105 transition-transform duration-300">
        El Houcine Qara
      </a>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <a href="/" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/' ? 'font-semibold' : ''}">
          Home
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/about" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/about' ? 'font-semibold' : ''}">
          About
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/skills" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/skills' ? 'font-semibold' : ''}">
          Skills
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <a href="/services" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/services' ? 'font-semibold' : ''}">
          Services
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
        <!-- <a href="/events" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/events' ? 'font-semibold' : ''}">
          Events
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a> -->
        <a href="/contact" class="{textColor} {hoverColor} transition-all duration-300 relative group {$page.url.pathname === '/contact' ? 'font-semibold' : ''}">
          Contact
          <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </a>
      </div>

      <!-- Hamburger button for mobile -->
      <button class="md:hidden {textColor} hover:scale-110 transition-transform duration-300" on:click={toggleMenu}>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          {:else}
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          {/if}
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if isMenuOpen}
      <div class="md:hidden mt-4 space-y-4 animate-fadeIn">
        <a href="/" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/' ? 'font-semibold' : ''}">Home</a>
        <a href="/about" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/about' ? 'font-semibold' : ''}">About</a>
        <a href="/skills" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/skills' ? 'font-semibold' : ''}">Skills</a>
        <a href="/services" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/services' ? 'font-semibold' : ''}">Services</a>
        <a href="/events" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/events' ? 'font-semibold' : ''}">Events</a>
        <a href="/contact" class="block {textColor} {hoverColor} transition-all duration-300 py-2 hover:pl-2 {$page.url.pathname === '/contact' ? 'font-semibold' : ''}">Contact</a>
      </div>
    {/if}
  </nav>
</header>

<style>
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.3s ease-out forwards;
  }
</style> 