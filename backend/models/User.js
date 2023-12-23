import { DataTypes } from "sequelize";
import sequelize from '../sequelize.js'

const User = sequelize.define("User" , {
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

export default User