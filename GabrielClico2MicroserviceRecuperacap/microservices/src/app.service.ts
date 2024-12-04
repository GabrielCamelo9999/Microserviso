import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getConsulta(data: { id: string }): any {
  // Aqui você pode fazer a consulta ao banco de dados ou outra lógica
  return { id: data.id, result: 'Resultado da consulta' }; // Exemplo de resposta
  }
}
