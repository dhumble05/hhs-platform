import { env } from "cloudflare:workers";
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(
  () => {},
  () => ({
    publishableKey: env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    secretKey: env.CLERK_SECRET_KEY,
  }),
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/(.*)",
  ],
};