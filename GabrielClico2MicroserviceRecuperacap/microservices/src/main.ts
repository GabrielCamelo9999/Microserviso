import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'], // URL do RabbitMQ
      queue: 'consulta_queue',        // Nome da fila
      queueOptions: {
        durable: false,              // Configuração da fila
      },
    },
  });

  await app.listen();
}
bootstrap();

