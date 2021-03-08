FROM cypress/included:6.6.0
LABEL author="mjeeshan"
WORKDIR /app
COPY package.json .
COPY cypress.json .
RUN npm i
COPY . .
ENTRYPOINT ["npm"]
CMD ["run", "build"]