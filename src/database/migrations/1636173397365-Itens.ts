import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Itens1636173397365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "itens",
              columns: [
                {
                  name: "id",
                  type: "uuid",
                  isPrimary: true,
                },
                {
                  name: "nome",
                  type: "varchar",
                },
                {
                  name: "descricao",
                  type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "telefone",
                    type: "varchar",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("itens");
    }

}
