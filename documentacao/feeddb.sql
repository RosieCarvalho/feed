-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27-Dez-2019 às 03:26
-- Versão do servidor: 10.1.25-MariaDB
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feeddb`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `avisos`
--

CREATE TABLE `avisos` (
  `id` int(11) NOT NULL,
  `legenda` text,
  `url_imagem` varchar(45) DEFAULT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `avisos`
--

INSERT INTO `avisos` (`id`, `legenda`, `url_imagem`, `titulo`, `usuarios_id`) VALUES
(1, 'Black Friday Mateus terá lojas funcionando 24 horas em São Luís', '/../assets/imgs/bfm.jpeg', 'Black Friday', 1),
(2, 'Grupo Mateus inaugura nova loja no Anil e avança plano de expansão no Maranhão e no Pará', '/../assets/imgs/anil.jpeg', 'Inauguração', 2),
(3, 'Uma explosão de sabores: assim é o novo espumante Rose Brut Spazio', '/../assets/imgs/es.jpg', 'Espumante', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `categorias`
--

INSERT INTO `categorias` (`id`, `nome`) VALUES
(5, 'Educação'),
(6, 'Saúde'),
(7, 'Educação'),
(8, 'Saúde'),
(9, 'Mecânica'),
(10, 'Estética'),
(11, 'Locadora de veículos');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feeds`
--

CREATE TABLE `feeds` (
  `id` int(11) NOT NULL,
  `titulo` varchar(45) DEFAULT NULL,
  `url_imagem` varchar(45) DEFAULT NULL,
  `legenda` text,
  `usuarios_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `feeds`
--

INSERT INTO `feeds` (`id`, `titulo`, `url_imagem`, `legenda`, `usuarios_id`) VALUES
(2, 'Uma novidade a cada dia', '/../assets/imgs/teste.jpg', 'Usufrua do acesso a mais de 2,2 milhões de notícias por ano. Acesse vídeos sem edição. As notícias em imagens, à medida que acontecem. Acesso a mais de um milhão de clipes.', 2),
(3, 'BATALHAS DE ANIMAIS ', '/../assets/imgs/animais.jpg', '7 BATALHAS DE ANIMAIS GRAVADAS EM VÍDEO 4', 6),
(4, 'Sem contrato com o MEC', '/../assets/imgs/noticia1.jpg', 'Sem contrato com o MEC, TV Escola vai demitir funcionários', 1),
(5, 'Feliz Páscoa!', '/../assets/imgs/pascoa.png', 'Páscoa é tempo de se alegrar e agradecer pelo dom da vida, do amor e da alegria… Tenha um dia abençoado. \r\nFeliz Páscoa! ??', 3),
(6, 'Se você está na duvida !!', '/../assets/imgs/noticia2.jpg', 'Se você está na duvida sobre as dimensões corretas das imagens nas redes sociais leia esse post e saia na frente da concorrência!', 5);

-- --------------------------------------------------------

--
-- Estrutura da tabela `parceiros`
--

CREATE TABLE `parceiros` (
  `id` int(11) NOT NULL,
  `legenda` text,
  `url_imagem` varchar(45) DEFAULT NULL,
  `usuarios_id` int(11) NOT NULL,
  `categorias_id` int(11) NOT NULL,
  `telefone` int(11) DEFAULT NULL,
  `endereco` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `parceiros`
--

INSERT INTO `parceiros` (`id`, `legenda`, `url_imagem`, `usuarios_id`, `categorias_id`, `telefone`, `endereco`) VALUES
(3, 'Magic can save this world! My name is Y and truly believe that. I\'m a profesional magician for over a decade and I travel the world showing people my magi', '/../assets/imgs/logo-suzano_2.jpg', 5, 1, 330212234, ''),
(4, 'Magic can save this world! My name is Y and truly believe that. I\'m a profesional magician for over a decade and I travel the world showing people my magi', '/../assets/imgs/logo-coca-cola.png', 3, 5, 1231231, ''),
(5, 'Magic can save this world! My name is Y and truly believe that. I\'m a profesional magician for over a decade and I travel the world showing people my magi', '/../assets/imgs/logo-samsung.jpg', 1, 6, 123123, ''),
(6, 'Facebook is showing information to help you better understand the purpose of a Page. See actions taken by the people who manage and post content.', '/../assets/imgs/ESPUMANTE ROSE.jpg', 1, 3, NULL, ''),
(7, 'Facebook is showing information to help you better understand the purpose of a Page. See actions taken by the people who manage and post content.', '/../assets/imgs/ESPUMANTE ROSE.jpg', 1, 3, NULL, '');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `perfil` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `perfil`, `senha`) VALUES
(1, 'rosie', 'admin', '12345'),
(2, 'carol', 'func', '12345'),
(3, 'Raimundo Nonato', 'func', '12'),
(4, 'Raimundo Nonato', 'func', '12'),
(5, 'Eduarda Alencar', 'func', '12'),
(6, 'Rosi Carvalho', 'func', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `avisos`
--
ALTER TABLE `avisos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_avisos_usuarios_idx` (`usuarios_id`);

--
-- Indexes for table `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feeds`
--
ALTER TABLE `feeds`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_feeds_usuarios1_idx` (`usuarios_id`);

--
-- Indexes for table `parceiros`
--
ALTER TABLE `parceiros`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_beneficios_usuarios1_idx` (`usuarios_id`),
  ADD KEY `fk_beneficios_parceiros1_idx` (`categorias_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `avisos`
--
ALTER TABLE `avisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `feeds`
--
ALTER TABLE `feeds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `parceiros`
--
ALTER TABLE `parceiros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `avisos`
--
ALTER TABLE `avisos`
  ADD CONSTRAINT `fk_avisos_usuarios` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `feeds`
--
ALTER TABLE `feeds`
  ADD CONSTRAINT `fk_feeds_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `parceiros`
--
ALTER TABLE `parceiros`
  ADD CONSTRAINT `fk_beneficios_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
