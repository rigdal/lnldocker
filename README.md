# lnldocker
Showcase of Docker for a Lunch N' Learn with Hylaine.

This project aims to introduce Docker with real examples showing how it can play into your development pipelines of application development, microservice architecture, and modern CICD delivery processes. 

Topics and ideas covered are:

-	Brief introduction to Docker and some core components of the toolset
-	A working microservice web application custom-built for this showcase that uses 5 separate images/containers
  -	Nginx Web Server/Proxy
  - Node Web backend
  -	Node API #1
  -	Node API #2
  -	Redis DB
-	Docker Compose orchestrating the containers locally
-	Live CICD example for Docker with GitHub and Google Cloud Build via YAML to automatically build images in Artifact Registry in GCP
