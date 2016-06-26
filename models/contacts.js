module.exports = (sequelize, DataType) => {
    const Tasks = sequelize.define("Contact", {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        number: {
            type: DataType.INTEGER,
            allowNull: true
        }
    }, {
            classMethods: {
                associate: (models) => {
                    Tasks.belongsTo(models.Users);
                }
            }
        }
    );
    return Tasks;
};