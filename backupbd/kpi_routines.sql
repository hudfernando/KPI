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
-- Temporary table structure for view `retorne_o_ultimo_agendamento`
--

DROP TABLE IF EXISTS `retorne_o_ultimo_agendamento`;
/*!50001 DROP VIEW IF EXISTS `retorne_o_ultimo_agendamento`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `retorne_o_ultimo_agendamento` (
  `NOTAS_FISCAIS` tinyint NOT NULL,
  `VOLUMES` tinyint NOT NULL,
  `FK_ID_FORNECEDOR` tinyint NOT NULL,
  `FORNECEDOR_NOME` tinyint NOT NULL,
  `TRANSPORTADORA_NOME` tinyint NOT NULL,
  `TRANSPORTADORA_RESP_AGEND` tinyint NOT NULL,
  `DIA_AGENDAMENTO` tinyint NOT NULL,
  `HORARIO_INICIO` tinyint NOT NULL,
  `HORARIO_FIM` tinyint NOT NULL,
  `STATUS` tinyint NOT NULL,
  `ID_AGENDAMENTO` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `retorne_os_agendamentos`
--

DROP TABLE IF EXISTS `retorne_os_agendamentos`;
/*!50001 DROP VIEW IF EXISTS `retorne_os_agendamentos`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `retorne_os_agendamentos` (
  `NOTAS_FISCAIS` tinyint NOT NULL,
  `VOLUMES` tinyint NOT NULL,
  `FK_ID_FORNECEDOR` tinyint NOT NULL,
  `FORNECEDOR_NOME` tinyint NOT NULL,
  `TRANSPORTADORA_NOME` tinyint NOT NULL,
  `TRANSPORTADORA_RESP_AGEND` tinyint NOT NULL,
  `DIA_AGENDAMENTO` tinyint NOT NULL,
  `HORARIO_INICIO` tinyint NOT NULL,
  `HORARIO_FIM` tinyint NOT NULL,
  `STATUS` tinyint NOT NULL,
  `ID_AGENDAMENTO` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `retorne_o_ultimo_agendamento`
--

/*!50001 DROP TABLE IF EXISTS `retorne_o_ultimo_agendamento`*/;
/*!50001 DROP VIEW IF EXISTS `retorne_o_ultimo_agendamento`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `retorne_o_ultimo_agendamento` AS select `im`.`NOTAS_FISCAIS` AS `NOTAS_FISCAIS`,`im`.`VOLUMES` AS `VOLUMES`,`im`.`FK_ID_FORNECEDOR` AS `FK_ID_FORNECEDOR`,`fo`.`FORNECEDOR_NOME` AS `FORNECEDOR_NOME`,`tr`.`TRANSPORTADORA_NOME` AS `TRANSPORTADORA_NOME`,`tr`.`TRANSPORTADORA_RESP_AGEND` AS `TRANSPORTADORA_RESP_AGEND`,`ha`.`DIA_AGENDAMENTO` AS `DIA_AGENDAMENTO`,`ha`.`HORARIO_INICIO` AS `HORARIO_INICIO`,`ha`.`HORARIO_FIM` AS `HORARIO_FIM`,`ag`.`STATUS` AS `STATUS`,`ag`.`ID_AGENDAMENTO` AS `ID_AGENDAMENTO` from ((((`informacoes_mercadoria` `im` join `horario_agendamento` `ha`) join `agendamento` `ag`) join `fornecedor` `fo`) join `transportadora` `tr`) where ((`im`.`FK_ID_AGENDAMENTO` = `ag`.`ID_AGENDAMENTO`) and (`ha`.`ID_AGENDAMENTO` = `ag`.`ID_AGENDAMENTO`) and (`im`.`FK_ID_FORNECEDOR` = `fo`.`ID_FORNECEDOR`) and (`ag`.`ID_TRANSPORTADORA` = `tr`.`ID_TRANSPORTADORA`)) order by `ag`.`ID_AGENDAMENTO` desc limit 1 */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `retorne_os_agendamentos`
--

/*!50001 DROP TABLE IF EXISTS `retorne_os_agendamentos`*/;
/*!50001 DROP VIEW IF EXISTS `retorne_os_agendamentos`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `retorne_os_agendamentos` AS select `im`.`NOTAS_FISCAIS` AS `NOTAS_FISCAIS`,`im`.`VOLUMES` AS `VOLUMES`,`im`.`FK_ID_FORNECEDOR` AS `FK_ID_FORNECEDOR`,`fo`.`FORNECEDOR_NOME` AS `FORNECEDOR_NOME`,`tr`.`TRANSPORTADORA_NOME` AS `TRANSPORTADORA_NOME`,`tr`.`TRANSPORTADORA_RESP_AGEND` AS `TRANSPORTADORA_RESP_AGEND`,`ha`.`DIA_AGENDAMENTO` AS `DIA_AGENDAMENTO`,`ha`.`HORARIO_INICIO` AS `HORARIO_INICIO`,`ha`.`HORARIO_FIM` AS `HORARIO_FIM`,`ag`.`STATUS` AS `STATUS`,`ag`.`ID_AGENDAMENTO` AS `ID_AGENDAMENTO` from ((((`informacoes_mercadoria` `im` join `horario_agendamento` `ha`) join `agendamento` `ag`) join `fornecedor` `fo`) join `transportadora` `tr`) where ((`im`.`FK_ID_AGENDAMENTO` = `ag`.`ID_AGENDAMENTO`) and (`ha`.`ID_AGENDAMENTO` = `ag`.`ID_AGENDAMENTO`) and (`im`.`FK_ID_FORNECEDOR` = `fo`.`ID_FORNECEDOR`) and (`ag`.`ID_TRANSPORTADORA` = `tr`.`ID_TRANSPORTADORA`)) order by `ha`.`DIA_AGENDAMENTO`,`ha`.`HORARIO_INICIO` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-07 15:28:38
