CREATE DATABASE  IF NOT EXISTS `ALTATEC_DB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `ALTATEC_DB`;
-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: ALTATEC_DB
-- ------------------------------------------------------
-- Server version	8.0.25-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adress`
--

DROP TABLE IF EXISTS `adress`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `adress` (
  `number` smallint DEFAULT '0',
  `street` varchar(30) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(15) NOT NULL,
  `user_email` varchar(80) NOT NULL,
  PRIMARY KEY (`user_email`),
  CONSTRAINT `PK_USER_ADRESS` FOREIGN KEY (`user_email`) REFERENCES `user` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adress`
--

LOCK TABLES `adress` WRITE;
/*!40000 ALTER TABLE `adress` DISABLE KEYS */;
INSERT INTO `adress` VALUES (0,'','','','edortizbuj55@gmail.com'),(0,'','','','elizabethortizbuj@gmail.com'),(133,'independencia','apodaca','nuevo leon','mike_wiii@hotmail.com');
/*!40000 ALTER TABLE `adress` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `id_category` int NOT NULL AUTO_INCREMENT,
  `category` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Sillas'),(2,'Computadoras'),(5,'Monitores'),(7,'Perifericos'),(8,'Computadoras'),(9,'Sillas'),(10,'Monitores'),(11,'Straming'),(12,'Perifericos'),(13,'Computadoras'),(14,'Sillas'),(15,'Monitores'),(16,'Straming'),(17,'Perifericos');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `commentary`
--

DROP TABLE IF EXISTS `commentary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `commentary` (
  `user_email` varchar(80) NOT NULL,
  `product` int NOT NULL,
  `content` text,
  `comment_date` datetime NOT NULL,
  PRIMARY KEY (`comment_date`,`product`,`user_email`),
  KEY `FK_COMMENT_USER` (`user_email`),
  KEY `FK_COMMENT_PRODUCT` (`product`),
  CONSTRAINT `FK_COMMENT_PRODUCT` FOREIGN KEY (`product`) REFERENCES `product` (`id_prod`),
  CONSTRAINT `FK_COMMENT_USER` FOREIGN KEY (`user_email`) REFERENCES `user` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `commentary`
--

LOCK TABLES `commentary` WRITE;
/*!40000 ALTER TABLE `commentary` DISABLE KEYS */;
INSERT INTO `commentary` VALUES ('mike_wiii@hotmail.com',3,'Excelente pc, rinde muy bien para cargas pesadas de trabajo','2021-05-27 00:00:00'),('mike_wiii@hotmail.com',5,'Excelente pc, rinde muy bien para cargas pesadas de trabajo','2021-05-27 00:00:00'),('mike_wiii@hotmail.com',3,'Primer comentario desde la pagina','2021-05-27 08:06:54'),('edortizbuj55@gmail.com',4,'','2021-05-30 19:48:21');
/*!40000 ALTER TABLE `commentary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `name` varchar(80) NOT NULL,
  `stock` int NOT NULL,
  `descript` text,
  `category` int NOT NULL,
  `rate` int DEFAULT '0',
  `price` double DEFAULT '0',
  `deiscount` double DEFAULT '0',
  `added_on` date NOT NULL,
  `id_prod` int NOT NULL AUTO_INCREMENT,
  `thumbnail` text,
  PRIMARY KEY (`id_prod`),
  KEY `FK_PRODCUCT_CATEGORY` (`category`),
  CONSTRAINT `FK_PRODCUCT_CATEGORY` FOREIGN KEY (`category`) REFERENCES `category` (`id_category`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES ('silla gamer',20,'Silla roja para jugar',1,1,2500,0,'2021-05-18',1,'assets/img/red chair.png'),('Infernus',3,'Computadora para jugar',2,3,3500,0,'2021-05-18',2,'assets/img/pc.png'),('PC Gamer Gladius 50i',2,'La PC Gamer Gladius 50i es el pase de ingreso al mundo del gaming con una computadora enfocada a correr juegos de última generación Esports y los competitivos más populares del año. Optimizada a tu presupuesto, personalizable y actualizable a futuro. La guerra comienza... ahora. Si lo deseas, podrás personalizarla al pedirla.',2,0,20125,0,'2021-05-26',3,'assets/img/gladius-1.png'),('PC Gamer Thanos 70i',1,'La PC Gamer Thanos 70i X jamás te dejará limitado para realizar desafíos de alto desempeño, prepara a tu tropa para jugar títulos de última generación con el máximo poder gráfico. Una computadora capaz de realizar stream en plataformas como Youtube y Twicht a nivel profesional. Optimizada a tu presupuesto, personalizable y actualizable a futuro. Aniquila a tus rivales. Si lo deseas, podrás personalizarla al pedirla.',2,0,43730,0,'2021-05-26',4,'assets/img/thanos70i-1.png'),('PC Gamer Hyperion 90i',510,'La PC Gamer Hyperion 90i X jamás te dejará limitado para realizar desafíos de alto desempeño, prepara a tu tropa para jugar títulos de última generación con el máximo poder gráfico. Una computadora capaz de realizar stream en plataformas como Youtube y Twicht a nivel profesional. Optimizada a tu presupuesto, personalizable y actualizable a futuro. Aniquila a tus rivales. Si lo deseas, podrás personalizarla al pedirla.',2,0,79165,0.02,'2021-05-26',5,'assets/img/hyperion90i-1.png'),('PC Gamer Delios 60i',250,'La PC Gamer Delios 60i es un arma que aprovecharás en el campo de batalla, ya sea jugando títulos de última generación con muy buen nivel gráfico. Una computadora capaz de realizar stream en plataformas como Youtube y Twicht a nivel profesional. Optimizada a tu presupuesto, personalizable y actualizable a futuro. Aniquila a tus rivales. Si lo deseas, podrás personalizarla al pedirla.',2,0,17117,0.02,'2021-05-26',6,'assets/img/gladius.png'),('PC Gamer Stelios 80i',20,'La PC Gamer Stelios 80i jamás te dejará limitado para realizar desafíos de alto desempeño, prepara a tu tropa para jugar títulos de última generación con el máximo poder gráfico. Una computadora capaz de realizar stream en plataformas como Youtube y Twicht a nivel profesional. Optimizada a tu presupuesto, personalizable y actualizable a futuro. Aniquila a tus rivales. Si lo deseas, podrás personalizarla al pedirla.',2,0,48320,0.4,'2021-05-26',8,'assets/img/stelios80i-1.png'),('Silla Gamer Kultec Serie X2 Negra',20,'La Silla Gamer Kultec x2 negra es una de las más codiciadas del mercado por su increíble diseño, su aspecto elegante y su tecnología foam doble, calidad superior, experiencia inigualable. Recuerda que tenemos envíos a todo México.',1,0,5299,0,'2021-05-26',9,'assets/img/kultec-negra-x2-1.png'),('Silla Gamer Kultec Serie X2 Rosa',20,'Compra la nueva Silla Gamer Kultec X2 Rosa, un increíble diseño y colores llamativos acompañado de la nueva tecnología de Kultec donde renueva el refuerzo del memory Foam para garantizar comodidad en las más largas y exigentes partidas. Recuerda que contamos con envíos a todo México.',1,0,5299,0,'2021-05-26',10,'assets/img/kultec-rosa-x2-1.png'),('Silla Gamer Kultec Serie X Gris 2021',20,'Compra tu Kultec Serie X2 Gris, una silla para los pro. Kultec ha mejorado su asiento y respaldo con tecnología memory foam reforzada. Sin duda un gran cambio de su predecesora la Kultec serie X. Recuerda tenemos envíos a todo México.',1,0,5299,0,'2021-05-26',11,'assets/img/kultec-gris-x2-1.png'),('Silla Gamer Kultec Serie X2 Azul',20,'Compra la nueva silla Gamer Kultec serie X2 en su flamante color azul, mejora su tecnología de memory foam para garantizar comodidad durante las jornadas más demandantes. Recuerda que contamos con envíos a todo México',1,0,5299,0,'2021-05-26',12,'assets/img/kultec-x2-1.png'),('Silla Gamer Kultec Serie x2 Blanca',20,'La afamada Silla Gamer Serie X evoluciona a la nueva y mejorada Serie X2 de Kultec. Compra una silla Gamer que te permita disfrutar de increíbles horas de juego, ya que cuenta con memory foam reforzado para garantizar la comodidad. Recuerda contamos con envíos a todo México',1,0,5299,0,'2021-05-26',13,'assets/img/kultec-blanco-x2-1.png'),('kultec-naranja-x2-1.png',20,'Compra una de las mejores sillas Gamer en México, Kultec Serie X2 ha mejorado su diseño y revolucionado la tecnología de Memory Foam para asegurar comodidad inigualable. Recuerda que contamos con envíos a todo México.',1,0,5299,0,'2021-05-26',15,'assets/img/kultec-naranja-x2-1.png'),('Silla Gamer Kultec Serie X2 Verde',20,'Compra la nueva silla Gamer Kultec Serie X2. Un diseño mejorado de su antecesora la serie X de Kultec. Esta silla cuenta con tecnología de memory foam mejorada para lograr comodidad garantizada en tus partidas de juego.',1,0,5299,0,'2021-05-26',16,'assets/img/kultec-verde-x2-1.png'),('Silla Gamer Kultec Serie X2 Morada',20,'Llego la Serie X2 de Kultec a Spartan Geek. Compra una de las mejores sillas Gamer en México. Esta es la versión mejorada de la afamada silla gamer Kultec serie X Morada. Ahora cuenta con doble soporte de memory foam en el asiento para mayor comodidad. Recuerda que tenemos envíos a todo México',1,0,5299,0,'2021-05-26',17,'assets/img/kultec-morada-x2-1.png'),('Silla Gamer Xzeal RGB XZ15',150,'Con 180 grados de giro en el respaldo, acomódalo para la batalla, 5 soportes metálicos, totalmente resistentes para días y noches de partidas, con soporte lumbar y superior con memoria que se ajusta a tus movimientos y sincroniza el RGB de tu silla con tu setup con su control incluido, configúrala y elige el RGB de tu agrado.',1,0,6152,0.2,'2021-05-26',18,'assets/img/Silla-Xzeal-XZ15-3.png'),('Silla Gamer Aerocool Earl Stone Grey',150,'Usando una combinación de microfibras y telas no tejidas de primera calidad, AeroSuede brinda una apariencia y sensación suaves y lujosas al tiempo que brinda la máxima transpirabilidad. Construida con un diseño ergonómicamente amigable, esta silla para juegos lo mantiene cómodo y relajado durante largas sesiones de juego. La tecnología AIR MESH presenta un diseño innovador donde los materiales entrelazados transpirables están integrados en la superficie de asiento de la silla.',1,0,4889,0,'2021-05-26',19,'assets/img/earl-stone-grey-07.png'),('Monitor Gamer ASUS VG24VQ 23.6\" Full HD 144HZ',150,'Máximo detalle aún en las situaciones más movidas. Gracias a su tasa de refresco de 144 Hz, siempre podrás captar hasta el más mínimo detalle. No importa si estás en una batalla de shooters, jugando tu MOBA favorito o a punto de ganar la última carrera, siempre te dará la ventaja',5,0,4650,0,'2021-05-26',20,'assets/img/ASUS-VG24VQ.png'),('1Monitor Gamer Curvo Acer ED27 27\" 144hz',350,'Máximo detalle aún en las situaciones más movidas. Gracias a su tasa de refresco de 144 Hz, siempre podrás captar hasta el más mínimo detalle. No importa si estás en una batalla de shooters, jugando tu MOBA favorito o a punto de ganar la última carrera, el monitor MG600-V2 siempre te dará la ventaja',5,0,5597,0,'2021-05-26',21,'assets/img/Monitor-Acer-ED273-144Hz-1.png'),('Monitor Game Factor MG700 27\" 144 Hz 2K',350,'Nunca más perderás detalle de tus partidas. Gracias a su refresco de 144Hz y resolución QHD, siempre podrás captar hasta el más mínimo detalle. Obtén una verdadera ventaja sin importar si eres gamer o un profesional del diseño, el MG700, es para tí.',5,0,7550,0,'2021-05-26',22,'assets/img/Monitor-Game-Factor-MG700.png'),('Monitor Game Factor MG600 24.5\" 144 Hz',350,'Máximo detalle aún en las situaciones más movidas. Gracias a su tasa de refresco de 144 Hz, siempre podrás captar hasta el más mínimo detalle. No importa si estás en una batalla de shooters, jugando tu MOBA favorito o a punto de ganar la última carrera, el monitor MG600-V2 siempre te dará la ventaja',5,0,5299,0,'2021-05-26',23,'assets/img/Monitor-Game-Factor-MG600-X800.png'),('Monitor Gamer Curvo 27\" Xzeal XZ4010',80,'',5,0,5299,0,'2021-05-26',24,'assets/img/XZ4010.png'),('Monitor BenQ 24\" GW2480 Full HD',80,'Los monitores estilizados de BenQ cuentan con biseles ultra-delgados y administración oculta para los cables. Con un panel LED con tecnología IPS, el GW2480 te ofrece un nuevo nivel de comodidad visual con colores auténticos, negros más profundos, mayor contraste y detalles más nítidos. Complementados con los sistemas para el cuidado de los ojos Eye-Care ™, Low Blue Light, Flicker-Free y Brightness Intelligence.',5,0,3490,0,'2021-05-26',25,'assets/img/GW2480-5.png'),('Capturadora de Video EVGA XR1 OBS 4K',100,'La Capturadora EVGA XR1 es el complemento ideal de tus accesorios para Stream de manera profesional. Podrás grabar y transmitir con alta calidad de video 4K - Graba a 1080P/60FPS mientras juegas a 4K/60FPS. También tiene un Modo de Traspaso Avanzado que te permite cambiar a una tasa de refresco de 144Hz + HDR con solo presionar un botón. No tienes que desconectar o deshabilitar nada para aprovechar al máximo tu monitor y guardar tus mejores partidas. Sin salir de tu juego podrás también controlar el volumen de la entrada de micrófono con los controles incorporados y disfrutar sus sistema ARGB Personalizables que muestra tus niveles de audio, cambia los colores y más con solo presionar un botón.',11,0,3999,0,'2021-05-26',26,'assets/img/Capturadora-EVGA-XR1-RGB.png'),('Stream Deck XL Elgato 32 Teclas Personalizables',45,'Cuenta con 32 Teclas LCD Personalizables. Equipo perfecto para Gamers, Streamers y Creadores de contenido que requieren automatizar más su contenido, podrás realizar cambios de cámaras, poner clips, gifts y videos entre otras funciones de forma fácil como lo hacemos nosotros en Spartan Geek. Compatible con múltiples plataformas como Twitch, Facebook Gaming y YouTube.',11,0,5999,0,'2021-05-26',27,'assets/img/Elgato-Stream-Deck-XL.png'),('Aro de Luz LED Gamer LRG300 Game Factor',20,'Profesionaliza tu set de grabación con un Aro de Luz con temperatura ajustable 3 modos, e intensidad de iluminación con 10 niveles. Incluye un adaptador para webcam o tu celular y un trípode con ajuste de altura, metálico ligero y resistente. Ideal para Gamers creadores de contenido, streamers y fotógrafos.',11,0,999,0,'2021-05-26',28,'assets/img/Game-Factor-Aro-de-Luz-LRG300-2.png'),('Capturadora Elgato HD60 S',20,'Graba tus mejores partidas con un dispositivo plug-n-play perfecto para resolución Full HD calidad a 1080p60 potenciado por conector USB-C reversible. Perfecto para Gamers y creadores de contenido multiplataforma como Twitch, Facebook Gaming o YouTube.',11,0,4599,0,'2021-05-26',29,'assets/img/Elgato-Capturadora-HD60S-3.png'),('Pantalla Verde / Green Screen Elgato - Corsair Profesional',20,'El lienzo de los creadores de contenido, gamers y streamers. Green Screen, es una solución con tecnología desplegable totalmente estable optimizada para chromakey, permite montar una transmisión verdaderamente inmersiva en cuestión de segundos. Dimensiones pantalla: A x L 148 x 180 cm / 58.27 x 70.87 pulgadas. Peso: 9.3 kg',11,0,4399,0,'2021-05-26',30,'assets/img/Screen-elgato-1.png'),('Stream Deck Elgato 15 Teclas, Alámbrico, USB',500,'Equipo perfecto para Gamers, Streamers y Creadores de contenido que requieren automatizar más su contenido, podrás realizar cambios de cámaras, poner clips, gifts y videos entre otras funciones de forma fácil como lo hacemos nosotros en Spartan Geek. Compatible con múltiples plataformas como Twitch, Facebook Gaming y YouTube.',11,0,3899,0,'2021-05-26',31,'assets/img/15.png'),('Audífonos Gamer Eagle Warrior Quimera RGB',50,'Este Headset Gamer Quimera RGB cuenta con una única conexión USB con cable de 2 metros que no requiere software para funcionar. Completa tus accesorios de tu PC Gamer con estos audífonos ergonómicos, hechos con piel sintética, almohadillas cómodas, control de volumen y micrófono ajustable.',7,0,399,0,'2021-05-26',32,'assets/img/Audifonos-Gamer-Eagle-Warrior-Quimera.png'),('Kit Gamer Corsair K55 + Harpoon RGB (Español)',50,'El pack de teclado y ratón para juegos K55 + HARPOON RGB es su primer paso para convertirse en ganador. Presenta teclas de macro programables, un sensor de ratón de 6000 dpi de alto rendimiento y compatibilidad completa con CUE. El software CORSAIR iCUE permite controlar la iluminación viva y dinámica, con una sofisticada programación de macros y la posibilidad de sincronizar toda la iluminación del sistema, entre periféricos, refrigeradores, ventiladores y otros productos compatibles de CORSAIR.',7,0,1690,0,'2021-05-26',33,'assets/img/k55-2.png'),('Kit Gamer Naceb Cyborg Plata (Español)',50,'El Kit Gamer Naceb Cyborg plata es el complemento perfecto para tu PC Gamer. Su base resistente y aspecto elegante y moderno, lo hace ideal para tu zona de juego. El teclado retro iluminado tiene un signo de distinción con 4 modos de color. Brinda el mayor confort para garantizar la máxima comodidad en tu juego.',7,0,580,0,'2021-05-26',34,'assets/img/naceb-plateado-1.png');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_img`
--

DROP TABLE IF EXISTS `product_img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_img` (
  `product` int NOT NULL,
  `img` text,
  `id_prod` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id_prod`),
  KEY `FK_PRODUCT` (`product`),
  CONSTRAINT `FK_PRODUCT` FOREIGN KEY (`product`) REFERENCES `product` (`id_prod`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_img`
--

LOCK TABLES `product_img` WRITE;
/*!40000 ALTER TABLE `product_img` DISABLE KEYS */;
INSERT INTO `product_img` VALUES (3,'assets/img/gladius.jpg',1),(3,'assets/img/gladius-1.png.jpg',2),(3,'assets/img/gladius-2.png.jpg',3),(3,'assets/img/gladius-3.png.jpg',4),(4,'assets/img/thanos-1.png',5),(4,'assets/img/thanos-2.png',6),(4,'assets/img/thanos-3.png',7);
/*!40000 ALTER TABLE `product_img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_list`
--

DROP TABLE IF EXISTS `product_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_list` (
  `list_name` varchar(20) NOT NULL,
  `user_list` varchar(80) NOT NULL,
  `product_item` int NOT NULL,
  `added_on` date NOT NULL,
  PRIMARY KEY (`list_name`,`user_list`,`product_item`),
  KEY `FK_PRODCUT_ITEM` (`product_item`),
  CONSTRAINT `FK_PRODCUT_ITEM` FOREIGN KEY (`product_item`) REFERENCES `product` (`id_prod`),
  CONSTRAINT `FK_PRODUCT_LIST` FOREIGN KEY (`list_name`, `user_list`) REFERENCES `wish_list` (`list_name`, `user_list`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_list`
--

LOCK TABLES `product_list` WRITE;
/*!40000 ALTER TABLE `product_list` DISABLE KEYS */;
INSERT INTO `product_list` VALUES ('Lista con imagen','mike_wiii@hotmail.com',4,'2021-06-03'),('Lista de compus','edortizbuj55@gmail.com',4,'2021-05-30'),('pc gamer','mike_wiii@hotmail.com',1,'2021-05-27'),('pc gamer','mike_wiii@hotmail.com',21,'2021-06-03');
/*!40000 ALTER TABLE `product_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_specs`
--

DROP TABLE IF EXISTS `product_specs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_specs` (
  `product` int NOT NULL,
  `box` varchar(50) DEFAULT NULL,
  `processor` varchar(50) DEFAULT NULL,
  `graphic_card` varchar(50) DEFAULT NULL,
  `RAM` varchar(50) DEFAULT NULL,
  `HARD_DRIVE` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`product`),
  CONSTRAINT `FK_PRODUCT_SPECS` FOREIGN KEY (`product`) REFERENCES `product` (`id_prod`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_specs`
--

LOCK TABLES `product_specs` WRITE;
/*!40000 ALTER TABLE `product_specs` DISABLE KEYS */;
INSERT INTO `product_specs` VALUES (2,'NZXT i500','Intel i7, 10900KF','RTX 3060 8GB','16GB DDR4','1 TB'),(3,'Corsair','Intel i3, 9100F','GTX 1650 4GB','8GB DDR4','1 TB'),(4,'CoolerMaster','Intel i7, 10700F','RTX 3070 8GB','16GB DDR4','2 TB'),(5,'AeroCool','Intel i5, 10400F','RTX 3090 24GB','16GB DDR4','1 TB'),(6,'AeroCool','Intel i5, 10400F','RTX 3060Ti 8GB','16GB DDR4','1 TB'),(8,'AeroCool','Intel i9, 10900KF','RTX 3070 8GB','16GB DDR4','1 TB');
/*!40000 ALTER TABLE `product_specs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `purchase`
--

DROP TABLE IF EXISTS `purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `purchase` (
  `user_email` varchar(80) NOT NULL,
  `product_id` int NOT NULL,
  `purchase_date` date NOT NULL,
  `total` double DEFAULT '0',
  `status` varchar(15) DEFAULT 'EN PROCESO',
  PRIMARY KEY (`user_email`,`product_id`),
  KEY `FK_PRODUCT_PURCHASE` (`product_id`),
  CONSTRAINT `FK_PRODUCT_PURCHASE` FOREIGN KEY (`product_id`) REFERENCES `product` (`id_prod`),
  CONSTRAINT `FK_USER_PURCHASE` FOREIGN KEY (`user_email`) REFERENCES `user` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `purchase`
--

LOCK TABLES `purchase` WRITE;
/*!40000 ALTER TABLE `purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `name` varchar(15) NOT NULL,
  `midelname` varchar(15) DEFAULT NULL,
  `f_lastName` varchar(15) NOT NULL,
  `lastName` varchar(15) NOT NULL,
  `email` varchar(80) NOT NULL,
  `pwd` varchar(100) DEFAULT NULL,
  `avatar` text,
  `first` tinyint DEFAULT '0',
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('Eduardo','Issac','Ortiz','Buj','edortizbuj55@gmail.com','ZAKS','',0),('Elizabeth','','ortiz','buh','elizabethortizbuj@gmail.com','Bety','',0),('miguel','angel','medina','ortiz','mike_wiii@hotmail.com','mikered','assets/img/1622743449211-real-user.jpg',1);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `vw_builds`
--

DROP TABLE IF EXISTS `vw_builds`;
/*!50001 DROP VIEW IF EXISTS `vw_builds`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_builds` AS SELECT 
 1 AS `name`,
 1 AS `stock`,
 1 AS `descript`,
 1 AS `category`,
 1 AS `rate`,
 1 AS `price`,
 1 AS `deiscount`,
 1 AS `added_on`,
 1 AS `id_prod`,
 1 AS `thumbnail`,
 1 AS `product`,
 1 AS `box`,
 1 AS `processor`,
 1 AS `graphic_card`,
 1 AS `RAM`,
 1 AS `HARD_DRIVE`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_list_items`
--

DROP TABLE IF EXISTS `vw_list_items`;
/*!50001 DROP VIEW IF EXISTS `vw_list_items`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_list_items` AS SELECT 
 1 AS `list`,
 1 AS `list_added`,
 1 AS `user`,
 1 AS `product_added`,
 1 AS `product`,
 1 AS `descript`,
 1 AS `id_prod`,
 1 AS `thumbnail`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_purchase`
--

DROP TABLE IF EXISTS `vw_purchase`;
/*!50001 DROP VIEW IF EXISTS `vw_purchase`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_purchase` AS SELECT 
 1 AS `thumbnail`,
 1 AS `product`,
 1 AS `total`,
 1 AS `purchase_date`,
 1 AS `status`,
 1 AS `product_id`,
 1 AS `user`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `vw_user_adress`
--

DROP TABLE IF EXISTS `vw_user_adress`;
/*!50001 DROP VIEW IF EXISTS `vw_user_adress`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `vw_user_adress` AS SELECT 
 1 AS `name`,
 1 AS `s_name`,
 1 AS `lastName_p`,
 1 AS `lastName_m`,
 1 AS `email`,
 1 AS `user_avatar`,
 1 AS `first`,
 1 AS `number`,
 1 AS `street`,
 1 AS `city`,
 1 AS `state`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `wish_list`
--

DROP TABLE IF EXISTS `wish_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wish_list` (
  `list_name` varchar(20) NOT NULL,
  `user_list` varchar(80) NOT NULL,
  `added_on` date NOT NULL,
  `list_thumbnail` text,
  PRIMARY KEY (`list_name`,`user_list`),
  KEY `FK_USER_WISH_LIST` (`user_list`),
  CONSTRAINT `FK_USER_WISH_LIST` FOREIGN KEY (`user_list`) REFERENCES `user` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wish_list`
--

LOCK TABLES `wish_list` WRITE;
/*!40000 ALTER TABLE `wish_list` DISABLE KEYS */;
INSERT INTO `wish_list` VALUES ('Lista con imagen','mike_wiii@hotmail.com','2021-06-03','assets/img/thanos70i-1.png'),('Lista de compus','edortizbuj55@gmail.com','2021-05-30',NULL),('pc gamer','mike_wiii@hotmail.com','2021-05-19','assets/img/Monitor-Acer-ED273-144Hz-1.png');
/*!40000 ALTER TABLE `wish_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'ALTATEC_DB'
--

--
-- Dumping routines for database 'ALTATEC_DB'
--
/*!50003 DROP PROCEDURE IF EXISTS `login` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `login`(p_email varchar(80), p_pwd varchar(100))
BEGIN

	select 	user.name as name, user.midelName as s_name, user.f_lastName as lastName_p,
			user.lastName as lastName_m, user.email as email, user.avatar as user_avatar,
            adress.number as adress_number, adress.street as adress_street, adress.city as adress_city,
            adress.state as adress_state
	from user
    join adress on user.email = adress.user_email
    where user.email = p_email and user.pwd = p_pwd;
            
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `register_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `register_user`(

	p_name		varchar(15),
    p_midelName	varchar(15),
    P_fLastName	varchar(15),
    p_lastName	varchar(15),
    p_email		varchar(80),
    p_pwd		varchar(100),
    p_avatar	text

)
BEGIN

	#SE AGREGA UN NUEVO USUARIO A LA BASE DE DATOS
	insert into user values(
    
		p_name,
        p_midelName,
        p_fLastName,
        p_lastName,
        p_email,
        p_pwd,
        p_avatar
    
    );

	#DESPUÉS SE AGREGA EL DOMICILIO, PERO SOLO EL ID DEL USUARIO
    #EN LA TABLA DEL DOMICILIO, ES COMO UN PLACE HOLDER 
	insert into adress values(
		0,
        '',
        '',
        '',
		p_email
	);    
    
    #POR ULTIMO REGRESAMOS AL NUEVO USUARIO QUE SE CREO
    select 	user.name, user.midelname, user.f_lastName, user.lastName, user.email, user.avatar,
			adress.number, adress.street, adress.city, adress.state
    from user
    join adress on user.email = adress.user_email
    where email = p_email;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_add_list_item` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_add_list_item`(
	p_list				varchar(20),
    p_owner				varchar(80),
    p_product			int,
    p_thumbnail			text
)
BEGIN

	insert into product_list values(
		p_list,
        p_owner,
        p_product,
        curdate()
    );
    
	update wish_list set list_thumbnail = p_thumbnail where list_name = p_list and user_list = p_owner;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_commentary` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_commentary`(
	p_prod 				int, 
    opc 				varchar(20), 
    user_email			varchar(80),
    content				text
)
BEGIN

	if (opc = 'getComment') then
		select 	commentary.user_email, commentary.product, commentary.content, commentary.comment_date,
			user.name, user.avatar
		from commentary
		join user on user.email = commentary.user_email
		where commentary.product = p_prod;
	elseif (opc = 'postComment') then
		insert into commentary values(
			user_email,
            p_prod,
            content,
            now()
        );	
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_list` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_list`(
	#GET LISTS AND INSERT LIST
    p_listName 		varchar(80),
    p_user			varchar(80),  
    
    #QUERY OPC
    opc				varchar(15)
)
BEGIN
	
    if(opc = 'INSERT') then			
		insert into wish_list (list_name, user_list, added_on) values(p_listName, p_user, curdate());
	elseif(opc = 'SELECT') then
		select  product as pName, descript as pDescript, id_prod as pID  from vw_list_items  where user = p_user and list = p_listName;
	elseif(opc = 'DELETE') then
		delete from product_list where list_name = p_listName and user_list = p_user;
        delete from wish_list where list_name = p_listName and user_list = p_user;
    end if;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_product` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_product`(p_prod int)
BEGIN

	if ((select category from product where id_prod = p_prod) <> 2 ) then
    
		select 	product.name, product.descript, product.rate, product.category,product.price, product.deiscount, product.added_on, product.id_prod, product.thumbnail
		from	product
        where	product.id_prod = p_prod;
    
    else
		
		select 	vw_builds.name, vw_builds.descript, vw_builds.rate, vw_builds.category, vw_builds.price, vw_builds.deiscount, vw_builds.added_on, vw_builds.id_prod, vw_builds.thumbnail,
				vw_builds.box, vw_builds.processor, vw_builds.graphic_card, vw_builds.RAM, vw_builds.HARD_DRIVE
        from	vw_builds
        where	vw_builds.id_prod = p_prod;
        
    end if;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_update_user` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_update_user`(
	#USER INFO
    p_name			varchar(15),
    p_s_name		varchar(15),
    p_lastName_p	varchar(15),
    p_lastName_m	varchar(15),
    p_pass			varchar(100),
    
    #ADRESS INFO
    p_number		smallint,
    p_street		varchar(30),
    p_city			varchar(30),
    p_state			varchar(30),
    
    p_user			varchar(80),
    opc				varchar(15)
    
)
BEGIN
	
    if(exists(select email from user where email = p_user)) then
		if(opc = 'USER') then
			update user set
				name = p_name,
                midelname = p_s_name,
                f_lastName = p_lastName_p,
                lastName = p_lastName_m
			where email = p_user;			
            if p_pass <> '' then
				update user set pwd = p_pass where email = p_user;
            end if;     
		elseif(opc = 'ADRESS')then
			update adress set
				number = p_number,
                street = p_street,
                city = p_city,
                state = p_state
			where user_email = p_user;				
        end if;
    else
		select 'THIS USER DOESNT EXISTS, PLEASE ENTER A VALID USER/EMAIL';
    end if;		
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_user_info` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_user_info`(p_email varchar(80), opc varchar(20))
BEGIN
	
	if opc = 'ADRESS' then
		select * from vw_user_adress where email = p_email;
	elseif opc = 'PURCHASE' and exists(select user_email, product_id from purchase where user_email = p_email) then
		select 	product.name as product, product.thumbnail, product.price, product.deiscount, product.id_prod,
				purchase.user_email as user, purchase.purchase_date, purchase.total
		from purchase
		join product on product.id_prod = purchase.product_id
		order by purchase.purchase_date asc limit 4;
	elseif opc = 'LISTS' and exists(select list_name from wish_list where user_list = p_email) then
		select list_name as list, user_list as owner, added_on, list_thumbnail from wish_list where user_list = p_email;
    end if;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `vw_builds`
--

/*!50001 DROP VIEW IF EXISTS `vw_builds`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_builds` AS select `product`.`name` AS `name`,`product`.`stock` AS `stock`,`product`.`descript` AS `descript`,`product`.`category` AS `category`,`product`.`rate` AS `rate`,`product`.`price` AS `price`,`product`.`deiscount` AS `deiscount`,`product`.`added_on` AS `added_on`,`product`.`id_prod` AS `id_prod`,`product`.`thumbnail` AS `thumbnail`,`product_specs`.`product` AS `product`,`product_specs`.`box` AS `box`,`product_specs`.`processor` AS `processor`,`product_specs`.`graphic_card` AS `graphic_card`,`product_specs`.`RAM` AS `RAM`,`product_specs`.`HARD_DRIVE` AS `HARD_DRIVE` from (`product` join `product_specs` on((`product_specs`.`product` = `product`.`id_prod`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_list_items`
--

/*!50001 DROP VIEW IF EXISTS `vw_list_items`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_list_items` AS select `wish_list`.`list_name` AS `list`,`wish_list`.`added_on` AS `list_added`,`product_list`.`user_list` AS `user`,`product_list`.`added_on` AS `product_added`,`product`.`name` AS `product`,`product`.`descript` AS `descript`,`product`.`id_prod` AS `id_prod`,`product`.`thumbnail` AS `thumbnail` from ((`product_list` join `wish_list` on(((`product_list`.`user_list` = `wish_list`.`user_list`) and (`product_list`.`list_name` = `wish_list`.`list_name`)))) join `product` on((`product`.`id_prod` = `product_list`.`product_item`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_purchase`
--

/*!50001 DROP VIEW IF EXISTS `vw_purchase`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_purchase` AS select `product`.`thumbnail` AS `thumbnail`,`product`.`name` AS `product`,`purchase`.`total` AS `total`,`purchase`.`purchase_date` AS `purchase_date`,`purchase`.`status` AS `status`,`purchase`.`product_id` AS `product_id`,`purchase`.`user_email` AS `user` from (`purchase` join `product` on((`purchase`.`product_id` = `product`.`id_prod`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `vw_user_adress`
--

/*!50001 DROP VIEW IF EXISTS `vw_user_adress`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `vw_user_adress` AS select `user`.`name` AS `name`,`user`.`midelname` AS `s_name`,`user`.`f_lastName` AS `lastName_p`,`user`.`lastName` AS `lastName_m`,`user`.`email` AS `email`,`user`.`avatar` AS `user_avatar`,`user`.`first` AS `first`,`adress`.`number` AS `number`,`adress`.`street` AS `street`,`adress`.`city` AS `city`,`adress`.`state` AS `state` from (`user` join `adress` on((`user`.`email` = `adress`.`user_email`))) */;
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

-- Dump completed on 2021-06-09 15:07:09
