// src/components/LessonsList.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/lessons.json';
import '../styles/LessonsList.css';

const LessonsList = () => {
    const topics = data.topics;

    return (
        <div className="lessons-list">
            <h1>Topics</h1>
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <h2>{topic.displayName}</h2>
                        <ul>
                            {topic.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex}>
                                    <Link to={`/lesson/${topic.folderName}/${lesson.fileName.split('.')[0]}`}>
                                        {lesson.displayName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LessonsList;