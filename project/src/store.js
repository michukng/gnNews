import { createStore, action } from "easy-peasy";

const countriesList = [{
    id: 1,
    name: "Australia",
    index: "au"
},
{
    id: 2,
    name: "Brazylia",
    index: "br"
},
{
    id: 3,
    name: "Czechy",
    index: "cz"
},
{
    id: 4,
    name: "Grecja",
    index: "gr"
},
{
    id: 5,
    name: "Francja",
    index: "fr"
},
{
    id: 6,
    name: "Niemcy",
    index: "de"
},
{
    id: 7,
    name: "Polska",
    index: "pl"
},
{
    id: 8,
    name: "Rumunia",
    index: "ro"
},
{
    id: 9,
    name: "Turcja",
    index: "tr"
},
{
    id: 10,
    name: "Włochy",
    index: "it"
}]

export default createStore({
    trigger: false,
    setTrigger: action((state, payload) => {
        state.trigger = payload;
    }),
    time: new Date().toLocaleTimeString(),
    setTime: action((state, payload) => {
        state.time = payload;
    }),
    countries: [...countriesList],
    setCountries: action((state, payload) => {
        state.country = payload;
    }),
    countriesNews: [],
    setCountriesNews: action((state, payload) => {
        state.countriesNews = payload;
    }),
    fetchError: false,
    setFetchError: action((state, payload) => {
        state.fetchError = payload;
    }),
    data: [],
    setDate: action((state, payload) => {
        state.data = payload;
    }),
    isLoading: false,
    setIsLoading: action((state, payload) => {
        state.isLoading = payload;
    }),
    triggerNews: false,
    setTriggerNews: action((state, payload) => {
        state.triggerNews = payload;
    })
})