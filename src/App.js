import React, { Suspense } from "react";
import { fetchData } from "./api";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import LanguageSelector from './components/LanguageSelector';
import SelectCountryText from './components/SelectCountryText';
import WelcomeText from "./components/WelcomeText";
import './i18n';
import coronaImage from './images/image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };//initial states

  async componentDidMount() {
    const fetchedData = await fetchData();//get data from api function

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetchedData = await fetchData(country);
    //set the state
    this.setState({ data: fetchedData, country: country });//along with fetched data it also changes the nation
  }

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Suspense fallback={null}>
          <LanguageSelector />
          <WelcomeText />
          <img className={styles.image} src={coronaImage} alt="covid-19" />
          <Cards data={data} />
          <SelectCountryText />
          <CountryPicker handleCountryChange={this.handleCountryChange} />
          <Chart data={data} country={country} />
        </Suspense>
      </div>
    );
  }
}

export default App;
