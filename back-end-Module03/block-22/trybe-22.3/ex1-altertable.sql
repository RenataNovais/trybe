USE hr;

ALTER TABLE locations CHANGE STREET_ADDRESS address VARCHAR(40);

SELECT * FROM locations;