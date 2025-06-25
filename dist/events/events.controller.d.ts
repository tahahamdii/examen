/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { EventsService } from './events.service';
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(createEventDto: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument> & import("./schemas/event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument> & import("./schemas/event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument> & import("./schemas/event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateEventDto: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument> & import("./schemas/event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/event.schema").EventDocument> & import("./schemas/event.schema").Event & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
