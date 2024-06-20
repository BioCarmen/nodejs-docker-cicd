# NodeJS Multistage Docker Application with GitHub Actions and GitLab Pipeline Scripts

- NodeJS Sample API written in Typescript
- Multistage Dockerfile
- GitHub Actions
- GitLab Pipeline

## Locally:

### Build the image

```sh
$ docker build -t multistage:v1 -f Dockerfile .
```
The Docker file contains commands to install the npm packages, build the TypeScript code to NodeJS and serve the application using PM2 server.

### Run the container

```sh
$ docker run -itd -p 3025:3025 multistage:v1
```
This command will run the container in detached mode. The application will be available on port 3025.  
Port mapping:  
<HOST_PORT>:<CONTAINER_PORT>  
3025:3025  

## CICD

### GitHub Actions

Fork the repository. You can find the actions script in the following location.
```sh
.github/workflows/docker-image.yml
```
Go to Settings -> Secrets and Variables -> Actions -> Repository Secrets to add the DockerHub credentials as secrets. Add DOCKER_USERNAME and DOCKER_PASSWORD.  

Then go to actions to see the action.  

![image](https://github.com/joesajigeorge/Docker-NodeJS-Demo-CICD/assets/32813415/e126527a-1a0d-49ca-b6e7-deed5f287031)

### GitLab Actions

Clone the repository and push to GitLab or migrate the repository. You can find the pipeline script in the file .gitlab-ci.yml.  
  
Go to Settings -> CICD -> Variables to add the DockerHub credentials as secrets. Add REGISTRY_USER and REGISTRY_PASSWORD.   
  
You can find the pipeline in Build -> Pipelines.  

![image](https://github.com/joesajigeorge/Docker-NodeJS-Demo-CICD/assets/32813415/77657549-613d-42f2-bcb4-e599effae82f)







