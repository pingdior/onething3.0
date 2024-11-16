#!/bin/bash

# 检查 MongoDB 是否运行
echo "Checking MongoDB status..."
if ! mongod --version > /dev/null 2>&1; then
    echo "MongoDB is not installed. Please install MongoDB first."
    exit 1
fi

# 安装依赖
echo "Installing dependencies..."
npm run install-all

# 创建必要的目录
echo "Creating necessary directories..."
mkdir -p backend/logs
mkdir -p backend/dist

# 启动应用
echo "Starting the application..."
npm start 