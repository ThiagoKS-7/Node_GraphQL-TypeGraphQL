import { randomUUID } from "node:crypto";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Customer {
    @Field() id: string = randomUUID();
    @Field() name: string;
    @Field() email: string;

    static findAll() {
        return {
            id: 1,
            name: `Thiago ${randomUUID()}`,
            email: "thiagokasper@gmail.com",
        };
    }
    static findByPk(pk: string) {
        return {
            id: pk,
            name: `Thiago ${randomUUID()}`,
            email: "thiagokasper@gmail.com",
        };
    }

    static create(data: Object) {
        return {
            id: 1,
            name: `Thiago ${randomUUID()}`,
            email: "thiagokasper@gmail.com",
        };
    }
}