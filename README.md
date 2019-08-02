# Dad-Jokes
You're a funny guy, but you keep losing your list of jokes and forgetting which ones had the best reactions! Well worry no more- Dad (or bad??) jokes app to the rescue



| Request  | Endpoint                        | Description                                                                                     |
| -------- | ------------------------------- | ----------------------------------------------------------------------------------------------- |
| `get`    | /                               | check that the server is responding                                                             |
| `get`   | /api/jokes                 | Fetch all public jokes                                                          |
| `post`   | /api/jokes                      | create new public joke. `joke` required                                                                |
| `put`   | /api/jokes/:id                | update an existing public joke. `name` required                                                          |
| `delete`   | /api/jokes/:id               | delete a joke |
| `post`   | /api/user/register              | register new user. `username`, `password` required                                              |
| `post`   | /api/user/login                 | login with existing user. `username`, `password` required                                       |
| `get`    | /api/user/:id/jokes                     | fetch jokes owned by user. `Authorized token` required                                                    |
| `post`    | /api/user/:id/jokes              | insert a new joke for the user. `Authorized token` required                                                          |
| `put`    | /api/user/:id/jokes/:jid          | update existing joke. , `joke` required                       |
| `delete` | /api/user/:id/jokes/:jid          | delete joke owned by user `id` with id `jid`                                                                         
                                     
