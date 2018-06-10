ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_VERSION 4.4.5
ENV NODE_SHA256 7b2409605c871a40d60c187bd24f6f6ddf10590df060b7d905ef46b3b3aa7f81

RUN powershell -Command \
    wget -Uri https://nodejs.org/dist/v%NODE_VERSION%/node-v%NODE_VERSION%-x64.msi -OutFile node.msi -UseBasicParsing ; \
    if ((Get-FileHash node.msi -Algorithm sha256).Hash -ne $env:NODE_SHA256) {exit 1} ; \
    Start-Process -FilePath msiexec -ArgumentList /q, /i, node.msi -Wait ; \
    Remove-Item -Path node.msi

CMD [ "node.exe" ]

FROM microsoft/dotnet:2.1-aspnetcore-runtime-nanoserver-1709 AS base
WORKDIR /app
EXPOSE 17485
EXPOSE 44327

FROM microsoft/dotnet:2.1-sdk-nanoserver-1709 AS build
WORKDIR /src
COPY AngularClient/AngularClient.csproj AngularClient/
RUN dotnet restore AngularClient/AngularClient.csproj
COPY package*.json ./
RUN npm install
RUN npm run build-production
COPY . .
WORKDIR /src/AngularClient
RUN dotnet build AngularClient.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish AngularClient.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "AngularClient.dll"]
