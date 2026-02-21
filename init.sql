-- Enable pgcrypto for gen_random_uuid()
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Enable pg_trgm and unaccent for better search capabilities
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE EXTENSION IF NOT EXISTS unaccent;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS public.users (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    name text NOT NULL,
    "last_name" text NOT NULL,
    email text NOT NULL,
    "email_verified" boolean NOT NULL DEFAULT false,
    image text,
    "created_at" timestamp without time zone NOT NULL,
    password text NOT NULL,
    username text NOT NULL,
    bio text,
    CONSTRAINT users_pkey PRIMARY KEY (id),
    CONSTRAINT users_email_key UNIQUE (email),
    CONSTRAINT "users_username_key" UNIQUE (username)
);

-- 2. Sessions Table
CREATE TABLE IF NOT EXISTS public.sessions (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    "expires_at" timestamp without time zone NOT NULL,
    "ip_address" text,
    "user_agent" text,
    "user_id" text NOT NULL,
    token text NOT NULL,
    CONSTRAINT session_pkey PRIMARY KEY (id),
    CONSTRAINT sessions_token_key UNIQUE (token),
    CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") 
        REFERENCES public.users(id)
);

-- 3. Follows Table
CREATE TABLE IF NOT EXISTS public.follows (
    "follower_id" text NOT NULL,
    "following_id" text NOT NULL,
    "created_at" timestamp without time zone DEFAULT now(),
    CONSTRAINT follows_pkey PRIMARY KEY ("follower_id", "following_id"),
    CONSTRAINT follows_check CHECK ("follower_id" <> "following_id"),
    CONSTRAINT "follows_follower_id_fkey" FOREIGN KEY ("follower_id") 
        REFERENCES public.users(id) ON DELETE CASCADE,
    CONSTRAINT "follows_following_id_fkey" FOREIGN KEY ("following_id") 
        REFERENCES public.users(id) ON DELETE CASCADE
);

-- 4. Garments Table
CREATE TABLE IF NOT EXISTS public.garments (
    id text NOT NULL DEFAULT gen_random_uuid()::text,
    color text NOT NULL,
    brand text NOT NULL,
    type text NOT NULL,
    size text,
    "user_id" text NOT NULL,
    images text[] NOT NULL,
    name text NOT NULL,
    materials text NOT NULL,
    "created_at" timestamp with time zone DEFAULT now(),
    CONSTRAINT garments_pkey PRIMARY KEY (id),
    CONSTRAINT "garments_user_id_fkey" FOREIGN KEY ("user_id") 
        REFERENCES public.users(id) ON DELETE CASCADE
);


-- 5. Tags and user tast profile for personalized recommendations
CREATE TABLE IF NOT EXISTS public.tags (
    id SERIAL PRIMARY KEY,
    name text NOT NULL,        -- Ej: 'Oversized', 'Vintage', 'Streetwear', 'Verano'
    CONSTRAINT unique_tag_name_category UNIQUE (name, category)
);

CREATE TABLE IF NOT EXISTS public.garment_tags (
    garment_id text NOT NULL REFERENCES public.garments(id) ON DELETE CASCADE,
    tag_id INT NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
    PRIMARY KEY (garment_id, tag_id)
);

CREATE TABLE IF NOT EXISTS public.user_taste_profile (
    user_id text NOT NULL REFERENCES public.users(id) ON DELETE CASCADE,
    tag_id INT NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
    score float DEFAULT 1.0,
    last_interaction timestamp DEFAULT now(),
    PRIMARY KEY (user_id, tag_id)
);

--INSERT TAGS
INSERT INTO public.tags (name, tag, color) VALUES
  -- ESTILO
  ('Streetwear', 'streetwear', 'text-purple-600 border-purple-600'),
  ('Y2K', 'y2k', 'text-fuchsia-500 border-fuchsia-500'),
  ('Minimalist', 'minimalist', 'text-slate-500 border-slate-500'),
  ('Vintage', 'vintage', 'text-yellow-600 border-yellow-600'),
  ('Old money', 'old money', 'text-emerald-700 border-emerald-700'),
  ('Gorpcore', 'gorpcore', 'text-stone-600 border-stone-600'),
  
  -- FIT
  ('Oversized', 'oversized', 'text-blue-500 border-blue-500'),
  ('Baggy', 'baggy', 'text-sky-500 border-sky-500'),
  ('Slim fit', 'slim fit', 'text-blue-600 border-blue-600'),
  ('Skinny', 'skinny', 'text-blue-800 border-blue-800'),
  ('Cropped', 'cropped', 'text-cyan-600 border-cyan-600'),
  ('Boxy', 'boxy', 'text-indigo-500 border-indigo-500'),
  
  -- OCASION
  ('Casual', 'casual', 'text-emerald-500 border-emerald-500'),
  ('Party / night out', 'party / night out', 'text-zinc-800 border-zinc-800'),
  ('Office / formal', 'office / formal', 'text-teal-700 border-teal-700'),
  ('Gym', 'gym', 'text-lime-600 border-lime-600'),
  ('Beach', 'beach', 'text-cyan-500 border-cyan-500')

-- Si el tag ya existe en la base de datos, lo salta para no crear duplicados
ON CONFLICT (tag) DO NOTHING;
-- AI generated 