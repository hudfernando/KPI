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
-- Table structure for table `transportadora`
--

DROP TABLE IF EXISTS `transportadora`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transportadora` (
  `ID_TRANSPORTADORA` int(11) NOT NULL AUTO_INCREMENT,
  `TRANSPORTADORA_NOME` varchar(100) DEFAULT NULL,
  `TRANSPORTADORA_TELEFONE` varchar(45) DEFAULT NULL,
  `TRANSPORTADORA_RESP_AGEND` varchar(100) DEFAULT NULL,
  `TRANSPORTADORA_EMAIL` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID_TRANSPORTADORA`),
  UNIQUE KEY `TRANSPORTADORA_NOME_UNIQUE` (`TRANSPORTADORA_NOME`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transportadora`
--

LOCK TABLES `transportadora` WRITE;
/*!40000 ALTER TABLE `transportadora` DISABLE KEYS */;
INSERT INTO `transportadora` VALUES (7,'ATTO TRANSPORTE PROPRIO','6235648585','resp','transportadora@gmail.com'),(8,'AIRWAY TRANSPORTES','6235648585','XPTO','transportadora@gmail.com'),(9,'EXPRESSO ARAÇATUBA',NULL,NULL,NULL),(10,'LU LIMA JUNIOR',NULL,NULL,NULL),(11,'RODONAVES TRANSPORTES E ENCOMENDA',NULL,NULL,NULL),(12,'TRANS MODEL TRANSPORTES',NULL,NULL,NULL),(13,'UNIDOCKS  ASSESSORIA E LOGISTICA',NULL,NULL,NULL),(14,'REAL VALE TRANSPORTES',NULL,NULL,NULL),(15,'MBO CARGO TRANSPORTES','8888888','hudson','transportadora@gmail.com'),(16,'TRANSLAG',NULL,NULL,NULL),(17,'RIT RAPIDO IPORA',NULL,NULL,NULL),(18,'R.V.IMOLA TRANSP.E LOGIST.',NULL,NULL,NULL),(19,'ATIVA DISTRIBUIÇÃO E LOGIST',NULL,NULL,NULL),(20,'JOINVILENCE CARGAS EXPRESS',NULL,NULL,NULL),(21,'ATUAL','6235648585','XPTO','resp@email.com'),(22,'IMEC TRANSPORTES PROPRIO',NULL,NULL,NULL),(23,'TNT MERCURIO CARGAS E ENCOMENDAS',NULL,NULL,NULL),(24,'FL BRASIL HOLDING.LOGIST.TRANSP',NULL,NULL,NULL),(25,'TRANSPORTES BERTOLINI',NULL,NULL,NULL),(26,'JMF TRANSP  CARGAS  ENCOMENDAS LT',NULL,NULL,NULL),(27,'TG TRANSPORTES','8888888','hudson','transportadora@gmail.com'),(28,'RADAR TRANSPORTES',NULL,NULL,NULL),(29,'ACERT TRANSPORTES','6235648585','XPTO','transportadora@gmail.com'),(30,'LINE EXPRESS.TRANSP.E DISTRIB',NULL,NULL,NULL),(31,'RAPIDO IPORA TRANS.CARGA LTDA-ME',NULL,NULL,NULL),(32,'NWF TRANSPORTES E LOGISTICA LTDA',NULL,NULL,NULL),(33,'AQUILA TRANSPORTADORA DE CARGAS','6235648585','XPTO','transportadora@gmail.com'),(34,'ACAILANDIA LOGISTICA','0000000','XPTO','resp@email.com'),(35,'EMPRESA DE TRANSPORTES ATLAS LTDA',NULL,NULL,NULL),(36,'TJOR TRANSPORTES E LOGISTICA EIRE',NULL,NULL,NULL),(37,'SHUTTLE LOGISTICA INTEGRADA LTDA',NULL,NULL,NULL),(38,'MIRA OTM TRANSPORTES LTDA',NULL,NULL,NULL),(39,'RAPIDO TRANSPAULO LTDA',NULL,NULL,NULL),(40,'FEEDEX BRASIL LOG. E TRANSP.S.A',NULL,NULL,NULL),(41,'INTEC INTEGRACAO NACIONAL DE TRAN',NULL,NULL,NULL),(42,'AGV LOGISTICA SA','6298785654','hudson','resp@email.com'),(43,'RODONAVES TRANSP E ENCOMENDAS LTD',NULL,NULL,NULL),(44,'CRUZEIRO IND.QUIM GOMES',NULL,NULL,NULL),(45,'BRASPRESS TRANSPORTES URGENTES LT',NULL,NULL,NULL),(46,'JETLOG LOGISTICA LTDA',NULL,NULL,NULL),(47,'FARMA LOGISTICA E ARMAZENS GERAIS',NULL,NULL,NULL),(48,'TRANSPORTADORA OCIANI  LTDA',NULL,NULL,NULL),(49,'RODONAVES TRANSPORTES E  ENCOM LT',NULL,NULL,NULL),(50,'TRANSPORTDAORA DO VALE  LTDA',NULL,NULL,NULL),(51,'W N LOGISTICA  EIRELI',NULL,NULL,NULL),(52,'JEONCEL TRANSPORTES LTDA',NULL,NULL,NULL),(53,'TRANSPORTES TRANSLOVATO LTDA',NULL,NULL,NULL);
/*!40000 ALTER TABLE `transportadora` ENABLE KEYS */;
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
