-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2025 at 09:55 AM
-- Server version: 10.6.21-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_website`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add blogs', 7, 'add_blogs'),
(26, 'Can change blogs', 7, 'change_blogs'),
(27, 'Can delete blogs', 7, 'delete_blogs'),
(28, 'Can view blogs', 7, 'view_blogs');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$870000$b1j3zAuOtdhYf8MJG9CYsm$vClaXyRj5EWkW2F1zb1p9qxfhQCEHtpfALPBwKo/FCI=', '2025-04-04 17:53:07.460421', 1, 'admin_ritik', '', '', 'itsritik2004@gmail.com', 1, 1, '2025-04-04 17:52:13.348749');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `blogs_blogs`
--

CREATE TABLE `blogs_blogs` (
  `id` int(11) NOT NULL COMMENT 'Temporary Id',
  `bid` char(10) NOT NULL COMMENT 'Blog Id',
  `fullName` varchar(20) NOT NULL COMMENT 'Full Name',
  `email` varchar(50) NOT NULL COMMENT 'Email id',
  `blogTitle` varchar(300) NOT NULL COMMENT 'Blog Title',
  `blogDescription` varchar(1000) NOT NULL COMMENT 'Blog Description',
  `photo` varchar(100) NOT NULL COMMENT 'Picture',
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() COMMENT 'Created at'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `blogs_blogs`
--

INSERT INTO `blogs_blogs` (`id`, `bid`, `fullName`, `email`, `blogTitle`, `blogDescription`, `photo`, `createdAt`) VALUES
(32, 'IBFTDcn8Iv', 'Ritik kumar', 'rk1234@gmail.com', 'My first blog for check website', 'Sure! Here\'s a nicely styled Tailwind CSS block for the “No blogs available” message. It centers the content, adds spacing, and gives a modern, clean feel with contrast', 'uploads/blog_photos/1_wbDheJeATl_PQhPvD_ACmQ.png', '2025-04-10 13:18:11'),
(33, 'xjSKrmld6Q', 'Sumit Arora', 'sr123@gmail.com', 'My company coffee', 'It is a daily ritual, a moment of connection, and a spark of inspiration. Our beans are carefully selected from sustainable farms around the world, roasted to perfection, and crafted with passion. Whether you’re starting your morning or fueling your late-night hustle, we’re here to deliver bold flavor, rich aroma, and uncompromising quality in every sip.', 'uploads/blog_photos/17a-transform-rawpixel-com.jpg', '2025-04-12 01:24:22'),
(34, '1HKSIMg1gs', 'Rajkumar Rao', 'rr123@gmail.com', 'Nature is very beautifull', 'In the rustle of leaves, the whisper of the wind, and the stillness of a sunrise, nature reminds us to slow down, breathe deeply, and simply be. It’s in these moments that we reconnect — not just with the earth, but with ourselves.', 'uploads/blog_photos/953d85365eeca3a9fe9c6382b6d8abac.jpg', '2025-04-12 01:32:07'),
(35, '9CmS90YtZr', 'deeksha kumari', 'dk123@gmail.com', 'Good Health with apple', 'Crisp, sweet, and full of life, the apple has long symbolized health, vitality, and simplicity. With every bite, it offers a burst of flavor and a reminder that the best things are often the most natural. From orchard to hand, the apple is a timeless fruit — refreshing, nourishing, and endlessly loved.', 'uploads/blog_photos/jk-sloan-co1wmDhPjKg-unsplash.jpg', '2025-04-12 01:34:34'),
(36, '3aYJddbOjM', 'kartik aryan', 'kr123@gmail.com', 'fire is danger or good for humans and animals', 'Fire is one of nature’s most powerful forces. It gives us warmth on cold nights, cooks our food, and lights up the dark. When used with care, fire is a helpful friend in our daily lives. But fire can also be dangerous. If left unattended or misused, it can spread quickly.', 'uploads/blog_photos/4.jpg', '2025-04-12 01:40:54'),
(37, 'i6K9xbKMWG', 'jasmine james', 'jj123@gmail.com', 'fear from dark rooms are disease or not', 'A dark room can feel like a mystery — quiet, still, and full of shadows. Without light, our eyes search for shapes, and our minds begin to imagine things that aren’t really there. It’s not the darkness itself that scares us, but the unknown that hides within it.', 'uploads/blog_photos/2488464.png', '2025-04-12 01:42:48');

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'blogs', 'blogs'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2025-03-31 11:15:44.663338'),
(2, 'auth', '0001_initial', '2025-03-31 11:15:45.194807'),
(3, 'admin', '0001_initial', '2025-03-31 11:15:45.283652'),
(4, 'admin', '0002_logentry_remove_auto_add', '2025-03-31 11:15:45.291971'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2025-03-31 11:15:45.303462'),
(6, 'contenttypes', '0002_remove_content_type_name', '2025-03-31 11:15:45.393683'),
(7, 'auth', '0002_alter_permission_name_max_length', '2025-03-31 11:15:45.445757'),
(8, 'auth', '0003_alter_user_email_max_length', '2025-03-31 11:15:45.473082'),
(9, 'auth', '0004_alter_user_username_opts', '2025-03-31 11:15:45.480953'),
(10, 'auth', '0005_alter_user_last_login_null', '2025-03-31 11:15:45.531704'),
(11, 'auth', '0006_require_contenttypes_0002', '2025-03-31 11:15:45.534278'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2025-03-31 11:15:45.546730'),
(13, 'auth', '0008_alter_user_username_max_length', '2025-03-31 11:15:45.579800'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2025-03-31 11:15:45.613534'),
(15, 'auth', '0010_alter_group_name_max_length', '2025-03-31 11:15:45.643860'),
(16, 'auth', '0011_update_proxy_permissions', '2025-03-31 11:15:45.651301'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2025-03-31 11:15:45.674993'),
(18, 'blogs', '0001_initial', '2025-03-31 11:15:45.697482'),
(19, 'sessions', '0001_initial', '2025-03-31 11:15:45.744920'),
(20, 'blogs', '0002_blogs_bid_blogs_createdat', '2025-03-31 18:44:07.076997'),
(21, 'blogs', '0003_blogs_photo', '2025-04-10 17:17:15.946847');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('sukbywbcn28jwnvahiuowpeyb0rtv97m', '.eJxVjMEOwiAQRP-FsyEsFhY8evcbCMtSqRqalPZk_HdL0oPeJvPezFuEuK0lbC0vYWJxESBOvx3F9My1A37Eep9lmuu6TCS7Ig_a5G3m_Loe7t9Bia3sa0SyenDWZAai0bkU2WY0bCxoBUiERnk_gNqV6GFEcyaLWquelBKfL89ONrg:1u0lE3:y5tXm7KkB1w4CVi6_zsrWhJ7Dm6XEzPTW5nzojub-dI', '2025-04-18 17:53:07.463169');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `blogs_blogs`
--
ALTER TABLE `blogs_blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `blogs_blogs`
--
ALTER TABLE `blogs_blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Temporary Id', AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
