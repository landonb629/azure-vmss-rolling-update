FROM ubuntu

ARG imageid 
ARG username 
ARG password 
ARG tenant

RUN apt-get update && \
    apt-get install curl vim -y

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/entrypoint.sh" ]

# you can login like so 
# az login --service-principal --username cd98b796-8cfc-4d69-b393-588ba7c5ade8 --password tzn8Q~4f0kqkZixKOZ~hQMSoSUP-qmeeEpFsKbxt --tenant 0ff27296-360f-491c-80ba-c37842c04960