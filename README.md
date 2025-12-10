# Spotify Mixer

## Installation
```bash
git clone https://github.com/miguelandin/spotify-mixer.git
cd spotify-mixer
npm install
```

##### Required file in the root of the proyect .env.local:
```bash
#.env.local
SPOTIFY_CLIENT_ID=your_client_id_aqui
SPOTIFY_CLIENT_SECRET=your_client_secret_aqui
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_client_id_aqui
NEXT_PUBLIC_REDIRECT_URI=http://127.0.0.1:3000/auth/callback
```

##### Execute
```bash
npm run dev
```

---
## Tree
```txt
src
├── app
│   ├── api
│   │   ├── refresh-token
│   │   │   └── route.js
│   │   └── spotify-token
│   │       └── route.js
│   ├── artists
│   │   └── page.js
│   ├── auth
│   │   └── callback
│   │       └── page.js
│   ├── components
│   │   ├── ArtistInfo.js
│   │   ├── DecadeSelector.js
│   │   ├── Genre.js
│   │   ├── GenreList.js
│   │   ├── NavBar.js
│   │   ├── ObjectImg.js
│   │   ├── ObjectList.js
│   │   ├── PopularitySelector.js
│   │   ├── SearchArtistBar.js
│   │   ├── SearchGenreBar.js
│   │   ├── SearchTrackBar.js
│   │   ├── ShowArtist.js
│   │   ├── ShowTrack.js
│   │   └── TrackInfo.js
│   ├── dashboard
│   │   └── page.js
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   ├── page.js
│   └── tracks
│       └── page.js
└── lib
    ├── artists.js
    ├── auth.js
    ├── genres.js
    ├── spotify.js
    ├── storage.js
    └── tracks.js
```
