
const { DataTypes} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('recipe', {
     id:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4,
       primaryKey: true
     },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resume:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score:{
      type:DataTypes.FLOAT,
      allowNull:true,
    },
    scoreHealtyFood:{
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    steps:{
      type:DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
    },
    createdIndb:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue : true, 
    }

  });
  
};
