import { Plugins } from "@capacitor/core";
import { isPlatform } from '@ionic/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';
const { CapacitorDataStorageSqlite } = Plugins;

export async function set(key: string, value: any): Promise<void> {
    let storage: any = {};
    if (isPlatform(window, "ios") || isPlatform(window, "android") || isPlatform(window, "capacitor") || isPlatform(window, "cordova")) {
        storage = CapacitorDataStorageSqlite;
    } else {
        storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;
    }
    return await storage.set({
        key: key,
        value: JSON.stringify(value)
    });
}

export async function get(key: string): Promise<any> {
    let storage: any = {};
    if (isPlatform(window, "ios") || isPlatform(window, "android") || isPlatform(window, "capacitor") || isPlatform(window, "cordova")) {
        storage = CapacitorDataStorageSqlite;
    } else {
        storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;
    }
    const item = await storage.get({ key: key });
    return JSON.parse(item.value);
}

export async function remove(key: string): Promise<void> {
    let storage: any = {};
    if (isPlatform(window, "ios") || isPlatform(window, "android") || isPlatform(window, "capacitor") || isPlatform(window, "cordova")) {
        storage = CapacitorDataStorageSqlite;
    } else {
        storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;
    }
    return await storage.remove({
        key: key
    });
}