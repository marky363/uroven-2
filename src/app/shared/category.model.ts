export class Category {
   constructor(
     
      public name: string,
      public img: string,
      public id: number,
      public gallery?: Picture[],
   ){}
  
}
export class Picture {
   constructor(
       public picurl: string,
   ){}
}