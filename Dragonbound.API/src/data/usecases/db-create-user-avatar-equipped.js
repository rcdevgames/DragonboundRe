export class DbCreateUserAvatarEquipped {
    constructor(
        repository
    ) {
        this.repository = repository;
    }   

    async create() {
        const response = await this.repository.create(...arguments);
        return response;
    }
}
        
        