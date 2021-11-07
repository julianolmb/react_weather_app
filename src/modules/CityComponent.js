import styled from "styled-components";

const WeatherLogo = styled.img`
    width: 140px;
    height: 140px;
    margin: 40px auto;
`

const ChooseCityLabel = styled.span`
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: auto;
    margin-bottom: 10px;
    margin-top: 10px;
`
const SearchBox = styled.form`
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    border-radius: 2px;    
    color: black;
    font-size: 18px;
    font-weight: bold;
    margin: auto;
    margin-bottom: 20px;
    margin-top: 20px;
    
    & input {
        padding: 10px;
        font-size: 14px;
        border: none;
        outline: none;
        font-weight: bold;
    }

    & button {
        padding: 10px;
        font-size: 14px;
        border: none;
        background-color: black;
        color: white;
        outline: none;
        font-weight: bold;
        cursor: pointer;
    }
`

const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <ChooseCityLabel>Choose your city</ChooseCityLabel>
        <SearchBox onSubmit={fetchWeather}>
            <input placeholder="City" onChange={(e) => updateCity(e.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    );
};
export default CityComponent;

