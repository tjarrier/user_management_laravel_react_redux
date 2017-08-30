-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 30, 2017 at 02:14 PM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravelreacttest`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `admin` tinyint(1) NOT NULL,
  `age` int(3) DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `creation_date` datetime NOT NULL,
  `modification_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `firstname`, `lastname`, `admin`, `age`, `birthday`, `creation_date`, `modification_date`) VALUES
(1, 'tjarrier', 'Thomas', 'Jarrier', 1, 19, '1998-05-21 00:00:00', '2017-08-29 00:00:00', '2017-08-29 00:00:00'),
(2, 'mboue', 'Martin', 'Boue', 0, 18, '1998-10-29 00:00:00', '2017-08-29 00:00:00', '2017-08-29 00:00:00'),
(22, 'ergergerzgze', 'zergzegre', 'rgerzgezrg', 0, NULL, NULL, '2017-08-30 14:00:12', '2017-08-30 14:00:12'),
(23, 'ergergerzgzeerge', 'zergzegre', 'rgerzgezrg', 0, 23, '1994-05-21 00:00:00', '2017-08-30 14:00:24', '2017-08-30 14:00:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
