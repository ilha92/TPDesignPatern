import { User } from "./user";

export type UserRepository = {
    save(user: User): Promise<void>;
};

export type EmailSender = {
    sendWelcome(user: User): Promise<void>;
};