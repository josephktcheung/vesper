import { Resolve, Resolver, ResolverInterface } from "../../../../src";
import { EntityManager } from "typeorm";
import { Message } from "../entity/Message";

@Resolver(Message)
export class MessageResolver implements ResolverInterface<Message> {
    constructor(private entityManager: EntityManager) {
    }

    @Resolve()
    async test(messages: Message[]) {
        return messages.map(m => 'test');
    }
}