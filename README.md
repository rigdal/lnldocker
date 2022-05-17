# lnldocker
Showcase of Docker for a Lunch N' Learn with Hylaine.

This project aims to introduce Docker with real examples showing how it can play into your development pipelines of application development, microservice architecture, and modern CICD delivery processes. 

Topics and ideas covered are:

- Brief introduction to Docker and some core components of the toolset
- A working microservice web application custom-built for this showcase that uses 5 separate images/containers
   - Nginx Web Server/Proxy
   - Node Web backend
   -	Node API #1
   -	Node API #2
   -	Redis DB
-	Docker Compose orchestrating the containers locally
-	Live CICD example for Docker with GitHub and Google Cloud Build via YAML to automatically build images in Artifact Registry in GCP

# Our Example Application

Our showcase example will be a simple imitation of what developing a microservice web app can look like when using Docker. 
This simple web app contains a webserver/proxy, a web backend, a few sample APIs, and a Redis instance to store and read data from. All of which will be built and run locally on our laptop.

![image](https://user-images.githubusercontent.com/51674375/168856180-9dcfb349-8fa6-4d70-b1c2-a7a30f3af3ee.png)

The Webapp tracks the number of clicks via the click API and polls for the results via the results API. Both APIs interface with the Redis container.

The Nginx webserver is routing the traffic based on path, and the web backend container serves the website’s content.

![image](https://user-images.githubusercontent.com/51674375/168856335-1534cbe5-b430-42ae-893e-b0f2a2150b5e.png)
