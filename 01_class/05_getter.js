"use strict";
debugger;


class Point{
 constructor(point) {
  this.point = point;
 }
 get getPoint(){
  return this.point;
 }

 set setPoint(point){
  this.point = point;
 }
}

const obj = new Point(100);
console.log(obj.getPoint)

obj.setPoint = 120;
console.log(obj.point)

