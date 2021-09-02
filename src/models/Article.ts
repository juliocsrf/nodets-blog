import { Model, Optional, DataTypes } from "sequelize";
import sequelize from '../instances/mysql';
import Category from './Category';

interface ArticleAttributes {
    id: number;
    title: string;
    slug: string;
    body: string;
    id_category: number;
}

interface ArticleCreationAttributes extends Optional<ArticleAttributes, 'id'>{}

interface ArticleInstance extends Model<ArticleAttributes, ArticleCreationAttributes> {}

const Article = sequelize.define<ArticleInstance>('Article', {
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
    },
    body: {
        allowNull: false,
        type: DataTypes.STRING
    },
    id_category: {
        allowNull: false,
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'articles',
    timestamps: false
});

Article.belongsTo(Category, {
    foreignKey: 'id_category',
    as: 'category'
});

export default Article;