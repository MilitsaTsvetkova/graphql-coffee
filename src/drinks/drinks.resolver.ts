import { Query, Resolver } from '@nestjs/graphql';
import { Drink } from '../common/interfaces/drink.interface/drink.interface';
import { Coffee } from '../coffees/entities/coffee.entity/coffee.entity';
import { Tea } from '../teas/entities/tea.entity/tea.entity';

@Resolver()
export class DrinksResolver {
  @Query(() => [Drink], { name: 'drinks' })
  async getDrinks(): Promise<Drink[]> {
    const coffees = new Coffee();
    coffees.id = 1;
    coffees.name = 'Cappuccino';
    coffees.brand = 'Starbucks';

    const teas = new Tea();
    teas.name = 'Green Tea';

    return [coffees, teas];
  }
}
