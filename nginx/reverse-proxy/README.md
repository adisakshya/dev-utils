# Ngnix Reverse Proxy

## What is a Reverse Proxy?

A reverse proxy is a type of proxy server that retrieves resources on behalf of a client from one or more servers. These resources are then returned to the client like they originated from the Web server itself.

## Why Reverse Proxy?

 - Ability to serve as a load balancer.

 - Security for application tier, as the request doesn't hit the application directy.

 - Single point of authentication, logging & audit.

 - Hosting everything under one domain name or ip address under port 80 and don’t require that the user specify special port numbers when making requests to the frontend, backend.

 - Avoid CORS issues because the requests being made from the frontend are coming from the same location from the backend.

## What I wanted to do?

 - I want the users to go to one endpoint for all of my applications
 - I want to make sure that if one server is down, it moves to the next available instance of the server.

## Reverse Proxy Block Diagram

![](https://miro.medium.com/max/975/1*eTp7F7eMq-BsZd2LZos94Q.png)

## Instructions for execution

### Running single instance of the application servers behind the reverse proxy

Run the following command

```
$ docker-compose up --build -d
```

After successfull build we would have 3 containers running 
 - Application Server 1
 - Application Server 2
 - Reverse Proxy

You can access the application servers on
 - ```http://<docker-machine-ip>:8080/api1/```
 - ```http://<docker-machine-ip>:8080/api2/```

So we see there is single endpoint ```http://<docker-machine-ip>:8080``` via which both application servers are accessible despite the two are running in different containers on different ports.

### Running multiple instance of the application servers behind the reverse proxy

Run the following command

```
$ docker-compose up --build -d --scale application_a=2 --scale application_b=2
```

After successfull build we would have 5 containers running 
 - Application Server 1 (instance 1)
 - Application Server 1 (instance 2)
 - Application Server 2 (instance 1)
 - Application Server 2 (instance 2)
 - Reverse Proxy

You can access the application servers on
 - ```http://<docker-machine-ip>:8080/api1/```
 - ```http://<docker-machine-ip>:8080/api2/```

Now if we delete one of any container for application server 1/2 using,

```
$ docker container stop <container_id> && docker container rm <container_id>
```

and try to access the application servers on the above endpoint, then we are redirected to the next available instance of that application server, instead of showing a bad-gateway (502).