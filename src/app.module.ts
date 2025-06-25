import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { UsersModule } from './users/users.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://moez:moez@cluster0.5gxtv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    AuthModule,
    EventsModule,
    UsersModule,
  ],
})
export class AppModule {}
