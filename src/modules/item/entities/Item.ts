import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("itens")
class Item {
  @PrimaryColumn()
  id?: string;

  @Column()
  nome: string;

  @Column()
  descricao: string;

  @Column()
  email: string;

  @Column()
  telefone: string;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
export { Item };