import { Plugins } from "@capacitor/core";
const { CapacitorDataStorageSqlite } = Plugins;

export async function set(key: string, value: any): Promise<void> {
    await CapacitorDataStorageSqlite.set({
        key: key,
        value: JSON.stringify(value)
    });
}

export async function get(key: string): Promise<any> {
    const item = await CapacitorDataStorageSqlite.get({ key: key });
    return JSON.parse(item.value);
}

export async function remove(key: string): Promise<void> {
    await CapacitorDataStorageSqlite.remove({
        key: key
    });
}