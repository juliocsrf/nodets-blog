import { Model, DataTypes } from 'sequelize';

import connection from '../instances/mysql';

interface CategoryInstance extends Model {
    id: number;
    title: string;
    slug: string;
}

const Category = connection.define<CategoryInstance>('Category', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
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


export default Category;