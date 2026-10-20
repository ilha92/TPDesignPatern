import { registerUser } from "./domain/registerUser";
import { FakeUserRepository, FakeEmailSender } from "./infrastructure/fakes";

const repository = new FakeUserRepository();
const emailSender = new FakeEmailSender();

const user = await registerUser(
    { name: "Ilias", email: "ilias@mail.com" },
    repository,
    emailSender,
);

console.log(user);
console.log(repository.users.length); // 1
console.log(emailSender.sentTo);      // ["ilias@mail.com"]