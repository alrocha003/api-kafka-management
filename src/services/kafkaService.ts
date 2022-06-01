'use strict'
import { Kafka } from "kafkajs";

class KafkaService {
    private _uriBroker: string = '';
    private _topic: string = '';

    private _kafka: Kafka;
    private _consumer: any;
    private _producer: any;

    constructor(uri: string, topic: string) {

        this._uriBroker = uri;
        this._topic = topic;
        this._kafka = new Kafka({ brokers: [this._uriBroker] })
        this._consumer = this._kafka.consumer({ groupId: "" + Date.now() });
        this._producer = this._kafka.producer();

    }

    public async Conect(): Promise<boolean> {
        try {
            await this._consumer.connect();
            return true;
        }
        catch (exception) {
            return false;
        }
    }

    public async Subscribe(): Promise<any> {
        try {
            await this._consumer.subscribe({ topic: this._topic, fromBeginning: true });
            await this._consumer.run({
                eachMessage: async (data: any) => {
                    console.debug(data);
                }
            });
        } catch (exception) {
            console.error(exception);
            return exception;
        }
    }

    public async SendEvent(data: string): Promise<boolean> {
        try {

            await this._producer.connect();

            await this._producer.send({
                topic: this._topic,
                messagers: [data]
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

export default KafkaService;