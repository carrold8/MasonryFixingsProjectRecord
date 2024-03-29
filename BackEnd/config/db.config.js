module.exports = {
    config: {
        HOST: 'localhost',
        USER: 'root',
        PASSWORD: 'YourRootPassword',
        DB: 'masonry_project_db',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    configCloud: {
        HOST: 'masonry-project-database.cemcbovfho20.eu-west-1.rds.amazonaws.com',
        USER: 'root',
        PASSWORD: 'YourRootPassword',
        DB: 'masonry_project_db',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    configSimple: {
        HOST: 'masonry-project-database.cemcbovfho20.eu-west-1.rds.amazonaws.com',
        USER: 'simpleuser',
        PASSWORD: 'maSonrYFix23!',
        DB: 'masonry_project_db',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    },
    listPerPage: 10
    
}