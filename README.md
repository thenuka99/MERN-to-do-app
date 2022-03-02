# MERN-to-do-app

## Branching convension

`master` branch will be used to deploy production releases.
Individual feature branches will be made upon request.
## Technology (Tech Stack)

1. NodeJS express sever.
1. MongoDB.
1. Redis to store refresh tokens.

## Folder/file structure

Follow the current naming convention and folder structure.

```
MERN-to-do-app
├── client                 // Frontend
|   ├── public             // Public folder
|   ├── src                // Add all the mongoose models here
| 	|   ├── assets        // Assets folder
| 	|   ├── components    // Components folder. Add all sub components here
| 	|   ├── constants     // Add Constant files here
|	|   ├── pages         // Main pages folder such as About Page, Landing Page etc.
| 	|   ├── services      // Services folder
|	|   ├── App.js        // App.js
| 	|   └── index.js      // index.js file. Add context providers here to wrap the whole app
|   ├── .gitignore         // Gitignore file
|   └── package.json       // node module dependencies
├── server                 //Backend
|   ├── models             // Add all the mongoose models here
|   ├── routes             // Add all the routes and sub routes here
|   ├── index.js           // Entry file
|   ├── nodemon.json       // Update parellel with ecosystem.config.js but only the dev variables goes here
|   └── package.json       // node module dependencies
└── readme.md              // README file
```

## Development

Follow the follwing steps to begin development.

1. Clone this repository.
1. cd client.
1. Run `npm install`.
1. Test locally using `npm start` command. //start Frontend 
1. cd server. 
1. Run `npm install`.
1. Test locally using `node index.js` command. //start Backend 

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
