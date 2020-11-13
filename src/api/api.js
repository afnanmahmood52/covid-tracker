import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const FetchData = async(country)=>{
    try {
        console.log(country)

        let data = {}
        if(country){
            data = await axios.get(`${url}/countries/${country}`)
            //console.log(data)    
        }
        else if (!country || country === 'Global') {
            data = await axios.get(url)
            //console.log(data)
        }
        //console.log(data)
        return data;

    } catch (error) {
        console.log(error)
    }
}

export const FetchCountries = async() =>{
    try {
        const countries = await axios.get('https://covid19.mathdro.id/api/countries')
        //console.log(countries.data.countries)
        return countries.data.countries;
    } catch (error) {
        console.log(error)
    }
}
