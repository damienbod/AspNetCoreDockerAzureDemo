FROM microsoft/aspnetcore:1.0.3
ARG source
WORKDIR /app
EXPOSE 80
COPY ${source:-bin/Release/PublishOutput} .
ENTRYPOINT ["dotnet", "AngularClient.dll"]
