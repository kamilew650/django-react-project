import {MigrationInterface, QueryRunner} from "typeorm";

export class userEntity1611503204011 implements MigrationInterface {
    name = 'userEntity1611503204011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "is_active" boolean NOT NULL DEFAULT false, "email" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
