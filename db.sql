-- MySQL dump 10.13  Distrib 5.7.17, for Linux (x86_64)
--
-- Host: localhost    Database: PHARMACY
-- ------------------------------------------------------
-- Server version	5.7.17-0ubuntu0.16.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `EMPLOYEES`
--

DROP TABLE IF EXISTS `EMPLOYEES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EMPLOYEES` (
  `ID` int(20) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(40) DEFAULT NULL,
  `PHONE` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPLOYEES`
--

LOCK TABLES `EMPLOYEES` WRITE;
/*!40000 ALTER TABLE `EMPLOYEES` DISABLE KEYS */;
INSERT INTO `EMPLOYEES` VALUES (1,'Saqaxoser','205510599'),(2,'Nonihifan','336578736'),(3,'Wevuzodoj','962628924'),(4,'Bamuyeruk','949552946'),(5,'Woqaxelah','451323642'),(6,'Wefaqixef','961254421'),(7,'Bekihexid','181474828'),(8,'Guhesogow','906789380'),(9,'Zojokovod','649507269'),(12,'Kappa','123456'),(13,'Kappa','123456'),(14,'Keepo','3306'),(15,'Kreygasmer','9850');
/*!40000 ALTER TABLE `EMPLOYEES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MANUFACTURERS`
--

DROP TABLE IF EXISTS `MANUFACTURERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MANUFACTURERS` (
  `ID` int(30) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) DEFAULT NULL,
  `PHONE` varchar(25) DEFAULT NULL,
  `COUNTRY` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MANUFACTURERS`
--

LOCK TABLES `MANUFACTURERS` WRITE;
/*!40000 ALTER TABLE `MANUFACTURERS` DISABLE KEYS */;
INSERT INTO `MANUFACTURERS` VALUES (1,'Zecozekiv','304512698','Cotufiyor'),(2,'Jayegabew','302205319','Qokucetux'),(3,'Sinohulut','351942098','Cokoxidav'),(4,'Xababawig','701624531','Bojonogil'),(5,'Liyikabeg','122953942','Xugebomic'),(6,'Manugucil','83045457','Xuwefujul'),(7,'Neqevukan','512026897','Xifexotop'),(8,'Ziyobuzez','983455355','Bibolabob'),(9,'Manuf1','3306','Narnia'),(10,'Manuf2','322','Narnia'),(21,'Ice Queen Ent.','31234','Narnia'),(65,'Kappa Inc.','5353535','Narnia'),(66,'Kappa Inc.','5353535','Narnia');
/*!40000 ALTER TABLE `MANUFACTURERS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MEDICINES`
--

DROP TABLE IF EXISTS `MEDICINES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MEDICINES` (
  `ID` int(50) NOT NULL AUTO_INCREMENT,
  `NAME` varchar(30) DEFAULT NULL,
  `MANUFACTURER` int(30) DEFAULT NULL,
  `DOSAGE` float(5,3) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `MANUFACTURER` (`MANUFACTURER`),
  CONSTRAINT `MEDICINES_ibfk_1` FOREIGN KEY (`MANUFACTURER`) REFERENCES `MANUFACTURERS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MEDICINES`
--

LOCK TABLES `MEDICINES` WRITE;
/*!40000 ALTER TABLE `MEDICINES` DISABLE KEYS */;
INSERT INTO `MEDICINES` VALUES (1,'Kekudiyuv',4,0.460),(2,'Tarivefil',2,0.610),(3,'Cuxikibah',1,0.470),(4,'Cagugorep',2,0.320),(5,'Ponocahih',6,0.500),(6,'Yinuyubik',6,0.930),(7,'Canufunip',1,0.170),(8,'Qunebuvaw',4,0.450),(9,'Womajuwir',5,0.130),(10,'Xuhomunax',3,0.270),(11,'Zoraqanug',3,0.810),(12,'Hekebanop',7,0.250),(13,'Tehucesom',7,0.790),(14,'Wiratokik',6,0.450),(15,'Wogodopux',7,0.160),(16,'Mukajuyid',7,0.240),(17,'Jovovumof',5,0.070),(18,'Vogenetim',4,0.150),(19,'Cuhafiwok',7,0.280),(20,'Roqudaqiq',1,0.400),(21,'Majozamab',3,0.870),(22,'Jomalojob',4,0.980),(23,'Sehacureb',3,0.130),(24,'Zotobaboh',5,0.920),(25,'Xitesarip',2,0.170),(26,'Temuvezoh',5,0.120),(27,'Ciwofewij',4,0.190),(28,'Nonihubiv',6,0.190),(29,'Norimumuc',4,0.290),(30,'Dikomofup',4,0.200),(31,'Korvalol',4,0.750),(32,'Klappa Inc.',9,0.150),(33,'Kreygasminipilin',4,5.000),(71,'Kapparin',9,0.420),(72,'Kapparin',9,0.420),(73,'Kapparin',9,0.420);
/*!40000 ALTER TABLE `MEDICINES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STOCK_INCOMES`
--

DROP TABLE IF EXISTS `STOCK_INCOMES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STOCK_INCOMES` (
  `ID` int(50) NOT NULL AUTO_INCREMENT,
  `MEDICINE` int(50) DEFAULT NULL,
  `AMOUNT` int(20) DEFAULT NULL,
  `DATE` date DEFAULT NULL,
  `ACCEPTED_BY` int(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `MEDICINE` (`MEDICINE`),
  KEY `ACCEPTED_BY` (`ACCEPTED_BY`),
  CONSTRAINT `STOCK_INCOMES_ibfk_1` FOREIGN KEY (`MEDICINE`) REFERENCES `MEDICINES` (`ID`),
  CONSTRAINT `STOCK_INCOMES_ibfk_2` FOREIGN KEY (`ACCEPTED_BY`) REFERENCES `EMPLOYEES` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STOCK_INCOMES`
--

LOCK TABLES `STOCK_INCOMES` WRITE;
/*!40000 ALTER TABLE `STOCK_INCOMES` DISABLE KEYS */;
INSERT INTO `STOCK_INCOMES` VALUES (1,8,89,'2014-01-22',6),(2,2,8,'2014-08-05',8),(3,5,73,'2013-02-26',3),(4,6,16,'2013-08-06',5),(5,4,43,'2015-03-13',6),(6,8,63,'2015-06-04',1),(7,9,19,'2015-05-08',2),(8,9,98,'2014-09-10',4),(9,4,94,'2014-04-23',1),(10,9,93,'2015-04-03',3),(11,9,20,'2013-09-09',2),(12,3,5,'2014-11-24',4),(13,1,46,'2014-05-19',1),(14,3,54,'2013-07-23',7),(15,4,76,'2014-08-12',8),(16,3,38,'2014-07-13',9),(17,9,90,'2015-05-08',4),(18,3,42,'2014-10-27',1),(19,2,78,'2015-05-06',2),(20,7,67,'2013-03-18',4),(21,8,87,'2015-02-09',4),(22,4,72,'2013-09-10',7),(23,5,40,'2015-09-17',1),(24,5,98,'2014-02-05',7),(25,3,17,'2015-04-19',2),(26,6,29,'2015-08-21',5),(27,7,83,'2015-04-25',7),(28,4,25,'2014-01-05',3),(29,5,64,'2014-08-09',3),(30,1,81,'2014-08-16',1),(31,2,14,'2014-06-23',7),(32,3,61,'2014-10-08',2),(33,8,38,'2015-09-14',3),(34,4,74,'2013-09-18',5),(35,2,0,'2014-09-09',1),(36,9,30,'2015-05-09',1),(37,3,56,'2014-02-26',8),(38,8,1,'2015-10-23',1),(39,7,35,'2014-09-02',3),(40,5,51,'2015-05-06',6),(41,1,3,'2015-04-22',9),(42,3,47,'2014-08-09',1),(43,2,94,'2015-01-07',4),(44,5,51,'2013-11-11',4),(45,7,3,'2014-11-10',9),(46,1,30,'2014-10-14',7),(47,4,76,'2015-09-15',6),(48,3,6,'2013-08-06',5),(49,5,26,'2014-07-27',8),(50,9,93,'2015-10-15',1);
/*!40000 ALTER TABLE `STOCK_INCOMES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `STORAGE`
--

DROP TABLE IF EXISTS `STORAGE`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `STORAGE` (
  `ID` int(20) NOT NULL AUTO_INCREMENT,
  `MEDICINE` int(50) DEFAULT NULL,
  `NAME` varchar(30) DEFAULT NULL,
  `DATE_APPROVED` date DEFAULT NULL,
  `APPROVED_BY` int(20) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `NAME` (`NAME`),
  KEY `MEDICINE` (`MEDICINE`),
  KEY `APPROVED_BY` (`APPROVED_BY`),
  CONSTRAINT `STORAGE_ibfk_1` FOREIGN KEY (`MEDICINE`) REFERENCES `MEDICINES` (`ID`),
  CONSTRAINT `STORAGE_ibfk_2` FOREIGN KEY (`APPROVED_BY`) REFERENCES `EMPLOYEES` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `STORAGE`
--

LOCK TABLES `STORAGE` WRITE;
/*!40000 ALTER TABLE `STORAGE` DISABLE KEYS */;
INSERT INTO `STORAGE` VALUES (1,1,'Woqaxohul','2015-07-20',1),(2,4,'Cajewopey','2014-11-14',6),(3,9,'Ratucojoq','2014-08-24',9),(4,1,'Notabiseg','2015-02-27',4),(5,5,'Zabadamaf','2014-05-01',9),(6,4,'Gojisicud','2013-02-23',8),(7,3,'Susukoceq','2014-08-08',5),(8,2,'Cudotesop','2015-11-25',7),(9,8,'Piyajelog','2014-11-27',9),(10,3,'Jatofugon','2014-05-12',6),(11,7,'Gicogagub','2015-02-23',8),(12,3,'Yetuhofox','2015-07-24',3),(13,2,'Cicobaceq','2013-10-18',5),(14,1,'Kefebeseq','2014-02-10',8),(15,6,'Tequwifuc','2015-02-23',3),(16,14,'Left corner','2010-11-18',9);
/*!40000 ALTER TABLE `STORAGE` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-04-17 15:31:38
