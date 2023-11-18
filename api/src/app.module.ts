import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import configuration from "./config/configuration";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./users/user.module";
import { RoomModule } from "./rooms/room.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env','.env.development.local', '.env.development'],
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('database.uri'),
      })
    }),
    AuthModule,
    UserModule,
    RoomModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
