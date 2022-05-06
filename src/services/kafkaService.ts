'use strict'

class KafkaService {
    private _uri: string = '';
    private _username: string = '';
    private _password: string = '';

    constructor(uri: string, username: string, password: string) {
        this._uri = uri;
        this._username = username;
        this._password = password;
    }

    public Conect(): boolean {
        try {
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    public Publish(data: string): boolean {
        return true;
    }
}