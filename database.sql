-- create table
CREATE TABLE `node`.`products` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `price` DOUBLE NOT NULL,
    `description` TEXT(255) NOT NULL,
    `imageUrl` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
);

-- select all
SELECT
    *
FROM
    node.products;

--  Insert data
INSERT INTO
    `node`.`products` (`title`, `price`, `description`, `imageUrl`)
VALUES
    ('book1', '23.32', 'test', 'pic.png');