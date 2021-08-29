import { Model, DataTypes } from 'sequelize';
import connection from '../instances/mysql';

interface CategoryInstance extends Model {
    title: string;
    slug: string;
}

export const Category = connection.define<CategoryInstance>('Category', {
    title: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'categories',
    timestamps: false
});