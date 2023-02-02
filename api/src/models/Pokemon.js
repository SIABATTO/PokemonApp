const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 999
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSALZAMcm83-Bnh0bpq3uQK7RuqpmpZ3G96HiSsZA8&s"
    },
  });
};


// ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
// Nombre *
// Vida
// Ataque
// Defensa
// Velocidad
// Altura
// Peso