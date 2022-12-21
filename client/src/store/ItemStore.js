import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor() {
        this._items = [{
            id: "123456",
            name:"Клетчатка сибирская Правильное Похудение 2.0 с пребиотиками",
            price:50,
            desc:"Плавное снижение и эффективное удержание оптимального веса с заботой о своём здоровье.",
            img:"images/img1.jpg",
            },
            {
                id: "123457",
                name:"Сибирская клетчатка «Витаминная»",
                price:55,
                desc:"Комплексный продукт из клетчатки и ягод для поддержания внутренних резервов организма в осеннее, весеннее время и в период восстановления после заболеваний.",
                img:"images/img1.jpg",
            
            },
            {
                id: "123458",
            name:"Сибирская клетчатка «Ржаная с фруктами»",
            price:45,
            desc:"Процесс снижение веса пойдет быстрее и эффективнее, если добавить в пищу клетчатку, которая поможет уменьшить аппетит, избежать случайных перекусов и снизить общую калорийность рациона питания.",
            img:"images/img1.jpg",
            },
            {
                id: "123459",
            name:"Сибирская клетчатка «Здоровые суставы»",
            price:60,
            desc:"Наш продукт способствует снижению веса, выведению токсинов, шлаков и лишней жидкости из организма, что оказывает полезное действие при комплексном лечении и профилактике заболеваний суставов.",
            img:"images/img4.jpg",
            },
            {
                id: "123460",
            name:"Сибирская клетчатка «Здоровая Печень» ФОРТЕ",
            price:45,
            desc:"Облегчает работу печени за счет своевременного выведения пищевых и бактериальных токсинов, канцерогенов из организма.",
            img:"images/img5.jpg",
            }]
        this._types = [{id:1,name:'kletchatka'},
    {id:2,name:'koktail'},
    {id:3,name:'kletchatka'},
    {id:4,name:'koktail'},]
        this._selectedType = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    
    setItem(item) {
        this._item = item
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    setSelectedType(type) {
        //this.setPage(1)
        this._selectedType = type
    }

    get types() {
        return this._types
    }

    get selectedType() {
        return this._selectedType
    }

    
    get items() {
        return this._items
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