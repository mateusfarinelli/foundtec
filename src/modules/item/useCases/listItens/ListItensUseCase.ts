import { inject, injectable } from "tsyringe";

import { Item } from "../../entities/Item";
import { ItemRepositoryInterface } from "../../repositories/ItemRepositoryInterface";


@injectable()
class ListItensUseCase {
  constructor(
    @inject("ItemRepository")
    private itemRepository: ItemRepositoryInterface

  ) {}

  async execute(): Promise<Item[]> {
    const itens = await this.itemRepository.list();
    return itens;

  }

}

export { ListItensUseCase };