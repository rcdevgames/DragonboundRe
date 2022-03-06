import ServerData from "../Network/data/ServerData";
import Server from "../Model/Server";
import ResourceNotFoundException from "../Exception/ResourceNotFoundException";

class ServerRepository{
    findAll(){
        return new Promise(async (resolve, reject)=>{
            try{
                const servers = await this.findByQuery({});
                resolve(servers);
            }catch(e){
                reject(e);
            }
        });
    }

    findById(id){
        return new Promise(async (resolve, reject)=>{
            try{
                const server = await this.findByQuery({ id });
                if(server.length > 0){
                    resolve(server[0]);
                }
                else{
                    reject(new ResourceNotFoundException("id: " + id));
                }
            }catch(e){
                reject(e);
            }
        });
    }

    findByQuery(querys){
        return new Promise((resolve, reject)=>{
            const keys = Object.keys(querys);

            try{
                const servers = ServerData.filter(server => {
                    let result = true;
                    keys.forEach(key => {
                        if(server[key] !== querys[key]){
                            result = false;
                        }
                    });
                    return result;
                }).map(server => Server.fromHashMap(server));
                resolve(servers);
            }catch(ex){
                reject(ex);
            }
        });
    }
};

export default ServerRepository;