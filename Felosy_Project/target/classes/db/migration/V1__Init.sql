-- V1__Init.sql
-- Initial schema: users, accounts, categories, transactions, transfers
-- Engine: InnoDB, Charset: utf8mb4

SET default_storage_engine = 'InnoDB';
SET NAMES 'utf8mb4';

-- ==========================
-- USERS
-- ==========================
CREATE TABLE IF NOT EXISTS users (
                                     id INT AUTO_INCREMENT PRIMARY KEY,
                                     name VARCHAR(100),
                                     email VARCHAR(150) UNIQUE NOT NULL,
                                     password_hash VARCHAR(255) NOT NULL,
                                     created_at DATETIME DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ==========================
-- ACCOUNTS
-- ==========================
CREATE TABLE IF NOT EXISTS accounts (
                                        id INT AUTO_INCREMENT PRIMARY KEY,
                                        user_id INT NOT NULL,
                                        name VARCHAR(100) NOT NULL,
                                        balance DECIMAL(12,2) DEFAULT 0.00,
                                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                        CONSTRAINT fk_accounts_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_accounts_user_id ON accounts(user_id);

-- ==========================
-- CATEGORIES
-- ==========================
CREATE TABLE IF NOT EXISTS categories (
                                          id INT AUTO_INCREMENT PRIMARY KEY,
                                          user_id INT NOT NULL,
                                          name VARCHAR(100) NOT NULL,
                                          type ENUM('income', 'expense') NOT NULL,
                                          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                          CONSTRAINT fk_categories_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_categories_user_id ON categories(user_id);

-- ==========================
-- TRANSACTIONS
-- ==========================
CREATE TABLE IF NOT EXISTS transactions (
                                            id INT AUTO_INCREMENT PRIMARY KEY,
                                            user_id INT NOT NULL,
                                            account_id INT NOT NULL,
                                            category_id INT NULL,
                                            type ENUM('income','expense','transfer') NOT NULL,
                                            amount DECIMAL(12,2) NOT NULL,
                                            transaction_date DATE NOT NULL,
                                            notes TEXT,
                                            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                                            CONSTRAINT fk_transactions_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
                                            CONSTRAINT fk_transactions_account FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
                                            CONSTRAINT fk_transactions_category FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_transactions_user_id ON transactions(user_id);
CREATE INDEX idx_transactions_account_id ON transactions(account_id);
CREATE INDEX idx_transactions_category_id ON transactions(category_id);

-- ==========================
-- TRANSFERS
-- ==========================
CREATE TABLE IF NOT EXISTS transfers (
                                         id INT AUTO_INCREMENT PRIMARY KEY,
                                         from_account_id INT NOT NULL,
                                         to_account_id INT NOT NULL,
                                         amount DECIMAL(12,2) NOT NULL,
                                         transfer_date DATE NOT NULL,
                                         notes TEXT,
                                         created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                                         CONSTRAINT fk_transfers_from_account FOREIGN KEY (from_account_id) REFERENCES accounts(id) ON DELETE CASCADE,
                                         CONSTRAINT fk_transfers_to_account FOREIGN KEY (to_account_id) REFERENCES accounts(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_transfers_from_account_id ON transfers(from_account_id);
CREATE INDEX idx_transfers_to_account_id ON transfers(to_account_id);
