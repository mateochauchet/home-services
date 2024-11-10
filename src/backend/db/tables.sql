-- Crear la tabla de categorías
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Crear la tabla de servicios
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INT REFERENCES categories(id) ON DELETE SET NULL
);

-- Crear la tabla de usuarios (clientes y profesionales)
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    user_type VARCHAR(20) CHECK (user_type IN ('cliente', 'profesional')) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de profesionales
CREATE TABLE professionals (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    location VARCHAR(255),
    contact_whatsapp VARCHAR(20),
    contact_phone VARCHAR(20),
    rating DECIMAL(2,1) CHECK (rating >= 0 AND rating <= 5),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla intermedia para la relación muchos-a-muchos entre profesionales y servicios
CREATE TABLE professional_services (
    id SERIAL PRIMARY KEY,
    professional_id INT REFERENCES professionals(id) ON DELETE CASCADE,
    service_id INT REFERENCES services(id) ON DELETE CASCADE,
    UNIQUE (professional_id, service_id)
);

-- Crear la tabla de valoraciones
CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    professional_id INT REFERENCES professionals(id) ON DELETE CASCADE,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    rating INT CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear la tabla de favoritos
CREATE TABLE favorites (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    professional_id INT REFERENCES professionals(id) ON DELETE CASCADE,
    UNIQUE (user_id, professional_id)
);
