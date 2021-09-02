import { Model, Optional, DataTypes } from "sequelize";
import sequelize from '../instances/mysql';

interface CategoryAttributes {
    id: number;
    title: string;
    slug: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

export interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes>, CategoryAttributes {}

export const Category = sequelize.define<CategoryInstance>('Category', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    slug: {
        allowNull: false,
        type: DataTypes.STRING
    }
}, {
    tableName: 'categories',
    timestamps: false
});

export default Category;