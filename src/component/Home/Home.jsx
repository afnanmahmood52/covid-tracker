import React,{Component} from 'react'
import CoronaSVG from './CoronaSVG/CoronaSVG'
import './Home.css'
import AOS from "aos"
import "../../../node_modules/aos/dist/aos.css"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Cards from '../Home/Cards/Cards'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {FetchData, FetchCountries} from '../../api/api'

export default class Home extends Component {
    constructor(){
      super()
      this.checkScrollTop = this.checkScrollTop.bind(this)
      this.scrollTop = this.scrollTop.bind(this)
      this.getCountry = this.getCountry.bind(this)
      window.addEventListener('scroll', this.checkScrollTop)
    }

    state = {
      showScroll : false,
      data : [],
      countries : [],
      gotData: false,
      country: ""
    }

    async componentDidMount(){
      
      // const [data, setData] = useState({});
      // const [showScroll, setShowScroll] = useState(false)

      AOS.init()
      AOS.refresh()

      const response_data = await FetchData();
      const countries = await FetchCountries();

      //this.setState({ data : response_data.data, countries: countries});

      //console.log(this.state.data)
      

      if (this.state.data){
        this.setState({ data : response_data.data, countries: countries, gotData: true});
      }

      console.log(response_data.data)
      //console.log(this.state.countries)

    }

    checkScrollTop(){
      if (!this.state.showScroll && window.pageYOffset > 50){
        this.setState({showScroll: true})
      } else if (this.state.showScroll && window.pageYOffset <= 50){
        this.setState({showScroll: false})
      }
    }
  
    scrollTop(){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    async getCountry(event){
      //cosnsole.log(event.target.value)
      this.setState({country: event.target.value})

      const response_data = await FetchData(event.target.value);
      console.log(response_data.data)

      this.setState({ data : response_data.data, gotData: true});
      //console.log(this.state.country)
    }
  
  render() {
    

    return (
      <div>
        <div className="home-body">
      <div className="corona-about" data-aos="fade-left" data-aos-duration="1200">
        <h5>See the Realtime Worldwide situation of</h5>
        <h1>COVID-19!</h1>
      </div>
      <div className="image-SVG" data-aos="fade-left" data-aos-duration="1200">
        <CoronaSVG key={'image-SVG'}/>
      </div>

      <div className="stats-portion">
        <h1>Select Country..</h1>

        <div className="form-group" id="country-select">
          <select defaultValue="Afghanistan" onChange={this.getCountry} className="form-control" id="exampleFormControlSelect1" style={{width:'60vw'}}>
            <option value="Global" key="Global">Global</option>
            {
              this.state.countries.map((country,index) => <option value={country.name} key={country.name}>{country.name}</option> )
            }
          </select>
        </div>
        {this.state.country}
        <div className="cards-portion">
          <Cards key={'cards-portion'} data= {this.state.data} gotData={this.state.gotData} />
        </div>
      </div>
      <ArrowUpwardIcon key={'arrow-up'} className="scrollTop" fontSize="large" onClick={this.scrollTop} style={{height: 50, width: 50, display: this.state.showScroll ? 'block' : 'none'}}/>
    </div>
      </div>
    )
  }
}