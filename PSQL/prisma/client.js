//converts crud operations cmd/queries into sql queries

const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
module.exports  = prisma;
