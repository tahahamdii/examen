"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const reservation_schema_1 = require("./schemas/reservation.schema");
const events_service_1 = require("../events/events.service");
let ReservationsService = class ReservationsService {
    constructor(reservationModel, eventsService) {
        this.reservationModel = reservationModel;
        this.eventsService = eventsService;
    }
    async create(eventId, userId, numberOfSeats) {
        const event = await this.eventsService.findOne(eventId);
        if (!event) {
            throw new common_1.NotFoundException(`Event ${eventId} not found`);
        }
        if (event.availableSeats < numberOfSeats) {
            throw new common_1.BadRequestException('Not enough available seats');
        }
        const createdReservation = new this.reservationModel({
            user: userId,
            event: eventId,
            numberOfSeats,
        });
        event.availableSeats -= numberOfSeats;
        await event.save();
        return createdReservation.save();
    }
    async findAll() {
        return this.reservationModel.find().exec();
    }
    async remove(id) {
        const reservation = await this.reservationModel.findById(id).exec();
        if (!reservation) {
            throw new common_1.NotFoundException(`Reservation ${id} not found`);
        }
        const event = await this.eventsService.findOne(reservation.event.toString());
        event.availableSeats += reservation.numberOfSeats;
        await event.save();
        return this.reservationModel.findByIdAndDelete(id).exec();
    }
    async findByUser(userId) {
        return this.reservationModel.find({ user: userId }).exec();
    }
};
ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(reservation_schema_1.Reservation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        events_service_1.EventsService])
], ReservationsService);
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map