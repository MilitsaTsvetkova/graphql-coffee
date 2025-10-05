import { Query, Resolver } from '@nestjs/graphql';
import { Coffee } from '../coffees/entities/coffee.entity/coffee.entity';
import { Tea } from '../teas/entities/tea.entity/tea.entity';
import { DrinksResultUnion } from '../common/unions/drinks-result.union';

@Resolver()
export class DrinksResolver {
  @Query(() => [DrinksResultUnion], { name: 'drinks' })
  async getDrinks(): Promise<(typeof DrinksResultUnion)[]> {
    const coffees = new Coffee();
    coffees.id = 1;
    coffees.name = 'Cappuccino';
    coffees.brand = 'Starbucks';

    const teas = new Tea();
    teas.name = 'Green Tea';

    return [coffees, teas];
  }
}
