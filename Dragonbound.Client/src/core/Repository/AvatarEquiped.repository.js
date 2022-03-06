import AvatarEquipedData from "../Network/data/AvatarEquipedData";
import AvatarEquiped from "../Model/AvatarEquiped";

class AvatarEquipedRepository{
    findOneByUserId(userId){
        return new Promise((resolve, reject)=>{
            const avatarEquiped = AvatarEquipedData.find(avatarEquiped => avatarEquiped.user_id === userId);
            if(avatarEquiped){
                resolve(AvatarEquiped.fromHashMap(avatarEquiped));
            }
            else{
                reject(new Error("AvatarEquiped not found"));
            }
        });
    }   
    
    findByQuery(querys){
        return new Promise((resolve, reject)=>{
            const keys = Object.keys(querys);

            try{
                const avatarEquipeds = AvatarEquipedData.filter(avatarEquiped => {
                    let result = true;
                    keys.forEach(key => {
                        if(avatarEquiped[key] !== querys[key]){
                            result = false;
                        }
                    });
                    return result;
                }).map(avatarEquiped => AvatarEquiped.fromHashMap(avatarEquiped));
                resolve(avatarEquipeds);
            }catch(ex){
                reject(ex);
            }
        });
    }
}

export default AvatarEquipedRepository;