<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from '$lib/i18n/i18n';

  // Interface définissant la structure d'un événement
  interface Event {
    id: number;
    title: string;
    start: Date;
    description: string;
    type: 'workshop' | 'conference';
  }

  // Liste initiale des événements
  let events: Event[] = [
    {
      id: 1,
      title: "The Impact of AI on the Workspace",
      start: new Date(2025, 3, 28), // 28 Avril 2025
      description: "English presentation about artificial intelligence and its effects on modern workplaces, discussing challenges and opportunities in the AI era.",
      type: "conference"
    },
    {
      id: 2,
      title: "Workshop React",
      start: new Date(2025, 4, 15), // 15 Mai 2025
      description: "Workshop sur React et les bonnes pratiques de développement",
      type: "workshop"
    },
    {
      id: 3,
      title: "Conférence Web",
      start: new Date(2025, 4, 20), // 20 Mai 2025
      description: "Conférence sur les dernières tendances du développement web",
      type: "conference"
    }
  ];

  // État local pour la gestion des événements
  let selectedDate = new Date();
  let showEventModal = false;
  let newEvent: Omit<Event, 'id'> = {
    title: "",
    description: "",
    start: new Date(),
    type: "workshop"
  };

  // Gestionnaire de sélection de date
  function handleDateSelect(e: { currentTarget: HTMLInputElement }) {
    const date = new Date(e.currentTarget.value);
    newEvent.start = date;
    showEventModal = true;
  }

  // Fonction pour ajouter un nouvel événement
  function addEvent() {
    events = [...events, { ...newEvent, id: events.length + 1 }];
    showEventModal = false;
    newEvent = {
      title: "",
      description: "",
      start: new Date(),
      type: "workshop"
    };
  }

  // Fonction pour supprimer un événement
  function deleteEvent(id: number) {
    events = events.filter(event => event.id !== id);
  }

  // Fonction pour formater la date
  function formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  // Tri des événements par date
  $: sortedEvents = [...events].sort((a, b) => a.start.getTime() - b.start.getTime());
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
  <div class="container mx-auto px-4 py-24">
    <h1 class="text-4xl font-bold text-center mb-8 text-cyan-400">{$t('pages.events.title')}</h1>
    <p class="text-lg text-center mb-12 text-gray-300">{$t('pages.events.description')}</p>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Calendrier -->
      <div class="lg:col-span-2 bg-gray-800 rounded-lg p-6">
        <div class="flex flex-col space-y-4">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-semibold text-cyan-400">Sélectionner une date</h2>
            <button
              class="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              on:click={() => {
                newEvent.start = new Date();
                showEventModal = true;
              }}
            >
              <i class="fas fa-plus mr-2"></i>
              Ajouter un événement
            </button>
          </div>
          <input
            type="date"
            class="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-cyan-400 border-none"
            value={formatDate(selectedDate)}
            on:change={handleDateSelect}
          />
          <div class="mt-6">
            <h3 class="text-lg font-semibold mb-4">Événements du mois</h3>
            <div class="space-y-2">
              {#each sortedEvents.filter(e => e.start.getMonth() === selectedDate.getMonth()) as event}
                <div class="flex items-center space-x-2 text-sm">
                  <span class="w-8">{event.start.getDate()}</span>
                  <span class={`px-2 py-1 rounded-full text-xs ${event.type === 'workshop' ? 'bg-purple-500' : 'bg-blue-500'}`}>
                    {$t(`pages.events.types.${event.type}`)}
                  </span>
                  <span>{event.title}</span>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <!-- Liste des événements -->
      <div class="space-y-4">
        <div class="bg-gray-800 rounded-lg p-6">
          <h2 class="text-2xl font-semibold mb-4 text-cyan-400">{$t('pages.events.upcomingEvents')}</h2>
          {#each sortedEvents as event}
            <div class="bg-gray-700 rounded-lg p-4 mb-4 transform hover:scale-102 transition-transform">
              <div class="flex justify-between items-start">
                <div>
                  <h3 class="text-lg font-semibold">
                    {#if event.title === "The Impact of AI on the Workspace"}
                      <a 
                        href="/presentations/ai-workspace" 
                        class="hover:text-cyan-400 transition-colors"
                      >
                        {event.title}
                      </a>
                    {:else}
                      {event.title}
                    {/if}
                  </h3>
                  <p class="text-sm text-gray-300">{event.start.toLocaleDateString()}</p>
                  <p class="text-gray-400 mt-2">{event.description}</p>
                  <span class="inline-block px-2 py-1 mt-2 text-xs rounded-full
                    {event.type === 'workshop' ? 'bg-purple-500' : 'bg-blue-500'}">
                    {$t(`pages.events.types.${event.type}`)}
                  </span>
                  {#if event.title === "The Impact of AI on the Workspace"}
                    <div class="mt-2">
                      <a 
                        href="/presentations/ai-workspace" 
                        class="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        View Presentation →
                      </a>
                    </div>
                  {/if}
                </div>
                <button
                  class="text-red-400 hover:text-red-300 transition-colors"
                  on:click={() => deleteEvent(event.id)}
                >
                  <i class="fas fa-trash"></i>
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Modal pour ajouter un événement -->
{#if showEventModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-gray-800 rounded-lg p-6 w-full max-w-md">
      <h2 class="text-2xl font-semibold mb-4">{$t('pages.events.addEvent.title')}</h2>
      <form on:submit|preventDefault={addEvent} class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-1">{$t('pages.events.addEvent.eventTitle')}</label>
          <input
            type="text"
            bind:value={newEvent.title}
            class="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">{$t('pages.events.addEvent.date')}</label>
          <input
            type="date"
            value={formatDate(newEvent.start)}
            on:change={handleDateSelect}
            class="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
            required
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">{$t('pages.events.addEvent.description')}</label>
          <textarea
            bind:value={newEvent.description}
            class="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
            rows="3"
          ></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1">{$t('pages.events.addEvent.type')}</label>
          <select
            bind:value={newEvent.type}
            class="w-full px-3 py-2 bg-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-400"
          >
            <option value="workshop">{$t('pages.events.types.workshop')}</option>
            <!-- <option value="conference">{$t('pages.events.types.conference')}</option> -->
          </select>
        </div>
        <div class="flex justify-end space-x-3">
          <button
            type="button"
            class="px-4 py-2 text-gray-300 hover:text-white"
            on:click={() => showEventModal = false}
          >
            {$t('pages.events.addEvent.cancel')}
          </button>
          <button
            type="submit"
            class="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 rounded-lg"
          >
            {$t('pages.events.addEvent.add')}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}

<style>
  input[type="date"] {
    color-scheme: dark;
  }
  
  /* Hover effect for event cards */
  .hover\:scale-102:hover {
    transform: scale(1.02);
  }
</style> 