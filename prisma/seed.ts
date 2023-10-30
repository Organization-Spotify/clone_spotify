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
      }
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
      }
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
      }
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
      }
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
      }
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
      followed_by_listeners: {
        connectOrCreate: [{
          create: { 
          id: normalUser1.id,
          user_id: normalUser1.user_id
          },
          where: {id: normalUser1.id},
        },
        {
          create: {
          id: normalUser2.id,
          user_id: normalUser2.user_id
          },
          where: {id: normalUser2.id}
        },
        {
          create: {
          id: normalUser4.id,
          user_id: normalUser4.user_id
          },
          where: {id: normalUser4.id}
        }]
      }
      }
    })

    const edSheeran = await prisma.artist.create({
      data: {
        user: {
          create: {
            name: "Ed Sheeran",
            email: "ed@sheeran.com",
            password: "senhaed"
          }
        },
        about: "Ed Sheeran é um cantor e compositor britânico. Ele é conhecido por seus sucessos como 'Shape of You' e 'Thinking Out Loud'.",
        genre: "Pop",
        followed_by_listeners: {
          connectOrCreate: [
            {
              create: {
                id: normalUser3.id,
                user_id: normalUser3.user_id
              },
              where: { id: normalUser3.id },
            },
            {
              create: {
                id: normalUser2.id,
                user_id: normalUser2.user_id
              },
              where: { id: normalUser2.id },
            },
            {
              create: {
              id: normalUser5.id,
              user_id: normalUser5.user_id
              },
              where: {id: normalUser5.id}
            },
            {
              create: {
              id: normalUser1.id,
              user_id: normalUser1.user_id
              },
              where: {id: normalUser1.id}
            }
          ]
        }
      }
    })

    const beyonce = await prisma.artist.create({
      data: {
        user: {
          create: {
            name: "Beyoncé",
            email: "beyonce@beyhive.com",
            password: "senha123"
          }
        },
        about: "Beyoncé é uma cantora, compositora e atriz norte-americana, conhecida por seu talento e sucesso na música pop e R&B. Ela é uma das artistas mais influentes do mundo.",
        genre: "Pop/R&B",
        followed_by_listeners: {
          connectOrCreate: [
            {
              create: {
                id: normalUser5.id,
                user_id: normalUser5.user_id
              },
              where: { id: normalUser5.id },
            },
            {
              create: {
                id: normalUser4.id,
                user_id: normalUser4.user_id
              },
              where: { id: normalUser4.id },
            }
          ]
        }
      }
    })

    const drake = await prisma.artist.create({
      data: {
        user: {
          create: {
            name: "Drake",
            email: "drizzy@octobersveryown.com",
            password: "senhaDrake"
          }
        },
        about: "Drake é um cantor, rapper e compositor canadense, conhecido por seus sucessos no hip-hop e na música pop. Ele é um dos artistas mais influentes da atualidade.",
        genre: "Hip-Hop/Pop",
        followed_by_listeners: {
          connectOrCreate: [
            {
              create: {
                id: normalUser1.id,
                user_id: normalUser1.user_id
              },
              where: { id: normalUser1.id },
            },
            {
              create: {
                id: normalUser3.id,
                user_id: normalUser3.user_id
              },
              where: { id: normalUser3.id },
            },
            {
              create: {
              id: normalUser4.id,
              user_id: normalUser4.user_id
              },
              where: {id: normalUser4.id}
            }
          ]
        }
      }
    })
    
    const arianaGrande = await prisma.artist.create({
      data: {
        user: {
          create: {
            name: "Ariana Grande",
            email: "ariana@music.com",
            password: "senha123"
          }
        },
        about: "Ariana Grande é uma cantora e atriz norte-americana, conhecida por sua poderosa voz e sucesso na música pop. Ela é uma das artistas mais icônicas da atualidade.",
        genre: "Pop/R&B",
        followed_by_listeners: {
          connectOrCreate: [
            {
              create: {
                id: normalUser5.id,
                user_id: normalUser5.user_id
              },
              where: { id: normalUser5.id },
            },
            {
              create: {
                id: normalUser4.id,
                user_id: normalUser4.user_id
              },
              where: { id: normalUser4.id },
            },
            {
              create: {
              id: premiumUser1.id,
              user_id: premiumUser1.user_id
              },
              where: {id: premiumUser1.id}
            }
          ]
        }
      }
    });
    
    

  // PLAYLISTS

  const playlistAlok = await prisma.playlist.create({
    data: {
      name: "Playlist Alok",
      id_user: alok.user_id,
      description: "Uma Playlist de musicas do DJ Alok",
      id_music_genre: edm.id,
      audios: {
        create: [{
          name: "The Wall",
          id_music_genre: edm.id,
          id_artist: alok.id,
          release_date: new Date()
        }, 
        {
          name: "Favela",
          id_music_genre: pop.id,
          id_artist: alok.id,
          release_date: new Date()
        },
        {
          name: "Hear me now",
          id_music_genre: edm.id,
          id_artist: alok.id,
          release_date: new Date()
        },
        {
          name: "Ocean",
          id_music_genre: edm.id,
          id_artist: alok.id,
          release_date: new Date()
        },
        {
          name: "Never Let Me Go",
          id_music_genre: edm.id,
          id_artist: alok.id,
          release_date: new Date()
        }]
      }
    }
  })

  const playlistEdSheeran = await prisma.playlist.create({
    data: {
      name: "Playlist Ed Sheeran",
      id_user: edSheeran.user_id, 
      description: "Uma Playlist de músicas de Ed Sheeran",
      id_music_genre: pop.id, 
      audios: {
        create: [
          {
            name: "Shape of You",
            id_music_genre: pop.id, 
            id_artist: edSheeran.id, 
            release_date: new Date()
          },
          {
            name: "Thinking Out Loud",
            id_music_genre: pop.id,
            id_artist: edSheeran.id,
            release_date: new Date()
          },
          {
            name: "Perfect",
            id_music_genre: pop.id,
            id_artist: edSheeran.id,
            release_date: new Date()
          },
          {
            name: "Castle on the Hill",
            id_music_genre: pop.id,
            id_artist: edSheeran.id,
            release_date: new Date()
          },
          {
            name: "Photograph",
            id_music_genre: pop.id,
            id_artist: edSheeran.id,
            release_date: new Date()
          },
          {
            name: "Galway Girl",
            id_music_genre: pop.id,
            id_artist: edSheeran.id,
            release_date: new Date()
          },
        ]
      }
    }
  })
  
  const playlistBeyonce = await prisma.playlist.create({
    data: {
      name: "Playlist Beyoncé",
      id_user: beyonce.user_id, 
      description: "Uma Playlist de músicas de Beyoncé",
      id_music_genre: rnb.id, 
      audios: {
        create: [
          {
            name: "Halo",
            id_music_genre: rnb.id, 
            id_artist: beyonce.id, 
            release_date: new Date()
          },
          {
            name: "Crazy in Love",
            id_music_genre: rnb.id,
            id_artist: beyonce.id,
            release_date: new Date()
          },
          {
            name: "Single Ladies",
            id_music_genre: rnb.id,
            id_artist: beyonce.id,
            release_date: new Date()
          },
          {
            name: "Irreplaceable",
            id_music_genre: rnb.id,
            id_artist: beyonce.id,
            release_date: new Date()
          },
        ]
      }
    }
  })

  const playlistDrake = await prisma.playlist.create({
    data: {
      name: "Playlist Drake",
      id_user: drake.user_id, 
      description: "Uma Playlist de músicas de Drake",
      id_music_genre: hipHop.id, 
      audios: {
        create: [
          {
            name: "Hotline Bling",
            id_music_genre: hipHop.id, 
            id_artist: drake.id, 
            release_date: new Date()
          },
          {
            name: "God's Plan",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
          {
            name: "In My Feelings",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
          {
            name: "Started From the Bottom",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
          {
            name: "Nonstop",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
          {
            name: "One Dance",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
          {
            name: "Passionfruit",
            id_music_genre: hipHop.id,
            id_artist: drake.id,
            release_date: new Date()
          },
        ]
      }
    }
  })

  const playlistArianaGrande = await prisma.playlist.create({
    data: {
      name: "Playlist Ariana Grande",
      id_user: arianaGrande.user_id, 
      description: "Uma Playlist de músicas de Ariana Grande",
      id_music_genre: pop.id, 
      audios: {
        create: [
          {
            name: "Thank U, Next",
            id_music_genre: pop.id, 
            id_artist: arianaGrande.id, 
            release_date: new Date()
          },
          {
            name: "No Tears Left to Cry",
            id_music_genre: pop.id,
            id_artist: arianaGrande.id,
            release_date: new Date()
          },
          {
            name: "Dangerous Woman",
            id_music_genre: pop.id,
            id_artist: arianaGrande.id,
            release_date: new Date()
          },
          {
            name: "Breathin",
            id_music_genre: pop.id,
            id_artist: arianaGrande.id,
            release_date: new Date()
          },
          {
            name: "7 Rings",
            id_music_genre: pop.id,
            id_artist: arianaGrande.id,
            release_date: new Date()
          },
        ]
      }
    }
  });
  
  
  


} main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })