-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Már 27. 10:00
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
  `event_time` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `calorie`
--

INSERT INTO `calorie` (`id`, `name`, `amount`, `carbohydrate`, `protein`, `fat`, `totalCalorie`, `userId`, `event_time`) VALUES
(1, 'muffin', 111, 4, 30.19, 43.97, 533.28, 1, '2023-03-10 17:53:45'),
(2, 'muffin', 11, 27, 8.4, 25.5, 373.55, 20, '2023-03-10 17:53:45'),
(5, 'monster', 500, 23, 0, 0, 240, 21, '2023-03-15 14:24:58'),
(6, 'Milk Chocolate Turkish Delight Thins', 1, 14, 0.7, 4.3, 97.21, 12, '2023-03-15 14:54:11'),
(7, 'Jelly Bar', 17, 28, 0, 0, 110, 12, '2023-03-16 11:58:42'),
(8, '1% Milk - 1 cup', 2, 12, 8.53, 2.38, 210.7, 12, '2023-03-18 14:02:31'),
(9, 'Cheese', 100, 2000, 300, 1000, 18000, 12, '2023-03-19 08:54:56'),
(10, 'Apple - 1 oz', 2, 8, 0.14, 0.1, 29.48, 12, '2023-03-26 08:09:07');

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
  `password` varchar(60) NOT NULL,
  `currentWeight` double NOT NULL DEFAULT 0,
  `targetWeight` double DEFAULT NULL,
  `currentCalorie` int(5) NOT NULL DEFAULT 0,
  `targetCalorie` double NOT NULL DEFAULT 0,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `fullname`, `email`, `password`, `currentWeight`, `targetWeight`, `currentCalorie`, `targetCalorie`, `admin`) VALUES
(22, 'Admin', 'admin@admin.com', '$2b$12$yir3Suc0QBrWYmkV2Kb1G.EqfmK6QuOKjNOZZSXJQhNqRA8XPNJ.K', 80, 77, 1189, 2700.52, 1),
(24, 'Donat', 'donat@gmail.com', '$2b$12$4KcZg3e9sOF.Lw2/JjgLau3vz/KlZkai.Pp1.JuPPyFCsdAG1yvRO', 0, NULL, 0, 0, 0),
(26, 'asd', 'asd@asd.com', '$2b$12$IKC0.nqeGYWbyVfob4img.By3Vpek8VnrvR/x.Kj9x1HG.46GgSBe', 0, NULL, 0, 0, 0);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `calorie`
--
ALTER TABLE `calorie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_calorieUser` (`userId`),
  ADD KEY `event_timestamp` (`event_time`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT a táblához `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
