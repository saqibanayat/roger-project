PGDMP                  	        {            Roger    12.13    12.13 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    17181    Roger    DATABASE     �   CREATE DATABASE "Roger" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE "Roger";
                postgres    false                        3079    17182 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    17193 
   attributes    TABLE     a   CREATE TABLE public.attributes (
    id integer NOT NULL,
    name character varying NOT NULL
);
    DROP TABLE public.attributes;
       public         heap    postgres    false            �            1259    17199    attributes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.attributes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.attributes_id_seq;
       public          postgres    false    203            �           0    0    attributes_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.attributes_id_seq OWNED BY public.attributes.id;
          public          postgres    false    204            �            1259    17201    chat_details    TABLE     �   CREATE TABLE public.chat_details (
    id integer NOT NULL,
    sender_id integer,
    reciever_id integer,
    details text NOT NULL,
    status character varying
);
     DROP TABLE public.chat_details;
       public         heap    postgres    false            �            1259    17207    chat_details_id_seq    SEQUENCE     �   CREATE SEQUENCE public.chat_details_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.chat_details_id_seq;
       public          postgres    false    205            �           0    0    chat_details_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.chat_details_id_seq OWNED BY public.chat_details.id;
          public          postgres    false    206            �            1259    17209    compare_packages    TABLE     o   CREATE TABLE public.compare_packages (
    id integer NOT NULL,
    user_id integer,
    package_id integer
);
 $   DROP TABLE public.compare_packages;
       public         heap    postgres    false            �            1259    17212    compare_packages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.compare_packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.compare_packages_id_seq;
       public          postgres    false    207            �           0    0    compare_packages_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.compare_packages_id_seq OWNED BY public.compare_packages.id;
          public          postgres    false    208            �            1259    17214    custom_pages    TABLE     �   CREATE TABLE public.custom_pages (
    id integer NOT NULL,
    title text NOT NULL,
    details text NOT NULL,
    status character varying
);
     DROP TABLE public.custom_pages;
       public         heap    postgres    false            �            1259    17220    custom_pages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.custom_pages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.custom_pages_id_seq;
       public          postgres    false    209            �           0    0    custom_pages_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.custom_pages_id_seq OWNED BY public.custom_pages.id;
          public          postgres    false    210            �            1259    17222    feature_packages    TABLE     o   CREATE TABLE public.feature_packages (
    id integer NOT NULL,
    user_id integer,
    package_id integer
);
 $   DROP TABLE public.feature_packages;
       public         heap    postgres    false            �            1259    17225    feature_packages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.feature_packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.feature_packages_id_seq;
       public          postgres    false    211            �           0    0    feature_packages_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.feature_packages_id_seq OWNED BY public.feature_packages.id;
          public          postgres    false    212            �            1259    17227    menues    TABLE     �   CREATE TABLE public.menues (
    id integer NOT NULL,
    name character varying NOT NULL,
    href character varying NOT NULL,
    slug character varying NOT NULL,
    parent_id integer
);
    DROP TABLE public.menues;
       public         heap    postgres    false            �            1259    17233    menues_id_seq    SEQUENCE     �   CREATE SEQUENCE public.menues_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.menues_id_seq;
       public          postgres    false    213            �           0    0    menues_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.menues_id_seq OWNED BY public.menues.id;
          public          postgres    false    214            �            1259    17235    package_attribute    TABLE     �   CREATE TABLE public.package_attribute (
    id integer NOT NULL,
    package_id integer,
    attribute_id integer,
    des_pkg character varying(20) NOT NULL
);
 %   DROP TABLE public.package_attribute;
       public         heap    postgres    false            �            1259    17238    package_attribute_id_seq    SEQUENCE     �   CREATE SEQUENCE public.package_attribute_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.package_attribute_id_seq;
       public          postgres    false    215            �           0    0    package_attribute_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.package_attribute_id_seq OWNED BY public.package_attribute.id;
          public          postgres    false    216            �            1259    17240    packages    TABLE     �   CREATE TABLE public.packages (
    id integer NOT NULL,
    added_by integer,
    added_for integer,
    title text NOT NULL,
    details text NOT NULL,
    price character varying(20) NOT NULL,
    image character varying
);
    DROP TABLE public.packages;
       public         heap    postgres    false            �            1259    17246    packages_id_seq    SEQUENCE     �   CREATE SEQUENCE public.packages_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.packages_id_seq;
       public          postgres    false    217            �           0    0    packages_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.packages_id_seq OWNED BY public.packages.id;
          public          postgres    false    218            �            1259    17248 
   permission    TABLE     b   CREATE TABLE public.permission (
    id integer NOT NULL,
    title character varying NOT NULL
);
    DROP TABLE public.permission;
       public         heap    postgres    false            �            1259    17254    permission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.permission_id_seq;
       public          postgres    false    219            �           0    0    permission_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.permission_id_seq OWNED BY public.permission.id;
          public          postgres    false    220            �            1259    17256 	   rolemenue    TABLE     �   CREATE TABLE public.rolemenue (
    id integer NOT NULL,
    role_name character varying NOT NULL,
    role_id integer NOT NULL,
    menue_id integer NOT NULL
);
    DROP TABLE public.rolemenue;
       public         heap    postgres    false            �            1259    17262    rolemenue_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rolemenue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.rolemenue_id_seq;
       public          postgres    false    221            �           0    0    rolemenue_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.rolemenue_id_seq OWNED BY public.rolemenue.id;
          public          postgres    false    222            �            1259    17264    rolepermission    TABLE     p   CREATE TABLE public.rolepermission (
    id integer NOT NULL,
    role_id integer,
    permission_id integer
);
 "   DROP TABLE public.rolepermission;
       public         heap    postgres    false            �            1259    17267    rolepermission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.rolepermission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.rolepermission_id_seq;
       public          postgres    false    223            �           0    0    rolepermission_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.rolepermission_id_seq OWNED BY public.rolepermission.id;
          public          postgres    false    224            �            1259    17269    roles    TABLE     ]   CREATE TABLE public.roles (
    id integer NOT NULL,
    title character varying NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    17275    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    225            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    226            �            1259    17277    roleuser    TABLE     d   CREATE TABLE public.roleuser (
    id integer NOT NULL,
    role_id integer,
    user_id integer
);
    DROP TABLE public.roleuser;
       public         heap    postgres    false            �            1259    17280    roleuser_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roleuser_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.roleuser_id_seq;
       public          postgres    false    227                        0    0    roleuser_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.roleuser_id_seq OWNED BY public.roleuser.id;
          public          postgres    false    228            �            1259    17282    user_block_status    TABLE     r   CREATE TABLE public.user_block_status (
    id integer NOT NULL,
    user_id integer,
    status text NOT NULL
);
 %   DROP TABLE public.user_block_status;
       public         heap    postgres    false            �            1259    17288    user_block_status_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_block_status_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.user_block_status_id_seq;
       public          postgres    false    229                       0    0    user_block_status_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.user_block_status_id_seq OWNED BY public.user_block_status.id;
          public          postgres    false    230            �            1259    17290    user_forget_password_token    TABLE     z   CREATE TABLE public.user_forget_password_token (
    id integer NOT NULL,
    user_id integer,
    token text NOT NULL
);
 .   DROP TABLE public.user_forget_password_token;
       public         heap    postgres    false            �            1259    17296 !   user_forget_password_token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_forget_password_token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.user_forget_password_token_id_seq;
       public          postgres    false    231                       0    0 !   user_forget_password_token_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.user_forget_password_token_id_seq OWNED BY public.user_forget_password_token.id;
          public          postgres    false    232            �            1259    17298    users    TABLE     @  CREATE TABLE public.users (
    id integer NOT NULL,
    _id uuid DEFAULT public.uuid_generate_v4(),
    firstname text,
    lastname text,
    email text NOT NULL,
    password character varying NOT NULL,
    businessname text NOT NULL,
    email_varified_at timestamp without time zone,
    image character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false    2            �            1259    17305    users_chats    TABLE     m   CREATE TABLE public.users_chats (
    id integer NOT NULL,
    sender_id integer,
    reciever_id integer
);
    DROP TABLE public.users_chats;
       public         heap    postgres    false            �            1259    17308    users_chats_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_chats_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.users_chats_id_seq;
       public          postgres    false    234                       0    0    users_chats_id_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.users_chats_id_seq OWNED BY public.users_chats.id;
          public          postgres    false    235            �            1259    17310    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    233                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    236            �            1259    17312    users_varify_token    TABLE     r   CREATE TABLE public.users_varify_token (
    id integer NOT NULL,
    user_id integer,
    token text NOT NULL
);
 &   DROP TABLE public.users_varify_token;
       public         heap    postgres    false            �            1259    17318    users_varify_token_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_varify_token_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.users_varify_token_id_seq;
       public          postgres    false    237                       0    0    users_varify_token_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.users_varify_token_id_seq OWNED BY public.users_varify_token.id;
          public          postgres    false    238            �
           2604    17320    attributes id    DEFAULT     n   ALTER TABLE ONLY public.attributes ALTER COLUMN id SET DEFAULT nextval('public.attributes_id_seq'::regclass);
 <   ALTER TABLE public.attributes ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    204    203            �
           2604    17321    chat_details id    DEFAULT     r   ALTER TABLE ONLY public.chat_details ALTER COLUMN id SET DEFAULT nextval('public.chat_details_id_seq'::regclass);
 >   ALTER TABLE public.chat_details ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    205            �
           2604    17322    compare_packages id    DEFAULT     z   ALTER TABLE ONLY public.compare_packages ALTER COLUMN id SET DEFAULT nextval('public.compare_packages_id_seq'::regclass);
 B   ALTER TABLE public.compare_packages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    207            �
           2604    17323    custom_pages id    DEFAULT     r   ALTER TABLE ONLY public.custom_pages ALTER COLUMN id SET DEFAULT nextval('public.custom_pages_id_seq'::regclass);
 >   ALTER TABLE public.custom_pages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    209                        2604    17324    feature_packages id    DEFAULT     z   ALTER TABLE ONLY public.feature_packages ALTER COLUMN id SET DEFAULT nextval('public.feature_packages_id_seq'::regclass);
 B   ALTER TABLE public.feature_packages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211                       2604    17325 	   menues id    DEFAULT     f   ALTER TABLE ONLY public.menues ALTER COLUMN id SET DEFAULT nextval('public.menues_id_seq'::regclass);
 8   ALTER TABLE public.menues ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    213                       2604    17326    package_attribute id    DEFAULT     |   ALTER TABLE ONLY public.package_attribute ALTER COLUMN id SET DEFAULT nextval('public.package_attribute_id_seq'::regclass);
 C   ALTER TABLE public.package_attribute ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215                       2604    17327    packages id    DEFAULT     j   ALTER TABLE ONLY public.packages ALTER COLUMN id SET DEFAULT nextval('public.packages_id_seq'::regclass);
 :   ALTER TABLE public.packages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217                       2604    17328    permission id    DEFAULT     n   ALTER TABLE ONLY public.permission ALTER COLUMN id SET DEFAULT nextval('public.permission_id_seq'::regclass);
 <   ALTER TABLE public.permission ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219                       2604    17329    rolemenue id    DEFAULT     l   ALTER TABLE ONLY public.rolemenue ALTER COLUMN id SET DEFAULT nextval('public.rolemenue_id_seq'::regclass);
 ;   ALTER TABLE public.rolemenue ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221                       2604    17330    rolepermission id    DEFAULT     v   ALTER TABLE ONLY public.rolepermission ALTER COLUMN id SET DEFAULT nextval('public.rolepermission_id_seq'::regclass);
 @   ALTER TABLE public.rolepermission ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    224    223                       2604    17331    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225                       2604    17332    roleuser id    DEFAULT     j   ALTER TABLE ONLY public.roleuser ALTER COLUMN id SET DEFAULT nextval('public.roleuser_id_seq'::regclass);
 :   ALTER TABLE public.roleuser ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227            	           2604    17333    user_block_status id    DEFAULT     |   ALTER TABLE ONLY public.user_block_status ALTER COLUMN id SET DEFAULT nextval('public.user_block_status_id_seq'::regclass);
 C   ALTER TABLE public.user_block_status ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229            
           2604    17334    user_forget_password_token id    DEFAULT     �   ALTER TABLE ONLY public.user_forget_password_token ALTER COLUMN id SET DEFAULT nextval('public.user_forget_password_token_id_seq'::regclass);
 L   ALTER TABLE public.user_forget_password_token ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    232    231                       2604    17335    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    236    233                       2604    17336    users_chats id    DEFAULT     p   ALTER TABLE ONLY public.users_chats ALTER COLUMN id SET DEFAULT nextval('public.users_chats_id_seq'::regclass);
 =   ALTER TABLE public.users_chats ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    234                       2604    17337    users_varify_token id    DEFAULT     ~   ALTER TABLE ONLY public.users_varify_token ALTER COLUMN id SET DEFAULT nextval('public.users_varify_token_id_seq'::regclass);
 D   ALTER TABLE public.users_varify_token ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    238    237            �          0    17193 
   attributes 
   TABLE DATA           .   COPY public.attributes (id, name) FROM stdin;
    public          postgres    false    203   ��       �          0    17201    chat_details 
   TABLE DATA           S   COPY public.chat_details (id, sender_id, reciever_id, details, status) FROM stdin;
    public          postgres    false    205   H�       �          0    17209    compare_packages 
   TABLE DATA           C   COPY public.compare_packages (id, user_id, package_id) FROM stdin;
    public          postgres    false    207   e�       �          0    17214    custom_pages 
   TABLE DATA           B   COPY public.custom_pages (id, title, details, status) FROM stdin;
    public          postgres    false    209   ��       �          0    17222    feature_packages 
   TABLE DATA           C   COPY public.feature_packages (id, user_id, package_id) FROM stdin;
    public          postgres    false    211   ȵ       �          0    17227    menues 
   TABLE DATA           A   COPY public.menues (id, name, href, slug, parent_id) FROM stdin;
    public          postgres    false    213   �       �          0    17235    package_attribute 
   TABLE DATA           R   COPY public.package_attribute (id, package_id, attribute_id, des_pkg) FROM stdin;
    public          postgres    false    215   �       �          0    17240    packages 
   TABLE DATA           Y   COPY public.packages (id, added_by, added_for, title, details, price, image) FROM stdin;
    public          postgres    false    217   ;�       �          0    17248 
   permission 
   TABLE DATA           /   COPY public.permission (id, title) FROM stdin;
    public          postgres    false    219   �       �          0    17256 	   rolemenue 
   TABLE DATA           E   COPY public.rolemenue (id, role_name, role_id, menue_id) FROM stdin;
    public          postgres    false    221   *�       �          0    17264    rolepermission 
   TABLE DATA           D   COPY public.rolepermission (id, role_id, permission_id) FROM stdin;
    public          postgres    false    223   S�       �          0    17269    roles 
   TABLE DATA           *   COPY public.roles (id, title) FROM stdin;
    public          postgres    false    225   x�       �          0    17277    roleuser 
   TABLE DATA           8   COPY public.roleuser (id, role_id, user_id) FROM stdin;
    public          postgres    false    227   ��       �          0    17282    user_block_status 
   TABLE DATA           @   COPY public.user_block_status (id, user_id, status) FROM stdin;
    public          postgres    false    229   P�       �          0    17290    user_forget_password_token 
   TABLE DATA           H   COPY public.user_forget_password_token (id, user_id, token) FROM stdin;
    public          postgres    false    231   ��       �          0    17298    users 
   TABLE DATA           v   COPY public.users (id, _id, firstname, lastname, email, password, businessname, email_varified_at, image) FROM stdin;
    public          postgres    false    233   �       �          0    17305    users_chats 
   TABLE DATA           A   COPY public.users_chats (id, sender_id, reciever_id) FROM stdin;
    public          postgres    false    234   M�       �          0    17312    users_varify_token 
   TABLE DATA           @   COPY public.users_varify_token (id, user_id, token) FROM stdin;
    public          postgres    false    237   j�                  0    0    attributes_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.attributes_id_seq', 48, true);
          public          postgres    false    204                       0    0    chat_details_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.chat_details_id_seq', 1, false);
          public          postgres    false    206                       0    0    compare_packages_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.compare_packages_id_seq', 4, true);
          public          postgres    false    208            	           0    0    custom_pages_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.custom_pages_id_seq', 5, true);
          public          postgres    false    210            
           0    0    feature_packages_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.feature_packages_id_seq', 2, true);
          public          postgres    false    212                       0    0    menues_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.menues_id_seq', 2, true);
          public          postgres    false    214                       0    0    package_attribute_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.package_attribute_id_seq', 653, true);
          public          postgres    false    216                       0    0    packages_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.packages_id_seq', 269, true);
          public          postgres    false    218                       0    0    permission_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.permission_id_seq', 1, true);
          public          postgres    false    220                       0    0    rolemenue_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.rolemenue_id_seq', 2, true);
          public          postgres    false    222                       0    0    rolepermission_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.rolepermission_id_seq', 2, true);
          public          postgres    false    224                       0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 3, true);
          public          postgres    false    226                       0    0    roleuser_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.roleuser_id_seq', 39, true);
          public          postgres    false    228                       0    0    user_block_status_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.user_block_status_id_seq', 17, true);
          public          postgres    false    230                       0    0 !   user_forget_password_token_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.user_forget_password_token_id_seq', 22, true);
          public          postgres    false    232                       0    0    users_chats_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.users_chats_id_seq', 1, false);
          public          postgres    false    235                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 40, true);
          public          postgres    false    236                       0    0    users_varify_token_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.users_varify_token_id_seq', 36, true);
          public          postgres    false    238                       2606    17339    attributes attributes_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.attributes
    ADD CONSTRAINT attributes_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.attributes DROP CONSTRAINT attributes_pkey;
       public            postgres    false    203                       2606    17341    chat_details chat_details_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.chat_details
    ADD CONSTRAINT chat_details_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.chat_details DROP CONSTRAINT chat_details_pkey;
       public            postgres    false    205                       2606    17343 &   compare_packages compare_packages_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.compare_packages
    ADD CONSTRAINT compare_packages_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.compare_packages DROP CONSTRAINT compare_packages_pkey;
       public            postgres    false    207                       2606    17345    custom_pages custom_pages_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.custom_pages
    ADD CONSTRAINT custom_pages_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.custom_pages DROP CONSTRAINT custom_pages_pkey;
       public            postgres    false    209                       2606    17347 &   feature_packages feature_packages_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.feature_packages
    ADD CONSTRAINT feature_packages_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.feature_packages DROP CONSTRAINT feature_packages_pkey;
       public            postgres    false    211                       2606    17349    menues menues_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.menues
    ADD CONSTRAINT menues_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.menues DROP CONSTRAINT menues_pkey;
       public            postgres    false    213                       2606    17351 (   package_attribute package_attribute_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.package_attribute
    ADD CONSTRAINT package_attribute_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.package_attribute DROP CONSTRAINT package_attribute_pkey;
       public            postgres    false    215                       2606    17353    packages packages_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.packages DROP CONSTRAINT packages_pkey;
       public            postgres    false    217                        2606    17355    permission permission_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.permission
    ADD CONSTRAINT permission_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.permission DROP CONSTRAINT permission_pkey;
       public            postgres    false    219            "           2606    17357    rolemenue rolemenue_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.rolemenue
    ADD CONSTRAINT rolemenue_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.rolemenue DROP CONSTRAINT rolemenue_pkey;
       public            postgres    false    221            $           2606    17359 "   rolepermission rolepermission_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.rolepermission
    ADD CONSTRAINT rolepermission_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.rolepermission DROP CONSTRAINT rolepermission_pkey;
       public            postgres    false    223            &           2606    17361    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    225            (           2606    17363    roleuser roleuser_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.roleuser
    ADD CONSTRAINT roleuser_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.roleuser DROP CONSTRAINT roleuser_pkey;
       public            postgres    false    227            *           2606    17365 (   user_block_status user_block_status_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_block_status
    ADD CONSTRAINT user_block_status_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.user_block_status DROP CONSTRAINT user_block_status_pkey;
       public            postgres    false    229            ,           2606    17367 :   user_forget_password_token user_forget_password_token_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.user_forget_password_token
    ADD CONSTRAINT user_forget_password_token_pkey PRIMARY KEY (id);
 d   ALTER TABLE ONLY public.user_forget_password_token DROP CONSTRAINT user_forget_password_token_pkey;
       public            postgres    false    231            2           2606    17369    users_chats users_chats_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.users_chats
    ADD CONSTRAINT users_chats_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.users_chats DROP CONSTRAINT users_chats_pkey;
       public            postgres    false    234            .           2606    17371    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    233            0           2606    17373    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    233            4           2606    17375 *   users_varify_token users_varify_token_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.users_varify_token
    ADD CONSTRAINT users_varify_token_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.users_varify_token DROP CONSTRAINT users_varify_token_pkey;
       public            postgres    false    237            5           2606    17376 *   chat_details chat_details_reciever_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chat_details
    ADD CONSTRAINT chat_details_reciever_id_fkey FOREIGN KEY (reciever_id) REFERENCES public.users(id);
 T   ALTER TABLE ONLY public.chat_details DROP CONSTRAINT chat_details_reciever_id_fkey;
       public          postgres    false    2864    205    233            6           2606    17381 (   chat_details chat_details_sender_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.chat_details
    ADD CONSTRAINT chat_details_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES public.users(id);
 R   ALTER TABLE ONLY public.chat_details DROP CONSTRAINT chat_details_sender_id_fkey;
       public          postgres    false    205    233    2864            7           2606    17386 1   compare_packages compare_packages_package_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.compare_packages
    ADD CONSTRAINT compare_packages_package_id_fkey FOREIGN KEY (package_id) REFERENCES public.packages(id);
 [   ALTER TABLE ONLY public.compare_packages DROP CONSTRAINT compare_packages_package_id_fkey;
       public          postgres    false    207    217    2846            8           2606    17391 .   compare_packages compare_packages_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.compare_packages
    ADD CONSTRAINT compare_packages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 X   ALTER TABLE ONLY public.compare_packages DROP CONSTRAINT compare_packages_user_id_fkey;
       public          postgres    false    2864    233    207            9           2606    17396 1   feature_packages feature_packages_package_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.feature_packages
    ADD CONSTRAINT feature_packages_package_id_fkey FOREIGN KEY (package_id) REFERENCES public.packages(id);
 [   ALTER TABLE ONLY public.feature_packages DROP CONSTRAINT feature_packages_package_id_fkey;
       public          postgres    false    211    2846    217            :           2606    17401 .   feature_packages feature_packages_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.feature_packages
    ADD CONSTRAINT feature_packages_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 X   ALTER TABLE ONLY public.feature_packages DROP CONSTRAINT feature_packages_user_id_fkey;
       public          postgres    false    2864    211    233            ;           2606    17406    menues menues_parent_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.menues
    ADD CONSTRAINT menues_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES public.menues(id);
 F   ALTER TABLE ONLY public.menues DROP CONSTRAINT menues_parent_id_fkey;
       public          postgres    false    213    213    2842            <           2606    17411 5   package_attribute package_attribute_attribute_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.package_attribute
    ADD CONSTRAINT package_attribute_attribute_id_fkey FOREIGN KEY (attribute_id) REFERENCES public.attributes(id);
 _   ALTER TABLE ONLY public.package_attribute DROP CONSTRAINT package_attribute_attribute_id_fkey;
       public          postgres    false    215    2832    203            =           2606    17416 3   package_attribute package_attribute_package_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.package_attribute
    ADD CONSTRAINT package_attribute_package_id_fkey FOREIGN KEY (package_id) REFERENCES public.packages(id);
 ]   ALTER TABLE ONLY public.package_attribute DROP CONSTRAINT package_attribute_package_id_fkey;
       public          postgres    false    215    2846    217            >           2606    17421    packages packages_added_by_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_added_by_fkey FOREIGN KEY (added_by) REFERENCES public.users(id);
 I   ALTER TABLE ONLY public.packages DROP CONSTRAINT packages_added_by_fkey;
       public          postgres    false    217    2864    233            ?           2606    17426     packages packages_added_for_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.packages
    ADD CONSTRAINT packages_added_for_fkey FOREIGN KEY (added_for) REFERENCES public.users(id);
 J   ALTER TABLE ONLY public.packages DROP CONSTRAINT packages_added_for_fkey;
       public          postgres    false    2864    233    217            @           2606    17431 !   rolemenue rolemenue_menue_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rolemenue
    ADD CONSTRAINT rolemenue_menue_id_fkey FOREIGN KEY (menue_id) REFERENCES public.menues(id);
 K   ALTER TABLE ONLY public.rolemenue DROP CONSTRAINT rolemenue_menue_id_fkey;
       public          postgres    false    2842    221    213            A           2606    17436     rolemenue rolemenue_role_id_fkey    FK CONSTRAINT        ALTER TABLE ONLY public.rolemenue
    ADD CONSTRAINT rolemenue_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
 J   ALTER TABLE ONLY public.rolemenue DROP CONSTRAINT rolemenue_role_id_fkey;
       public          postgres    false    2854    225    221            B           2606    17441 0   rolepermission rolepermission_permission_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rolepermission
    ADD CONSTRAINT rolepermission_permission_id_fkey FOREIGN KEY (permission_id) REFERENCES public.permission(id);
 Z   ALTER TABLE ONLY public.rolepermission DROP CONSTRAINT rolepermission_permission_id_fkey;
       public          postgres    false    223    219    2848            C           2606    17446 *   rolepermission rolepermission_role_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.rolepermission
    ADD CONSTRAINT rolepermission_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
 T   ALTER TABLE ONLY public.rolepermission DROP CONSTRAINT rolepermission_role_id_fkey;
       public          postgres    false    2854    223    225            D           2606    17451    roleuser roleuser_role_id_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.roleuser
    ADD CONSTRAINT roleuser_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id);
 H   ALTER TABLE ONLY public.roleuser DROP CONSTRAINT roleuser_role_id_fkey;
       public          postgres    false    225    2854    227            E           2606    17456    roleuser roleuser_user_id_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.roleuser
    ADD CONSTRAINT roleuser_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 H   ALTER TABLE ONLY public.roleuser DROP CONSTRAINT roleuser_user_id_fkey;
       public          postgres    false    233    2864    227            F           2606    17461 0   user_block_status user_block_status_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_block_status
    ADD CONSTRAINT user_block_status_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 Z   ALTER TABLE ONLY public.user_block_status DROP CONSTRAINT user_block_status_user_id_fkey;
       public          postgres    false    2864    229    233            G           2606    17466 B   user_forget_password_token user_forget_password_token_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_forget_password_token
    ADD CONSTRAINT user_forget_password_token_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 l   ALTER TABLE ONLY public.user_forget_password_token DROP CONSTRAINT user_forget_password_token_user_id_fkey;
       public          postgres    false    2864    233    231            H           2606    17471 (   users_chats users_chats_reciever_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_chats
    ADD CONSTRAINT users_chats_reciever_id_fkey FOREIGN KEY (reciever_id) REFERENCES public.users(id);
 R   ALTER TABLE ONLY public.users_chats DROP CONSTRAINT users_chats_reciever_id_fkey;
       public          postgres    false    2864    233    234            I           2606    17476 &   users_chats users_chats_sender_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_chats
    ADD CONSTRAINT users_chats_sender_id_fkey FOREIGN KEY (sender_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.users_chats DROP CONSTRAINT users_chats_sender_id_fkey;
       public          postgres    false    2864    233    234            J           2606    17481 2   users_varify_token users_varify_token_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_varify_token
    ADD CONSTRAINT users_varify_token_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 \   ALTER TABLE ONLY public.users_varify_token DROP CONSTRAINT users_varify_token_user_id_fkey;
       public          postgres    false    237    2864    233            �   �   x�-�K�@D�]���n>K�`\��&�D�iB������R/�d>d�#��QS?�i@C/�ej�n5������������`�I��.h֔�{pISX�Wp�����(c)J�)+]U��ɯ��
�aZ6��C��RPf�u���GI���|_������<       �      x������ � �      �      x������ � �      �   6   x�3�LL�/-Q(-F0J�JS��!|]?��$3/]!%�$"i�O��d� *B'      �      x������ � �      �   !   x�3�,-N-*�ԇP9�yٜ�\FXEc���� ��L      �     x�=�]�$+����\$�g/�t���ёZ����-�
\n�Zb�(��j,k-����,��̞5J�e��PO֫4���EQ�$�}Ko��OȚ�D������n|-��(	�u�Ex�bQ4 oOśPS�RU)L��5�ƺ��Y�����Z��������&#hD������R��5�_g��X34�Vƛ/|R:%�� |���}�թZ�i�5�|!0e� �����(3��T���?��*�`T�*�i@�_��ͩVR����G����U�p�������)a�����R�8T����~��p����I���2*���L����ɔ��he6c-�e�@��e��`-��C`�>�c�@�3���z\b"�b^"�]2(D��{ɢ8KiU,�U/�.k���q�$(D��/"p�,�C�W���_7D�n�y�-�G� X�@���+�R��ԃ2��2�&d)���&)��9.4R�F���6�F��)�hcY
!ژB�B�6��H!�Z)B�F�

!��&d)�`��P����B#�m��JqP���j
!�P�R�;@�H!DKh���o��� tF���)�`�V6�B��I(R�]n4R�F�9m􃼦��!d)�hCix����#��0��VIqz%O���,)�`Ô�%�l��@ä�Sh�B��4x���F���k��4xO0��ۀ�4:m(��v��ynJ���4�9y�R�Sؕ�`�i�lu���I!�4x�M�G�+tO
!�Pc�8h҆Ҙ5�m(�i)�hCi�H!DJ����4�*C��V���*C��V���*C��V�dcg㉈�CY*luwJ�.:�+]m��5�m�9����煢�lzхf��8(�V�~ ���y�������P�,�����5w���:��r��}�cg�rw�K�n<�r��\��q,lM�r��`����dX�W�qJL�+1g�_���-����`�U�,������n�w�Y�_*tv��;8��b,����y�E���      �   �  x��Xώ��>s���^6�%����Z-P��%@@��([��#i;�S�&�'ɐC��kmn],ֻ����}3�[�-)��/WaIO�ڇa�t�4E���R��'��`�}<�E��QN=S9S;:�v�Aa�zG:�5|EN}:NI �(=���iTA�7*,<��q�&��q�ǝG�7���f�-ɏ_?�� ����}���1x���U��*9�h��) �"����=|�=[�q�˰W�ı|=�	��ѓ�/�Tt:�A=�Y��Yٛ��`�.�
/�c��%��˻�"�S��÷s�\�� �\n��[*@=���A�Og1�Fg��X�,9d١K��>�6$j~���o���`�@��ڠ�Ϟ.�\�ը��?>������.�fȷ�_�X\������*�S4y�ޝ��?������޿D�d�$y>�/���썖��@�Jtw�%`u�f�$R{��ñw�,VK���wDy�{s��A���
����8�����A7���+��!:��a�:U������U�&] �t�L���p��4r*N�f�jɂT������j�uO��+��%�������kR��TGW�`�я���v3��4�n��?�TQ��v�����U�,ě"A��PU�g�ח.BY�����o�?�����f	f��t�=���*ع�W���jlx� 
=�4�l�:�S'К��!�����#��tw�2��6)�O����(�U�),	��Mh}&��E���Q($-�Kg'u��(��M�X�(*�&nQ$��H3��2TW��[ԩ�U���-8������;�Q� B�:[��*'�>Z��,qѵ(��]� }�����Nv�)��2�37k jA+C���@�z��S�^�(<%d�GF8VL�U`���bto�w�)��[ţ\`�zb�ah��2��2@�b1
>�5U�A03zU:���؛u�]��bp ,��b|h�z
�h���Gs�����	���nޫ{t�G��è���W���Rj��"�iG��E�=�i��#�!���V�� �^���+����@TE���.Qp`
�r,���iQ�i�*yX���)�VP��*ڮ�,*�&M�
+V�r˂�6B��{�3���@��L�kO�
Z�a�v+X���8J�T���or_u�v.��\U�q���S��ܙ�����*�暴W^�*��L����wo���X�� �v���@<�H��)3��TAc��k��A��7p�����2m�:1ΰ���4{�'M��a��0[�W��w�J�^� �S�?��^���
�^��Jv��L�X�d<�8
G{��?��)�fD"��_�rC�f�4����%�<	w�����_~�Я�p6��(��0���v�V�Ryޝ�F|��^������E�ǃ#��"�'޼�U~*�G�E'8n�|\~?L��|c���D�@�N���bHgK�3���r)��
����Xv�yW�F0TB������K�e�Y��K�ŕU6�G��4�GK8����R8X_����X�3�2�H��E��@���^�uSowmY3�m7'�Ò�2�~����H�I�'�E�Ͷ���@�����ˠ�,��0A�-c����oyv]7|@�;^-��ag��L�-o�N��ȜS��:oy�2�"S�%�v|s�]��{W��N��<==�?>e      �      x�3�LLI�/-N-����� (�4      �      x�3�LL����4�4����� $�k      �      x�3�4�4�2�1z\\\       �   &   x�3�LL����2�,-N-�2�,.-H-r���qqq �+	X      �   �   x�%ϻ�1Q{;p?LB(�8��u�ޫ:�����}�o�7כ�ͳ�X{5�h���QP!MTI'*��ҍ��AմP=\��������z���O\������y�z�^D������g�L2�KGNR0)��<G�,�v���� �#)�      �   P   x�̹�@A{.
I�@.��V{-4�g���w��)6~����!w���[�~dґBz�$]i���I/:�n�k�����      �   S  x�M�K�sJ����;�M�d�҂��u&�AHG��gO�*�5xj�U���~9���E�V���{��G���Yi��M��u7�ϬA3��gJ�}Q���$(�ݰ�0�_�ި���މ�Su����ZO^��TE���g��É��}�Rt�83w	�C���$�	r�S4��6K!\a�J��d1��a�M���H��I����}E��=�x����R{@x~5��0u�L=2��'N��}�c�,����>�	���<��#�}q�й��R���`-t#	�F��2�Vf�{���j�{�"n�?r�J��X�~Q l?Qd�,@]�8�?�Y�5"G�4];�Ӻ3�c�d]����A��6Ĕ!������~_96ݼ�bXR�`l2��E#����2�K
��-���>���.���*2��ޢ�F�	����7WS����(��q�'��05څ��ozk*����1��)��R6/�A,�$�!V>��0s�Gvb#�%$`�LP�[	[]���O������a&!y�&ס���w�̄(�����}(�[�Sk�^��l۶rB(�m�醻/�V!p���H��@�nSI�X��z|��d�N������8�4�$s>!��� vm#�����ׁ����U<�\�a_���=,��wn�|B-
��U�����ng�x�Zc�{�I2Kӕ����sNL���Y�UmvDr�漽�˧�1�̪���<��Ǿ������qA'���y��Զ��N�-u��
s�#,/�2�����Cm���.Ѐ��m��AZq����	�t�&%�"����n��N^��C��t�"z�?��h���M�e      �   *  x�m�GS�����_q=�|�N`8��l��79:A�������6���SWA��a��I��q�0
=&qȐr��܅�3-ƈRh�����>���y�h�f�
��L�
�&�o��n��w��<9T'/ls�m�~�ȳ��اD��B�q_�?��u�j��}��]Q����	cIo&4�!�Z��S��iA�����N/g:��Bg�_�L�vY�[�fׯ�c����O���M'��A�J6�ƾ�*��v�����Շ�l�<��m}Z�`�]@�!�!��0y`��H1&�+.a�NC�l2A \R�8"�ӛ:�Ky��c�e�-z�]6*�%��T>m"'����I1�Vf%���~^�о�~,�}/!��3�BI���&��ڐ��!j��?3A��:���sw�to��j+曊��h����O�:�����/8�����;�#��[M����ʄ�K!c� .�>r�0zG������e���w]1�K���#��.�Ɗ���Zo�^z�λ�ax 8�z:K�H(JKtȈ7�Vp������{���<*��m��S}z6��r��~�z+J�i����r-�=w��m���։&�qD`,cLbG}Ȱ�aB<�&�{'����xOS���]{�Ҩ��6��˞G����t)&-o��1�����VG�2��H�5�#V��'"dJ�0�����b�Y�����U��t����Wqi����D�eZy�?������(��ʞ�����Z���iT���	BI�MLBf*����Č;��{��	h�+��g�����_���-�����ݫĩ��4��|�/�w<������Q�X��v>��`xI<t+�#�$��oD?��[�n�y�_[���� ժ(�'|��t~P�Ť<9M˨=�+�Q��sW �ǰ�qR��8�a�
�2�X�X�N�%�V�S}�:v{�&_�{z8�'���_�ۏ�t���}��P}���le����$��<�IHlK4�;Hb�,�u�������]̽^X?[�P��ݝT]���>�~H�h�v���u����Jm��_/��oy�]t?���jjT�4S�5���
�ñ������0��p���\��Q�I����e������������j��վ9�U�k�ۢ�LnP�Jf�z��)�:��V�/�~�,bJ"� i cǵ��͔Aͤc��.6��D�F��"��h���O��	o�ɳ����q+�z��&��I�2�e�����J�T��t�M� �P""Hh	E!�:��i���)����n�|�{�a�WY����[�?Żz7%�F��|u0Y�JT�������E��|�y	���L`!�LE`��!؛�'�K�3�M/��Ҫ�h���푯�Ao?Y���}R�U��/�TL��/o����5�w8<@[���D�߳������H#����;ﯱ1���Qo7�������r��v)���*���i'��"{����q�w"@_��I�k}�4��;��	v�,�h�Mm4J�q}�����<ZdE9�pO<)��>��;�x?9�ژ6�?n����A���5�BCD�R�1Va˽$�U�#��O�]�D��ؿ�Z�/�x߭�P7�������<�)d�N��Uv�Ƭ{@��(�.�C�{�*R�I��U��OpB�?�$s��:I#O��3w�x�F/�V�����h�7�%�:�j_9�W��{����a(��%#�z{)�v�赪��#k��� .���c1!0OV��Rm�V�ķ9�O@��v���ٟT��˱��v3/ɥ�R�*U7�6>_����Y7��å�/�~`7�K*�qJ�B�$fCq�YA(�wR$�[;S�@o8~�y�V�?�Ⱥz�c�Evo�ZiѢ"��M�9��6���ge~�@��׃V�����kg�z 8:��-	��JŒ��@�dL[QLB� �A�̓ڥ�nL�W�i��m�v#@]�����{�gs�d�}F�������t����lB�$NACm��LX�waqH��!"��"���ϗ�:kwq����!*�����MֻʪS�vӢ;ۖ�1{�+�)����$^�`�0o�âR���B��Fk��}�����{�|��1I�;[��d��t������I\٦��':�
͟Q��H��`&B}5h&A�E�`�TI+c*���1n��(�=.3���O��i��PZ��Өuuѧ�$V/�~m1u2�N^����x4o������_|�?`QN�*���Dx�Du'a�$�TBb���C����mw��@8�T�q����Fo�I�X;5���h觺$�z����8K�����n�v�OS=G7��B�$���B���#�H�@���^��$�2�$�lB������Y���l�/rL�|\嫼���󽼎��T��W��a�"Q53������Sg�g~�:F���M���_Ƌ���D°$�hᒯ��4�-����!Ѣ`����5ͬ����gv�n3�s��]�l6�5o}��No"��xT�Coӟ튷z�(����k�Wz�����}��4�<cp�|U���k_��_�4��V[�(+,f�Eo�̂���5T�?�TMz�x,_ץ�+��d�i4z��^��Pɿ~4���ۥ5X�Z÷�Y������Hb!��E�}��zMB�X��ąX��z�[�]p�\�����g���:?.uq�!��_�}�_�є��^.V���N̴��E����R��˭N�)�t��j�!�4������A���E�����b��(B�fY�fzK��/�ϛ���\�./��#�>j�S�s��#6_�_��gÆ��*����+���ϻ�u�pPZy�|E&���W��`h+b^
{�sw�l�B6�An�uYM��r�3.�ҩ��|#��N��ϲ�����ӷڢ&�9����
,�` �_�$�B����]�Y �� ��8��SM!��g���V��{��2�}��r�}f�˓�S�W�Ť��b��r�u�6�մ�}Ӌ�C�����R��G������� FJ�������&I�Q�>-ă�N���C%]�%�����1%2���U��|���e����\��򸽟���V�h�o!�U��|�e�%&�Y��"�#H�,�4��r�C��	��VgV��lN%d�{�.�����E�4lV�V4�o��C�ҝG�r�t������}]�%*]�[P��)�G�!
;���p��[�^\������'I���eA\�	lf[E�p	���������Ѵ��J��j�R���7�L��;I�Y��]�/}����Ų�Z��e{�1茂t���-�(�b��w����U X_��:��j��6�ٜ��j���|8�����N���� �?���nթg������Y����e4�d��]�`(����R"L�r�D^��
�fWYl5�ʸs�Ր�OP=��8k��p�,mZP�Y2�&�ݣݤ3y�>��[m���u'�	����V㐰_��x "b1E�}Y
���ǣ��*�!�BX���[��:�s^�O���:��Dܘ��$���si;��[׭�yyzZ���|P���IZ�\��m7u���M�K����c�i+�~/����������2~      �      x������ � �      �   �  x�E�7���Ec4��"����!��S��O`U��v�����{�����
jk�}T1��|/�ʼ�v3.�î��Q��y~�� EeNX�Ujs�b�2��<1��K�6#�=X��	�ޭ`�f����|L3h���׋���E6��6��HIz �\�z�{w��-�������n�ⲳ���2�b�a��!P�Y��C���]���ʱ��q�mA��M�?E��߁�i b��dX�(b��M{�-�}��$1���7��Ww8�]6R�ޗ5� ^0�g�t�%�ʟ�P�jC'Ј�8[�{��`��i���]��S��m�	�f�:��)�b������.����d�^0�`�@ڥ�ƈ�<���~�{��_E��3հ�0��jq}T8�^0���b�N�t}�D�VIxOF��NCL���g^��C�����;s�C�&0��Ӷ�(~�LjA��AgCq�F�=7��C��>W:W�1�[��rr��y�"|��%�*��jN�>7��|?���8�����lԎ_ћ��X���f��(�*���k�N�V��ٜ��v��C�2�!�2�����W9:�hb�p=~��,&��};A��$Qwk���"����@.��W�����w���F�����p��P��SBQ[���u�C�I΢$af�p��1qA-� 'w�׬���겪�����]
����~c;u1ׇ+
�.��*�o.�w2�=ϟS�7��@}�g�����9N����I���������K�1�X;A���밦Oh)���cHMgG�s������I	�l�����$QL��eV�Zv��]lAo���}ݱ���i��:��b�ݮn�ѹ���Gh>|oBZ�`V����僼���u�����k%��"	p�}���A뛟3���1�њ*"R&N�,q�:-�_��[�"lhM]���`S�����!!���ٛK8��t�jA����w��q��T����H�
�D�v��Y�O]8�^2�8j㛐>�C����gw�X������7�Q�9Vgu�l��=��;�Ns�*`�)�?�6y�5��g�]��2�nV�����-������jrw��'\�\���i��ҹk��#��K��y�}��� ������/I�ҷ�U�-!�� :-�_:?��� T�,����(w [QW�|�'}�,�-+{/+�棹C��K'��mQ=��k��*G��7Ƚ�k�!	�����.�;�Ц�:��Kg,�Uc@��Ԝ�9�y���`T���W���d`|P�o��u�{!~�lA�[�����n��mTƾkn�k+n��N�����قN�N����X𭪛�Tv+��Lx}�|ꊔ��:�x@����H���6��iA�ҩ��Pv��d(E�H��P����Dp��|�����0�;tZ�t��,{9O
��R�}v��Ÿ����ƚ�����&����b����Ŀ'0}�<��h�m�H���<BԐ\)��,�L:�g��6���0tZ�t27�H���<@�,��e�p�L�O�gg#���'V
��T��/Zsm�Wy���񗙦�&���?jǕ�t=&Kȴ;gN86�Y���iA����T%����j�M�*�b�c����wn��b�Ɯ<*SM�?���2�j     