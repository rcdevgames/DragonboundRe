export class DbDeleteUserAvatarEquipped {
    constructor(
        repository
    ) {
        this.repository = repository;
    }   

    async delete() {
        const response = await this.repository.delete(...arguments);
        return response;
    }
}
        
        