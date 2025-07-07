#!/bin/sh

cd ../

mkdir output

# Organization 레포지토리 이름 - ex) 5_delog-front
cp -R ./5_delog-front/* ./output

cp -R ./output ./5_delog-front/