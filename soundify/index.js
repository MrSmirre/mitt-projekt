




const soundifyApp = {
  artister: [
    {
      namn: "Luna",
      album: [
        {
          titel: "Midnight Sessions",
          latar: [
            { nr: 1, titel: "Night Walk", sekunder: 210 },
            { nr: 2, titel: "Starlight", sekunder: 195 }
          ]
        }
      ]
    },
    {
      namn: "Daniel",
      album: [
        {
          titel: "ETTERAYERGA",
          latar: [
            { nr: 1, titel: "yrtj", sekunder: 210 },
            { nr: 2, titel: "grta", sekunder: 195 }
          ]
        }
      ]
    },
    {
      namn: "Philip",
      album: [
        {
          titel: "gjhatdstzy",
          latar: [
            { nr: 1, titel: "Nrsdfffh", sekunder: 210 },
            { nr: 2, titel: "Sgfho", sekunder: 195 }
          ]
        }
      ]
    }
  ]
};

// Uppgift 4: Sök Artist
// Hämta album baserat på artistnamn.

const artisterNamn = soundifyApp.artister

const getAlbum = ((artist) => {
    for (let name of artisterNamn) {
        if (name.namn === artist) {
            return name.album
        }
    }
    return "Kunde inte hitta artist"
})

const album = getAlbum("Luna")

console.log(album);