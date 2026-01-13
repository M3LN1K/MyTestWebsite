-- MySQL dump 10.13  Distrib 8.0.43, for Linux (x86_64)
--
-- Host: localhost    Database: blog_test
-- ------------------------------------------------------
-- Server version	8.0.43-0ubuntu0.24.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `b_sonet_group`
--

DROP TABLE IF EXISTS `b_sonet_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `b_sonet_group` (
  `ID` int NOT NULL AUTO_INCREMENT,
  `SITE_ID` char(2) NOT NULL,
  `NAME` varchar(255) NOT NULL,
  `DESCRIPTION` text,
  `DATE_CREATE` datetime NOT NULL,
  `DATE_UPDATE` datetime NOT NULL,
  `ACTIVE` char(1) NOT NULL DEFAULT 'Y',
  `VISIBLE` char(1) NOT NULL DEFAULT 'Y',
  `OPENED` char(1) NOT NULL DEFAULT 'N',
  `SUBJECT_ID` int NOT NULL,
  `OWNER_ID` int NOT NULL,
  `KEYWORDS` varchar(255) DEFAULT NULL,
  `IMAGE_ID` int DEFAULT NULL,
  `AVATAR_TYPE` varchar(50) DEFAULT NULL,
  `NUMBER_OF_MEMBERS` int NOT NULL DEFAULT '0',
  `NUMBER_OF_MODERATORS` int NOT NULL DEFAULT '0',
  `INITIATE_PERMS` char(1) NOT NULL DEFAULT 'K',
  `DATE_ACTIVITY` datetime NOT NULL,
  `CLOSED` char(1) NOT NULL DEFAULT 'N',
  `SPAM_PERMS` char(1) NOT NULL DEFAULT 'K',
  `PROJECT` char(1) NOT NULL DEFAULT 'N',
  `PROJECT_DATE_START` datetime DEFAULT NULL,
  `PROJECT_DATE_FINISH` datetime DEFAULT NULL,
  `SEARCH_INDEX` mediumtext,
  `LANDING` char(1) DEFAULT NULL,
  `SCRUM_OWNER_ID` int DEFAULT NULL,
  `SCRUM_MASTER_ID` int DEFAULT NULL,
  `SCRUM_SPRINT_DURATION` int DEFAULT NULL,
  `SCRUM_TASK_RESPONSIBLE` char(1) DEFAULT NULL,
  `TYPE` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `IX_SONET_GROUP_1` (`OWNER_ID`),
  FULLTEXT KEY `IXF_SONET_GROUP` (`SEARCH_INDEX`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `b_sonet_group`
--

LOCK TABLES `b_sonet_group` WRITE;
/*!40000 ALTER TABLE `b_sonet_group` DISABLE KEYS */;
INSERT INTO `b_sonet_group` VALUES (1,'s1','Авторемонт','Признаки и причины неисправностей автомобиля, простые и доступ­ные способы их обнаружения и устранения своими силами.','2025-11-06 15:22:12','2025-11-06 15:22:12','Y','Y','N',3,1,'ремонт, сервис, техобслуживание, авто',55,NULL,1,1,'E','2025-11-06 15:22:12','N','K','N',NULL,NULL,'Авторемонт Признаки и причины неисправностей автомобиля, простые и доступ­ные способы их обнаружения и устранения своими силами. ремонт #ремонт сервис #сервис техобслуживание #техобслуживание авто #авто nqzva nqzva',NULL,NULL,NULL,NULL,NULL,'group'),(2,'s1','Клуб владельцев VOLKSWAGEN','Владельцы автомобилей VOLKSWAGEN, объединяйтесь.','2025-11-06 15:22:12','2025-11-06 15:22:12','Y','Y','N',1,1,'volkswagen, фольксваген, гольф',56,NULL,1,1,'E','2025-11-06 15:22:12','N','K','N',NULL,NULL,'Клуб владельцев IBYXFJNTRA Владельцы автомобилей IBYXFJNTRA, объединяйтесь. ibyxfjntra #ibyxfjntra фольксваген #фольксваген гольф #гольф nqzva nqzva',NULL,NULL,NULL,NULL,NULL,'group'),(3,'s1','Автоспорт','Автомобили и спорт.','2025-11-06 15:22:12','2025-11-06 15:22:12','Y','Y','N',2,1,'спорт, гонки, авто',57,NULL,1,1,'E','2025-11-06 15:22:12','N','K','N',NULL,NULL,'Автоспорт Автомобили и спорт. спорт #спорт гонки #гонки авто #авто nqzva nqzva',NULL,NULL,NULL,NULL,NULL,'group'),(4,'s1','Тюнинг авто','Все о тюнинге автомобилей.','2025-11-06 15:22:12','2025-11-06 15:22:12','Y','Y','Y',3,1,'сервис, авто, тюнинг',58,NULL,1,1,'K','2025-11-06 15:22:12','N','K','N',NULL,NULL,'Тюнинг авто Все о тюнинге автомобилей. сервис #сервис авто #авто тюнинг #тюнинг nqzva nqzva',NULL,NULL,NULL,NULL,NULL,'group'),(5,'s1','4х4','Все о внедорожниках.','2025-11-06 15:22:12','2025-11-06 15:22:12','Y','Y','N',2,1,'внедорожник, джип, авто',59,NULL,1,1,'E','2025-11-06 15:22:12','N','K','N',NULL,NULL,'4х4 Все о внедорожниках. внедорожник #внедорожник джип #джип авто #авто nqzva nqzva',NULL,NULL,NULL,NULL,NULL,'group');
/*!40000 ALTER TABLE `b_sonet_group` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-13 11:32:57
