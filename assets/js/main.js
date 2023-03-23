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
                this.arrayEvents = data.events
                console.log(this.arrayEvents)

                this.checkCategories = [...new Set(this.arrayEvents.map(event => event.category))]
                console.log(this.checkCategories)
            })


            .catch(err => console.log(err))

    },
    method: {

    },
    computed: {

       /* eventsFilter(){
            this.checkCategories = this.arrayEvents.filter(event =>
                this.inputCheck.includes(event.category)|| this.inputCheck.length === 0)
                && event.name.toLowerCase().includes(this.stringSearch.toLowerCase)
        }*/

        crossFilter: function () {
            let firstFilter = this.checkChecked.length == 0 ? this.arrayEvents : this.arrayEvents.filter(event => this.checkChecked.includes(event.category))
             this.finalFilter = this.inputSearch == "" ? firstFilter : firstFilter.filter(event => event.name.toLowerCase()).includes(this.inputSearch.toLowerCase().trim())
         
             
            // let search= firstFilter.filter(event => event.name.toLowerCase()).includes(this.inputSearch.toLowerCase().trim())
            // console.log(this.search)
        }
        
       /* filterCheck: function () {
            let filterCategory = this.inputCheck.length == 0 ? this.dataEvents : this.dataEvents.filter(elemento => this.inputCheck.includes(elemento.category))
            this.resultFilter = this.stringSearch == "" ? filterCategory : filterCategory.filter(elemento => elemento.name.toLowerCase().includes(this.stringSearch.toLowerCase().trim()))
        }*/
    }
}).mount("#app")


