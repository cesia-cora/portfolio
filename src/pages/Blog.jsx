import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const articles = [
    { title: "2024/05/05 - Handling In-Page Navigation with react-router-dom's Link Component", file: "link_react_router_dom.md" },
];

export const Blog = () => {

    const [currentArticle, setCurrentArticle] = useState(null);
    const [markdown, setMarkdown] = useState('');

    const loadArticle = (fileName) => {
        fetch(`/markdown/${fileName}`)
            .then(res => res.text())
            .then(text => {
                setMarkdown(text);
                setCurrentArticle(fileName);
            })
            .catch(err => console.error('Error fetching markdown file'))
    };

    const handleBackToIndex = () => {
        setCurrentArticle(null);
        setMarkdown('');
    }

    return (
        <>
            <div className="title">
                Blog
            </div>
            <div className='blog'>
                {currentArticle ? (
                    <div className='blogContent'>
                        <button onClick={handleBackToIndex} style={{ padding: '1%' }} className='btn-link'>Go back to index</button>
                        <span style={{ color: 'beige' }}><ReactMarkdown>{markdown}</ReactMarkdown></span>
                    </div>
                ) : (
                    <ul>
                        {articles.map(article => (
                            <li key={article.file} style={{ color: 'beige' }}>
                                <a style={{ color: 'beige', cursor: 'pointer' }} onClick={() => loadArticle(article.file)}>{article.title}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}