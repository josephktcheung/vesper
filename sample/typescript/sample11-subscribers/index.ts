import { bootstrap } from "../../../src";
import { MessageController } from "./controller/MessageController";
import { Message } from "./entity/Message";
import { PubSub } from "graphql-subscriptions";
import { MessageResolver } from "./resolver/MessageResolver";

const pubSub = new PubSub();

bootstrap({
    port: 3000,
    controllers: [MessageController],
    resolvers: [MessageResolver],
    entities: [Message],
    schemas: [__dirname + "/schema/**/*.graphql"],
    setupContainer: container => container.set(PubSub, pubSub),
    subscriptionAsyncIterator: triggers => pubSub.asyncIterator(triggers)
});