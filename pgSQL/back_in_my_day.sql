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
-- Name: q0_5; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q0_5 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q0_5 OWNER TO siegeengine;

--
-- Name: q10_12; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q10_12 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q10_12 OWNER TO siegeengine;

--
-- Name: q11_13; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q11_13 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q11_13 OWNER TO siegeengine;

--
-- Name: q13_17; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q13_17 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q13_17 OWNER TO siegeengine;

--
-- Name: q17_21; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q17_21 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q17_21 OWNER TO siegeengine;

--
-- Name: q21; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q21 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q21 OWNER TO siegeengine;

--
-- Name: q5_10; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.q5_10 (
    id integer NOT NULL,
    user_id integer,
    question_1 character varying(255),
    question_2 character varying(255),
    question_3 character varying(255)
);


ALTER TABLE public.q5_10 OWNER TO siegeengine;

--
-- Name: users; Type: TABLE; Schema: public; Owner: siegeengine
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    age integer,
    city character varying(255)
);


ALTER TABLE public.users OWNER TO siegeengine;

--
-- Data for Name: q0_5; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q0_5 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q10_12; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q10_12 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q11_13; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q11_13 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q13_17; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q13_17 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q17_21; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q17_21 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q21; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q21 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: q5_10; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.q5_10 (id, user_id, question_1, question_2, question_3) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: siegeengine
--

COPY public.users (id, username, age, city) FROM stdin;
\.


--
-- Name: q0_5 q0_5_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q0_5
    ADD CONSTRAINT q0_5_pkey PRIMARY KEY (id);


--
-- Name: q10_12 q10_12_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q10_12
    ADD CONSTRAINT q10_12_pkey PRIMARY KEY (id);


--
-- Name: q11_13 q11_13_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q11_13
    ADD CONSTRAINT q11_13_pkey PRIMARY KEY (id);


--
-- Name: q13_17 q13_17_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q13_17
    ADD CONSTRAINT q13_17_pkey PRIMARY KEY (id);


--
-- Name: q17_21 q17_21_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q17_21
    ADD CONSTRAINT q17_21_pkey PRIMARY KEY (id);


--
-- Name: q21 q21_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q21
    ADD CONSTRAINT q21_pkey PRIMARY KEY (id);


--
-- Name: q5_10 q5_10_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q5_10
    ADD CONSTRAINT q5_10_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: q0_5 q0_5_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q0_5
    ADD CONSTRAINT q0_5_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q10_12 q10_12_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q10_12
    ADD CONSTRAINT q10_12_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q11_13 q11_13_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q11_13
    ADD CONSTRAINT q11_13_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q13_17 q13_17_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q13_17
    ADD CONSTRAINT q13_17_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q17_21 q17_21_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q17_21
    ADD CONSTRAINT q17_21_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q21 q21_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q21
    ADD CONSTRAINT q21_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- Name: q5_10 q5_10_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: siegeengine
--

ALTER TABLE ONLY public.q5_10
    ADD CONSTRAINT q5_10_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

