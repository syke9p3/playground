import { DataTypes } from "sequelize";
import sequelize from '../sequelize.js'

const User = sequelize.define("User" , {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

User.associate = (models) => {
    User.hasMany(models.Applicant, {
        onDelete: "cascade"
    });
};

export default User;
