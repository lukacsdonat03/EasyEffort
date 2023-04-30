-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Ápr 30. 18:00
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
  `totalCalorie` double NOT NULL,
  `userId` int(11) NOT NULL,
  `event_time` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `calorie`
--

INSERT INTO `calorie` (`id`, `name`, `amount`, `carbohydrate`, `protein`, `fat`, `totalCalorie`, `userId`, `event_time`) VALUES
(43, 'Diet Soft Drink', 1, 0, 0, 0, 0, 8, '2023-04-30 15:54:43'),
(44, 'Organic Reduced Fat Milk', 2, 24, 16, 10, 260, 8, '2023-04-30 15:54:53'),
(46, 'Shrimp, Cooked', 2, 0, 28, 2, 140, 7, '2023-04-30 15:56:51'),
(47, 'Seeded Italian Bread', 2, 32, 4, 2, 160, 7, '2023-04-30 15:56:57');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `subject` varchar(45) NOT NULL,
  `message` varchar(500) NOT NULL,
  `state` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `comment`
--

INSERT INTO `comment` (`id`, `userId`, `subject`, `message`, `state`) VALUES
(21, 2, 'Test', 'This is a test message No.1', NULL),
(22, 2, 'Test', 'This is a test message No.2', 1),
(23, 2, 'Test', 'This is a test message No.3', 0);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `history`
--

CREATE TABLE `history` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `userId` int(11) NOT NULL,
  `total_cal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `history`
--

INSERT INTO `history` (`id`, `date`, `userId`, `total_cal`) VALUES
(1, '2023-04-29', 2, 2875),
(2, '2023-04-29', 1, 2543);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL,
  `currentWeight` double NOT NULL DEFAULT 0,
  `targetWeight` double NOT NULL DEFAULT 0,
  `currentCalorie` int(11) NOT NULL DEFAULT 0,
  `targetCalorie` double NOT NULL DEFAULT 0,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `password`, `currentWeight`, `targetWeight`, `currentCalorie`, `targetCalorie`, `admin`) VALUES
(1, 'Teszt Elek', 'tesztelek@tempmail.com', '$2b$12$v9xFMX2dLj0/6AUpZTYHROQMgHuIw4lfQKYDfpW.uydbhs12A3oU2', 0, 0, 300, 2298.74, 1),
(2, 'Felhasznalo01', 'felhasznalo01@tempmail.com', '$2b$12$9YaEb/j7QMNGT3oHozQLOeIl3vAVvu2G3aT8pil37GM1M/xd9MB/e', 0, 0, 260, 2435.18, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `calorie`
--
ALTER TABLE `calorie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_calorieUser` (`userId`) USING BTREE,
  ADD KEY `event_timestamp` (`event_time`) USING BTREE;

--
-- A tábla indexei `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- A tábla indexei `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_history_user` (`userId`) USING BTREE;

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT a táblához `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT a táblához `history`
--
ALTER TABLE `history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Megkötések a táblához `history`
--
ALTER TABLE `history`
  ADD CONSTRAINT `history_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
