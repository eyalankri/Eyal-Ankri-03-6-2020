import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        showSelectedProducts: false,
        products: [
            {
                id: 1112,
                name: 'Apple iPhone 11 Pro',                
                priceUsd: 1099,
                priceIls:null,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "amazon",
                estDelieryDays: 5,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/71SyO27jEjL._SL1500_.jpg",
                selected: false,

            },
            {
                id: 1113,
                name: 'Apple iPhone 10',                
                priceUsd: 855,
                priceIls:null,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "mobile-land",
                estDelieryDays: 9,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg",
                selected: false,
            },
            {

                id: 1114,
                name: 'Samsung Galaxy 10',
                //name: 'erez',
                priceUsd: 988,
                priceIls:null,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "amazon",
                estDelieryDays: 1,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/71T0KJFxCHL._SL1500_.jpg",
                selected: false,
            },
            {

                id: 1115,
                name: 'Samsung Galaxy S20',            
                priceUsd: 750,
                priceIls:null,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "ebay",
                estDelieryDays: 1,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/81QuTIErByL._SL1500_.jpg",
                selected: false
            },
            {

                id: 1116,
                name: 'Xiaomi S20',                
                priceUsd: 380,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "bestbuy",
                estDelieryDays: 0,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/81QuTIErByL._SL1500_.jpg",
                selected: false
            },
            {

                id: 1117,
                name: 'Xiaomi 11',                
                priceUsd: 544,
                currencyUsd: '$',
                currencyIls: '₪',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum facere aliquam, eligendi blanditiis cupiditate voluptatum, at expedita autem nemo quos dolorem officia, error adipisci est magnam molestias ut quia?',
                store: "bestbuy",
                estDelieryDays: 1,
                estDelieryDate: null,
                src: "https://images-na.ssl-images-amazon.com/images/I/71SyO27jEjL._SL1500_.jpg",
                selected: false
            }
        ]
    },

    mutations: {              
        selectProduct(state, id) {              
            state.products.forEach(el => {
                if (el.id == id) {
                    el.selected = true
                }
            });
        },
        setRates(state,rate){
            state.products.forEach(el => {
                el.priceIls =  Math.round(el.priceUsd * rate)
            });
        },
        changeShowSelectedProducts(state,show){
            state.showSelectedProducts = show
        }


    },
    actions: {               
        selectProduct(context, id) { 
            context.commit('selectProduct',id)
        },

        setRates(context, rate) { 
            context.commit('setRates',rate)
        },

        changeShowSelectedProducts(context,show){
            context.commit('changeShowSelectedProducts',show)
        }

    }

})

