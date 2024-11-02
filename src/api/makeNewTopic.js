import instance from "./instance";

export const makeNewTopic = async (id) => {    
    try {
        const response = await instance.patch(`/api/gatherings/topic/${id}`)

        return response.data;
    }
    catch (error) {
        throw error;
    }
}