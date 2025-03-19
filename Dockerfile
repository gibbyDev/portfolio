# Use a Node.js version that is compatible with Next.js
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build && ls -lah .next  # Debugging to ensure .next exists

# Use a smaller base image for the final stage
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the builder stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/package*.json /app/
COPY --from=builder /app/public /app/public

# Install only production dependencies
RUN npm install --only=production --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3000

# Start the application in production mode
CMD ["npx", "next", "start"]
