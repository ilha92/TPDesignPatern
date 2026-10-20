type Env = "production" | "development" | "test";

function createUserRepository(env: Env): UserRepository {
    switch (env) {
        case "production":
            return new PostgresUserRepository();
        case "development":
            return new MongoUserRepository();
        case "test":
            return new MemoryUserRepository();
    }
}

// à un seul endroit, au démarrage de l'appli
const env = (process.env.NODE_ENV ?? "development") as Env;
const userRepository = createUserRepository(env);

// ensuite, on injecte le repository, le reste du code ne connaît pas l'environnement
async function registerUser(repo: UserRepository, user: User) {
    await repo.save(user);
}

await registerUser(userRepository, { id: "1", name: "Ilias" });

const repo = createUserRepository("test");
await registerUser(repo, { id: "1", name: "Ilias" });
console.log(await repo.findById("1"));