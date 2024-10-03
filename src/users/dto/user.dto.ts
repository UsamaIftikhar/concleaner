// user.dto.ts
import { Field, Int, ObjectType, GraphQLISODateTime } from '@nestjs/graphql';

@ObjectType()
export class UserDto {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => GraphQLISODateTime)
  createdAt: Date;
}
