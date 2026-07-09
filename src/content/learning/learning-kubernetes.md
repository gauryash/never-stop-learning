---
title: Learning Kubernetes
description: Container orchestration for production deployments
icon: "☸️"
---

## What is Kubernetes?

Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.

## Why Kubernetes?

- **Auto-scaling**: Automatically adjust resources based on demand
- **Self-healing**: Restart failed containers, replace unresponsive nodes
- **Load balancing**: Distribute traffic across instances
- **Rolling updates**: Deploy changes with zero downtime

## Core Concepts

### Pods
The smallest deployable unit in Kubernetes. A pod contains one or more containers.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-app
spec:
  containers:
  - name: app
    image: nginx:latest
    ports:
    - containerPort: 80
```

### Deployments
Manage the desired state for pods and ReplicaSets.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: my-app:latest
        ports:
        - containerPort: 3000
```

### Services
Expose applications to the network.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

## Essential Commands

```bash
# Get cluster info
kubectl cluster-info

# List pods
kubectl get pods

# View pod logs
kubectl logs my-app-pod

# Execute into a pod
kubectl exec -it my-app-pod -- /bin/sh

# Apply configuration
kubectl apply -f deployment.yaml

# Scale deployment
kubectl scale deployment my-app --replicas=5
```

## Learning Path

1. **Week 1**: Install minikube, basic commands, pods
2. **Week 2**: Deployments, services, configuration
3. **Week 3**: Volumes, persistent storage, ConfigMaps
4. **Week 4**: Networking, ingress controllers
5. **Week 5-6**: Helm charts, monitoring, production practices

## Resources

- [Kubernetes Official Docs](https://kubernetes.io/docs/)
- [Kubernetes the Hard Way](https://github.com/kelseyhightower/kubernetes-the-hard-way) - Deep understanding
- [Play with Kubernetes](https://labs.play-with-k8s.com/) - Online playground
