# Build stage
FROM node:20-alpine as builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY .npmrc ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.npmrc ./

# Install only production dependencies
RUN npm ci --production

# Expose the port the app runs on
EXPOSE 80

# Set environment variables
ENV PORT=80
ENV HOST=0.0.0.0

# Start the application
CMD ["node", "build"]
