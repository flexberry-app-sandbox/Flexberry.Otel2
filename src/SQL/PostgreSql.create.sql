﻿




CREATE TABLE Авторизация (
 primaryKey UUID NOT NULL,
 Id INT NULL,
 Имя VARCHAR(255) NULL,
 Фамилия VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Гости (
 primaryKey UUID NOT NULL,
 Комната INT NULL,
 ДатаЗаселения TIMESTAMP(3) NULL,
 ДатаВыезда TIMESTAMP(3) NULL,
 Авторизация UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Допуск (
 primaryKey UUID NOT NULL,
 Допуск VARCHAR(6) NULL,
 Гости UUID NOT NULL,
 Комнаты UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Отели (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Комнаты (
 primaryKey UUID NOT NULL,
 ID INT NULL,
 КомнатаОтеля INT NULL,
 Этаж INT NULL,
 Отели UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Гости ADD CONSTRAINT FK5be72cb8e8f096001fd0422a1489ea8afe6a8786 FOREIGN KEY (Авторизация) REFERENCES Авторизация; 
CREATE INDEX Index5be72cb8e8f096001fd0422a1489ea8afe6a8786 on Гости (Авторизация); 

 ALTER TABLE Допуск ADD CONSTRAINT FKbd323b82f3d290a371ff09769a4c64a10af54091 FOREIGN KEY (Гости) REFERENCES Гости; 
CREATE INDEX Indexbd323b82f3d290a371ff09769a4c64a10af54091 on Допуск (Гости); 

 ALTER TABLE Допуск ADD CONSTRAINT FK8943d40cbbe4d329f681355db7a6b7ddbcec8af6 FOREIGN KEY (Комнаты) REFERENCES Комнаты; 
CREATE INDEX Index8943d40cbbe4d329f681355db7a6b7ddbcec8af6 on Допуск (Комнаты); 

 ALTER TABLE Комнаты ADD CONSTRAINT FK93c803bcbb26e2985c4cb556221cdda7d3d8ffb0 FOREIGN KEY (Отели) REFERENCES Отели; 
CREATE INDEX Index93c803bcbb26e2985c4cb556221cdda7d3d8ffb0 on Комнаты (Отели); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

