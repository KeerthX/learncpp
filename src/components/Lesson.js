import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import '../styles/Lesson.css';
import '../styles/markdown.css';
import data from '../data/lessons.json';

const Lesson = () => {
    const { topicName, lessonName } = useParams();
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [nextLesson, setNextLesson] = useState(null);
    const [prevLesson, setPrevLesson] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loadContent = async () => {
            try {
                const topicIndex = data.topics.findIndex(t => t.folderName === topicName);
                if (topicIndex === -1) {
                    throw new Error(`Topic not found: ${topicName}`);
                }

                const topicData = data.topics[topicIndex];
                const lessonIndex = topicData.lessons.findIndex(l => l.fileName.split('.')[0] === lessonName);
                if (lessonIndex === -1) {
                    throw new Error(`Lesson not found: ${lessonName}`);
                }

                const currentLessonData = topicData.lessons[lessonIndex];

                if (lessonIndex > 0) {
                    setPrevLesson({
                        topicName: topicName,
                        lessonName: topicData.lessons[lessonIndex - 1].fileName.split('.')[0],
                        displayName: topicData.lessons[lessonIndex - 1].displayName
                    });
                } else if (topicIndex > 0) {
                    const prevTopic = data.topics[topicIndex - 1];
                    const prevLesson = prevTopic.lessons[prevTopic.lessons.length - 1];
                    setPrevLesson({
                        topicName: prevTopic.folderName,
                        lessonName: prevLesson.fileName.split('.')[0],
                        displayName: prevLesson.displayName
                    });
                } else {
                    setPrevLesson(null);
                }

                // Set next lesson
                if (lessonIndex < topicData.lessons.length - 1) {
                    setNextLesson({
                        topicName: topicName,
                        lessonName: topicData.lessons[lessonIndex + 1].fileName.split('.')[0],
                        displayName: topicData.lessons[lessonIndex + 1].displayName
                    });
                } else if (topicIndex < data.topics.length - 1) {
                    const nextTopic = data.topics[topicIndex + 1];
                    const nextLesson = nextTopic.lessons[0];
                    setNextLesson({
                        topicName: nextTopic.folderName,
                        lessonName: nextLesson.fileName.split('.')[0],
                        displayName: nextLesson.displayName
                    });
                } else {
                    setNextLesson(null);
                }

                // Load the markdown file content
                const response = await fetch(`/content/${topicName}/${currentLessonData.fileName}`);
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
        window.scrollTo(0, 0);
    }, [topicName, lessonName]);

    const handleNavigation = (lesson) => {
        if (lesson) {
            navigate(`/lesson/${lesson.topicName}/${lesson.lessonName}`);
        }
    };

    return (
        <div className="lesson">
            <div className="markdown-content">
                {error ? (
                    <p className="error-message">Error: {error}</p>
                ) : (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                        {content || 'Loading content...'}
                    </ReactMarkdown>
                )}
            </div>
            <div className="lesson-navigation">
                <button
                    onClick={() => handleNavigation(prevLesson)}
                    disabled={!prevLesson}
                    className="nav-button prev-button"
                >
                    ← Previous: {prevLesson ? prevLesson.displayName : ''}
                </button>
                <button
                    onClick={() => handleNavigation(nextLesson)}
                    disabled={!nextLesson}
                    className="nav-button next-button"
                >
                    Next: {nextLesson ? nextLesson.displayName : ''} →
                </button>
            </div>
        </div>
    );
};

export default Lesson;
