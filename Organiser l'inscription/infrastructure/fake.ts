import { User } from "../domain/user";
import { UserRepository, EmailSender } from "../domain/ports";

export class FakeUserRepository implements UserRepository {
    users: User[] = [];

    async save(user: User) {
        this.users.push(user);
    }
}

export class FakeEmailSender implements EmailSender {
    sentTo: string[] = [];

    async sendWelcome(user: User) {
        this.sentTo.push(user.email);
        console.log(`Email envoyé à ${user.email}`);
    }
}