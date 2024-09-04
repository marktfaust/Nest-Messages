import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        // DO NOT DO THIS IN REAL APPS BECAUSE SERVICE IS CREATING ITS OWN DEPENDENCY
        // (USE DEPENDENCY INJECTION INSTEAD)
        this.messagesRepo = new MessagesRepository();
    }

    async findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    async findAll() {
        return this.messagesRepo.findAll();
    }   

    async create(content: string) {
        return this.messagesRepo.create(content);
    }
}