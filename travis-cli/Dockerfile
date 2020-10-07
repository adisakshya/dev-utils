# Dockerfile

FROM ruby:2.7.2-alpine

# Install Travis CLI
RUN apk add --no-cache build-base && \
    gem install travis && \
    rm -rf /var/lib/apt/lists/* /var/cache/apk/* \ 
    /usr/lib/ruby/gems/*/cache/* && \
    gem cleanup
