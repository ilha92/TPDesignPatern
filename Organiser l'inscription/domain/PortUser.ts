export type User = {
    id: string;
    name: string;
    email: string;
};

export function createUser(name: string, email: string): User {
    if (!name.trim()) throw new Error("Nom obligatoire");
    if (!email.includes("@")) throw new Error("Email invalide");

    return { id: crypto.randomUUID(), name, email };
}