#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Uncomment the next line for debugging (prints commands and their arguments as they are executed).
# set -x

echo "--- Starting Application Setup ---"

echo "Step 1: Installing project dependencies..."
if [ -f "package-lock.json" ]; then
  echo "Found package-lock.json, using 'npm ci' for clean and fast installation."
  npm ci
elif [ -f "yarn.lock" ]; then
  echo "Found yarn.lock, using 'yarn install --frozen-lockfile'."
  yarn install --frozen-lockfile
else
  echo "No lockfile (package-lock.json or yarn.lock) found. Using 'npm install'."
  echo "Consider committing a lockfile for reproducible builds."
  npm install
fi
echo "Dependency installation complete."

echo "\nStep 2: Building the React application..."
# This command assumes your build script is named 'build' in your package.json
# (e.g., "scripts": { "build": "vite build" } for Vite projects).
npm run build
echo "Build complete. Output should be in the 'dist' directory."

echo "\nStep 3: Starting the server..."
# Serve the build output from the 'dist' directory.
# The 'dist' folder is the typical output for Vite and many other build tools.
# The '-s' flag enables single-page application (SPA) mode, crucial for client-side routing (e.g., React Router).
# The '-l 9000' flag specifies that the server should listen on port 9000.

# Check if 'dist' directory exists before attempting to serve
if [ ! -d "dist" ]; then
  echo "Error: 'dist' directory not found after build. Cannot start server."
  exit 1
fi

echo "Serving application from 'dist' directory on port 9000."
echo "Access the application at http://localhost:9000 (or your machine's IP on port 9000)"

# Use npx to run the 'serve' package. 'serve' is a simple static server.
# If 'serve' is a project dependency, 'npx' will use the local version.
# Otherwise, 'npx' will download it temporarily.
npx serve -s dist -l 9000

# The script will remain active here as 'npx serve' runs in the foreground.
# To stop the server, you'll typically use Ctrl+C in the terminal where this script is running.
echo "--- Server stopped or startup script exited ---"
