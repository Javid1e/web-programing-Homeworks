// Comments.js

import React from 'react';
import styles from './Comments.module.css';

function Comments({ author }) {
    const authorName = `Author ${author}`;
    const comments = [
        {
            id: 1,
            author: authorName,
            date: 'April 26, 2023',
            text: 'Great post!',
        },
        {
            id: 2,
            author: `${authorName}'s friend`,
            date: 'April 27, 2023',
            text: 'I totally agree!',
        },
    ];

    return (
        <div className={styles.comments}>
            <h2>Comments</h2>
            {comments.map((comment) => (
                <div className={styles.comment} key={comment.id}>
                    <div className={styles['comment-meta']}>
                        <div className={styles['comment-author']}>{comment.author}</div>
                        <div className={styles['comment-date']}>{comment.date}</div>
                    </div>
                    <div className={styles['comment-text']}>{comment.text}</div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
