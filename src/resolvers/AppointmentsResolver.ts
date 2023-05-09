import { Arg, Resolver, Query, Mutation, FieldResolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/CreateAppointmentInput";
import { Appointment } from "../dtos/models/Appointment";
import { Customer } from "../dtos/models/Customer";

@Resolver(() => Appointment) // precisa especificar o model pra conseguir fazer relações
export class AppointmentsResolver {
    @Query(() => [Appointment])
        async getAll() {
            return Appointment.findAll();
        }
    
    @Query(() => Appointment)
        async getById(@Arg('id') id: string) {
            return Appointment.findByPk(id);
        }

    @Mutation(() => Appointment) // mutation - create, update, destroy
        async createAppointment(@Arg('data') data: CreateAppointmentInput) {
            return Appointment.create(data);
        }

    @FieldResolver(() => Customer)
        async customer(@Root() appointment: Appointment){
            return Customer.findByPk(appointment.customerId);
        }
}