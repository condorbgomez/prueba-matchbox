FROM public.ecr.aws/s9s1r6x7/condorlabs/ora-node:10.23.0-slim-cl.1

RUN useradd --user-group --create-home --shell /bin/false nodejs
ENV HOME=/home/nodejs

COPY package*.json $HOME/app/
RUN chown -R nodejs:nodejs $HOME/*

USER nodejs

##install npm for API
WORKDIR $HOME/app
RUN npm install

CMD ["npm", "run","start_dev"]