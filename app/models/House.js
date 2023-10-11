

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.creator = data.creator
    }

    get houseCardTemplate() {
        return `<div class="col-12 my-2 d-flex">
            <img class="car-img"
                src="${this.imgUrl}"
                alt="${this.description}">
            <div class="px-3">
                <h3>${this.year}</h3>
                <p>Bedrooms: ${this.bedrooms}</p>
                <p>Bathrooms: ${this.bathrooms}</p>
                <p>Levels: ${this.levels}</p>
                <p>$${this.price}</p>
                <p>${this.description}</p>
                <img class="rounded-circle car-creator" src="${this.creator.picture}" alt="${this.creator.name}">
                <h3>${this.creator.name}</h3>
                <button onclick="app.HousesController.removeHouse('${this.id}')" class="btn btn-danger rounded-pill text-end">Delete</button>
        </div>
      </div>
        `
    }

    static get FormTemplate() {
        return `<div class="col-12 px-5">
        <form onsubmit="app.HousesController.createHouse(event)">

          <div class="mb-2">
            <label for="bedrooms">Bedrooms</label>
            <input id="bedrooms" type="number" required maxlength="50" name="bedrooms" placeholder="# of bedrooms">
          </div>

          <div class="mb-2">
            <label for="bathrooms">Bathrooms</label>
            <input id="bathrooms" type="number" required maxlength="50" name="bathrooms"
              placeholder="# of bathrooms">
          </div>

          <div class="mb-2">
            <label for="levels">Levels</label>
            <input id="levels" type="number" required maxlength="50" name="levels" placeholder="# of levels">
          </div>

          <div class="mb-2">
            <label for="year">Year</label>
            <input id="year" type="number" required maxlength="4" name="year" placeholder="year...">
          </div>

          <div class="mb-2">
            <label for="imgUrl">Image URL</label>
            <input id="imgUrl" type="url" maxlength="500" name="imgUrl" placeholder="imgUrl...">
          </div>

          <div class="mb-2">
            <label for="price">Price</label>
            <input id="price" type="number" required maxlength="500" name="price" placeholder="$$$$">
          </div>

          <div class="mb-2">
            <label for="description">Description</label>
            <input id="description" type="text" maxlength="500" name="description" placeholder="description...">
          </div>
          <div class="text-end">
            <button class="btn btn-primary pill-rounded shadow">Submit</button>
          </div>


        </form>
      </div>
        `
    }
}



{
    const housedata = {

        "_id": "64640a81afbe13b729b6517f",
        "bedrooms": 6,
        "bathrooms": 4,
        "levels": 3,
        "imgUrl": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.icoc.edu%2Fwp-content%2Fuploads%2F2017%2F09%2Fshutterstock_523076503-e1506375581135.jpg&f=1&nofb=1&ipt=e393a4edd238ce89733d1dbb0ef3622955aca0ea753c07262b329c2bb413f4ad&ipo=images",
        "year": 1918,
        "price": 56000,
        "description": "We swear it is up to code",
        "creatorId": "6463f697af735760607741be",
        "createdAt": "2023-05-16T22:58:09.733Z",
        "updatedAt": "2023-05-16T22:58:09.733Z",
        "__v": 0,
        "creator": {
            "_id": "6463f697af735760607741be",
            "name": "SadFish",
            "picture": "https://c4.wallpaperflare.com/wallpaper/921/14/483/fish-sad-fantasy-art-1680x1050-animals-fish-hd-art-wallpaper-thumb.jpg",
            "id": "6463f697af735760607741be"
        },
        "id": "64640a81afbe13b729b6517f"
    }
}
