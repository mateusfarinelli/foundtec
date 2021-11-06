import { inject, injectable } from "tsyringe";
import { ItemRepositoryInterface } from "../../repositories/ItemRepositoryInterface";

interface RequestInterface {
  nome: string;  
  descricao: string; 
  email: string;  
  telefone: string;
}

@injectable()
class CreateItemUseCase {
  constructor(
    @inject("ItemRepository")
    private itemRepository: ItemRepositoryInterface
  ) {}

  async execute({ nome, descricao, email, telefone }: RequestInterface): Promise<void> {
    this.itemRepository.create({ nome, descricao, email, telefone });
  }
}

export { CreateItemUseCase };