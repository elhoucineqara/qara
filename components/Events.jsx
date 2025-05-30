// Composant React pour afficher la section des événements
import React from 'react';

const Events = () => {
  return (
    // Section principale des événements
    <section id="events" className="events-section">
      <div className="container mx-auto px-4 py-16">
        {/* Titre de la section */}
        <h2 className="text-3xl font-bold text-center mb-8">Événements</h2>
        
        {/* Grille des événements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Carte d'exemple d'événement */}
          <div className="event-card bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Titre de l'événement</h3>
            <p className="text-gray-600 mb-4">Date: 01/01/2024</p>
            <p className="text-gray-700">Description de l'événement...</p>
          </div>
          {/* Emplacement pour ajouter plus d'événements */}
        </div>
      </div>
    </section>
  );
};

export default Events; 