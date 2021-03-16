import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";


const Member = sequelize.define('member', {
    ID: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Gender: {
        type: Sequelize.STRING(6),
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    Phone: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    DOB: {
        type: Sequelize.DATE,
        allowNull: false
    },
    Address: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    ReferralId: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
}, {
    sequelize,
    tableName: 'members',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "ID" }
        ]
    }]
});

export default Member;