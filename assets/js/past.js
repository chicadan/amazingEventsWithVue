const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/amazing'
createApp({
    data() {
        return {
            arrayEvents: [],
            checkCategories: [],
            checkChecked: [],
            inputSearch: "",
            finalFilter: []
        }
    },
    created() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.arrayEvents = data.events.filter(event => new Date(event.date) < new Date(data.currentDate))
                this.checkCategories = [...new Set(this.arrayEvents.map(event => event.category))]
                
            })

            .catch(err => console.log(err))

    },
    method: {

    },
    computed: {

        crossFilter: function () {
            let firstFilter = this.checkChecked.length == 0 ? this.arrayEvents : this.arrayEvents.filter(event => this.checkChecked.includes(event.category))
             this.finalFilter = this.inputSearch == "" ? firstFilter : firstFilter.filter(event => event.name.toLowerCase().includes(this.inputSearch.toLowerCase().trim()))

        }
        
    }
}).mount("#app")


