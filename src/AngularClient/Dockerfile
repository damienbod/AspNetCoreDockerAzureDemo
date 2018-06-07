FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 17485
EXPOSE 44327

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY src/AngularClient/AngularClient.csproj src/AngularClient/
RUN dotnet restore src/AngularClient/AngularClient.csproj
COPY . .
WORKDIR /src/src/AngularClient
RUN dotnet build AngularClient.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AngularClient.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AngularClient.dll"]
