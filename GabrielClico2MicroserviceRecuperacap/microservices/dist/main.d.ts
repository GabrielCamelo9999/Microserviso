import { Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Registro } from './interfaces/registro-interface';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    logger: Logger;
    criarRegistro(registro: Registro): Promise<void>;
}
