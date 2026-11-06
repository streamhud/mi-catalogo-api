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

  const indieCatalog = [
    {
      videoId: "PPr-n3THg7Y",
      title: "Mala Elección",
      thumbnail: "https://img.youtube.com/vi/PPr-n3THg7Y/hqdefault.jpg",
      duration: "1h 35m",
      isFeatured: true,
      badgeText: "ESTRENO PATAGÓNICO"
    },
    {
      videoId: "-IsHLdQaOxo",
      title: "La próxima",
      thumbnail: "https://img.youtube.com/vi/-IsHLdQaOxo/hqdefault.jpg",
      duration: "1h 35m",
      isFeatured: false,
      badgeText: "ESTRENO Argento"
    }
  ];

  res.status(200).json(indieCatalog);
}
