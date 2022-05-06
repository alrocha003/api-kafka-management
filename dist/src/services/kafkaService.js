'use strict';
class KafkaService {
    constructor(uri, username, password) {
        this._uri = '';
        this._username = '';
        this._password = '';
        this._uri = uri;
        this._username = username;
        this._password = password;
    }
    Conect() {
        try {
            return true;
        }
        catch (exception) {
            return false;
        }
    }
    Publish(data) {
        return true;
    }
}
