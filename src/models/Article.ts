import { Model, DataTypes } from 'sequelize';

import connection from '../instances/mysql';
import Category from './Category';

interface ArticleInstance extends Model {
    id: number;
    title: string;
    slug: string;
    body: string;
    id_category: number;
}

const Article = connection.define<ArticleInstance>('Article', {
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
    },
    body: {
        type: DataTypes.STRING
    },
    id_category: {
        type: DataTypes.NUMBER
    }
}, {
    tableName: 'articles',
    timestamps: false
});

Article.hasOne(Category, {
    foreignKey: 'id_category',
    as: 'category'
});


export default Article;