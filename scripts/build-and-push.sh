#!/usr/bin/env bash
set -euo pipefail
set -a; source .env.build; set +a

DOCKERHUB_USER=muhammadhamza4118
IMAGE="$DOCKERHUB_USER/mahy-frontend"
VERSION="${1:?Usage: bash scripts/build-and-push.sh <version>   e.g. v1.0.0}"

docker buildx build --platform linux/amd64 \
  --build-arg NEXT_PUBLIC_RECAPTCHA_SITE_KEY \
  --build-arg NEXT_PUBLIC_BASE_URL \
  --build-arg NEXT_PUBLIC_AZURE_TENANT_ID \
  --build-arg NEXT_PUBLIC_AZURE_CLIENT_ID \
  --build-arg NEXT_PUBLIC_REDIRECT_URI \
  --build-arg NEXT_PUBLIC_MAHY_SHOP_URL \
  -t "$IMAGE:$VERSION" \
  -t "$IMAGE:latest" \
  --push .

echo "✅ Pushed $IMAGE:$VERSION and $IMAGE:latest"