import React, { useState, useEffect } from 'react';

export function FeedMain() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/twitter/incidents');
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.log("Nothing bruh")
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);
    
    return (
        <>
        <div className="feed-container">
        <h2>Recent Traffic Incidents</h2>
        {data.length === 0 ? (
            <p>No recent incidents reported.</p>
        ) : (
            data.map((item, index) => (
                <div key={item.id} className="tweet-card">
                    <p className="tweet-text">{item.fullText || item.text}</p>
                    <p className="tweet-date">
                        Posted on: {new Date(item.createdAt).toLocaleString()}
                    </p>
                </div>
            ))
        )}
    </div>

        </>
    );
};