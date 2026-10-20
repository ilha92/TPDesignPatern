type StoragePort = {
    set<T>(key: string, value: T): void;
    get<T>(key: string): T | null;
    remove(key: string): void;
};

function saveUser(
    storage: StoragePort,
    user: User,
){
    storage.set("user", user);
}

const localStorageAdapter: StoragePort = {
    set(key, value){
        localStorage.setItem(
            key,
            JSON.stringify(value),
        );
    },

    get(key) {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    remove(key) {
        localStorage.removeItem(key);
    },
};

const sessionStorageAdapter: StoragePort = {
    set(key, value){
        sessionStorage.setItem(
            key,
            JSON.stringify(value),
        );
    },

    get(key) {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    remove(key) {
        sessionStorage.removeItem(key);
    },
};


const fileTestAdapter: StoragePort = {
    set(key, value){
        fileTest.setItem(
            key,
            JSON.stringify(value),
        );
    },

    get(key) {
        const value = fileTest.getItem(key);
        return value ? JSON.parse(value) : null;
    },

    remove(key) {
        sessionStorage.removeItem(key);
    },
};
