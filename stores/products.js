// Option Store
export const useProductStore = defineStore("product", {
    state: () => ({
        products: [
            {
                id: 1,
                name: "Ie",
                description: "din in topit",
                price: 400,
                county: "Moldova"
            },
            {   
                id: 2,
                name: "Vestă",
                description: "de Bihor",
                price: 300,
                county: "Transilvania"
            },
            {
                id: 3,
                name: "Chimir",
                description: "din piele",
                price: 200,
                county: "Moldova"
            },
            {
                id: 4,
                name: "Costum",
                description: "vechi din Maramures",
                price: 600,
                county: "Maramures"
            }
        ]
    }),
    getters: {
        productCount: (state) => {
            return state.products.length
        },
        productsByCounty() {
            return (county) => ( 
                this.state.products.filter(product => product.county == county)
                )
        },
        productCheaperThan(state) {
            return (price) => (
                state.products.filter(product => product.price < price)
            )
        },
        lastProduct(state) {
            return state.products.slice(-1)[0]
        }
    },
    actions: {
        addProduct(product) {
            this.products.push(product);
        },
        deleteProduct(id) {
           this.products = this.products.filter(product => { return product.id !== id})
        }
    }
})