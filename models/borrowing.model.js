import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Borrowing = sequelize.define('borrowing', {
    borrowing_id: {
        autoincrement: true,
        type: Sequelize.INTEGER,
        allowNull: true,
        primaryKey: true
    },
    borrowing_name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    borrowing_title: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    date_borrowed: {
        type: Sequelize.DATE,
        allowNull: false
    },
    date_return: {
        type: Sequelize.DATE,
        allowNull: false
    },

}, {
    sequelize,
    tableName: 'borrowing',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        fields: [
            { name: "borrowing_id" }
        ]
    }]
});

export default Borrowing;