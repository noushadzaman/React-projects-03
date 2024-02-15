import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./context";
import ClearSkyImage from '../public/backgrounds/clear-sky.jpg'
import FewCloudsImage from '../public/backgrounds/few-clouds.jpg'
import MistImage from '../public/backgrounds/mist.jpeg'
import RainyDayImage from '../public/backgrounds/rainy-day.jpg'
import scatteredCloudsImage from '../public/backgrounds/scattered-clouds.jpg'
import ShowerRainImage from '../public/backgrounds/shower-rain.jpg'
import SnowImage from '../public/backgrounds/snow.jpg'
import SunnyImage from '../public/backgrounds/sunny.jpg'
import ThunderstormImage from '../public/backgrounds/thunderstorm.jpg'
import WinterImage from '../public/backgrounds/winter.jpg'

const Page = () => {
    const { weatherData, loading } = useContext(WeatherContext);
    const [climateImage, setClimateImage] = useState("");

    function getBackGroundImage(climate) {
        switch (climate) {
            case "Rain":
                return RainyDayImage;
            case "Clouds":
                return scatteredCloudsImage;
            case "Clear":
                return ClearSkyImage;
            case "Snow":
                return SnowImage;
            case "Thunder":
                return ThunderstormImage;
            case "Fog":
                return WinterImage;
            case "Haze":
                return FewCloudsImage;
            case "Mist":
                return MistImage;

            default:
                return ClearSkyImage;

        }
    }
    useEffect(() => {
        const bgImage = getBackGroundImage(weatherData.climate);
        setClimateImage(bgImage)
    }, [weatherData.climate])

    return (
        <>
            {
                loading.state ?
                    <div>
                        <p>{loading.message}</p>
                    </div> :
                    <div
                        style={{ backgroundImage: `url('${climateImage}')` }}
                        className="grid place-items-center h-screen bg-no-repeat bg-cover ">
                        <Header />
                        <main>
                            <section>
                                <WeatherBoard />
                            </section>
                        </main>
                    </div>
            }
        </>
    );
};

export default Page;