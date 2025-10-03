import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from '../coffee.entity/coffee.entity';

@ObjectType({ description: 'Flavor model' })
@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  @Field((type) => ID)
  id: number;

  @Column()
  name: string;
  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
