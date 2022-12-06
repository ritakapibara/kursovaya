import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._item = [{id:1, name: "kletchatka", price: 50, desc: "good", img: "img4.jpg"}]
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    
    setDevices(item) {
        this._item = item
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    
    get item() {
        return this._item
    }
    
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}