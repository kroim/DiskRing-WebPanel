/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : disk

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-06-08 15:49:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `permission` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `disk` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `screensaver` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `image1` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `image2` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  `json_data` varchar(255) COLLATE utf8_unicode_ci DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', 'admin', 'admin', null, null, null, null, null);
INSERT INTO `users` VALUES ('2', 'manager', '1', 'manager', 'uploads/2/disk.zip', '', null, null, null);
INSERT INTO `users` VALUES ('5', 'Yang', '1', 'manager', '', 'uploads/5/4.png', 'uploads/5/4_(1).png', 'uploads/5/Ali_baba_details_required.jpg', 'uploads/5/Ali_baba_details_required1.jpg');
