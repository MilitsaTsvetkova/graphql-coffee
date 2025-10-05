import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader/flavors-by-coffee.loader';
import { Coffee } from './entities/coffee.entity/coffee.entity';
import { Flavor } from './entities/flavor.entity/flavor.entity';

@Resolver(() => Coffee)
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors', () => [Flavor])
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    // Using the injected repository,
    // let’s retrieve ALL flavors that belong to a “parent coffee”.
    return this.flavorsByCoffeeLoader.load(coffee.id);
  }
}
