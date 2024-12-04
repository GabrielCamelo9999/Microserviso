import { Injectable, OnModuleInit, INestApplication } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

//@Injectable
export class PrismaService extends PrismaClient
    implements OnModuleInit {
    /**
    * @returns {promise<void>}
    */
    async onModuleInit() {
        await this.$connect();
    }

    /**
    * @param {INestApplication} app 
    * @returns {void}
    */
    async enableShutdownHooks(app: INestApplication) {
        process.on("beforeExit", async () => {
        await app.close();
        });
    }
}