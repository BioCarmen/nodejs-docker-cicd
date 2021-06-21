# Dockerfile for Typescript NodeJS application

![](https://image-publiclink.s3.amazonaws.com/docker_logo.png)

Multistage Dockerfile for Typescript NodeJS Application

### Build the image

```sh
$ sudo docker build -t multistage:v1 -f Dockerfile .
```

### Run the container

```sh
$ sudo docker run -itd -p 3025:3025 multistage:v1
```