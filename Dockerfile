FROM ubuntu

RUN apt-get update && \
    apt-get install curl vim nodejs -y

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]
