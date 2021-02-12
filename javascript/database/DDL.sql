-- MySQL dump 10.13  Distrib 8.0.23, for Linux (x86_64)
--
-- Host: localhost    Database: school-administration-system
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `name` varchar(50) NOT NULL,
  `class_code` varchar(50) NOT NULL,
  PRIMARY KEY (`class_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES ('P1 Integrity','P1-1'),('P1-Charity','P1-2'),('P1-Patience','P1-3'),('P1-Devotion','P1-4'),('P1-Hope','P1-5');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registration`
--

DROP TABLE IF EXISTS `registration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registration` (
  `student_email` json DEFAULT NULL,
  `teacher_email` varchar(50) DEFAULT NULL,
  `class_code` varchar(50) DEFAULT NULL,
  `subject_code` varchar(50) DEFAULT NULL,
  `rid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`rid`),
  KEY `teacher_email` (`teacher_email`),
  KEY `class_code` (`class_code`),
  KEY `subject_code` (`subject_code`),
  CONSTRAINT `registration_ibfk_1` FOREIGN KEY (`teacher_email`) REFERENCES `teacher` (`email`),
  CONSTRAINT `registration_ibfk_2` FOREIGN KEY (`class_code`) REFERENCES `class` (`class_code`),
  CONSTRAINT `registration_ibfk_3` FOREIGN KEY (`subject_code`) REFERENCES `subject` (`subject_code`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registration`
--

LOCK TABLES `registration` WRITE;
/*!40000 ALTER TABLE `registration` DISABLE KEYS */;
INSERT INTO `registration` VALUES ('[\"student1@gmail.com\", \"student2@gmail.com\"]','teacher1@gmail.com','P1-1','ENG',4),('[\"student1@gmail.com\", \"student2@gmail.com\"]','teacher2@gmail.com','P1-1','ENG',6);
/*!40000 ALTER TABLE `registration` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('Student 1','student1@gmail.com'),('Student 2','student2@gmail.com');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `name` varchar(50) NOT NULL,
  `subject_code` varchar(50) NOT NULL,
  PRIMARY KEY (`subject_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('English','ENG'),('Mathematics','MATH');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher` (
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES ('dummy teacher name 1','dummyteacher1@gmail.com'),('dummy teacher name 2','dummyteacher2@gmail.com'),('Teacher 1','teacher1@gmail.com'),('Teacher 1','teacher2@gmail.com');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `workload`
--

DROP TABLE IF EXISTS `workload`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workload` (
  `teacher_email` varchar(50) DEFAULT NULL,
  `class_code` varchar(50) DEFAULT NULL,
  `subject_code` varchar(50) DEFAULT NULL,
  `wid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`wid`),
  KEY `teacher_email` (`teacher_email`),
  KEY `class_code` (`class_code`),
  KEY `subject_code` (`subject_code`),
  CONSTRAINT `workload_ibfk_1` FOREIGN KEY (`teacher_email`) REFERENCES `teacher` (`email`),
  CONSTRAINT `workload_ibfk_2` FOREIGN KEY (`class_code`) REFERENCES `class` (`class_code`),
  CONSTRAINT `workload_ibfk_3` FOREIGN KEY (`subject_code`) REFERENCES `subject` (`subject_code`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workload`
--

LOCK TABLES `workload` WRITE;
/*!40000 ALTER TABLE `workload` DISABLE KEYS */;
INSERT INTO `workload` VALUES ('dummyteacher2@gmail.com','P1-1','ENG',1),('dummyteacher2@gmail.com','P1-2','ENG',3),('dummyteacher1@gmail.com','P1-3','ENG',4),('dummyteacher1@gmail.com','P1-2','MATH',5),('dummyteacher1@gmail.com','P1-3','MATH',6),('dummyteacher1@gmail.com','P1-4','MATH',7);
/*!40000 ALTER TABLE `workload` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-12  9:10:17
