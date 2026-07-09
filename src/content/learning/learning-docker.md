---
title: Learning Docker
description: Containerize applications and master DevOps workflows
icon: "🐳"
---

## What is Docker?

Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, standalone, and executable packages that include everything needed to run a piece of software.

## Why Use Docker?

- **Consistency**: Same environment everywhere - development, testing, production
- **Isolation**: Applications don't interfere with each other
- **Portability**: Run on any system with Docker installed
- **Efficiency**: Containers share the host OS kernel, unlike VMs

## Core Concepts

### Dockerfile
A text file containing instructions to build a Docker image.

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

### Docker Compose
Define and run multi-container applications with a YAML file.

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
    volumes:
      - pgdata:/var/lib/postgresql/data

volumes:
  pgdata:
```

## Essential Commands

```bash
# Build an image
docker build -t my-app .

# Run a container
docker run -d -p 3000:3000 --name my-app my-app

# List running containers
docker ps

# View logs
docker logs my-app

# Execute command in running container
docker exec -it my-app sh

# Stop and remove
docker stop my-app && docker rm my-app
```

## Learning Path

1. **Week 1**: Install Docker, basic commands, run your first container
2. **Week 2**: Dockerfiles, building images, layer caching
3. **Week 3**: Docker Compose, multi-container apps
4. **Week 4**: Volumes, networking, environment variables
5. **Week 5-6**: Docker in production, security best practices

## Resources

- [Docker Official Docs](https://docs.docker.com)
- [Docker Curriculum](https://docker-curriculum.com) - Beginner tutorial
- [Play with Docker](https://labs.play-with-docker.com) - Online playground
