-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Users Table
CREATE TABLE IF NOT EXISTS public.users (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    name text NOT NULL,
    "lastName" text NOT NULL,
    email text NOT NULL,
    "emailVerified" boolean NOT NULL DEFAULT false,
    image text,
    "createdAt" timestamp without time zone NOT NULL,
    password text NOT NULL,
    username text NOT NULL,
    bio text,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT "users_userName_key" UNIQUE (username)
);

-- 2. Sessions Table
CREATE TABLE IF NOT EXISTS public.sessions (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    "expiresAt" timestamp without time zone NOT NULL,
    "ipAddress" text,
    "userAgent" text,
    "userId" text NOT NULL,
    token text NOT NULL,
    CONSTRAINT session_pkey PRIMARY KEY (id),
    CONSTRAINT sessions_token_key UNIQUE (token),
    CONSTRAINT "session_userId_fkey" FOREIGN KEY ("userId") 
        REFERENCES public.users(id)
);

-- 3. Follows Table
CREATE TABLE IF NOT EXISTS public.follows (
    "followerId" text NOT NULL,
    "followingId" text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now(),
    CONSTRAINT follows_pkey PRIMARY KEY ("followerId", "followingId"),
    CONSTRAINT follows_check CHECK ("followerId" <> "followingId"),
    CONSTRAINT "follows_followerId_fkey" FOREIGN KEY ("followerId") 
        REFERENCES public.users(id) ON DELETE CASCADE,
    CONSTRAINT "follows_followingId_fkey" FOREIGN KEY ("followingId") 
        REFERENCES public.users(id) ON DELETE CASCADE
);

-- 4. Garments Table
CREATE TABLE IF NOT EXISTS public.garments (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    color text NOT NULL,
    brand text NOT NULL,
    type text NOT NULL,
    size text,
    "userId" text NOT NULL,
    images text[] NOT NULL,
    name text NOT NULL,
    materials text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now(),
    CONSTRAINT garments_pkey PRIMARY KEY (id),
    CONSTRAINT "garments_userId_fkey" FOREIGN KEY ("userId") 
        REFERENCES public.users(id) ON DELETE CASCADE
);
-- AI generated 