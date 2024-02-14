import PinIcon from '../../../public/pin.svg'
import CloudIcon from '../../../public/cloud.svg'
import HazeIcon from '../../../public/haze.svg'
import HeartIcon from '../../../public/heart.svg'
import RainyIcon from '../../../public/rainy.svg'
import ThunderIcon from '../../../public/thunder.svg'
import SnowIcon from '../../../public/icons/snow.svg'
import SunnyIcon from '../../../public/icons/sunny.svg'
import { useContext } from "react";
import { WeatherContext } from "../../context";
import { getFormattedDate } from '../../utils/date-util';

const WeatherHeadline = () => {
    const { weatherData } = useContext(WeatherContext);
    const { climate, location, temperature, time } = weatherData;

    const getWeatherIcon = () => {
        switch (climate) {
            case "Rain":
                return RainyIcon;
            case "Clouds":
                return CloudIcon;
            case "Clear":
                return SunnyIcon;
            case "Snow":
                return SnowIcon;
            case "Thunder":
                return ThunderIcon;
            case "Fog":
                return HazeIcon;
            case "Haze":
                return HazeIcon;
            case "Mist":
                return HazeIcon;
            default:
                return SunnyIcon;
        }
    }

    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={getWeatherIcon(climate)} alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={PinIcon} />
                        <h2 className="text-2xl lg:text-[50px]">{location}</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{getFormattedDate(time, 'time', false)} - {getFormattedDate(time, 'date', false)}</p>
        </div>
    );
};

export default WeatherHeadline;