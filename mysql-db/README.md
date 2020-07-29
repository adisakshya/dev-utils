# My-SQL Database Container

To run the dockerized database, execute the following command from the terminal

```
$ docker-compose up
```

To test the established connection with the My-SQL database run the docker exec command from terminal

```
$ docker exec -i my_database_container mysql -uroot -proot <<< "USE my_database; SHOW TABLES;"
```

It will list the tables included in ```my_database```, the dump file consist of only one table ```user_credentials```.