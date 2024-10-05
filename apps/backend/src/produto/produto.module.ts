import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { ProdutoPrisma } from './produto.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController],
  providers: [ProdutoPrisma],
})
export class ProdutoModule {}
