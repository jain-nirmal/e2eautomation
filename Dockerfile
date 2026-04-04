FROM mcr.microsoft.com/playwright:v1.59.1-noble

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

# Run tests with sharding capability
#CMD ["npx", "playwright", "test"]
CMD npx playwright test || true && npx allure generate allure-results --clean -o allure-report