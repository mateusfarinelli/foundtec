import { container } from "tsyringe";

import { ItemRepositoryInterface } from '../../modules/item/repositories/ItemRepositoryInterface'
import { ItemRepository } from '../../modules/item/repositories/implementations/ItemRepository'

container.registerSingleton<ItemRepositoryInterface>(
  "ItemRepository",
  ItemRepository
);
