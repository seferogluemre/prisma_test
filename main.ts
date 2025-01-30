import { PrismaClient } from '@prisma/client'
import { data } from 'cheerio/dist/commonjs/api/attributes'
import { create } from 'domain'
import { title } from 'process'

const prisma = new PrismaClient()

async function main() {

    // const user = await prisma.user.create({
    //     data: {
    //         name: "Yunus emre seferoglu",
    //         email: "seferogluemre@mail.com",

    //         posts: {
    //             create: [
    //                 {
    //                     title: "Emre Seferoglu kimdir",
    //                     content: "Emre seferoglu İstanbulda dogdu"
    //                 },
    //                 {
    //                     title: "OnlyJS Akademi",
    //                 },
    //                 {
    //                     title: "Javascript Hangi alanlarda kullanılır",
    //                     content: "Web geliştirme,Mobil Uygulama geliştirme,Sunucu geliştirme,Ön Uç geliştirme"
    //                 },
    //             ]
    //         },
    //     },
    //     select: {
    //         name: true,
    //         posts: {
    //             select: {
    //                 title: true,
    //             },

    //         }

    //     }
    // })


    console.log(user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })