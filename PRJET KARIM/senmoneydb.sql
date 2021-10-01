/*==============================================================*/
/* Nom de SGBD :  Sybase SQL Anywhere 11                        */
/* Date de création :  07/09/2020 23:23:24                      */
/*==============================================================*/


if exists(select 1 from sys.sysforeignkey where role='FK_AVOIR_AVOIR_SERVICE') then
    alter table AVOIR
       delete foreign key FK_AVOIR_AVOIR_SERVICE
end if;

if exists(select 1 from sys.sysforeignkey where role='FK_AVOIR_AVOIR2_COMPTE') then
    alter table AVOIR
       delete foreign key FK_AVOIR_AVOIR2_COMPTE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='AVOIR'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table AVOIR
end if;

if exists(
   select 1 from sys.systable 
   where table_name='COMPTE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table COMPTE
end if;

if exists(
   select 1 from sys.systable 
   where table_name='SERVICE'
     and table_type in ('BASE', 'GBL TEMP')
) then
    drop table SERVICE
end if;

/*==============================================================*/
/* Table : AVOIR                                                */
/*==============================================================*/
create table AVOIR 
(
   IDCOMPTE             char(10)                       not null,
   IDSERVICE            char(10)                       not null,
   constraint PK_AVOIR primary key (IDCOMPTE, IDSERVICE)
);

/*==============================================================*/
/* Table : COMPTE                                               */
/*==============================================================*/
create table COMPTE 
(
   IDCOMPTE             char(10)                       not null,
   NUMERO               integer                        null,
   CODE                 integer                        null,
   SOLDE_               integer                        null,
   constraint PK_COMPTE primary key (IDCOMPTE)
);

/*==============================================================*/
/* Table : SERVICE                                              */
/*==============================================================*/
create table SERVICE 
(
   IDSERVICE            char(10)                       not null,
   SOLDE_               integer                        null,
   TRANSFERT_D_ARGENT   integer                        null,
   _PAIEMENT_DE_FACTURE integer                        null,
   "OPTIONS"            integer                        null,
   constraint PK_SERVICE primary key (IDSERVICE)
);

alter table AVOIR
   add constraint FK_AVOIR_AVOIR_SERVICE foreign key (IDSERVICE)
      references SERVICE (IDSERVICE)
      on update restrict
      on delete restrict;

alter table AVOIR
   add constraint FK_AVOIR_AVOIR2_COMPTE foreign key (IDCOMPTE)
      references COMPTE (IDCOMPTE)
      on update restrict
      on delete restrict;

