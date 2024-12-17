const fs = require('fs').promises; 

// Fixed it so it can be generalized
async function makeDataset(filename, newFilename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        const jsonData = JSON.parse(data);
        const formattedData = jsonData.map(record => ({
            text: record.text,
            time: record.time,
        }))

        await fs.writeFile(
            `${newFilename}.js`, 
            `const tweets = ${JSON.stringify(formattedData, null, 2)};`, 
            'utf8'
        );
        
        console.log('File written successfully as tweets.js!');
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

module.exports = makeDataset;