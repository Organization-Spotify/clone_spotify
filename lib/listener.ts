import { prisma } from "./prisma";

// Tipo do objeto Listener contendo todos seus atributos
export type Listener = {
    user: {
        id: Number,
        profile_pic: any,
        email: string,
        name:  string,
        created_playlists: any[]
    }
    id: Number,
    is_premium: Boolean,
    favorited_playlists: any[],
    favorited_songs: any[],
    following: any[]
}

// Função para retornar todos os dados dos Listeners do BD
export async function getListeners() {
    const dados = await prisma.listener.findMany({
        include: {
            user: { 
                select: {
                name: true,
                email: true,
                profile_pic: true,
                created_playlists: true,
                password: false // Retirando a senha do usuario na hora de fazer a query
                }
            },
            favorited_playlists: true,
            favorited_songs: true,
            following: true
        },
        orderBy: [{
            id: 'desc'
        }]
    })

    return dados
}

// Função para retorna um Listener do BD especifico com base no email enviado para função
export async function getListener(email:string) {
    const dadosUser = await prisma.user.findUnique({
        where: {email: email},
        select: {
            id: true,
            name: true,
            email: true,
            profile_pic: true,
            created_playlists: true,
            password: false, // Retirando a senha do usuario na hora de fazer a query
            listener: {
                include: {
                    favorited_playlists: true,
                    favorited_songs: true,
                    following: true
                }
            }
            }
    })

    // Verificando se com o email oferecido foi possivel encontrar um User e em seguida se esse User possui ligação com um Listener
    if (dadosUser !== null && dadosUser.listener !== null) {
        const dadosListener: Listener = {
            user: {
                id: dadosUser.id,
                profile_pic: dadosUser.profile_pic,
                email: dadosUser.email,
                name:  dadosUser.name,
                created_playlists: dadosUser.created_playlists
            },
            id: dadosUser.listener.id,
            is_premium: dadosUser.listener.is_premium,
            favorited_playlists: dadosUser.listener.favorited_playlists,
            favorited_songs: dadosUser.listener.favorited_songs,
            following: dadosUser.listener.following
        }
        return dadosListener
    } else {
        return null
    }


    
}