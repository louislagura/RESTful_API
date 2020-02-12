# RESTful_API

Steps:

1. After installation of RESTful_API-master.zip, extract .zip file.

2. Import sql file to local directory. Please see sql file path below.

Path: RESTful_API-master\invetory_crud\inventory_items.sql

3. Open terminal then go to the path below.

Path: RESTful_API-master\invetory_crud
Command: cd download_path\RESTful_API-master\invetory_crud

4. Execute the command "npx nodemon". If nodemon is not yet installed, please execute command below.

Command: npm install nodemon

5. Open web browser (Google Chrome, Internet Explorer, etc..) then go to "localhost:3000"

Code breakdown:

\route\index.js --> CRUD method can be found here
\views\select.ejs --> Homepage and displays all data in database
\views\form.ejs --> Page for adding new items
\views\edit.ejs --> Page for updating items
