import { AppState } from "../AppState.js"
import { House } from "../models/House.js";
import { api } from "./AxiosService.js"





class HousesService {

    async getHouses() {
        const res = await api.get('api/houses')
        // console.log('got the cars daddyo', res);
        AppState.houses = res.data.map(item => new House(item))

    }

    async createHouse(formData) {
        const res = await api.post('api/houses', formData)
        console.log(res, 'house created maybe?');
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')
    }

    async removeHouse(houseId) {
        const res = await api.delete(`api/houses/${houseId}`)
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        if (houseIndex == -1) {
            return
        }
        AppState.houses.splice(houseIndex, 1)
        AppState.emit('houses')
    }

}


export const housesService = new HousesService