# disc-us

## Steps

1. Clone the repository.
2. Install requirements with `npm install`.
3. Install MongoDB from https://www.mongodb.com/download-center?jmp=nav#community or by command line tools like `homebrew` or `apt-get`.
4. Start the mongo server: `mongod` in a different terminal.
5. Run `npm run build` to build the application.
6. Run `npm start` to start the Node application (node needs to be installed).
7. Topics can be created using Postman. In Postman, 
  - set the url to http://localhost:3000/api/v1/topics.
  - method to POST.
  - In headers, set Content-Type as 'application/json'.
  - In the POST body, select the 'raw' radio button.
  - Enter this as the body:
  ````
  {
    "content": "New Topic"
  }
  ````
  - Hit Send.
8. Go to http://localhost:3000 to get the application and see the list of topics created.
9. That's it!
