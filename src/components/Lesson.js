// src/components/Lesson.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Lesson.css';
import '../styles/markdown.css';
import data from '../data/lessons.json';

const Lesson = () => {
    const { topicName, lessonName } = useParams();
    const [content, setContent] = useState('');
    const [displayTopic, setDisplayTopic] = useState('');
    const [displayLesson, setDisplayLesson] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const loadContent = async () => {
            try {
                // Find the topic and lesson from the JSON data
                const topicData = data.topics.find(t => t.folderName === topicName);
                if (!topicData) {
                    throw new Error(`Topic not found: ${topicName}`);
                }

                const lessonData = topicData.lessons.find(l => l.fileName.split('.')[0] === lessonName);
                if (!lessonData) {
                    throw new Error(`Lesson not found: ${lessonName}`);
                }

                setDisplayTopic(topicData.displayName);
                setDisplayLesson(lessonData.displayName);

                // Load the markdown file content
                const response = await fetch(`/content/${topicName}/${lessonData.fileName}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const text = await response.text();
                setContent(text);
            } catch (err) {
                console.error(err.message);
                setError(err.message);
                setContent('');
            }
        };

        loadContent();
    }, [topicName, lessonName]);

    return (
        <div className="lesson">
            <h1>{displayTopic || 'Loading...'}</h1>
            <h2>{displayLesson || 'Loading...'}</h2>
            <div className="markdown-content">
                {error ? (
                    <p className="error-message">Error: {error}</p>
                ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content || 'Loading content...'}
                    </ReactMarkdown>
                )}
            </div>
        </div>
    );
};

export default Lesson;
