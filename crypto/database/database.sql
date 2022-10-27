-- DROP DATABASE IF EXISTS `crypto`;
-- CREATE DATABASE `crypto` CHARACTER SET utf8 COLLATE utf8_general_ci;

-- USE `crypto`;

-- DROP USER IF EXISTS `crypto`;
-- CREATE USER `crypto`;

-- GRANT ALL PRIVILEGES ON crypto.* To 'crypto'@'localhost' IDENTIFIED BY 'Unq3u9DdYg2P7efG';
-- GRANT ALL PRIVILEGES ON crypto.* To 'crypto'@'%' IDENTIFIED BY 'Unq3u9DdYg2P7efG';

DROP DATABASE IF EXISTS `crypto`;
CREATE DATABASE `crypto` CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `crypto`;
DROP USER IF EXISTS 'crypto'@'%';
CREATE USER 'crypto'@'%' IDENTIFIED BY 'Unq3u9DdYg2P7efG';
GRANT ALL PRIVILEGES ON crypto.* TO 'crypto'@'%';

-- GRANT SELECT ON transfers.* To 'transfersread'@'localhost' IDENTIFIED BY 'T6qpBCLVkhbJKfey';
-- GRANT SELECT ON transfers.* To 'transfersread'@'%' IDENTIFIED BY 'T6qpBCLVkhbJKfey';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON transfers.* To 'transferswrite'@'localhost' IDENTIFIED BY 'QCARJ2RfBQF2HBMT';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON transfers.* To 'transferswrite'@'%' IDENTIFIED BY 'QCARJ2RfBQF2HBMT';
