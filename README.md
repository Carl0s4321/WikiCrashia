# WikiCrashia

This project is built with React for the frontend and MongoDB for the backend, aiming to deliver a full-stack application with a robust backend API and a dynamic frontend user interface.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Running the Frontend](#running-the-frontend)
- [Running the Backend](#running-the-backend)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following tools installed and running:

- [Node.js and npm](https://nodejs.org/en/): You will need Node.js and npm to run the React frontend. Installing Node.js will also install npm.

### Installation

To set up the project for development, you'll need to clone the repository and install dependencies for both the frontend and backend.

1. Clone the repository:
   git clone https://github.com/Carl0s4321/WikiCrashia.git
2. cd backend
3. npm install
4. create config.env
5. write ATLAS_URI=[insert your connection string]
6. cd ../frontend
7. create .env file
8. VITE_GOOGLE_MAPS_API_KEY=AIzaSyBACv9MvR_e35IFTZ0nEvvtOcPdL2HoUk0
9. VITE_MAP_ID=544506166e07eee1
10. npm install

## Running the frontend

1. `cd frontend` to goto the right folder.
2. `npm install` to install the frontend's packages.
3. `cd ..` to run the go back to the root directory.
4. `npm run start:frontend`

## Running the Backend

1. `npm install`
2. create config.env
3. ATLAS_URI=mongodb+srv://rahat:r4h4tcluster0@cluster0.rykzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
SECRET_KEY=123
RETTIWT_API_KEY = a2R0PUhtcHdxM2g3NHc5aGgwbTdaRWN5bjgwdTY4bEtpSnlON1RmWGtRYno7YXV0aF90b2tlbj00MDU5MjRlYTYwM2JkMjc1NWY2MGNmMWEyZTczZTM2OTAzYWI1NjIyO2N0MD05M2FmMWZkMzg2NmM5YTRlM2Q2OWFjMDZmOGNhMzJkZjA5MDg0OTY3NTBlOTc0NDUzNGY1MGFjYjg4N2UzZjBmNzY0NjVjMTI1NGU2MGZkNzM3NDRjNGM4ZTdmM2MwNTAwYTU2ZDczZGQyN2YyOTVlNzNmMTkxYjZjNDZmZTQ2YzA3MGY0N2IzYmM2NGI3Mjk1MzU4YThjYzk1MWExM2VjO3R3aWQ9dSUzRDE4NjIzNzg2Nzc1NTM4MzE5MzY7
GOOGLE_API_KEY=AIzaSyA-UqCNeEtq4BE7GqZ6OP5uSZL1p_sN87o
GOOGLE_MAPS_API_KEY=AIzaSyD2CkoMm-lgo-PXfLV0iXscfRQECMb6eMw
4. `npm run start:backend`

## Running both frontend and backend

1. `npm start`


## API keys
For simplicity purposes, these are the API keys we used that you will need in your config.env file in the backend (will be disabled later):
ATLAS_URI = mongodb+srv://theo:th30cluster0@cluster0.rykzc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0<br>
RETTIWT_API_KEY = a2R0PUhtcHdxM2g3NHc5aGgwbTdaRWN5bjgwdTY4bEtpSnlON1RmWGtRYno7YXV0aF90b2tlbj00MDU5MjRlYTYwM2JkMjc1NWY2MGNmMWEyZTczZTM2OTAzYWI1NjIyO2N0MD05M2FmMWZkMzg2NmM5YTRlM2Q2OWFjMDZmOGNhMzJkZjA5MDg0OTY3NTBlOTc0NDUzNGY1MGFjYjg4N2UzZjBmNzY0NjVjMTI1NGU2MGZkNzM3NDRjNGM4ZTdmM2MwNTAwYTU2ZDczZGQyN2YyOTVlNzNmMTkxYjZjNDZmZTQ2YzA3MGY0N2IzYmM2NGI3Mjk1MzU4YThjYzk1MWExM2VjO3R3aWQ9dSUzRDE4NjIzNzg2Nzc1NTM4MzE5MzY7<br>
GOOGLE_API_KEY=AIzaSyA-UqCNeEtq4BE7GqZ6OP5uSZL1p_sN87o<br>
SECRET_KEY=b9f4bc897a78571975b5822ab1a9885dd11a6dcd83c57f23b284d57efacbf0750d8e15cc6874de00a5e9e7ec9a515d7ccc81f0d2351e8c55ddec3b3bf5e6d0c1<br>
GOOGLE_MAPS_API_KEY=AIzaSyD2CkoMm-lgo-PXfLV0iXscfRQECMb6eMw<br>
