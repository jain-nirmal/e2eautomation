FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

#Install Java (required for Allure)
RUN apt-get update && apt-get install -y openjdk-11-jre-headless && rm -rf /var/lib/apt/lists/*

#Install Allure commandline
RUN npm install -g allure-commandline --save-dev

COPY package*.json ./
RUN npm ci

COPY . .

# Run tests with sharding capability
#CMD ["npx", "playwright", "test"]
CMD npx playwright test || true && npx allure generate allure-results --clean -o allure-report