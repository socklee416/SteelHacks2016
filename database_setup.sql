-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 20, 2016 at 11:00 PM
-- Server version: 10.1.10-MariaDB
-- PHP Version: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `food events`
--
CREATE DATABASE IF NOT EXISTS `Food Events` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `Food Events`;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `Events` (
  `Organization` varchar(50) NOT NULL,
  `Event` varchar(50) NOT NULL,
  `Location` varchar(50) NOT NULL,
  `Latitude` int(11) NOT NULL,
  `Longitude` int(11) NOT NULL,
  `Date` date NOT NULL,
  `Start Time` time NOT NULL,
  `End Time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Event information';

--
-- Dumping data for table `events`
--

INSERT INTO `Events` (`Organization`, `Event`, `Location`, `Latitude`, `Longitude`, `Date`, `Start Time`, `End Time`) VALUES
('University of Pittsburgh', 'SteelHacks', 'William Pitt Union', 41, -79, '2016-02-20', '09:00:00', '11:59:59');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `Organizations` (
  `Organization` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL,
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Event information';

--
-- Dumping data for table `events`
--

INSERT INTO `Organizations` (`Organization`, `Email`, `Password`) VALUES
('University of Pittsburgh', 'saj72@pitt.edu', 'St33lH@cks02');


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
