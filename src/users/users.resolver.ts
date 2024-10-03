import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserDto } from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => UserDto)
export class UsersResolver {
  constructor(private prisma: PrismaService) {}

  @Query(() => [UserDto])
  async users(): Promise<UserDto[]> {
    return this.prisma.user.findMany();
  }

  @Mutation(() => UserDto)
  async createUser(
    @Args('name') name: string,
    @Args('email') email: string,
  ): Promise<UserDto> {
    return this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }
}
