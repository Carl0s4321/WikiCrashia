const fs = require('fs'); // Node.js file system module

// Read the JSON file
fs.readFile('trainingTweets.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Transform the data into the desired format
        const formattedData = jsonData.map(record => ({
            text: record.text,
            time: record.time,
        }));

        // Write the transformed data to a new file
        fs.writeFile('tweets.js', `const tweets = ${JSON.stringify(formattedData, null, 2)};`, 'utf8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
            } else {
                console.log('File written successfully as tweets.js!');
            }
        });
    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});
