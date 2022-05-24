![HylaineLogo_Tag-White_Transparent](https://user-images.githubusercontent.com/51674375/169115975-78bb1ad7-1c07-484c-9fca-04056f43097d.png)
www.hylaine.com

# Content

   [Overview](#docker-lunch-n-learn)

   [Getting Started](#getting-started)

   [Our Example Application](#our-example-application)

   [Running The App](#running-the-app)

# Docker Lunch N' Learn
Showcase of Docker for a Lunch N' Learn with Hylaine.

In conjunction with our live PPT presentation, this project aims to introduce Docker with live examples showing how it can play into your development pipelines of applications, microservices, and modern CICD delivery processes. 

Topics and ideas covered are:

- Brief introduction to Docker and some core components of the toolset to get started
- A working microservice web application custom-built for this showcase that uses 5 separate images/containers
   - Nginx Web Server/Proxy
   - Node Web backend
   - Node API #1
   - Node API #2
   - Redis DB
-	Docker Compose orchestrating the containers locally
-	Live CICD example for Docker with GitHub and Google Cloud Build via YAML to automatically build images in Artifact Registry in GCP

# Getting Started
You will need [Docker Desktop](https://docs.docker.com/get-docker/) for your respective OS.

We also suggest using [Visual Studio Code](https://code.visualstudio.com/Download), which is a free open-source code editor that works for many different OS.

Both of these tools support Windows, Mac, and Linux.

Clone this repo to your local machine and open it in Visual Code.

# Our Example Application

Our showcase example will be a simple imitation of what developing a microservice web app can look like when using Docker. 
This simple web app contains a webserver/proxy, a web backend, a few sample APIs, and a Redis instance to store and read data from. All of which will be built and run locally on our laptop.

![image](https://user-images.githubusercontent.com/51674375/168856180-9dcfb349-8fa6-4d70-b1c2-a7a30f3af3ee.png)

The Webapp tracks the number of clicks via the click API and polls for the results via the results API. Both APIs interface with the Redis container.

The Nginx webserver is routing the traffic based on path, and the web backend container serves the website’s content.

![image](https://user-images.githubusercontent.com/51674375/168856335-1534cbe5-b430-42ae-893e-b0f2a2150b5e.png)

# Running the App
There is a docker-compose.yml file within the main directory of the project.

To run all containers issue the following command from a terminal in the directory
```
docker-compose up --build
```
Example:
```
PS C:\Users\AaronRigdon\Documents\GitHub\Hylaine\lnldocker> docker-compose up --build
```

After running the command Docker will start building the images and run them once complete. 

![image](https://user-images.githubusercontent.com/51674375/169122944-f615e352-8001-45cc-9304-4458fa907a4d.png)

You can check the container tab in Docker Desktop and see the final app running with all the individual containers underneath it.

![image](https://user-images.githubusercontent.com/51674375/169123950-d7a487cd-7e1d-4f08-85d9-686122d23a35.png)

# Google Cloud Build
In this example we implemented a simple Google Cloud Build trigger that listens for pushes to the main branch of a GitHub repo.

You will need your own Google Cloud project to follow along. Google Cloud offers a free $300 credit for personal accounts and the free trial can be used to setup and test this.

See the below guides for examples.

https://cloud.google.com/build/docs/configuring-builds/create-basic-configuration
https://cloud.google.com/build/docs/automating-builds/create-manage-triggers
