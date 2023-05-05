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
    configB: {
        host: 'localhost',
        user: 'root',
        password: 'YourRootPassword',
        database: 'masonry_project_db'
    },
    listPerPage: 10
    
}