--
-- PostgreSQL database dump
--

-- Dumped from database version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)
-- Dumped by pg_dump version 10.12 (Ubuntu 10.12-0ubuntu0.18.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE ONLY public.rsvp DROP CONSTRAINT rsvp_pkey;
ALTER TABLE public.rsvp ALTER COLUMN "rsvpId" DROP DEFAULT;
DROP SEQUENCE public."rsvp_rsvpId_seq";
DROP TABLE public.rsvp;
DROP EXTENSION plpgsql;
DROP SCHEMA public;
--
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

CREATE SCHEMA public;


--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA public IS 'standard public schema';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: rsvp; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.rsvp (
    "rsvpId" integer NOT NULL,
    "guest1Name" text NOT NULL,
    "guest1Meal" text NOT NULL,
    "guest1Allergies" text NOT NULL,
    "guest2Name" text NOT NULL,
    "guest2Meal" text NOT NULL,
    "guest2Allergies" text NOT NULL
);


--
-- Name: rsvp_rsvpId_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public."rsvp_rsvpId_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: rsvp_rsvpId_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public."rsvp_rsvpId_seq" OWNED BY public.rsvp."rsvpId";


--
-- Name: rsvp rsvpId; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rsvp ALTER COLUMN "rsvpId" SET DEFAULT nextval('public."rsvp_rsvpId_seq"'::regclass);


--
-- Data for Name: rsvp; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.rsvp ("rsvpId", "guest1Name", "guest1Meal", "guest1Allergies", "guest2Name", "guest2Meal", "guest2Allergies") FROM stdin;
\.


--
-- Name: rsvp_rsvpId_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public."rsvp_rsvpId_seq"', 1, false);


--
-- Name: rsvp rsvp_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.rsvp
    ADD CONSTRAINT rsvp_pkey PRIMARY KEY ("rsvpId");


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: -
--

GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

