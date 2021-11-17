import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";
// Essa alteração no modelo se deu pois achou que não era necessário manter email e username, já que o usuário
// pode fazer login com o email
export class AlterUserDeleteUsername1636398345371
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn("users", "username");
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      "users",
      new TableColumn({
        name: "username",
        type: "varchar",
      })
    );
  }
}
