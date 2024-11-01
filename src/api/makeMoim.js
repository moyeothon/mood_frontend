import instance from "./instance";

export const makeMoim = async ({host,relationshipType,peopleCount,vibe,averageAge,commonInterests}) => {
    try {
        data
        const response = await instance.post('/api/gathering', {
            host: host,
            relationshipType: relationshipType,
            peopleCount: peopleCount,
            vibe: vibe,
            averageAge: averageAge,
            commonInterests: commonInterests
        })
        return response.data
    }
    catch (error){
        throw error;
    }
}