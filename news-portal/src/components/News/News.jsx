import React, { useState, useEffect } from 'react';
import { getStory } from '../../services/Api';
import { mapTime } from '../../mappers/MapTime';
import n from '../News/News.module.scss';

const News = ({ storyId }) => {
    const [story, setStory] = useState({});

    useEffect(() => {
        getStory(storyId).then(data => data && data.url && setStory(data));
    }, []);

    return (
        <div className={n.divPad}>
            <div>
                <a className={n.link} href={story.url} target="_blank">
                    <p className={n.title}>{story.title}</p>
                </a>
            </div>

            <div className={n.forAll}>
                Posted by : {story.by}
            </div>

            <div className={n.forAll}>
                Posted : {mapTime(story.time)} ago
            </div>

            <div className={n.forAll}>
                Type : {story.type}
            </div>

            <hr></hr>

        </div>
    );
}

export default News;