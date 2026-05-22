#!/usr/bin/env bash
# Downloads the Linux PocketBase binary (Render). Skips if a Linux binary is already present.
set -euo pipefail

VERSION="0.38.0"
ARCH="linux_amd64"
ZIP="pocketbase_${VERSION}_${ARCH}.zip"
URL="https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/${ZIP}"

cd "$(dirname "$0")/.."

if [ -f ./pocketbase ]; then
  if ./pocketbase --version >/dev/null 2>&1; then
    echo "PocketBase binary OK: $(./pocketbase --version)"
    exit 0
  fi
  echo "Replacing incompatible pocketbase binary..."
  rm -f ./pocketbase
fi

echo "Downloading PocketBase ${VERSION} (${ARCH})..."
curl -fsSL -o "/tmp/${ZIP}" "${URL}"
unzip -o "/tmp/${ZIP}" -d .
chmod +x ./pocketbase
rm -f "/tmp/${ZIP}"
echo "Installed: $(./pocketbase --version)"
