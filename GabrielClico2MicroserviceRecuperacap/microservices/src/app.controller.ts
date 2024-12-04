import { Controller, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { Registro } from './interfaces/registro-interface';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  logger = new Logger (AppController.name)

  @EventPattern('criar-registro')
  async criarRegistro(@Payload() registro:Registro){
    this.logger.log(`registro: ${JSON.stringify(registro)}`)
  }
}

