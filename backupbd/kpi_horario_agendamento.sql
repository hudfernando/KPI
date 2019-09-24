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
-- Table structure for table `horario_agendamento`
--

DROP TABLE IF EXISTS `horario_agendamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `horario_agendamento` (
  `ID_HORARIO_AGENDAMENTO` int(11) NOT NULL AUTO_INCREMENT,
  `DIA_AGENDAMENTO` date NOT NULL,
  `HORARIO_INICIO` time NOT NULL,
  `HORARIO_FIM` time NOT NULL,
  `ID_AGENDAMENTO` int(11) NOT NULL,
  PRIMARY KEY (`ID_HORARIO_AGENDAMENTO`),
  KEY `ID_AGENDAMENTO_idx` (`ID_AGENDAMENTO`),
  CONSTRAINT `ID_AGENDAMENTO` FOREIGN KEY (`ID_AGENDAMENTO`) REFERENCES `agendamento` (`ID_AGENDAMENTO`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horario_agendamento`
--

LOCK TABLES `horario_agendamento` WRITE;
/*!40000 ALTER TABLE `horario_agendamento` DISABLE KEYS */;
INSERT INTO `horario_agendamento` VALUES (1,'2019-09-23','08:00:00','09:00:00',9);
/*!40000 ALTER TABLE `horario_agendamento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-24 14:26:30
