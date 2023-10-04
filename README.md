# Basic microservice template

---

## An example/reference service

This is a simple flask service used to illustrate how to build and deploy a service.
To get started, click the "Use this template" at the top.

---

## Development

As you are developing your application or service, please run and test everything locally with Docker.

To build and run a container do `docker-compose up --build`.

To just run a container do `docker-compose up` (or add `-d` to run it in detatched mode)

To run your tests:

```
docker-compose up -d
docker-compose exec {your container name} sh -c 'yarn test
```

## Deployment

If everything goes well and you want to deploy your application, you need to update the Helm configuration and Jenkinsfile. To do so:

- Choose a name for your service and use the shell script rename-services.sh to adjust the configuration files.
  For example `analytics-search`

- Run `sh rename-services.sh $long_name`

Next, push your changes to the master branch. This will trigger your build pipeline (Jenkinsfile). To track the progress of your build, check [Jenkins](https://jenkins.miamed.de/). To check the logs of the build on staging you need access to the EKS cluster it's being deployed on. Please ask for credentials in #hello-platform if you do not have them.

## Resources:

- https://www.notion.so/amboss1/Guide-Getting-your-microservice-to-production-from-scratch-4fa662c19d80480f929edab134cc2ad6#7fc3141631d74db3af3cba4cd8f4ac87
- https://www.notion.so/amboss1/How-To-Access-Amboss-EKS-clusters-4c41e130ef034127abc8091180c66eea
  new
  new
