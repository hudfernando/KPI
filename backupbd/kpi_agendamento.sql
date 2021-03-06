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
-- Table structure for table `agendamento`
--

DROP TABLE IF EXISTS `agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `agendamento` (
  `ID_AGENDAMENTO` int(11) NOT NULL AUTO_INCREMENT,
  `AGENDADO_DIA` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ID_TRANSPORTADORA` int(11) NOT NULL,
  `STATUS` varchar(45) DEFAULT NULL,
  `OBSERVACAO` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`ID_AGENDAMENTO`),
  KEY `ID_TRANSPORTADORA_idx` (`ID_TRANSPORTADORA`),
  CONSTRAINT `ID_TRANSPORTADORA` FOREIGN KEY (`ID_TRANSPORTADORA`) REFERENCES `transportadora` (`ID_TRANSPORTADORA`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agendamento`
--

LOCK TABLES `agendamento` WRITE;
/*!40000 ALTER TABLE `agendamento` DISABLE KEYS */;
INSERT INTO `agendamento` VALUES (53,'2019-09-26 18:18:56',7,NULL,NULL),(54,'2019-09-27 14:51:49',42,NULL,NULL),(55,'2019-09-27 14:51:58',42,NULL,NULL),(56,'2019-09-27 14:55:06',21,NULL,NULL),(57,'2019-09-27 17:20:40',7,NULL,NULL),(58,'2019-09-27 17:58:23',34,NULL,NULL),(59,'2019-09-27 17:59:20',34,NULL,NULL),(60,'2019-09-27 18:00:33',34,NULL,NULL),(61,'2019-09-27 18:04:27',34,NULL,NULL),(62,'2019-09-27 18:16:26',34,NULL,NULL),(63,'2019-09-27 18:17:27',34,NULL,NULL),(64,'2019-09-27 18:18:47',34,NULL,NULL),(65,'2019-09-27 18:20:21',34,NULL,NULL),(66,'2019-09-27 18:36:46',34,NULL,NULL),(67,'2019-10-01 17:32:00',27,NULL,NULL),(68,'2019-10-01 17:34:37',15,NULL,NULL),(69,'2019-10-01 17:40:49',27,NULL,NULL),(70,'2019-10-01 18:02:51',34,NULL,NULL),(71,'2019-10-01 18:03:41',34,NULL,NULL),(72,'2019-10-01 18:03:42',34,NULL,NULL),(73,'2019-10-01 18:03:52',34,NULL,NULL),(74,'2019-10-01 18:12:56',34,NULL,NULL),(75,'2019-10-01 18:19:31',21,NULL,NULL),(76,'2019-10-01 18:20:07',34,NULL,NULL),(77,'2019-10-01 18:20:27',34,NULL,NULL),(78,'2019-10-01 22:21:16',34,NULL,NULL),(79,'2019-10-01 22:21:45',34,NULL,NULL),(80,'2019-10-03 18:53:41',34,'AGUARDANDO',NULL),(81,'2019-10-03 18:56:06',34,'AGUARDANDO',NULL),(82,'2019-10-03 18:57:02',34,'AGUARDANDO',NULL),(83,'2019-10-03 19:13:22',34,'AGUARDANDO',NULL);
/*!40000 ALTER TABLE `agendamento` ENABLE KEYS */;
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
