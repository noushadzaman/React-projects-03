import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

const FavoriteListModal = () => {
    const { favorites } = useContext(FavoriteContext);
    const { setSelectedLocation } = useContext(LocationContext);

    return (
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <ul className="space-y-2  *:py-2 *:px-4 *:cursor-pointer">
                {
                    favorites.length > 0 ?
                        favorites.map(fav => (
                            <li
                                key={fav.location}
                                className="hover:bg-gray-200"
                            >
                                <a
                                    onClick={() => setSelectedLocation(fav)}
                                >
                                    {fav.location}
                                </a>
                            </li>
                        )) :
                        <p>Nothing is added to favorites</p>
                }
            </ul>
        </div>
    );
};

export default FavoriteListModal;