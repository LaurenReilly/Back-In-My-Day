--
-- PostgreSQL database dump
--

-- Dumped from database version 10.5
-- Dumped by pg_dump version 11.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: SequelizeMeta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."SequelizeMeta" (
    name character varying(255) NOT NULL
);


ALTER TABLE public."SequelizeMeta" OWNER TO postgres;

--
-- Name: adults; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.adults (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.adults OWNER TO siegeengine;

--
-- Name: adults_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.adults_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adults_id_seq OWNER TO siegeengine;

--
-- Name: adults_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.adults_id_seq OWNED BY public.adults.id;


--
-- Name: babies; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.babies (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.babies OWNER TO siegeengine;

--
-- Name: babies_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.babies_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.babies_id_seq OWNER TO siegeengine;

--
-- Name: babies_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.babies_id_seq OWNED BY public.babies.id;


--
-- Name: kids; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.kids (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.kids OWNER TO siegeengine;

--
-- Name: kids_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.kids_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.kids_id_seq OWNER TO siegeengine;

--
-- Name: kids_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.kids_id_seq OWNED BY public.kids.id;


--
-- Name: preteens; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.preteens (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.preteens OWNER TO siegeengine;

--
-- Name: preteens_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.preteens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.preteens_id_seq OWNER TO siegeengine;

--
-- Name: preteens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.preteens_id_seq OWNED BY public.preteens.id;


--
-- Name: teenagers; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.teenagers (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.teenagers OWNER TO siegeengine;

--
-- Name: teenagers_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.teenagers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teenagers_id_seq OWNER TO siegeengine;

--
-- Name: teenagers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.teenagers_id_seq OWNED BY public.teenagers.id;


--
-- Name: tweens; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.tweens (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.tweens OWNER TO siegeengine;

--
-- Name: tweens_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.tweens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tweens_id_seq OWNER TO siegeengine;

--
-- Name: tweens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.tweens_id_seq OWNED BY public.tweens.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.users (
    id integer NOT NULL,
    user_name text,
    password text,
    email text,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.users OWNER TO siegeengine;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO siegeengine;

--
-- Name: users_id_seq1; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.users_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq1 OWNER TO siegeengine;

--
-- Name: users_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.users_id_seq1 OWNED BY public.users.id;


--
-- Name: youngadults; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.youngadults (
    id integer NOT NULL,
    question_1 text,
    question_2 text,
    question_3 text,
    "userId" integer,
    "createdAt" text,
    "updatedAt" text
);


ALTER TABLE public.youngadults OWNER TO siegeengine;

--
-- Name: youngadults_id_seq; Type: SEQUENCE; Schema: public; Owner: siegeengine
--

CREATE SEQUENCE public.youngadults_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.youngadults_id_seq OWNER TO siegeengine;

--
-- Name: youngadults_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: siegeengine
--

ALTER SEQUENCE public.youngadults_id_seq OWNED BY public.youngadults.id;


--
-- Name: adults id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.adults ALTER COLUMN id SET DEFAULT nextval('public.adults_id_seq'::regclass);


--
-- Name: babies id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.babies ALTER COLUMN id SET DEFAULT nextval('public.babies_id_seq'::regclass);


--
-- Name: kids id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.kids ALTER COLUMN id SET DEFAULT nextval('public.kids_id_seq'::regclass);


--
-- Name: preteens id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.preteens ALTER COLUMN id SET DEFAULT nextval('public.preteens_id_seq'::regclass);


--
-- Name: teenagers id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.teenagers ALTER COLUMN id SET DEFAULT nextval('public.teenagers_id_seq'::regclass);


--
-- Name: tweens id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.tweens ALTER COLUMN id SET DEFAULT nextval('public.tweens_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq1'::regclass);


--
-- Name: youngadults id; Type: DEFAULT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.youngadults ALTER COLUMN id SET DEFAULT nextval('public.youngadults_id_seq'::regclass);


--
-- Data for Name: SequelizeMeta; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."SequelizeMeta" (name) FROM stdin;
20190115041835-create-users.js
20190115042757-add-email.js
20190115042929-add-crypt-pass.js
\.


--
-- Data for Name: adults; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.adults (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: babies; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.babies (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: kids; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.kids (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: preteens; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.preteens (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: teenagers; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.teenagers (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: tweens; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.tweens (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.users (id, user_name, password, email, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Data for Name: youngadults; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.youngadults (id, question_1, question_2, question_3, "userId", "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: adults_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.adults_id_seq', 1, false);


--
-- Name: babies_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.babies_id_seq', 1, false);


--
-- Name: kids_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.kids_id_seq', 1, false);


--
-- Name: preteens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.preteens_id_seq', 1, false);


--
-- Name: teenagers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.teenagers_id_seq', 1, false);


--
-- Name: tweens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.tweens_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: users_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.users_id_seq1', 1, false);


--
-- Name: youngadults_id_seq; Type: SEQUENCE SET; Schema: public; Owner: siegeengine
--

SELECT pg_catalog.setval('public.youngadults_id_seq', 1, false);


--
-- Name: SequelizeMeta SequelizeMeta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."SequelizeMeta"
    ADD CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY (name);


--
-- Name: adults adults_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.adults
    ADD CONSTRAINT adults_pkey PRIMARY KEY (id);


--
-- Name: babies babies_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.babies
    ADD CONSTRAINT babies_pkey PRIMARY KEY (id);


--
-- Name: kids kids_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.kids
    ADD CONSTRAINT kids_pkey PRIMARY KEY (id);


--
-- Name: preteens preteens_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.preteens
    ADD CONSTRAINT preteens_pkey PRIMARY KEY (id);


--
-- Name: teenagers teenagers_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.teenagers
    ADD CONSTRAINT teenagers_pkey PRIMARY KEY (id);


--
-- Name: tweens tweens_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.tweens
    ADD CONSTRAINT tweens_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: youngadults youngadults_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.youngadults
    ADD CONSTRAINT youngadults_pkey PRIMARY KEY (id);


--
-- Name: adults adults_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.adults
    ADD CONSTRAINT "adults_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: babies babies_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.babies
    ADD CONSTRAINT "babies_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: kids kids_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.kids
    ADD CONSTRAINT "kids_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: preteens preteens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.preteens
    ADD CONSTRAINT "preteens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: teenagers teenagers_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.teenagers
    ADD CONSTRAINT "teenagers_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: tweens tweens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.tweens
    ADD CONSTRAINT "tweens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: youngadults youngadults_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.youngadults
    ADD CONSTRAINT "youngadults_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

