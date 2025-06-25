import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reservation, ReservationDocument } from './schemas/reservation.schema';
import { EventsService } from '../events/events.service';
import { Event } from '../events/schemas/event.schema';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>,
    private eventsService: EventsService,
  ) {}

  async create(eventId: string, userId: string, numberOfSeats: number) {
    // Check if event exists and has available seats
    const event = await this.eventsService.findOne(eventId);
    if (!event) {
      throw new NotFoundException(`Event ${eventId} not found`);
    }
    if (event.availableSeats < numberOfSeats) {
      throw new BadRequestException('Not enough available seats');
    }

    // Create reservation
    const createdReservation = new this.reservationModel({
      user: userId,
      event: eventId,
      numberOfSeats,
    });

    // Update available seats
    event.availableSeats -= numberOfSeats;
    await event.save();

    return createdReservation.save();
  }

  async findAll() {
    return this.reservationModel.find().exec();
  }

  async remove(id: string) {
    const reservation = await this.reservationModel.findById(id).exec();
    if (!reservation) {
      throw new NotFoundException(`Reservation ${id} not found`);
    }

    // Restore available seats
    const event = await this.eventsService.findOne(reservation.event.toString());
    event.availableSeats += reservation.numberOfSeats;
    await event.save();

    return this.reservationModel.findByIdAndDelete(id).exec();
  }

  async findByUser(userId: string) {
    return this.reservationModel.find({ user: userId }).exec();
  }
}
