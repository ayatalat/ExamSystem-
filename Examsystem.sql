-- phpMyAdmin SQL Dump
-- version 4.6.6deb1+deb.cihar.com~xenial.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 26, 2017 at 12:53 AM
-- Server version: 5.7.19-0ubuntu0.16.04.1
-- PHP Version: 7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Examsystem`
--

-- --------------------------------------------------------

--
-- Table structure for table `chapters`
--

CREATE TABLE `chapters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `c_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `chapters`
--

INSERT INTO `chapters` (`id`, `name`, `c_id`) VALUES
(4, 'chapter2', 13),
(5, 'chapter4', 13),
(6, 'chapter1', 12),
(7, 'chapters', 12),
(20, 'ch1', 14),
(21, 'ch2', 14),
(25, 'chapternew1', 24),
(26, 'chapternew2', 24),
(27, 'chapternew1', 24),
(28, 'chapternew2', 24),
(29, 'chapter1', 25),
(30, 'chapters', 25);

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `name` varchar(100) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`name`, `id`) VALUES
('Nodejs', 12),
('JavaScript', 13),
('php', 14),
('css', 15),
('bashscript', 17),
('newCourse', 24),
('newCoursee', 25);

-- --------------------------------------------------------

--
-- Table structure for table `Questions`
--

CREATE TABLE `Questions` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `type` tinyint(4) NOT NULL DEFAULT '0',
  `objective` tinyint(4) NOT NULL DEFAULT '0',
  `degrees` tinyint(4) NOT NULL DEFAULT '10',
  `chapter_id` int(11) NOT NULL,
  `answers` json NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Questions`
--

INSERT INTO `Questions` (`id`, `title`, `type`, `objective`, `degrees`, `chapter_id`, `answers`) VALUES
(16, 'questiondads adgkdfjgdf dgasdjg dkgakdjgda dakgjdkfg', 0, 1, 10, 5, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(17, 'questions', 1, 2, 10, 5, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(18, 'question', 1, 1, 10, 4, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(19, 'question', 0, 0, 10, 4, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(20, 'Questions', 1, 2, 10, 4, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(21, 'question2', 0, 1, 10, 5, '{\"answer1\": \"ans\", \"answer2\": \"ans\", \"answer3\": \"ans\", \"correctanswer\": \"ans\"}'),
(22, 'QUE', 1, 0, 10, 21, '{\"answer1\": \"SDJSJ\", \"answer2\": \"DJSDJ\", \"answer3\": \"JSJD\", \"correctanswer\": \"JDSDJ\"}'),
(23, 'DDSDSD', 0, 2, 10, 21, '{\"answer1\": \"DS\", \"answer2\": \"KDK\", \"answer3\": \"KDK\", \"correctanswer\": \"SK\"}');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `c_id` (`c_id`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Questions`
--
ALTER TABLE `Questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chapter_id` (`chapter_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chapters`
--
ALTER TABLE `chapters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `Questions`
--
ALTER TABLE `Questions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
