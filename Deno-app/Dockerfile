FROM denoland/deno:alpine

WORKDIR /app


COPY . .


RUN deno cache server.js


EXPOSE 3000

# run app
CMD ["deno", "run", "--allow-net", "--allow-env", "--allow-read", "server.js"]
