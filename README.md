# memestagram-api

## API Endpoints

All API Request must be prepended with /api


### Authentication Endpoints

The Authentication flow for the application is:

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/signup     | -     | User Signup              | name, username, email, password                 | token
POST   | /auth/login      | -     | User Login               | username, password                              | token
POST   | /auth/check      | YES   | Auth Token check         | -                                               |


### Profile Endpoints


METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /profile         | YES   | View own user profile    | -                                               | username, name, email, posts
PUT    | /profile         | YES   | Update own user profile  | email, name, password                           | Updated user data
DELETE | /profile         | YES   | Deletes own user account | password                                        | User deletion confirmation

### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | PARAMS                                          | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /users           | YES   | Get a list of users      | query: search string                            | List of matching usernames and ids
GET    | /users/:userid   | YES   | Get user profile         | userid                                          | username, name, email, posts
.....
