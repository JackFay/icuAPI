DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
	user_id INTEGER AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  username VARCHAR(20) NOT NULL UNIQUE,
  hash VARCHAR(50) NOT NULL,
  phone_number VARCHAR(11) NOT NULL,
  email VARCHAR(50) NOT NULL,
  PRIMARY KEY (user_id)
);

DROP TABLE IF EXISTS devices CASCADE;
CREATE TABLE devices (
  device_id INTEGER AUTO_INCREMENT,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE,
  PRIMARY KEY(device_id)
);

DROP TABLE IF EXISTS notification_options CASCADE;
CREATE TABLE notification_options (
	notification_id INTEGER AUTO_INCREMENT,
  name ENUM ('text', 'email', 'both'),
	PRIMARY KEY(notification_id)
);

DROP TABLE IF EXISTS user_settings CASCADE;
CREATE TABLE user_settings (
	setting_id INTEGER AUTO_INCREMENT,
	user_id INTEGER,
  notification_option_id INTEGER,
	start_time TIME,
	end_time TIME,
	FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
	FOREIGN KEY (notification_option_id) REFERENCES notification_options(notification_id) ON DELETE CASCADE,
	PRIMARY KEY(setting_id, user_id)
);

DROP TABLE IF EXISTS images CASCADE;
CREATE TABLE images (
  image_id INTEGER AUTO_INCREMENT,
  user_id INTEGER NOT NULL,
  image VARCHAR(200) NOT NULL,
  date_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  PRIMARY KEY(image_id)
);

INSERT INTO notification_options VALUE (DEFAULT, "text");
INSERT INTO notification_options VALUE (DEFAULT, "email");
INSERT INTO notification_options VALUE (DEFAULT, "both");


