FROM ruby:4.0.6

WORKDIR /app

RUN cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime \
  && apt update -qq && apt install -y build-essential libpq-dev postgresql-client libvips42t64 \
  && curl -sL https://deb.nodesource.com/setup_24.x | bash - \
  && apt install -y nodejs vim \
  && apt clean \
  && rm -rf /var/lib/apt/lists/* \
  && gem install bundler pry pry-coolline
