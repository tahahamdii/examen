import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Event.name) private eventModel: Model<EventDocument>,
  ) {}

  async create(createEventDto: any) {
    const createdEvent = new this.eventModel(createEventDto);
    return createdEvent.save();
  }

  async findAll() {
    return this.eventModel.find().exec();
  }

  async findOne(id: string) {
    return this.eventModel.findById(id).exec();
  }

  async update(id: string, updateEventDto: any) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto, { new: true }).exec();
  }

  async remove(id: string) {
    return this.eventModel.findByIdAndDelete(id).exec();
  }
}
