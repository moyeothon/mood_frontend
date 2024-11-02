import instance from "./instance";


export const makeMoim = async ({host, relationshipType, peopleCount, vibe, averageAge, commonInterests}) => {
    const selectedInfo = {
        host,
        relationshipType,
        peopleCount,
        vibe,
        averageAge,
        commonInterests
    };
    try {        
        const response = await instance.post('/api/gatherings', selectedInfo)
        return response.data
    }
    catch (error){
        throw error;
    }
}