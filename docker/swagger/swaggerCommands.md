**./run-in-docker.sh help # Executes 'help' command for swagger-codegen-cli**
**./run-in-docker.sh langs # Executes 'langs' command for swagger-codegen-cli**
**./run-in-docker.sh /gen/bin/go-petstore.sh # Builds the Go client**
**./run-in-docker.sh generate -i modules/swagger-codegen/src/test/resources/2_0/swagger.yaml -l go -o /gen/ -DpackageName=websiteProj # generates go client, outputs locally to ./out/go-petstore**
