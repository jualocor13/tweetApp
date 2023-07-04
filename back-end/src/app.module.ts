import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { TeamsModule } from './teams/team.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductsModule,
    UsersModule,
    AuthModule,
    TeamsModule,
    MongooseModule.forRoot(
      'mongodb+srv://jualocor13:OJnWGC1Z02i9GEym@golang-api-padel.ccvjrvk.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
