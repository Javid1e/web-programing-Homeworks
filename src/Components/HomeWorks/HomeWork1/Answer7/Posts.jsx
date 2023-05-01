// Posts.js

import React from 'react';
import styles from './Posts.module.css';

function Posts({ author }) {
    const image= `https://picsum.photos/500/300?random=${author}`;
    const authorName = `Author ${author}`;
    const posts = [
        {
            id: 1,
            image: `https://picsum.photos/500/300?random=${author}`,
            author: authorName,
            date: 'April 24, 2023',
            description: 'This is my first post!',
            likes: 10,
        },
        {
            id: 2,
            image: `https://picsum.photos/500/300?random=${author + 1}`,
            author: `${authorName}'s friend`,
            date: 'April 25, 2023',
            description: 'Having a great time with my friends!',
            likes: 5,
        },
    ];

    return (
        <div className={styles.posts}>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <img src={post.image} alt={post.description} />
                    <div className={styles['post-meta']}>
                        <div className={styles['post-author']}>{post.author}</div>
                        <div className={styles['post-date']}>{post.date}</div>
                        <div className={styles['post-description']}>{post.description}</div>
                        <div className={styles['post-likes']}>{post.likes} likes</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
