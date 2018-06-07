FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 17484
EXPOSE 44326

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY src/AspNetCoreThingsServer/AspNetCoreThingsServer.csproj src/AspNetCoreThingsServer/
RUN dotnet restore src/AspNetCoreThingsServer/AspNetCoreThingsServer.csproj
COPY . .
WORKDIR /src/src/AspNetCoreThingsServer
RUN dotnet build AspNetCoreThingsServer.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AspNetCoreThingsServer.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AspNetCoreThingsServer.dll"]
