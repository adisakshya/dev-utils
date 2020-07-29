# Ngnix Loadbalancer

## What is a Loadbalancer?

Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault‑tolerant configurations.

## Why Loadbalancer?

Load balancers are used to increase capacity (concurrent users) and reliability of applications. They improve the overall performance of applications by decreasing the burden on servers associated with managing and maintaining application and network sessions, as well as by performing application-specific tasks.

## What I wanted to do?

I wanted Nginx to act as a single entry point to a distributed web application working on multiple separate servers.

## Loadbalancer Block Diagram

![](https://www.booleanworld.com/wp-content/uploads/2017/08/LoadBalancing.png)

## Instructions for execution

Run the following command

```
$ docker-compose up --build -d --scale flask_application=2
```

After successfull build we would have 4 containers running 
 - Loadbalancer Flask Application 1
 - Loadbalancer Flask Application 2
 - Nginx Loadbalancer
 - Redis

You can access the application servers on
 - ```http://<docker-machine-ip>```

Refresh your browser and look at the logs of the second app instance (Loadbalancer Flask Application 2). The request was redirected to it. The next request would be redirected again to the first app and etc.

### Choosing a load balancing method

You can find various load-balancing method conf files in ```/load-balancing-methods``` along with descriptions. You can replace the ```/nginx/project.conf``` file with the conf file of the method of your choice.