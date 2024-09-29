# Use the official Node.js 18 image as the base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 (the default port Vite runs on)
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev", "--", "--host"]