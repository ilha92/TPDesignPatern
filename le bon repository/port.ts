type UserRepository = {
    save(user: User): Promise<void>;
};

class PostgresUserRepository implements UserRepository {
    async save(user: User) {}
}

class MongoUserRepository implements UserRepository {
    async save(user: User) {}
}

class MemoryUserRepository implements UserRepository {
    async save(user: User) {}
}