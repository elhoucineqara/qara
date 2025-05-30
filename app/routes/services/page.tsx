import React from 'react';

export default function ServicesPage() {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites web modernes et applications web sur mesure",
      icon: "💻"
    },
    {
      title: "Applications Mobiles",
      description: "Développement d'applications iOS et Android performantes",
      icon: "📱"
    },
    {
      title: "Conseil IT",
      description: "Accompagnement et expertise technique pour vos projets",
      icon: "🔍"
    },
    {
      title: "Design UX/UI",
      description: "Création d'interfaces utilisateur intuitives et esthétiques",
      icon: "🎨"
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Nos Services</h1>
          <p className="text-xl text-gray-600 mb-12">
            Découvrez notre gamme complète de services numériques
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 