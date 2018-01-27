
import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import {StorageService} from "./storage.service";
import "../../rxjs-extensions";


@Injectable()
export class JKMHttpClient {


    private ACCESS_TOKEN_HEADER: string = 'Access-Token';
    private ACCESS_TOKEN_HEADER2: string = 'access-token';

    /**
     *
     * @param http
     * @param _config
     * @param _mpstorage
     */
    constructor( private http:Http,
                 private _cdstorage:StorageService) {
    }
    /**
     *
     * @param headers
     */
    createAuthorizationHeader(headers:Headers) {
        console.log("Create Authorization Header");
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Authorization', 'Bearer '+this._cdstorage.getSessionStorageData(this.ACCESS_TOKEN_HEADER2));
    }

    /**
     *
     * @param url
     * @returns {any}
     */
    get(url:string) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        url = url +'?t='+Date.now();
        return new Promise((resolve, reject) => {
            this.http.get(url, {
                headers: headers
            }).toPromise().then(resp=>{
                resolve(resp);
            }, err=> {
                this.handleError(err);
                reject(err);
            });
        });
    }
    /**
     *
     * @param url
     * @param options
     * @returns {any}
     */
    getWithOptions(url:string, options:any) {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        options.headers = headers;
        return new Promise( (resolve, reject) => {
            this.http.get(url,options).toPromise().then( (resp:Response) =>{
                resolve(resp)
            }, err=> {
                this.handleError(err);
                reject(err)
            });
        });
    }
    /**
     *
     * @param url
     * @param data
     * @returns {any}
     */
    post(url:string, data:any): Promise<any> {
        url = url +'?t='+Date.now();
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return new Promise( (resolve, reject) => {
            this.http.post(url, data, {
                headers: headers
            }).toPromise().then( (resp:Response) => {
                this.saveAuthTokenHeader(resp);
                resolve(resp);
            }, err=> {
                this.handleError(err);
                reject(err);
            });
        })
    }

    /**
     *
     * @param url
     * @param data
     * @returns {any}
     */
    put(url:string, data:any) {
        url = url +'?t='+Date.now();
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return new Promise((resolve, reject) => {
            this.http.put(url, data, {
                headers: headers
            }).toPromise().then( (resp:Response) => {
                resolve(resp);
            }, err=> {
                this.handleError(err);
                reject(err);
            });
        });

    }

    saveAuthTokenHeader(response:Response){
        let accessToken = response.headers.toJSON()[this.ACCESS_TOKEN_HEADER2];
        if(!accessToken){
            accessToken = response.headers.toJSON()[this.ACCESS_TOKEN_HEADER];
        }
        if(accessToken){
            this._cdstorage.setSessionStorage(this.ACCESS_TOKEN_HEADER2, accessToken)
        }
    }

    handleError(error:any){
        console.log("Handle error");
        if(error && error.headers.toJSON()[this.ACCESS_TOKEN_HEADER]){ //Some error call return access token
           console.log('error');
        }else{ //if not reset the current access-token
            console.log('error');
        }
    }
}