# syntax = docker/dockerfile:1

FROM nginx:alpine

# Copy the website files from src to nginx's default serving directory
COPY src /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
