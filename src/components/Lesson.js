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

    useEffect(() => {
        const loadContent = async () => {
            // Find the topic and lesson from the JSON data
            const topicData = data.topics.find(t => t.folderName === topicName);
            if (topicData) {
                const lessonData = topicData.lessons.find(l => l.fileName.split('.')[0] === lessonName);
                if (lessonData) {
                    setDisplayTopic(topicData.displayName);
                    setDisplayLesson(lessonData.displayName);

                    // Load the markdown file content
                    try {
                        const response = await fetch(`/content/${topicName}/${lessonData.fileName}`);
                        if (!response.ok) {
                            throw new Error(`HTTP error! status: ${response.status}`);
                        }
                        const text = await response.text();
                        setContent(text);
                    } catch (err) {
                        console.error(`Error loading the markdown file: ${err.message}`);
                        setContent(`Error loading lesson content: ${err.message}`);
                    }
                } else {
                    console.error(`Lesson not found: ${lessonName}`);
                    setContent(`Lesson not found: ${lessonName}`);
                }
            } else {
                console.error(`Topic not found: ${topicName}`);
                setContent(`Topic not found: ${topicName}`);
            }
        };

        loadContent();
    }, [topicName, lessonName]);

    return (
        <div className="lesson">
            <h1>{displayTopic}</h1>
            <h2>{displayLesson}</h2>
            <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Lesson;