import { Item } from "../entities/Item";

interface CreateItemDTOInterface {
  nome: string;  
  descricao: string; 
  email: string;  
  telefone: string;
}

interface ItemRepositoryInterface {
  list(): Promise<Item[]>;
  create({ nome, descricao, email, telefone }: CreateItemDTOInterface): Promise<void>;
}

export { ItemRepositoryInterface, CreateItemDTOInterface };