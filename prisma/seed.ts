import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Début du seeding...')

  // Créer des types de drogues
  const drugTypes = await Promise.all([
    prisma.drugType.upsert({
      where: { name: 'Cocaïne' },
      update: {},
      create: { name: 'Cocaïne' },
    }),
    prisma.drugType.upsert({
      where: { name: 'Héroïne' },
      update: {},
      create: { name: 'Héroïne' },
    }),
    prisma.drugType.upsert({
      where: { name: 'Marijuana' },
      update: {},
      create: { name: 'Marijuana' },
    }),
    prisma.drugType.upsert({
      where: { name: 'Méthamphétamine' },
      update: {},
      create: { name: 'Méthamphétamine' },
    }),
  ])

  console.log('✅ Types de drogues créés:', drugTypes.length)

  // Créer un utilisateur de test
  const testUser = await prisma.user.upsert({
    where: { email: 'test@example.com' },
    update: {},
    create: {
      email: 'test@example.com',
      name: 'Tony Montana',
      role: 'user',
      points: 1000,
      level: 5,
      experience: 2500,
      money: 50000,
    },
  })

  console.log('✅ Utilisateur de test créé:', testUser.email)

  // Créer quelques drogues pour l'utilisateur
  const drugs = await Promise.all([
    prisma.drug.upsert({
      where: { id: 'drug-1' },
      update: {},
      create: {
        id: 'drug-1',
        name: 'Cocaïne Pure',
        price: 5000,
        drugTypeId: drugTypes[0].id,
        userId: testUser.id,
      },
    }),
    prisma.drug.upsert({
      where: { id: 'drug-2' },
      update: {},
      create: {
        id: 'drug-2',
        name: 'Héroïne Blanche',
        price: 3000,
        drugTypeId: drugTypes[1].id,
        userId: testUser.id,
      },
    }),
  ])

  console.log('✅ Drogues créées:', drugs.length)

  // Créer quelques tâches
  const tasks = await Promise.all([
    prisma.task.upsert({
      where: { id: 'task-1' },
      update: {},
      create: {
        id: 'task-1',
        name: 'Livraison Express',
        description: 'Livrez 5kg de cocaïne dans le quartier nord',
        points: 100,
        experience: 50,
        userId: testUser.id,
      },
    }),
    prisma.task.upsert({
      where: { id: 'task-2' },
      update: {},
      create: {
        id: 'task-2',
        name: 'Protection de Territoire',
        description: 'Défendez votre territoire contre les rivaux',
        points: 200,
        experience: 100,
        userId: testUser.id,
      },
    }),
  ])

  console.log('✅ Tâches créées:', tasks.length)

  // Créer quelques planques
  const hideouts = await Promise.all([
    prisma.hideout.upsert({
      where: { id: 'hideout-1' },
      update: {},
      create: {
        id: 'hideout-1',
        name: 'Appartement de Base',
        place: 'Quartier Sud',
        price: 10000,
        rent: 500,
        stockage: 100,
        level: 1,
        space: 50,
        security: 30,
        userId: testUser.id,
      },
    }),
  ])

  console.log('✅ Planques créées:', hideouts.length)

  console.log('🎉 Seeding terminé avec succès!')
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 