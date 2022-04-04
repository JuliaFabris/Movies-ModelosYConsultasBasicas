module.exports = (sequelize, dataTypes) => {

    const alias = "Genre"; /* define como quiero llamar al modelo */

    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false /* Acepta nulos? no */
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    };

    const config = { /* si la tabla no requiere timestamp(etapas de tiempo) podemos escribirlo y le asignamos false */
        tableName: "genres", /* podrias no ponerlo pero para no tener problemas ponemos el nombre de la columna */
        createdAt: "created_at",
        updatedAt: "updated_at"
    }

    const Genre = sequelize.define(alias, cols, config)



    return Genre;
}

/* f2 para modificar tods las palabras */