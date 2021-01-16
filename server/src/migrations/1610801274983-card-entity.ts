import {MigrationInterface, QueryRunner} from "typeorm";

export class cardEntity1610801274983 implements MigrationInterface {
    name = 'cardEntity1610801274983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "card" ("id" SERIAL NOT NULL, "orginal_content" character varying NOT NULL, "translated_content" character varying NOT NULL, CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "card"`);
    }

}
