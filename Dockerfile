FROM ubuntu

RUN curl -sl https://deb.nodesource.com/setup_18.x | bash -

RUN apt-get update && \
    apt-get install curl nodejs npm vim -y

RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

COPY package.json package-lock.json ./

RUN npm install

COPY . .

COPY entrypoint.sh /entrypoint.sh

CMD ["tail", "-f", "/dev/null"]
#ENTRYPOINT [ "./entrypoint.sh" ]
