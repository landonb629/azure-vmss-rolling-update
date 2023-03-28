FROM ubuntu

RUN apt-get update && \
    apt-get install curl vim nodejs -y

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

RUN npm install

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
