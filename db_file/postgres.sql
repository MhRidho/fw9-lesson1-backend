--
-- PostgreSQL database dump
--

-- Dumped from database version 14.3
-- Dumped by pg_dump version 14.3

-- Started on 2022-09-29 17:55:59

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

DROP DATABASE postgres;
--
-- TOC entry 3310 (class 1262 OID 57434)
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_Indonesia.1252';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

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

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 3311 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 57436)
-- Name: contact; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contact (
    id integer NOT NULL,
    username character varying(255) NOT NULL,
    email character varying(50) NOT NULL,
    phone character varying(30) NOT NULL,
    message text
);


ALTER TABLE public.contact OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 57435)
-- Name: contact_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.contact ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.contact_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3304 (class 0 OID 57436)
-- Dependencies: 210
-- Data for Name: contact; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contact (id, username, email, phone, message) FROM stdin;
17	user	user@gmail.com	081234567812	message from user 1
18	user2	user2@gmail.com	082732382312	message random
19	user3	user3@gmail.com	089812872376	message star
20	user4	user4@gmail.com	081527367621	from frontend
21	user5	user5@gmail.com	089812981223	message from backend
22	user6	user6@gmail.com	081287128712	star from backend
23	user7	user7@gmail.com	081287237231	random two
24	user8	user8@gmail.com	081298121928	random three
25	user9	user9@gmail.com	089823928323	random four
26	user10	user10@gmail.com	081298239823	random five
27	user11	user11@gmail.com	082282738273	random six
28	user12	user12@gmail.com	081912981921	random seven
29	user13	user13@gmail.com	081287128121	random eight
30	user14	user14@gmail.com	082392392823	random nine
31	user15	user15@gmail.com	082383483343	random ten
32	user16	user16@gmail.com	081281281721	random eleven
33	user17	user17@gmail.com	081228372831	random twelve
34	user18	user18@gmail.com	081298129981	random thirty
35	user19	user19@gmail.com	081992832387	random fourty
36	user20	user22@gmail.com	081298239283	random fifty
37	user21	user21@gmail.com	081287238723	random thirty one
38	user22	user22@gmail.com	081298129812	freedom one
39	user23	user23@gmail.com	081298129182	freedom two
41	user24	user24@gmail.com	081291829182	freedom four
\.


--
-- TOC entry 3312 (class 0 OID 0)
-- Dependencies: 209
-- Name: contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contact_id_seq', 41, true);


-- Completed on 2022-09-29 17:55:59

--
-- PostgreSQL database dump complete
--

