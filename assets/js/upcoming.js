const { createApp } = Vue
const url = 'https://mindhub-xj03.onrender.com/api/amazing'
createApp({
    data() {
        return {
            arrayEvents: [],
            checkCategories: [],//checkEvents
            checkChecked: [],//inputcheck
            inputSearch: "",//string search
            finalFilter: []


        }
    },
    created() {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.arrayEvents = data.events.filter(event => new Date(event.date) > new Date(data.currentDate))
                console.log(this.arrayEvents)

                this.checkCategories = new Set(this.arrayEvents.map(event => event.category))
                
            })


            .catch(err => console.log(err))

    },
    method: {

    },
    computed: {

        crossFilter: function () {
            let checkCategories = this.inputCheck.length == 0 ? this.arrayEvents : this.arrayEvents.filter(event => this.inputCheck.includes(event.category))
            this.finalFilter = this.stringSearch == "" ? checkCategories : checkCategories.filter(event => event.name.toLowerCase()).includes(this.stringSearch.toLowerCase().trim())
}
        
   
    }
}).mount("#app")

