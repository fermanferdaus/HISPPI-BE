-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 05, 2025 at 12:02 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_hisppi`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`) VALUES
(1, 'Pengumuman', '2025-10-03 15:32:38'),
(2, 'Berita', '2025-10-03 15:32:38'),
(8, 'Informasi', '2025-10-04 17:57:53');

-- --------------------------------------------------------

--
-- Table structure for table `institution_info`
--

CREATE TABLE `institution_info` (
  `id` int(11) NOT NULL,
  `section` enum('sejarah','visi','misi','tujuan','fungsi','proker_pendek','proker_panjang','sekretariat') NOT NULL,
  `content` text NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `institution_info`
--

INSERT INTO `institution_info` (`id`, `section`, `content`, `updated_at`) VALUES
(1, 'sejarah', 'Himpunan Seluruh Pendidik dan Penguji Indonesia Diklusemas (HISPI DIKLUSEMAS) adalah organisasi kemasyarakatan non politis yang diselenggarakan oleh masyarakat praktisi dan pencinta pendidikan non formal didirikan di Jakarta pada tanggal 7 Pebruari 1986. Pada awal berdirinya sampai dengan tahun 1997 di pimpin oleh Ibu Kusumadewi selaku Ketua Umum dan beberapa Sekretaris Jenderal yaitu Bapak Dicky J. Umpal (periode 1986-1989), Ibu Juliana Tjandra selama 2 periode (1989-1993 dan 1993-1997). Pada periode 1997-2003 HISPI Diklusemas dipimpin oleh Ibu C.A. Ariyanti P.S., dan Bapak Ir. Janis Hendratet selaku Sekretaris Jenderal. Ketika kepengurusan baru berjalan 3 bulan Bapak Ir. Janis Hendratet mengundurkan diri dari jabatannya selaku Sekretaris Jenderal, maka digantikan oleh Ibu Juliana Tjandra. \nTahun 2003 berdasarkan hasil Musyawarah Nasional V HISPI Diklusemas yang diadakan pada tanggal 25-25 Juli 2003 bertempat di Gedung Krida Bhakti, Sekretariatan Negara Republik Indonesia, Jalan Veteran No. 21 Jakarta, telah terpilih Bapak HM. Nasrullah Yusuf, SE., MBA., selaku Ketua Umum dan Ibu Juliana Tjandra selaku SEkretaris Jenderal untuk periode 2003-2010. Berdasarkan hasil Musyawarah Nasional V HISPI Diklusemas tersebut telah telah disetujui antara lain Susunan Dewan Pengurus Pusat dan Anggaran Dasar dan Anggaran Rumah Tangga yang juga telah merubah namanya menjadi berganti nama menjadi Himpunan Seluruh Pendidik dan Penguji Indonesia Pendidikan Non Formal (HISPPI PNF).\nPendidikan Non Formal adalah usaha dan kegiatan yang dijalankan dengan sengaja, teratur, dan terencana dalam membina kepribadian untuk mengembangkan kemampuan manusia Indonesia seutuhnya yang berlangsung seumur hidup, sebagai bagian dari pembangunan nasional guna mewujudkan cita-cita masyarakat adil dan makmur material dan spiritual berdasarkan Pancasila dan Undang-Undang Dasar 1945. Bahwa bidang pendidikan, khususnya bidang Pendidikan Non Formal diharapkan dapat menghasilkan tenaga-tenaga yang kompeten dan profesional yang pada gilirannya akan dapat memperluas kesempatan kerja, meningkatkan kesejahteraan dan meningkatkan daya saing dalam menghadapi pasar bebas.\nDewasa ini Pendidikan Non Formal memiliki potensi yang cukup besar  setelah dapat membuktikan peranan dan kemampuannya dalam menghasilkan sumber daya manusia yang kompeten, profesional, dan siap kerja dengan dilandasi semangat kebersamaan untuk mencerdaskan dan menerampilkan bangsa dalam menghadapi berbagai tantangan pembangunan dimasa mendatang.', '2025-10-03 21:27:52'),
(2, 'visi', 'Meningkatkan mutu pendidik PNF agar dapat mencetak lulusan yang memiliki keunggulan bersaing di era global, siap kerja, profesional, mandiri dan berkarya.', '2025-10-03 21:28:04'),
(3, 'misi', 'Meningkatkan mutu pendidik Pendidikan Non Formal. \nMeningkatkan kesejahteraan pendidik Pendidikan Non Formal. \nMeningkatkan perlindungan pendidik Pendidikan Non Formal. \nMeningkatkan standar kualifikasi dan sertifikasi pendidik Pendidikan Non Formal.', '2025-10-03 21:28:26'),
(4, 'tujuan', 'Menghimpun para Pendidik dan atau Penguji Indonesia pendidikan nonformal dari berbagai jenis kompetensi yang berbasis kursus dan pelatihan.\nMengembangkan kemampuan profesionalisme dalam proses belajar mengajar pendidik pendidikan nonformal sesuai dengan jenis kompetensinya.\nMengembangkan ilmu dan teknologi di bidang pendidikan nonformal dalam rangka membantu pemerintah menyukseskan pembangunan Nasional.\nMenyebarluaskan gagasan-gagasan baru dalam bidang ilmu, teknologi dan metodologi pendidikan nonformal untuk menghadapi tantangan dunia pendidikan pada era global.\nMelindungi dan memperjuangkan kepentingan anggota khususnya dan masyarakat pada umumnya dalam pendidikan nonformal.', '2025-10-03 21:28:39'),
(5, 'fungsi', 'Meningkatkan mutu dan profesionalisme Pendidik Pendidikan Nonformal\nMenigkatkan Mutu dan profesionalisme Penguji Pendidikan Nonformal\nMengembangkan Kurikulum dan Metode Pendidikan Non Formal \nMendata, menghimpun dan membina Pendidik dan Penguji Indonesia Pendidikan Non Formal sesuai jenis kompetensinya\nMencetak Penguji dan Master Penguji Pendidikan Non Formal \nMemberikan rekomendasi kepada pendidik Pendidikan Non Formal untuk mendapatkan sertifikat pendidik.\nMemberikan rekomendasi  kepada Penguji Pendidikan Non Formal untuk mendapatkan sertifikat Penguji.', '2025-10-03 21:29:08'),
(6, 'proker_pendek', 'Pelatihan (TOT Pelatihan (TOT) Metodologi Pembelajaran (Pedagogi/Andragogi) tingkat pusat dan propinsi \nPelatihan (TOT) Kewirausahaan tingkat pusat dan propinsi \nPelatihan Total Quality Management  tingkat daerah \nPelatihan Strategi Bisnis Pendidikan\nLokakarya Sertifikasi Pendidik \nLokakarya Kewirausahaan \nMagang ke Luar Negeri (Singapura dan Malaysia)\nPelatihan Penguji/Asessor ', '2025-10-03 21:29:30'),
(7, 'proker_panjang', 'Tetap memantapkan program prioritas yang telah dilakukan sebelumnya \nMelakukan pelatihan-pelatihan teknik mengajar \nMengajukan Rencana/Realisasi Sertifikasi Kompetensi bagi Pendidik PNF\nLokakarya Kurikulum (bidang Kursus dan Pelatihan secara prioritas)\nMemberikan pelatihan Uji Kompetensi bagi para Pendidik \nMagang ke RRC dan Australia', '2025-10-03 21:29:40'),
(8, 'sekretariat', 'Jl. Kartini VIII No. 54/O Jakarta', '2025-10-04 00:01:45');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author_id` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `category_id` int(11) DEFAULT NULL,
  `author_name` varchar(100) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `content`, `author_id`, `created_at`, `updated_at`, `category_id`, `author_name`, `image`) VALUES
(7, 'RAPAT KERJA NASIONAL', 'Tahun 2007 HISPPI PNF melakukan kegiatan pendataan pendidik kursus, penyusunan standar kompetensi pedagogi/andragogi, dan standar microteaching. Untuk memperoleh masukan dan sosialisasi terhadap kegiatan tersebut maka pada puncaknya dilakukan temu kordinasi antara kegiatan pendataan pendidik kursus, penyusunan standar kompetensi pedagogi/andragogi, dan standar microteaching dalam bentuk Rapat Kerja Nasional (Rakernas) HISPPI PNF yang diselenggarakan pada tanggal 28 Pebruari sampai dengan 1 Maret 2008 di Hotel Grand Cempaka Jakarta. \r\nRakernas dibuka di istana negara oleh Ibu Negara Hj. Ani Bambang Yudhyono, Menteri Pendidikan Nasional Bapak Prof. Dr. Bambang Sudibyo, M.B.A., dan Ketua Umum HISPPI PNF Bapak H.M. Nasrullah Yusuf, S.E., M.B.A.. Pembukaan tersebut dilanjutkan dengan dialog interaktif antara peserta Rakernas dengan Ibu Negara yang dipandu oleh Menteri Pendidikan Nasional Bapak Bambang Sudibyo. Hal yang paling penting dari kegiatan tersebut bahwa telah terjadinya kesepakatan adanya sinergi dari program Ibu Negara Hj. Ani Bambang Yudhoyono bersama para istri Menteri Kabinet Indonesia Bersatu tentang Rumah Pintar dengan HISPPI PNF. ', 1, '2025-10-04 16:06:55', '2025-10-04 16:33:36', 2, 'Bayu', '1759595616659-927484056.jpeg'),
(8, 'LOKAKARYA PEDAGOGI/ANDRAGOGI DAN PEMAGANGAN KE SINGAPURA DAN MALAYSIA', 'Setelah sukses melaksanakan rapat kerja nasional yang dibuka oleh Ibu Ani Bambang Yudhoyono di Istana Negara, kali ini Dewan Pengurus Pusat Himpunan Seluruh Pendidik dan Penguji Indonesia Pendidikan Non Formal (HISPPI PNF) yang diketuai H.M. Nasrullah Yusuf, S.E., M.B.A. menyelenggarakan kegiatan peningkatan mutu bagi para Pendidik Non Formal, Senin-Sabtu (17-22 Nopember 2008). Kegiatan yang dilaksanakan ini adalah pemagangan ke Singapura dan Malaysia. Sebelum pemagangan, kegiatan diawali dengan lokakarya Pedagogi/Andragogi dan perlombaan Tata Busana, Tata Boga, dan Teknologi Informasi yang dilaksanakan di Batam. Kegiatan ini diikuti oleh 80 peserta perwakilan anggota dan pengurus DPD HISPPI PNF dari seluruh Indonesia. \r\nDelegasi PNF ke Singapura dan Malaysia yang dipimpin oleh Nasrullah Yusuf ini dilepas oleh Direktur Pendidik Tenaga Kependidikan Pendidikan Non Formal (PTK PNF) Dr. Erman Syamsuddin, S.H., M.Pd. Selain itu, dalam kesempatan ini Beliau juga menutup kegiatan lokakarya Pedagogi/Andragogi yang bertajuk “Meningkatkan Mutu Profesionalisme Pendidik Non Formal”.  Tidak hanya Direktur PTK PNF yang berkesempatan hadir dalam kegiatan tersebut. Direktur Pembinaan Kursus dan Kelembagaan Dr. Wartanto, M.Pd. juga berkenan  menutup kegiatan perlombaan Tata Busana, Tata Boga, dan Teknologi Informasi. \r\nLokakarya dan pemagangan ini bertujuan untuk saling bertukar pikiran, ilmu dan pengetahuan, serta informasi mengenai pengembangan dan peningkatan mutu Pendidikan Non Formal yang ada di Malaysia dan Singapura khususnya bidang kursus dan pelatihan. “Dengan mengetahui apa yang sesungguhnya diperlukan oleh pasar tenaga kerja di Malaysia dan Singapura atau negara lain, para Pendidik Non Formal ini dapat menyelenggarakan pendidikan sesuai dengan kebutuhan dunia kerja dalam rangka mempersiapkan tenaga kerja handal dan berkualitas yang nantinya akan mendapatkan pekerjaan yang bermartabat”. \r\nKegiatan magang ini diisi dengan studi banding dan city tour. Di Singapura studi banding dilaksananakan ke NIE Nanyang dan city tour ke Merlion Park. Sedangkan di Malaysia, studi banding dilaksanakan ke Universiti Kebangsaan Malaysia (UKM), dan City & Guilds (lembaga seritifikasi Pendidikan Non Formal), serta city tour ke Menara Kembar Petronas, dan Pusat Kerajaan Malaysia Putra Jaya.\r\nDi NIE Nanyang Singapura kunjungan di sambut oleh Assistant Head, Admissions & Records, Foundation Programmes Office, Mrs. Tok Tan Kok Mui; Associate Dean, Teacher Professional Development, Graduate Programmes & Research Office, Prof. Steven Tan; dan Manger Circulation, Services, LIBRIS, Mr. Douglas Lau. Steven Tan menjelaskan bahwa untuk menjadi guru di Singapura harus menguasai tiga hal, yaitu skill, knowledge, dan values. “Selain itu seorang guru juga harus berjenjang minimal Strata Satu dan lulus pelatihan/training menjadi guru”, ungkap Beliau. \r\nDi Universiti Kebangsaan Malaysia, peserta program magang ini disambut oleh Timbalan Dekan/Deputy Dean Penyelidikan dan Industri Fakulti Pendidikan, Prof. Dr. Ruhizan Mohammad Yasin; dan Timbalan Dekan Pengajar Siswajah & Antar Bangsa, Prof. Nadya. Saat memberikan sambutan, Prof. Dr. Ruhizan Mohammad Yasin menyatakan sangat bangga dan gembira atas kunjungan HISPPI PNF. Beliau juga mengungkapkan kekagumannya kepada HISPPI PNF yang telah aktif melakukan peningkatan mutu kepada para pendidik non formal. Selain itu, Beliau juga berharap adanya kerjasama yang dapat terjalin antara Universiti Kebangsaan Malaysia dengan HISPPI PNF.', 1, '2025-10-04 16:20:41', '2025-10-04 16:20:41', 2, 'Bayu', '1759594841706-995924077.jpeg'),
(9, 'HISPPI PNF PEDULI MERAPI', 'Meletusnya gunung merapi, tepatnya pada 26 Oktober 2010 yang lalu menimbulkan dampak yang begitu dahsyat. Keganasan gunung merapi ini membawa ancaman bahaya yang dapat datang kapan saja. Suara gemuruh dari gunung merapi, wedus gembel dan banjir ladhu (lahar dingin) seakan menjadi mimpi buruk bagi masyarakat yang tinggal di beberapa daerah di Jawa Tengah dan Daerah Istimewa Yogyakarta. Bukan hanya sekedar “rasa kasihan”, melainkan “uluran tangan” dari semua elemen sangat dibutuhkan agar dapat membangun kembali sumber daya alam dan manusia yang berada didaerah sekitar lereng gunung merapi.\r\nTerdorong oleh rasa kemanusiaan yang tinggi, DPP Himpunan Seluruh Pendidik dan Penguji Indonesia Pendidikan Non Formal (HISPPI PNF) bekerjasama dengan DPD HISPPI PNF Jateng dan DIY melakukan gerak aktif untuk terjun langsung membantu para korban merapi. Dengan didasari niat yang mulia, mereka sangat  antusias memberikan bantuan baik b  erupa moril, materil, maupun spiritual.  Sejak Selasa hingga Minggu, 9-14 November 2010, tim melakukan kontak langsung dengan para pengungsi dibeberapa titik rawan (Boyolali, Klaten, Sleman, Muntilan dan Magelang). Di tempat tersebut, tim ini melakukan berbagai kegiatan seperti pelatihan memotong rambut, menyulam pita, membuat shampo mobil, dan lainnya sebagai bekal untuk berwirausaha nantinya. Selain itu, aksi sosial juga digelar, seperti lomba balita, puisi remaja, fashion show pasangan suami istri, juga  tak ketinggalan potong rambut gratis. Kemudian dimalam harinya, para pengungsi juga disuguhi hiburan nonton bareng “Wayang Kulit”. Hal ini dimaksudkan untuk menghilangkan rasa kejenuhan dan pelipurlara yang dirasakan oleh para pengungsi. Selain itu, bantuan peralatan kerja, pakaian layak pakai, sembako, makanan ringan, dan mainan anak-anak juga diberikan kep ada para pengungsi. Bantuan ini dibe  rikan dibeberapa titik pengungsian, seperti SMKN 1 Boyolali, SMKN 1 Mojosongo, SMK Muhammadiyah Borobudur Magelang, Balai Desa Banyurojo Magelang, dan SMKN 1 Depok Sleman DIY. \r\nKegiatan ini dilakukan dibawah koordinasi Dirjen PNFI, Hamid Muhammad, Ph.D., Dirbinsuskel, Dr. Wartanto, dan Kepala P2PNFI Ungaran, Dr. Ade Kusmiade, dengan tujuan untuk memberikan motivasi dan inspirasi bagi para korban bencana merapi, sehingga setelah bencana ini berakhir, para pengungsi dapat lebih semangat lagi dalam membangun dan melanjutkan hidup mereka menjadi lebih baik.\r\nSelain pengungsi, sejumlah relawan HISPPI-PNF Jateng dan DIY yang telah bekerja keras membantu dengan penuh kerelaan dan keikhlasannya, juga mendapatkan perhatian khusus berupa bantuan dan suntikan spirit. Ketua Perguruan Tiggi Teknokrat/Ketua Umum DPP HISPPI-PNF yang didampingi Ketua DPD HISPPI-PNF Jateng, Drs. Tri Wuryanto, MSi. menyatakan bangga atas perjuangan para relawan ini. Kegiatan Baksos ini akan dilaanjutkan oleh Pengurus DPD HISPPI PNF Jateng dan DIY sesuai dengan situasi dan kondisi yang diperlukan.', 1, '2025-10-04 16:24:41', '2025-10-04 16:24:41', 2, 'Bayu', '1759595081923-249844805.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `logo` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `logo`, `url`, `created_at`) VALUES
(1, 'Universitas Teknokrat Indonesia', 'teknokrat.png', 'https://teknokrat.ac.id', '2025-10-03 19:05:30');

-- --------------------------------------------------------

--
-- Table structure for table `sejarah_kepengurusan`
--

CREATE TABLE `sejarah_kepengurusan` (
  `id` int(11) NOT NULL,
  `periode` varchar(50) NOT NULL,
  `ketua_umum` varchar(255) NOT NULL,
  `sekjen` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sejarah_kepengurusan`
--

INSERT INTO `sejarah_kepengurusan` (`id`, `periode`, `ketua_umum`, `sekjen`) VALUES
(1, '1986-1989', 'Kusumadewi', 'Dicky J. Umpal'),
(2, '1989-1993', 'Kusumadewi', 'Juliana Tjandra'),
(3, '1993-1997', 'Kusumadewi', 'Juliana Tjandra'),
(4, '1997-2003', 'C.A. Ariyanti P.S.', '1. Ir. Janis Hendrat (mengundurkan diri, digantikan oleh Juliana Tjandra)\n2. Juliana Tjandra'),
(5, '2003-2010', 'Dr. HM. Nasrullah Yusuf, S.E., M.B.A.', 'Juliana Tjandra'),
(6, '2010-2025', 'Dr. HM. Nasrullah Yusuf, S.E., M.B.A.', 'Juliana Tjandra, S.Kom.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('superadmin','admin') DEFAULT 'admin',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `created_at`) VALUES
(1, 'Super Admin', 'superadmin@hisppi.com', '$2b$10$kb5OTrRCnuDmcwr5pU8/ueujw/Blh/fz/K1vTrRkgN5Pg0lgq6p1C', 'superadmin', '2025-10-03 15:33:21'),
(2, 'admin', 'admin@hsppi.com', '$2b$10$8O/gQaaosKpEBHRAnfaW9.A7wY9/kM6x8JfXX5FLAEcnBwZenV8Si', 'admin', '2025-10-04 13:43:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `institution_info`
--
ALTER TABLE `institution_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `fk_category` (`category_id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sejarah_kepengurusan`
--
ALTER TABLE `sejarah_kepengurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `institution_info`
--
ALTER TABLE `institution_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sejarah_kepengurusan`
--
ALTER TABLE `sejarah_kepengurusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `news`
--
ALTER TABLE `news`
  ADD CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `news_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
