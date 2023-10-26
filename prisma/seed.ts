import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {

  await prisma.audio.deleteMany()
  await prisma.playlist.deleteMany()
  await prisma.artist.deleteMany()
  await prisma.listener.deleteMany()
  await prisma.music_Genre.deleteMany()
  await prisma.podCast_Genre.deleteMany()
  await prisma.user.deleteMany()

  // CONTA DE USUARIOS NORMAIS
  const normalUser1 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "Pedro H A Almeida",
          email: "pedro200@hotmail.com",
          password: "pedropedro99"
        }
      },
      is_premium: false
    }
  })
  const normalUser2 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "Nalbert Santos",
          email: "albertmonolol@gmail.com",
          password: "nauberrti"
        }
      },
      is_premium: false
    }
  })
  const normalUser3 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "JoseAmancio99",
          email: "josezinho@hotmail.com",
          password: "123"
        }
      },
      is_premium: false
    }
  })
  const normalUser4 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "fadoalok",
          email: "lucasaramei@hotmail.com",
          password: "234"
        }
      },
      is_premium: false
    }
  })
  const normalUser5 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "spotifaifake",
          email: "isfake@fakezin.com",
          password: "1234"
        }
      },
      is_premium: false
    }
  })



  // CONTA DE USUARIOS PREMIUM

  const premiumUser1 = await prisma.listener.create({
    data: {
      user: {
        create: {
          name: "peedroluuucas",
          email: "ipedrolucas00@gmail.com",
          password: "1234"
        }
      },
      is_premium: true
    }
  })



  // GENEROS MUSICAIS

  const rock = await prisma.music_Genre.create({
    data: {
      id: 1,
      name: "Rock and Roll"
    }
  })

  const jazz = await prisma.music_Genre.create({
    data: {
      id: 2,
      name: "Jazz"
    }
  })

  const hipHop = await prisma.music_Genre.create({
    data: {
      id: 3,
      name: "Hip-Hop"
    }
  })

  const country = await prisma.music_Genre.create({
    data: {
      id: 4,
      name: "Country"
    }
  })

  const edm = await prisma.music_Genre.create({
    data: {
      id: 5,
      name: "Electronic Dance Music (EDM)"
    }
  })

  const classical = await prisma.music_Genre.create({
    data: {
      id: 6,
      name: "Classical"
    }
  })

  const reggae = await prisma.music_Genre.create({
    data: {
      id: 7,
      name: "Reggae"
    }
  })

  const rnb = await prisma.music_Genre.create({
    data: {
      id: 8,
      name: "R&B (Rhythm and Blues)"
    }
  })

  const pop = await prisma.music_Genre.create({
    data: {
      id: 9,
      name: "Pop"
    }
  })

  const heavyMetal = await prisma.music_Genre.create({
    data: {
      id: 10,
      name: "Heavy Metal"
    }
  })

  const funk = await prisma.music_Genre.create({
    data: {
      id: 11,
      name: "Funk"
    }
  })

  const punkRock = await prisma.music_Genre.create({
    data: {
      id: 12,
      name: "Punk Rock"
    }
  })

  const blues = await prisma.music_Genre.create({
    data: {
      id: 13,
      name: "Blues"
    }
  })

  const salsa = await prisma.music_Genre.create({
    data: {
      id: 14,
      name: "Salsa"
    }
  })

  const indie = await prisma.music_Genre.create({
    data: {
      id: 15,
      name: "Indie"
    }
  })

  const kpop = await prisma.music_Genre.create({
    data: {
      id: 16,
      name: "K-Pop"
    }
  })

  const rap = await prisma.music_Genre.create({
    data: {
      id: 17,
      name: "Rap"
    }
  })

  const gospel = await prisma.music_Genre.create({
    data: {
      id: 18,
      name: "Gospel"
    }
  })

  const soul = await prisma.music_Genre.create({
    data: {
      id: 19,
      name: "Soul"
    }
  })



  // CONTA DE ARTISTAS

  const alok = await prisma.artist.create({
    data: {
      user: {
        create: {
          name: "Alok",
          email: "alokalokbom@gmail.com",
          password: "1234"
        }
      },
      about: "Alok Achkar Peres Petrillo é um DJ e produtor musical brasileiro.",
      genre: "Eletronica",
      published_audios: {
        createMany: {
          data: [{
            name: "Hear me now",
            id_music_genre: edm.id,
            release_date: new Date()
          },

          {
            name: "Ocean",
            id_music_genre: edm.id,
            release_date: new Date()
          },
          {
            name: "Never Let Me Go",
            id_music_genre: edm.id,
            release_date: new Date()
          },
          {
            name: "Favela",
            id_music_genre: pop.id, // Se o gênero for Funk
            release_date: new Date()
          },
          {
            name: "The Wall",
            id_music_genre: edm.id, // Se o gênero for Rock
            release_date: new Date()
          }]
        }
      }
    }
  })


} main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })