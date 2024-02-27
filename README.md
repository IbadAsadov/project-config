## Create Image

```
docker build -t app-image .
```

## Create container

```
docker run -d -p 8000:80 --name app app-image
```
