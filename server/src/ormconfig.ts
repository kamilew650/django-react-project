import * as dotenv from "dotenv";
import { join } from "path";
import { ConnectionOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

dotenv.config();

const ormConfig: ConnectionOptions[] = [
  {
    name: "default",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    migrationsRun: false,
    entities: [join(__dirname, "**/**.entity{.ts,.js}")],
    migrations: [join(__dirname, "/migrations/**/*{.ts,.js}")],
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
      migrationsDir: join("src/migrations"),
    },
    migrationsTableName: "db_migration",
  },
  {
    name: "seed-development",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    migrationsRun: false,
    entities: [join(__dirname, "**/**.entity{.ts,.js}")],
    migrations: [join(__dirname, "/seeds/development/**/*{.ts,.js}")],
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
      migrationsDir: join("src/seeds/development"),
    },
    migrationsTableName: "db_seed",
  },
  {
    name: "seed-staging",
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    migrationsRun: false,
    entities: [join(__dirname, "**/**.entity{.ts,.js}")],
    migrations: [join(__dirname, "/seeds/staging/**/*{.ts,.js}")],
    namingStrategy: new SnakeNamingStrategy(),
    cli: {
      migrationsDir: join("src/seeds/staging"),
    },
    migrationsTableName: "db_seed",
  },
];

export = ormConfig;