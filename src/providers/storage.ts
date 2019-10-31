import { Plugins } from "@capacitor/core";
import { isPlatform } from '@ionic/core';
import * as CapacitorSQLPlugin from 'capacitor-data-storage-sqlite';
const { CapacitorDataStorageSqlite } = Plugins;

class StorageController {

    private storage: any = {};

    constructor() {
        if (isPlatform(window, "ios") || isPlatform(window, "android") || isPlatform(window, "capacitor") || isPlatform(window, "cordova")) {
            this.storage = CapacitorDataStorageSqlite;
        } else {
            this.storage = CapacitorSQLPlugin.CapacitorDataStorageSqlite;
        }
    }

    async set(key: string, value: any): Promise<void> {
        return await this.storage.set({
            key: key,
            value: JSON.stringify(value)
        });
    }

    async get(key: string): Promise<any> {
        const item = await this.storage.get({ key: key });
        return JSON.parse(item.value);
    }

    async remove(key: string): Promise<void> {
        return await this.storage.remove({
            key: key
        });
    }

}

export const Storage = new StorageController();