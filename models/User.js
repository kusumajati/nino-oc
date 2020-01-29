'use strict'

module.exports = (Sequelize, Datatypes)=>{
    return Sequelize.define('user', {
        id: {
            type: Datatypes.UUID,
            primaryKey: true
        },
        first_name:{
            type: Datatypes.STRING,
            isAlphanumeric:true,
            required:true,
            allowNull:true
        },
        last_name:{
            type: Datatypes.STRING,
            isAlphanumeric:true,
            required:true,
            allowNull:true
        },
        username:{
            type: Datatypes.STRING,
            required:true,
            allowNull:true,
            len:[8,20]
        },
        email:{
            type: Datatypes.STRING,
            required:true,
            allowNull:true,
            len:[7,100],
            isEmail:true
        },
        password:{
            type: Datatypes.STRING,
            required:true,
            allowNull:true,
            len:[8,20]
        },
        updated_at:{
            type:Datatypes.DATETIME
        },
        deleted_at:{
            type:Datatypes.DATETIME
        }
    },
    {
        underscored:true,
        paranoid:true
    }
    )
}