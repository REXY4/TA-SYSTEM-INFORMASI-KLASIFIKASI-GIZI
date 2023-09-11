-- MySQL dump 10.13  Distrib 8.0.33, for Linux (x86_64)
--
-- Host: localhost    Database: TUGAS_TA
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.4

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
-- Table structure for table `DataTrainings`
--

DROP TABLE IF EXISTS `DataTrainings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DataTrainings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `usia` int DEFAULT NULL,
  `berat` float DEFAULT NULL,
  `tinggi` float DEFAULT NULL,
  `klasifikasi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DataTrainings`
--

LOCK TABLES `DataTrainings` WRITE;
/*!40000 ALTER TABLE `DataTrainings` DISABLE KEYS */;
INSERT INTO `DataTrainings` VALUES (1,'MARDIAN EZAR PARUQ ','L ',1,8.4,70,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(2,'AHSAN BARAK  ','L ',1,8.4,71.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(3,'ERINKA KIARA KHAIRANI ','L ',1,8.6,71.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(4,'RIZKI ALFIAN ','L ',1,9.3,72.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(5,'FAISAL MAULANA SYAHPUTRA ','L ',1,9.6,72.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(6,'KYRA QUEENSHA ','L ',1,9.4,72.7,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(7,'RAFASA JIRO DIKA ','L ',1,8.1,72.9,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(8,'PRADIKA AINUR RAHMAN ','L ',1,8.7,73,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(9,'ALFARIZQI DALIMUNTHE ','L ',1,9,73.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(10,'ERLANGGA ALBARAQ RIVANDI ','L ',1,9.2,73.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(11,'MUHAMMAD ARJUNA ','L ',1,9.6,73.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(12,'ALVIN WAHYU PRATAMA ','L ',1,8.3,73.7,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(13,'ALI FIRMANSYAH ','L ',1,9,74,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(14,'MALIKNO JULINKA ','L ',1,9.6,74.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(15,'DENANDRA VERDIANTO ','L ',1,10.3,75.1,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(16,'REFI DENIS SAPUTRA ','L ',1,10,75.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(17,'LUTHFI GISA AFFARDHAN ','L ',1,8.7,75.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(18,'M. AKMAL ALFARIQ ','L ',1,9.3,76,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(19,'FARUK AKBAR PAMUNGKAS ','L ',1,9,76.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(20,'ASKI MANATA HALOHO ','L ',1,8.9,76.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(21,'BERYL ATHALLA MERIGA ','L ',1,9.5,76.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(22,'AZRIEL FAHREZI SURYANTO ','L ',1,9,76.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(23,'ZAFRAN ALFARIZI ','L ',1,10.5,77.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(24,'GENTA ','L ',1,9,77.4,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(25,'AFRIANSYAH MAULANA SOHIB ','L ',1,10.2,77.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(26,'ALBI ADITAMA ','L ',1,10,77.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(27,'M. ABDULLOH ALFATIH ','L ',1,10.7,78.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(28,'M. FADIL ALFATAH ','L ',1,10.8,78.9,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(29,'ADYATAMA WINAR GHAZALI ','L ',1,9.1,79,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(30,'M. SYAHRIL AKBAR ','L ',1,9.8,79,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(31,'ATHA FARIZ ','L ',1,9.8,79,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(32,'ALFAJRI ','L ',1,9,79.3,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(33,'SAFARAS AKMA FADIL ','L ',1,9.1,79.3,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(34,'HADID HAIKAL DALIMUNTHE ','L ',1,9,80,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(35,'ABIDZAR ALFATIH ','L ',1,10.8,80,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(36,'MUHAMMAD ADAM FAID ','L ',1,10.9,80.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(37,'GHAISAN AKBAR ALTEZA ','L ',1,11,80.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(38,'HUMAM ','L ',1,9.6,80.6,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(39,'KHUSAINI MASKUD HUSEN ','L ',1,15.4,81,'Gizi Lebih','2023-09-09 03:35:06','2023-09-09 03:35:06'),(40,'MUHAMMAD FARID FIRMANSYAH ','L ',1,9.5,81.5,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(41,'ABQARY FATHIAN SHARIQ ','L ',1,12,82,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(42,'ELVANO HANAN ABRIZAM ','L ',1,10.5,82.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(43,'NUFAIL GEZA ATHARAUF ','L ',1,9.5,83,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(44,'FARIS KENZI HAMIZAN ','L ',1,10.6,84,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(45,'KEINDRA EVAN PRADIPTA ','L ',1,10.6,84,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(46,'AFGAN ILHAM ','L ',1,14.9,84.4,'Gizi Lebih','2023-09-09 03:35:06','2023-09-09 03:35:06'),(47,'RAFKA ALFATHA ','L ',2,10.2,78.9,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(48,'NOVAN AHMAD SETIAWAN ','L ',2,9.5,81,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(49,'DIKA ARYA ARBANI ','L ',2,11.2,81.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(50,'APRILIO SAPUTRA ','L ',2,9.1,82,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(51,'REVAN NOVRIANSAH ','L ',2,10.8,82.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(52,'M. ZIYDAN PRATAMA ','L ',2,10.9,83.6,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(53,'M. ZEIN ZULFANO ','L ',2,10.4,84.5,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(54,'MUHAMMAD KHALIF ALSYAZANI ','L ',2,12.5,84.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(55,'RAFKA ZIDAN RAMADHANI ','L ',2,11.5,85,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(56,'ARYO ATTAUFAN ','L ',2,10.5,85,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(57,'DELON BUDIONO ','L ',2,10.6,85.1,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(58,'ATHAR RIZKY YUDISTIRA ','L ',2,11.4,85.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(59,'YUFA MUKTI ','L ',2,12,85.4,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(60,'M. GANI AGUSTA ','L ',3,12.8,89,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(61,'REVAN NOVRIANSAH ','L ',3,12.4,90.5,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(62,'GAZEL SAFREN ','L ',3,13,91.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(63,'DENTA ABI YANSYAH ','L ',3,12.4,92,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(64,'HANDIKA VERNANDA ','L ',3,12,92,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(65,'HAMZAH AFRIANTO ','L ',3,13,92,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(66,'HANA DWI PERWIRA ','L ',3,12.8,93,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(67,'HERDIAN ','L ',3,13.2,93.3,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(68,'MAWLA NATASYA ','L ',3,13.5,93.6,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(69,'M.HAZIQ AL HAFIDZ BATU BARA ','L ',3,13.4,94,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(70,'ALKADAFI M YUSUF ','L ',3,14,94.2,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(71,'IBNU SULAIMAN ','L ',3,14,94.8,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(72,'DEVRAN MAULANA ALTAF ','L ',3,13.1,95,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(73,'SYAHREZA FABIANO ','L ',3,14.2,95,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(74,'AFKHAR SYAM PRADIPTHA ','L ',3,13,95.2,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(75,'MUHAMAD ADAM IBRAHIM ','L ',3,12.4,95.5,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(76,'IRFAN AL MUKHAROM ','L ',3,15,96,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(77,'GIBRAN ADI RAMADAN ','L ',3,12.8,96,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(78,'MAHESA ALEXSY ','L ',3,12.3,96.1,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06'),(79,'NAUFAL ALFAREZI ','L ',3,16.5,96.7,'Gizi Baik','2023-09-09 03:35:06','2023-09-09 03:35:06'),(80,'HASNA SYAFIRA ','P ',3,14,104.4,'Gizi Kurang','2023-09-09 03:35:06','2023-09-09 03:35:06');
/*!40000 ALTER TABLE `DataTrainings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Knns`
--

DROP TABLE IF EXISTS `Knns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Knns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `usia` int DEFAULT NULL,
  `berat` float DEFAULT NULL,
  `tinggi` float DEFAULT NULL,
  `klasifikasi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Knns`
--

LOCK TABLES `Knns` WRITE;
/*!40000 ALTER TABLE `Knns` DISABLE KEYS */;
INSERT INTO `Knns` VALUES (14,'VINCENZO ADITYA PRAYOGA','L',1,8.5,73,'Gizi Baik','2023-09-11 09:51:44','2023-09-11 09:51:44'),(15,'AFIZAH','P',2,7.8,78,'Gizi Kurang','2023-09-11 09:52:30','2023-09-11 09:52:30'),(16,'AMARA ARDELIA BIKRUM','P',3,10.6,86.5,'Gizi Kurang','2023-09-11 09:53:13','2023-09-11 09:53:13');
/*!40000 ALTER TABLE `Knns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `SequelizeMeta`
--

DROP TABLE IF EXISTS `SequelizeMeta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SequelizeMeta`
--

LOCK TABLES `SequelizeMeta` WRITE;
/*!40000 ALTER TABLE `SequelizeMeta` DISABLE KEYS */;
INSERT INTO `SequelizeMeta` VALUES ('20230908205121-create-users.js'),('20230909010546-create-data-training.js'),('20230909031054-create-svm.js'),('20230909033848-create-knn.js');
/*!40000 ALTER TABLE `SequelizeMeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Svms`
--

DROP TABLE IF EXISTS `Svms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Svms` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `usia` int DEFAULT NULL,
  `berat` float DEFAULT NULL,
  `tinggi` float DEFAULT NULL,
  `klasifikasi` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Svms`
--

LOCK TABLES `Svms` WRITE;
/*!40000 ALTER TABLE `Svms` DISABLE KEYS */;
INSERT INTO `Svms` VALUES (17,'VINCENZO ADITYA PRAYOGA','L',1,8.5,73,'Gizi Baik','2023-09-11 09:50:17','2023-09-11 09:50:17'),(18,'AFIZAH','P',2,7.8,78,'Gizi Baik','2023-09-11 09:53:44','2023-09-11 09:53:44'),(19,'AMARA ARDELIA BIKRUM','P',3,10.6,86.5,'Gizi Baik','2023-09-11 09:54:14','2023-09-11 09:54:14');
/*!40000 ALTER TABLE `Svms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` text,
  `image` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'@admin','Admin','admin@gmail.com','$2b$10$9wc27FlPTWX3KJIHKuCUpOTgkZjYCk35eAUFlW.qFabqyrirgxZz.',NULL,'2023-09-09 03:43:20','2023-09-09 03:43:20');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-11 17:12:18
