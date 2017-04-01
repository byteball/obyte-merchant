CREATE TABLE states (
    state_id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    device_address CHAR(33) NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    step VARCHAR(50) NOT NULL,
    `order` VARCHAR(1000) NOT NULL,
    amount BIGINT NULL,
    address CHAR(32) NULL UNIQUE,
    unit CHAR(44) NULL,
    last_update TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
    cancel_date TIMESTAMP NULL,
    pay_date TIMESTAMP NULL,
    confirmation_date TIMESTAMP NULL,
    FOREIGN KEY (device_address) REFERENCES correspondent_devices(device_address),
    FOREIGN KEY (address) REFERENCES my_addresses(address),
    FOREIGN KEY (unit) REFERENCES units(unit)
);

CREATE INDEX byStatesDeviceAddress ON states(device_address);
CREATE INDEX byStatesUnit ON states(unit);
