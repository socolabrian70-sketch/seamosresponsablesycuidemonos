/*
DualPurposeSite.jsx — Interfaz con diseño ajustado según tus nuevas indicaciones.

Se mantiene el apartado de “Prevención del embarazo adolescente” con los videos,
pero en la parte superior ahora aparece una imagen de un dibujo de un doctor con
el texto “¡Cuídate!”. En la tienda se deja solo la lista de condones sin imágenes
individuales.
*/

import React from 'react';

export default function DualPurposeSite() {
  const productsCatalog = [
    {
      id: 1,
      title: 'Pack Condones (10)',
      priceLabel: 'S/ 15',
      desc: 'Pack de 10 condones de látex. Uso responsable.',
    },
    {
      id: 2,
      title: 'Condón Ultra (1)',
      priceLabel: 'S/ 3',
      desc: 'Condón de alta sensibilidad (unidad).',
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 text-slate-900">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">P</div>
            <div>
              <div className="text-lg font-extrabold">Previene & Protege</div>
              <div className="text-xs text-slate-500">Prevención del embarazo adolescente</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <section>
          <div className="bg-white rounded-lg p-6 shadow-sm text-center">
            <img
              src="https://cdn.pixabay.com/photo/2013/07/12/19/30/doctor-154217_1280.png"
              alt="Doctor cuídate"
              className="mx-auto w-40 h-40 object-contain"
            />
            <h1 className="text-2xl font-bold text-orange-700 mt-4">¡Cuídate!</h1>
            <p className="mt-2 text-slate-600">
              La prevención del embarazo adolescente comienza con información y responsabilidad.
            </p>
          </div>

          <div className="mt-10 bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-orange-700 mb-6">Charlas alusivas a la prevención del embarazo adolescente</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    title="Charla 1"
                    src="https://www.youtube.com/embed/MIxyV5Ot-ZU?start=7"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 font-medium text-center">Charla 1 — Prevención y educación</div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    title="Charla 2"
                    src="https://www.youtube.com/embed/zn5iDGjJE_I"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 font-medium text-center">Charla 2 — Información y testimonios</div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    title="Charla 3"
                    src="https://www.youtube.com/embed/LxndFZoOQA4"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 font-medium text-center">Charla 3 — Prevención y recursos</div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold">Tienda — Productos para prevención</h2>
            <p className="text-sm text-slate-600 mt-1">
              Catálogo informativo de productos disponibles para la prevención. (Imágenes no incluidas)
            </p>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {productsCatalog.map((p) => (
                <div key={p.id} className="bg-orange-100 rounded-lg p-4 shadow flex flex-col justify-between">
                  <div>
                    <div className="font-semibold text-orange-700">{p.title}</div>
                    <div className="text-sm text-slate-700 mt-1">{p.desc}</div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-lg font-bold text-orange-800">{p.priceLabel}</div>
                    <button disabled className="bg-orange-300 text-white px-3 py-2 rounded opacity-60">
                      Contacto
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-200 py-6 mt-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-sm">© {new Date().getFullYear()} Previene & Protege</div>
          <div className="text-sm">Diseño: paleta naranja / beige</div>
        </div>
      </footer>
    </div>
  );
}
