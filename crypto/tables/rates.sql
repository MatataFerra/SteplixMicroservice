use `crypto`;
# ================================================================================================

DROP TABLE IF EXISTS `rates`;

CREATE TABLE `rates` (
 `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `value` int(10) NOT NULL,
 `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
 `id_currency` int(10) unsigned NOT NULL,

 PRIMARY KEY (`id`),

 KEY `id_currency` (`id_currency`)
 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;