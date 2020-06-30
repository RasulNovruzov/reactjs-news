import React, { useEffect, useState, memo } from "react";
import { getStoryId, getStory } from "../../services/Api";
import { InfiniteScroll } from '../../hooks/InfiniteScroll';
import Header from "../Header/Header";
import e from "../Containers/Container.module.scss";
import News from "../News/News";

export const Containers = () => {
    const { count } = InfiniteScroll();
    const [storyId, setStoryId] = useState([]);

    useEffect(() => {
        getStoryId().then(data => setStoryId(data));
        console.log('count', count);
        //getStory(121003).then(data => console.log(data));
    }, [count]);

    return (
        <>
            <Header />

            <div className = {e.e}>
                <div className={e.ex}>

                {storyId.slice(0, count).map(storyId => (
                    <News key={storyId} storyId={storyId} />
                    ))}
                </div>
            </div>
        </>
    );
}