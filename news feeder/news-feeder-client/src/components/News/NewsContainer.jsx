import NewsLeftDiv from "./NewsLeftDiv";
import NewsRightDiv from "./NewsRightDiv";
import useNewsQuery from "../../hooks/useNewsQuery";

const NewsContainer = () => {
    const [news] = useNewsQuery();

    return (
        <main className="my-10 lg:my-14">
            <div className="container mx-auto grid grid-cols-12 gap-8">
                <NewsLeftDiv news={news?.slice(
                    0, Math.ceil(news?.length / 2)
                )
                } />
                <NewsRightDiv news={news?.slice(
                    Math.ceil(news?.length / 2), news.length
                )
                } />
            </div>
        </main>
    );
};

export default NewsContainer;