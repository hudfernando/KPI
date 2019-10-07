CREATE DATABASE  IF NOT EXISTS `kpi` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `kpi`;
-- MySQL dump 10.13  Distrib 5.6.13, for Win32 (x86)
--
-- Host: localhost    Database: kpi
-- ------------------------------------------------------
-- Server version	5.7.27-log

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
-- Table structure for table `expedicao`
--

DROP TABLE IF EXISTS `expedicao`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `expedicao` (
  `ID_EXPEDICAO` int(11) NOT NULL AUTO_INCREMENT,
  `TOTAL_DE_VOLUMES_EXPEDIDOS` float DEFAULT NULL,
  `VALOR_TOTAL_DA_VENDA` decimal(10,2) DEFAULT NULL,
  `FINAL_EXPEDICAO` varchar(8) DEFAULT NULL,
  `DATA_INSERCAO` date DEFAULT NULL,
  PRIMARY KEY (`ID_EXPEDICAO`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `expedicao`
--

LOCK TABLES `expedicao` WRITE;
/*!40000 ALTER TABLE `expedicao` DISABLE KEYS */;
INSERT INTO `expedicao` VALUES (14,921,412592.09,'22:08:20','2019-08-13'),(23,747,317652.82,'21:18:36','2019-08-14'),(26,730,243061.23,'21:00:17','2019-08-15'),(28,831,336836.17,'22:03:42','2019-08-16'),(29,1164,634649.97,'22:26:57','2019-08-19'),(30,812,243150.12,'22:19:34','2019-08-20'),(31,783,281773.52,'21:45:28','2019-08-21'),(32,915,318624.63,'21:43:59','2019-08-22'),(33,893,274604.92,'21:47:56','2019-08-23'),(34,1135,343417.84,'22:28:28','2019-08-26'),(35,626,216344.37,'22:08:57','2019-08-27'),(36,676,213374.70,'22:23:02','2019-08-28'),(37,844,297861.83,'22:40:39','2019-08-30'),(38,979,291848.29,'23:41:20','2019-09-02'),(39,974,283413.32,'22:43:10','2019-09-03'),(40,894,259454.61,'22:59:22','2019-09-04'),(41,813,259836.31,'22:29:10','2019-09-05'),(42,1333,248491.21,'21:26:20','2019-09-06'),(43,1334,448082.22,'23:05:08','2019-09-09'),(44,1049,306795.24,'22:22:11','2019-09-10'),(45,910,308772.52,'22:18:24','2019-09-11'),(46,989,259129.42,'21:37:01','2019-09-12'),(47,780,231205.10,'21:36:31','2019-09-13'),(48,1405,460189.21,'23:47:02','2019-09-16'),(49,931,260516.75,'21:55:26','2019-09-17'),(50,727,250168.89,'22:16:26','2019-09-18'),(51,759,248249.49,'21:47:59','2019-09-19'),(52,763,243979.99,'21:39:27','2019-09-20'),(53,1110,331153.87,'22:21:33','2019-09-23'),(54,802,257465.06,'21:23:06','2019-09-24'),(55,663,203680.82,'21:22:43','2019-09-25'),(56,619,198924.68,'21:42:57','2019-09-26'),(57,1068,375646.66,'22:01:22','2019-09-27'),(58,1092,420421.42,'22:15:49','2019-09-30'),(59,1002,353206.40,'21:38:36','2019-10-01'),(60,762,341981.61,'21:15:46','2019-10-02'),(61,728,203725.40,'21:16:56','2019-10-03'),(62,875,261795.27,'21:50:18','2019-10-04');
/*!40000 ALTER TABLE `expedicao` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-07 15:28:38
