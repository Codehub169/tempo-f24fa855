#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Run the build process
echo "Building the application..."
npm run build

# Serve the built application
echo "Starting the server..."
npm run serve
