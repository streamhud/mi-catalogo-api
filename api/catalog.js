// Catálogo compartido para Movie Hub PRO 3.8.0 o posterior.
// GitHub: guardar este archivo como api/catalog.js y desplegar con Vercel.
//
// PUBLICIDAD ROTATIVA
// Los anuncios habilitados con el MISMO targetRowIndex comparten un carrusel.
// La extensión los alterna cada 8 segundos; el orden es el de este arreglo.
// 0: después de Canales Oficiales
// 1: después de Acción y Suspenso
// 2: después de Drama
// 3: después de Terror y Horror
// 4: después de Ciencia Ficción
// 5: después de Comedia y Familiar
//
// Para sumar un anunciante, duplicar un banner, completar title, imageUrl y
// linkUrl (URLs HTTPS), elegir su posición y poner enabled: true.
// Los dos espacios de ejemplo adicionales están deshabilitados hasta completar sus datos.
// Reemplazar las imágenes via.placeholder.com de los anuncios actuales por imágenes reales.
// isFeatured: true incluye la película en el carrusel automático de la cabecera.

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const responseData = {
    // Anuncios activos y plantillas para nuevos anunciantes.
    banners: [
      {
        enabled: true,
        title: "PATROCINADOR OFICIAL 1",
        imageUrl: "https://via.placeholder.com/1200x140/e50914/ffffff?text=Primer+Sponsor+-+Marcas+1",
        linkUrl: "https://streamhud.io",
        targetRowIndex: 0 // Después de Canales Oficiales; 1..5 = después de cada género
      },
      {
        enabled: true,
        title: "PUBLICIDAD VIP",
        imageUrl: "https://via.placeholder.com/1200x140/ffc107/000000?text=Segundo+Sponsor+-+Promoción+Especial",
        linkUrl: "https://activaya.pro",
        targetRowIndex: 3 // Aparece después del tercer género
      },
      {
        enabled: false, // Completar las URLs y cambiar a true para activar.
        title: "NUEVO ANUNCIANTE — ESPACIO 1",
        imageUrl: "",
        linkUrl: "",
        targetRowIndex: 0 // Rotará junto a PATROCINADOR OFICIAL 1.
      },
      {
        enabled: false, // Completar las URLs y cambiar a true para activar.
        title: "NUEVO ANUNCIANTE — ESPACIO 2",
        imageUrl: "",
        linkUrl: "",
        targetRowIndex: 3 // Rotará junto a PUBLICIDAD VIP.
      }
    ],

    // 🎬 CATÁLOGO DE PELÍCULAS
    movies: [
      {
        videoId: "PPr-n3THg7Y",
        title: "Mala Elección",
        thumbnail: "https://img.youtube.com/vi/PPr-n3THg7Y/hqdefault.jpg",
        duration: "1h 35m",
        isFeatured: true,
        badgeText: "ESTRENO PATAGÓNICO"
      },
       {
        videoId: "SIZ1yj5o3gY",
        title: "Colectivo",
        thumbnail: "https://img.youtube.com/vi/SIZ1yj5o3gY/hqdefault.jpg",
        duration: "1h 35m",
        isFeatured: true,
        badgeText: "ESTRENO MUNDIAL"
      },
      {
        videoId: "-IsHLdQaOxo",
        title: "La próxima",
        thumbnail: "https://img.youtube.com/vi/-IsHLdQaOxo/hqdefault.jpg",
        duration: "1h 35m",
        isFeatured: true,
        badgeText: "ESTRENO Argento"
      }
    ]
  };

  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300');
  res.status(200).json(responseData);
}
