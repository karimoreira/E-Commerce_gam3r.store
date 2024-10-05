import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProdutoModule } from './produto/produto.module';
import { DbModule } from './db/db.module';

@Module({
  imports: [ProdutoModule, DbModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
