import { useEffect, useState } from "react";

const NewsLeftDiv = ({ news }) => {
    const [firstNews, setFirstNews] = useState([]);
    const [restNews, setRestNews] = useState([]);

    useEffect(() => {
        let completeNews = news?.find(singleNews => singleNews.description !== null && singleNews.urlToImage !== null);
        const firstNewsTitle = completeNews?.title;
        console.log(firstNewsTitle)
        let rest = news?.filter(singleNews => singleNews.title !== firstNewsTitle);
        setRestNews(rest);
        setFirstNews(completeNews);
    }, [news]);

    console.log(news);

    return (
        <div
            className="col-span-12 grid grid-cols-12 gap-6 self-start xl:col-span-8"
        >
            {
                firstNews &&
                <div className="col-span-12 grid grid-cols-12 gap-4">
                    <div className="col-span-12 lg:col-span-4">
                        <a href="#"
                        ><h3
                            className="mb-2.5 text-2xl font-bold lg:text-[28px]"
                        >
                                {firstNews?.title}
                            </h3></a>
                        <p className="text-base text-[#5C5955]">
                            {firstNews?.description}
                        </p>
                        <p className="mt-5 text-base text-[#5C5955]">
                            {new Date(firstNews?.publishedAt).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <img
                            className="w-full"
                            src={firstNews?.urlToImage}
                            alt="thumb"
                        />
                        <p className="mt-5 text-base text-[#5C5955]">
                            Illustration: Karolis Strautniekas
                        </p>
                    </div>
                </div>
            }
            {
                restNews?.map((singleNews, idx) => <>
                    {
                        singleNews?.urlToImage === null ? <div
                            key={idx}
                            className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="col-span-12 md:col-span-4">
                                <a href="#"
                                ><h3
                                    className="mb-2.5 text-xl font-bold lg:text-2xl"
                                >
                                        {firstNews?.title}
                                    </h3></a>
                                <p className="text-base text-[#292219]">
                                    {firstNews?.description}
                                </p>
                                <p className="mt-5 text-base text-[#94908C]">
                                    {new Date(firstNews?.publishedAt).toLocaleDateString('en-US', {
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                                {
                                    singleNews?.urlToImage === null ?
                                        null :
                                        <img
                                            className="w-full"
                                            src={singleNews?.urlToImage}
                                            alt="thumb"
                                        />

                                }
                            </div>
                        </div> :
                            <div
                                key={idx}
                                className="col-span-12 grid grid-cols-12 gap-4 lg:col-span-8"
                            >
                                <div className="col-span-12 md:col-span-6">
                                    <a href=""
                                    ><h3
                                        className="mb-2.5 text-xl font-bold lg:text-2xl"
                                    >
                                            {singleNews?.title}
                                        </h3></a>
                                    <p className="text-base text-[#292219]">
                                        {singleNews?.description}
                                    </p>
                                    <p className="mt-5 text-base text-[#5C5955]">
                                        {new Date(firstNews?.publishedAt).toLocaleDateString('en-US', {
                                            day: 'numeric',
                                            month: 'short',
                                            year: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div className="col-span-12 md:col-span-6">
                                    {
                                        singleNews?.urlToImage === null ?
                                            null :
                                            <img
                                                className="w-full"
                                                src={singleNews?.urlToImage}
                                                alt="thumb"
                                            />
                                    }
                                </div>
                            </div>
                    }
                </>
                )
            }
        </div>
    );
};

export default NewsLeftDiv;