# Hello Nginx

Build the image using the following command

```
$ docker build -t hello-nginx:latest .
```

Run the Docker container using the command shown below.

```
$ docker run --rm -it -p 8080:80 hello-nginx
```
The ```-p 8080:80``` is used to map the port 80 from the container to host port 8080, so if we access localhost:8080 it means we are accessing the container.ip:80.

Now, open 

```
localhost:8080 OR <docker-machine-ip>:8080
```
and you should see our index.html file.