# ESTE SCRIPT NÃO DEVE SER EXECUTADO DE UMA SÓ VEZ.
npx sequelize-cli db:create

# Criar migrations

npx sequelize-cli migration:generate --name=create-user

# Cria os models e migrations
npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string,password:string

npx sequelize-cli model:generate --name scooter --attributes model:string,fabricator:string,year:string,motor_pow:string,batery_pow:string,batery_type:string,weight:string,max_velocity:string,autonomy:string,charge_time:string

npx sequelize-cli model:generate --name acessory --attributes  name:string,brand:string

npx sequelize-cli model:generate --name part --attributes  name:string,fabricator:string,scooterId:integer

npx sequelize-cli model:generate --name mpart --attributes  name:string,fabricator:string,motoId:integer

npx sequelize-cli model:generate --name company --attributes name:string

npx sequelize-cli model:generate --name teste_rel --attributes data:string

# Sincroniza as migrations com o Banco de Dados
npx sequelize-cli db:migrate

# Resetar as migrations
npx sequelize-cli db:migrate:undo:all

# Refazer uma migration específica:
npx sequelize-cli db:migrate --to nome-exato-da-migration.js

# Desfazer migrate específica:
npx sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js

# Desfazer a última migration feita
npx sequelize-cli db:migrate:undo
