USE `crypto`;

# ================================================================================================

ALTER TABLE `rates` ADD FOREIGN KEY (`id_currency`) REFERENCES `currencies`(`id`);
