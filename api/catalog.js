export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
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

  const responseData = {
    // 📢 ARREGLO CON MÚLTIPLES BANNERS PUBLICITARIOS
    banners: [
      {
        enabled: true,
        title: "PATROCINADOR OFICIAL 1",
        imageUrl: "https://via.placeholder.com/1200x140/e50914/ffffff?text=Primer+Sponsor+-+Marcas+1",
        linkUrl: "https://streamhud.io",
        targetRowIndex: 1 // Aparece después de la fila 1 (Canales Oficiales)
      },
      {
        enabled: true,
        title: "PUBLICIDAD VIP",
        imageUrl: "https://via.placeholder.com/1200x140/ffc107/000000?text=Segundo+Sponsor+-+Promoción+Especial",
        linkUrl: "https://activaya.pro",
        targetRowIndex: 3 // Aparece después del tercer género
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
        isFeatured: false,
        badgeText: "ESTRENO Argento"
      }
    ]
  };

  res.status(200).json(responseData);
}
