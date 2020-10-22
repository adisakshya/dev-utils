# Dockerfile

FROM kong:latest

# Become root
USER root

# Install packages
RUN apk update && apk add \
    git \
    unzip \
    luarocks

# Install kong plugins
RUN luarocks install kong-plugin-cookies-to-headers

# Copy kong configuration file
COPY kong.conf /etc/kong/kong.conf

# PROXY Port
EXPOSE 8000

# Admin Port
EXPOSE 8001

# Heath Check Port
EXPOSE 8100
