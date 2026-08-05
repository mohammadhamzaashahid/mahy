# ---------- base ----------
FROM node:24-alpine AS base
RUN apk add --no-cache libc6-compat

# ---------- deps ----------
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- builder ----------
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* are baked into the client bundle at BUILD time:
ARG NEXT_PUBLIC_RECAPTCHA_SITE_KEY
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_AZURE_TENANT_ID
ARG NEXT_PUBLIC_AZURE_CLIENT_ID
ARG NEXT_PUBLIC_REDIRECT_URI
ARG NEXT_PUBLIC_MAHY_SHOP_URL
ENV NEXT_PUBLIC_RECAPTCHA_SITE_KEY=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY \
    NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL \
    NEXT_PUBLIC_AZURE_TENANT_ID=$NEXT_PUBLIC_AZURE_TENANT_ID \
    NEXT_PUBLIC_AZURE_CLIENT_ID=$NEXT_PUBLIC_AZURE_CLIENT_ID \
    NEXT_PUBLIC_REDIRECT_URI=$NEXT_PUBLIC_REDIRECT_URI \
    NEXT_PUBLIC_MAHY_SHOP_URL=$NEXT_PUBLIC_MAHY_SHOP_URL \
    NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---------- runner ----------
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]