import { Field, ObjectType } from "type-graphql";
import { randomUUID } from "node:crypto";

@ObjectType()
export class Appointment {
   
    @Field() id: string = randomUUID();
    @Field() customerId: string;
    @Field() startsAt: Date;
    @Field() endsAt: Date;
    
    static findAll() {
        return [{
            id: randomUUID(),
            customerId: 1,
            startsAt: new Date(),
            endsAt: new Date()
        }];
    }
    static findByPk(pk: string) {
        return {
            id: pk,
            customerId: 1,
            startsAt: new Date(),
            endsAt: new Date()
        }
    }

    static create(data: Object) {
        return {
            id: randomUUID(),
            customerId: 1,
            startsAt: new Date(),
            endsAt: new Date()
        }
    }
}