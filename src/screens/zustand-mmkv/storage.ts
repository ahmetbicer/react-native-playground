import {MMKV} from 'react-native-mmkv';
import {StateStorage} from 'zustand/middleware';

export const storage = new MMKV();

export const zustandStorage: StateStorage = {
  setItem: async (name, value) => {
    storage.set(name, value);
    return Promise.resolve();
  },
  getItem: name => {
    const value = storage.getString(name);
    if (value) {
      return Promise.resolve(value);
    } else {
      return null;
    }
  },
  removeItem: name => {
    storage.delete(name);
    return Promise.resolve();
  },
};
