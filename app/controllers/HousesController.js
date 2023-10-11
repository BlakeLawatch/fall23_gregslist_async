import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";



function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.houseCardTemplate)
    console.log(content, 'draw houses function');
    setHTML('houseCardTemplate', content)
}

function _drawHouseTemplate() {
    if (!AppState.account) {
        return
    }
    setHTML('FormTemplate', House.FormTemplate)
}



export class HousesController {
    constructor() {
        console.log('controller works');
        this.getHouses()



        AppState.on('houses', _drawHouses)
        AppState.on('houses', _drawHouseTemplate)
    }

    async getHouses() {
        try {
            await housesService.getHouses()
        } catch (error) {
            Pop.error(error)
            console.log(error, 'popped an error in the get house controller');
        }


    }
    async createHouse(event) {
        try {
            event?.preventDefault()
            console.log('form submitted');
            const form = event.target
            const formData = getFormData(form)
            await housesService.createHouse(formData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.log(error, 'popped an error in the create house controller');
        }
    }
    async removeHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm('You sure about that?')
            if (!wantsToDelete) {
                return
            }
            await housesService.removeHouse(houseId)
        } catch (error) {
            Pop.error(error)
            console.log(error, 'error popped in the remove house controller');
        }
    }
}