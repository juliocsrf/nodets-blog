import { Model, DataTypes } from 'sequelize';
import connection from '../instances/mysql';

interface ArticleInstance extends Model {
    title: string;
    slug: string;
    body: string;
}

export const Article = connection.define<ArticleInstance>('Article', {
    title: {
        type: DataTypes.STRING
    },
    slug: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'articles',
    timestamps: false
});