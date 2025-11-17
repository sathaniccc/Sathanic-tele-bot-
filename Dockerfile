FROM node:18

# Install dependencies safely
RUN apt-get update && \
    apt-get install -y ffmpeg curl python3 python3-venv python3-pip && \
    rm -rf /var/lib/apt/lists/*

# Install yt-dlp (using curl instead of pip — safer for Koyeb)
RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp && \
    chmod +x /usr/local/bin/yt-dlp

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]
