FROM denoland/deno:alpine

WORKDIR /app


COPY . .


RUN deno cache server.js


EXPOSE 3000

# run app
CMD ["run",
     "--allow-net",
     "--allow-env",
     "--allow-read",
     "server.js"]