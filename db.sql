-- sdc.features definition

CREATE TABLE `features` (
  `id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `feature` varchar(50) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `features_product_id_IDX` (`product_id`) USING BTREE,
  CONSTRAINT `features_FK` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- sdc.photos definition

CREATE TABLE `photos` (
  `id` int DEFAULT NULL,
  `styleId` int DEFAULT NULL,
  `url` text,
  `thumbnail_url` text,
  KEY `photos_styleId_IDX` (`styleId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- sdc.products definition

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `slogan` varchar(128) DEFAULT NULL,
  `description` varchar(512) DEFAULT NULL,
  `category` varchar(50) DEFAULT NULL,
  `default_price` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `products_id_IDX` (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- sdc.related definition

CREATE TABLE `related` (
  `id` int DEFAULT NULL,
  `current_product_id` int DEFAULT NULL,
  `related_product_id` int DEFAULT NULL,
  KEY `related_current_product_id_IDX` (`current_product_id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- sdc.skus definition

CREATE TABLE `skus` (
  `id` int DEFAULT NULL,
  `styleId` int DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  KEY `skus_id_IDX` (`id`,`styleId`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- sdc.styles definition

CREATE TABLE `styles` (
  `id` int NOT NULL,
  `productId` int DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `sale_price` varchar(50) DEFAULT NULL,
  `original_price` int DEFAULT NULL,
  `default_style` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `styles_productId_IDX` (`productId`) USING BTREE,
  CONSTRAINT `styles_FK` FOREIGN KEY (`productId`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;