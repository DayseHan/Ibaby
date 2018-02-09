/*
Navicat MySQL Data Transfer

Source Server         : fs
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : fs

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-11-18 17:54:37
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for fruit
-- ----------------------------
DROP TABLE IF EXISTS `fruit`;
CREATE TABLE `fruit` (
  `key` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL COMMENT '水果名称',
  `type` varchar(255) NOT NULL COMMENT '水果类型',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `discount` decimal(10,2) NOT NULL COMMENT '折扣',
  `from` varchar(255) NOT NULL COMMENT '产地',
  `standard` varchar(255) NOT NULL COMMENT '规格',
  `saving_mode` varchar(255) NOT NULL COMMENT '存储方式',
  `class` varchar(255) NOT NULL COMMENT '等级',
  `description` text NOT NULL COMMENT '描述',
  `imgurl` varchar(255) NOT NULL COMMENT '分类页显示的一张主图',
  PRIMARY KEY (`key`)
) ENGINE=MyISAM AUTO_INCREMENT=37 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of fruit
-- ----------------------------
INSERT INTO `fruit` VALUES ('11', '12', '当季时令', '12.00', '12.00', '12', '12', '常温', 'B级', '奥术大师', '  范德萨发');
INSERT INTO `fruit` VALUES ('21', 'test3test', '当季时令', '12.00', '12.00', 'test', 'test', '常温', 'B级', 'test', 'http://localhost/fs/imgs/004.jpg');
INSERT INTO `fruit` VALUES ('26', '凤梨', '当季时令', '50.00', '60.00', '海南范德萨', 'kg', '常温', 'A级', '打发士大夫', 'http://localhost/fs/imgs/003.jpg');
INSERT INTO `fruit` VALUES ('30', '车厘子', '当季时令', '60.00', '80.00', '广州', 'g', '常温', 'B级', '发似懂非懂', 'http://localhost/fs/imgs/003.jpg');
INSERT INTO `fruit` VALUES ('31', '车厘子', '当季时令', '60.00', '80.00', '广州', 'g', '常温', 'B级', '发似懂非懂', 'http://localhost/fs/imgs/003.jpg');
INSERT INTO `fruit` VALUES ('32', 'test', '热带水果', '13.00', '49.00', 'test', 'test', '常温', 'A级', 'test', 'http://localhost/fs/imgs/basketball.jpg');
INSERT INTO `fruit` VALUES ('33', 'testtest', '当季时令', '12.00', '15.00', 'test', 'test', '常温', 'A级', 'test', 'http://localhost/fs/imgs/mini_jpgs.jpg');
INSERT INTO `fruit` VALUES ('34', 'testtesttest', '热带水果', '11.00', '11.00', 'test', 'test', '常温', 'A级', 'test', 'http://localhost/fs/imgs/car.jpg');
INSERT INTO `fruit` VALUES ('20', '苹果', '当季时令', '26.00', '30.00', '杭州', '250', '常温', 'A级', '青苹果', 'http://localhost/fs/imgs/8.jpg');
INSERT INTO `fruit` VALUES ('27', '凤梨', '当季时令', '50.00', '60.00', '海南范德萨', 'kg', '常温', 'A级', '打发士大夫', 'http://localhost/fs/imgs/003.jpg');
INSERT INTO `fruit` VALUES ('35', 'test', '当季时令', '34.00', '45.00', 'test', 'test', '常温', 'A级', 'test', 'http://localhost/fs/imgs/7.jpg');
INSERT INTO `fruit` VALUES ('36', 'test', '当季时令', '12.00', '12.00', 'test', 'test', '常温', 'A级', 'test', 'http://localhost/fs/imgs/b2.jpg');

-- ----------------------------
-- Table structure for manager
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `manager_id` int(255) NOT NULL AUTO_INCREMENT,
  `manager_name` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`manager_id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('1', 'liuliu', '1', '12345666');
INSERT INTO `manager` VALUES ('12', '柳柳', '1', '123456');

-- ----------------------------
-- Table structure for msg_pic
-- ----------------------------
DROP TABLE IF EXISTS `msg_pic`;
CREATE TABLE `msg_pic` (
  `img_id` int(255) NOT NULL AUTO_INCREMENT,
  `fruit_id` int(255) NOT NULL,
  `detail_img` varchar(255) NOT NULL COMMENT '详情页介绍图',
  `carousel_imgurl` varchar(255) NOT NULL COMMENT '详情页轮播图',
  PRIMARY KEY (`img_id`,`fruit_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of msg_pic
-- ----------------------------

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `order_id` int(255) NOT NULL AUTO_INCREMENT,
  `user_id` int(255) NOT NULL,
  `fruit_id` int(255) NOT NULL,
  `qty` int(255) NOT NULL COMMENT '订单量',
  `price` decimal(10,2) NOT NULL COMMENT '单价',
  `totalprice` decimal(10,2) NOT NULL COMMENT '总价',
  `order_status` varchar(255) NOT NULL COMMENT '订单状态',
  PRIMARY KEY (`order_id`,`user_id`,`fruit_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(255) NOT NULL AUTO_INCREMENT COMMENT '客户id',
  `user_name` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '顾客登录密码',
  `status` varchar(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '13145733302', '123', '1');

-- ----------------------------
-- Table structure for user_address
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address` (
  `address_id` int(255) NOT NULL AUTO_INCREMENT,
  `user_id` int(255) NOT NULL,
  `address` text NOT NULL,
  PRIMARY KEY (`address_id`,`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_address
-- ----------------------------
SET FOREIGN_KEY_CHECKS=1;
