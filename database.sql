CREATE DATABASE village_services;

USE village_services;

CREATE TABLE services (
id INT AUTO_INCREMENT PRIMARY KEY,
service_name VARCHAR(50),
description TEXT
);

INSERT INTO services (service_name, description) VALUES
('Water Supply','Water supplied daily from 6 AM to 9 AM'),
('Healthcare','PHC open 9 AM to 5 PM with weekly free camps'),
('Transport','Bus service every 30 minutes'),
('Agriculture','Seed distribution and soil testing available');
