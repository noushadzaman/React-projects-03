import { useContext, useEffect, useState } from 'react';
import HeartIcon from '../../../public/heart.svg'
import HeartRedIcon from '../../../public/heart-red.svg'
import { FavoriteContext, WeatherContext } from '../../context';

const AddToFavorite = () => {
    const [isFavorite, toggleIsFavorite] = useState(false);
    const { addToFavorites, removeFromFavorites, favorites } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { latitude, longitude, location } = weatherData;

    useEffect(() => {
        const found = favorites.find(fav => fav.location === location);
        toggleIsFavorite(found);
    }, [])

    const handleFavorites = () => {
        const found = favorites.find(fav => fav.location === location);
        if (!found) {
            addToFavorites(latitude, longitude, location)
        }
        else {
            removeFromFavorites(location)
        }
        toggleIsFavorite(!isFavorite);
    }

    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button
                    onClick={handleFavorites}
                    className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>Add to Favorite</span>
                    <img src={isFavorite ? HeartRedIcon : HeartIcon} alt="Heart" />
                </button>
            </div>
        </div>
    );
};

export default AddToFavorite;