import { WeatherContext } from '../context/index';
import useWeather from '../hooks/useWeather.js'

const WeatherProvider = ({ children }) => {
    const { weatherData, error, loading } = useWeather();

    return (
        <WeatherContext.Provider value={{ weatherData, error, loading }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;