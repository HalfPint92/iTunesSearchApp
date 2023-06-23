# iTunes Search App

This project is a web application that allows users to search for media items such as music, movies, podcasts, etc., using the iTunes Search API.
Users can view search results, add items to their favorites list, and remove items from the favorites list.

## Usage

To use the app, follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies by running `npm install` in both backend and frontend folders.
3. Start the development server by running `npm start` in the backend folder. Use a separate CLI and run `npm start` in the frontend folder.
4. Open your web browser and navigate to `http://localhost:3000` to access the app if it does not do so automatically.

## Installation and Setup

To install and run the app on your local machine, please follow these steps:

1. Clone the repository to your local machine using the following command:

        ```git clone https://github.com/HalfPint92/iTunesSearchApp```

2. Navigate to the project directory:

        ```cd backend```

3. Install the required dependencies:

        ```npm install```

4. Navigate to the project directory:

        ```cd frontend```

5. Install the required dependencies:

        ```npm install```

6. Start the development server:

        ```npm start```

7. Open your web browser and go to `http://localhost:3000` to access the app.

8. The app will display a search form where you can enter a search term and select the media type. Click the "Search" button to initiate the search.

9. The search results will be displayed below the search form. Each result will include an image, track name, artist name, and an "Add to Favourites" button.

10. To add a result to your favourites, click the "Add to Favourites" button.

11. The favourites list will be displayed on the right side of the screen. It will include the items you have added as favourites, along with an option to remove them.

Enjoy using the app and exploring different search results!


## Security Measures

The app incorporates security measures to ensure the protection of user data and prevent common security vulnerabilities. Some of the measures taken include:

- Usage of the Helmet middleware to set various HTTP headers and enhance security.
- Implementation of client-side validation to prevent malicious input and cross-site scripting (XSS) attacks.
- Proper handling and storage of API keys to prevent exposure. API keys are stored in environment variables and accessed securely within the app.

## Deployment

The app has been deployed to GitHub and can be accessed using the following link:

[Link to Deployed App](https://halfpint92.github.io/iTunesSearchApp/)
