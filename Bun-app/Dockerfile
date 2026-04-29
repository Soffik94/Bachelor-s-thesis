FROM oven/bun:latest

WORKDIR /app

# zkopíruj celý projekt
COPY . .

# otevři port
EXPOSE 3000

# spusť appku
CMD ["bun", "run", "server.js"]
