import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { PrismaModule } from '../prisma/prisma.module';  // <-- Import PrismaModule

@Module({
  imports: [PrismaModule],  // <-- Add PrismaModule to the imports array
  providers: [UsersResolver],
})
export class UsersModule {}
