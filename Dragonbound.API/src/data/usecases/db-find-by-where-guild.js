export class DbFindByWhereGuild {
    constructor(
        repository
    ) {
        this.repository = repository;
    }   

    async findByWhere() {
        const response = await this.repository.findByWhere(...arguments);
        return response;
    }
}
        
        