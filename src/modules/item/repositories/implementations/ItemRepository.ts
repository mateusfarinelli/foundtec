import { getRepository, Repository } from "typeorm";
import { Item } from "../../entities/Item";
import { CreateItemDTOInterface, ItemRepositoryInterface } from "../ItemRepositoryInterface";

class ItemRepository implements ItemRepositoryInterface {
  private repository: Repository<Item>;

  constructor() {
    this.repository = getRepository(Item);
  }

  async create({nome, descricao, email, telefone}: CreateItemDTOInterface): Promise<void> {
    const category = this.repository.create({
      nome,
      descricao,
      email,
      telefone
    });
    await this.repository.save(category);
  }

  async list(): Promise<Item[]> {
    const Item = await this.repository.find();

    return Item;
  }
}
export { ItemRepository };