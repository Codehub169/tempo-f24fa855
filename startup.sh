#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Add standard shell script best practices for robustness
# set -u # Treat unset variables as an error
# set -o pipefail # Cause a pipeline to return the exit status of the last command that exited with a non-zero status

# Informative message about the script's purpose
echo "Starting application setup: installing dependencies, building, and serving..."

# Install all dependencies, including devDependencies, as specified by project requirements.
# This ensures that build tools and the 'serve' package (a devDependency) are available.
echo "Installing dependencies (including devDependencies)..."
npm install

# Run the build process (e.g., transpile code, bundle assets).
# This relies on the 'build' script defined in package.json.
echo "Building the application..."
npm run build

# Serve the built application.
# This relies on the 'serve' script defined in package.json, which uses the 'serve' CLI tool.
# The 'serve' package serves static files from the 'dist' directory on port 9000 by default configuration in package.json.
echo "Starting the server on port 9000 (serving contents of 'dist' directory)..."
npm run serve

# Note: This script will typically keep running due to 'npm run serve'.
# To stop it, you'll need to manually interrupt (e.g., Ctrl+C).
