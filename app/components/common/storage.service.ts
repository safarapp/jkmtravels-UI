import {Injectable} from "@angular/core";

@Injectable()
export class StorageService
{
    constructor() {

    }

    getSessionStorageData(key:string){
        return sessionStorage && sessionStorage.getItem(key);
    }

    getLocalStorageData(key:string){
        return localStorage && localStorage.getItem(key);
    }

    removeLocalStorage(key:string){
        localStorage.removeItem(key);
    }

    removeSessionStorage(key:string){
        sessionStorage.removeItem(key);
    }
    setLocalStorage(key:string, value:string){
        localStorage.setItem(key, value);
    }
    setSessionStorage(key:string, value:string){
        sessionStorage.setItem(key, value);
    }
}

