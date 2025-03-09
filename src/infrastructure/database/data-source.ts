import {DataSource} from "typeorm";
import {User} from "../../features/user/entities/user.entity";

export const AppDataSource = new DataSource({
    type:"postgres",
    host: process.env["DB_HOST"],
    port: (process.env["DB_PORT"] ?? 5432) as number,
    password: process.env["DB_PASSWORD"],
    database: process.env["DB_NAME"],
    synchronize: false,
    logging: false,
    entities: [User],
    migrations:["./src/infrastructure/database/migrations/*.ts"],
})