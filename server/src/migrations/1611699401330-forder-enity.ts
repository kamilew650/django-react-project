import {MigrationInterface, QueryRunner} from "typeorm";

export class forderEnity1611699401330 implements MigrationInterface {
    name = 'forderEnity1611699401330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "folder" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "from_lang" character varying NOT NULL, "to_lang" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_6278a41a706740c94c02e288df8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "original_content"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "translated_content"`);
        await queryRunner.query(`ALTER TABLE "card" ADD "before" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ADD "after" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ADD "folder_id" integer`);
        await queryRunner.query(`ALTER TABLE "card" ADD "user_id" integer`);
        await queryRunner.query(`ALTER TABLE "folder" ADD CONSTRAINT "FK_b5eabd10f2fe9607e6f5a6ec6bc" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_9b8eabefc1fdd72925eab13f9f0" FOREIGN KEY ("folder_id") REFERENCES "folder"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_00ec72ad98922117bad8a86f980" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_00ec72ad98922117bad8a86f980"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_9b8eabefc1fdd72925eab13f9f0"`);
        await queryRunner.query(`ALTER TABLE "folder" DROP CONSTRAINT "FK_b5eabd10f2fe9607e6f5a6ec6bc"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "user_id"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "folder_id"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "after"`);
        await queryRunner.query(`ALTER TABLE "card" DROP COLUMN "before"`);
        await queryRunner.query(`ALTER TABLE "card" ADD "translated_content" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" ADD "original_content" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "folder"`);
    }

}
