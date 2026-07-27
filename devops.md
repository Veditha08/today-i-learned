# DevOps Notes

## Docker

### Key Concepts
Image: read-only blueprint (layers)
Container: running instance of image
Dockerfile: instructions to build image
Docker Hub: public image registry
Volume: persistent storage for containers

### Common Commands
docker build -t appname .
docker run -p hostPort:containerPort imageName
docker ps (list running) / docker ps -a (all)
docker stop containerId
docker rm containerId / docker rmi imageId
docker logs containerId
docker exec -it containerId /bin/sh

### docker-compose
Manages multi-container applications
Define services, networks, volumes in YAML
docker-compose up -d (start in background)
docker-compose down (stop and remove)

## CI/CD

Continuous Integration: auto build+test on every push
Continuous Delivery: auto deploy to staging
Continuous Deployment: auto deploy to production

Popular Tools: GitHub Actions, Jenkins, CircleCI, GitLab CI

GitHub Actions concepts:
Workflow: YAML file in .github/workflows/
Trigger: on push, pull_request, schedule, workflow_dispatch
Job: runs on a runner (ubuntu-latest, windows-latest)
Step: individual command or action
Action: reusable unit (checkout, setup-node, etc)

Benefits:
- Catch bugs early
- Consistent testing
- Faster, reliable deployments
- Audit trail of changes
