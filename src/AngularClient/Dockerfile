FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 17484
EXPOSE 44326

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY AngularClient/AngularClient.csproj AngularClient/
RUN dotnet restore AngularClient/AngularClient.csproj
COPY . .
WORKDIR /src/AngularClient
RUN dotnet build AngularClient.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AngularClient.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AngularClient.dll"]
