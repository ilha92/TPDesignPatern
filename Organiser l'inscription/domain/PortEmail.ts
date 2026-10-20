import { createUser, User } from "./user";
import { UserRepository, EmailSender } from "./ports";

type RegistrationData = {
    name: string;
    email: string;
};

export async function registerUser(
    data: RegistrationData,
    repository: UserRepository,
    emailSender: EmailSender,
): Promise<User> {
    const user = createUser(data.name, data.email);

    await repository.save(user);
    await emailSender.sendWelcome(user);

    return user;
}