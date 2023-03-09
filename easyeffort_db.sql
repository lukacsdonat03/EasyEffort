-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 09. 19:23
-- Kiszolgáló verziója: 10.4.27-MariaDB
-- PHP verzió: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `easyeffort`
--
CREATE DATABASE IF NOT EXISTS `easyeffort` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `easyeffort`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `calorie`
--

CREATE TABLE `calorie` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `amount` int(11) NOT NULL,
  `carbohydrate` int(11) NOT NULL,
  `protein` double DEFAULT NULL,
  `fat` double DEFAULT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `message` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `comment`
--

INSERT INTO `comment` (`id`, `userId`, `message`) VALUES
(1, 2, 'Test message'),
(2, 2, 'Hello World!'),
(3, 3, 'Mikorka Kálmán üzenete');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `currentWeight` double DEFAULT NULL,
  `targetWeight` double DEFAULT NULL,
  `calorieId` int(11) NOT NULL,
  `currentCalorie` int(11) NOT NULL,
  `targetCalorie` int(11) DEFAULT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `password`, `currentWeight`, `targetWeight`, `calorieId`, `currentCalorie`, `targetCalorie`, `admin`) VALUES
(1, 'Teszt Elek', 'tesztelek@tempmail.com', 'admin', NULL, NULL, 0, 0, NULL, 1),
(2, 'Hű Jenő', 'hujeno@tempmail.com', 'secret', NULL, NULL, 0, 0, NULL, 0),
(3, 'Mikorka Kálmán', 'kalman@tempmail.com', 'password', NULL, NULL, 0, 0, NULL, 0),
(12, 'Donat', 'donat@tempmail.com', '$2b$12$pnJk365BIpwmO1vjY6x2Q.ygie9B305FdSW.NoRCDqM', NULL, NULL, 0, 0, NULL, 1),
(15, 'Donat', 'donat03@tempmail.com', '$2b$12$sWTrAVOeWsJOwA9a67v7H.brWasd5kw0qCjb7PO3L0e', NULL, NULL, 0, 0, NULL, 1),
(16, 'Dona2t', 'donat02@tempmail.com', '$2b$12$PXFouGzNvcubmFXLK88n5eX9pBteMPcL0nXY5/GC0ft', NULL, NULL, 0, 0, NULL, 1),
(18, 'Lukács Donát', 'lukacs@gmail.com', '$2b$12$k10mGrbhz5MW1J5vwhZxP.QbGZnIkgoeXTQolFwd0gn', NULL, NULL, 0, 0, NULL, 0),
(19, 'Lukács Donát', 'asd@gmail.com', '$2b$12$P673bvvNtkZp6X7/fwSbwuUVLrEuUDkHQKaTZactHtP', NULL, NULL, 0, 0, NULL, 0),
(20, 'Admin', 'admin@admin.com', '$2b$12$3Fu9RDPg.7MuN.w.1vhYa.u4uboOb3qvY/6AGykWPTt', NULL, NULL, 0, 0, NULL, 0),
(21, 'Alma Kukac', 'alma@gmail.com', '$2b$12$OM8ekVEPkSpM9cTuZ3jRxed8x5xVCTGB0X3qswkXt9Q', NULL, NULL, 0, 0, NULL, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `calorie`
--
ALTER TABLE `calorie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_calorieUser` (`userId`);

--
-- A tábla indexei `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `calorie`
--
ALTER TABLE `calorie`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT a táblához `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
