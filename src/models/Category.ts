import { Model, Optional, DataTypes } from "sequelize";
import sequelize from '../instances/mysql';
import Article from './Article';

interface CategoryAttributes {
    id: number;
    title: string;
    slug: string;
}

interface CategoryCreationAttributes extends Optional<CategoryAttributes, 'id'> {}

interface CategoryInstance extends Model<CategoryAttributes, CategoryCreationAttributes> {}

const Category = sequelize.define<CategoryInstance>('Category', {
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

// Category.hasMany(Article, {
//     sourceKey: 'id_category',
//     foreignKey: 'id',
//     as: 'articles'
// });

export default Category;