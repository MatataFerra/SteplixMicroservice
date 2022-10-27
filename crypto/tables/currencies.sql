use `crypto`;
# ================================================================================================

DROP TABLE IF EXISTS `currencies`;

CREATE TABLE `currencies` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `description` varchar(128) NOT NULL,
 `symbol` varchar(10) NOT NULL,

 PRIMARY KEY (`id`)
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
