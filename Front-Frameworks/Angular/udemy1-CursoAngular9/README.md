# Project Structure  
  
📦udemy1-CursoAngular9  
 ┣ 📂annotations  
 ┃ ┣ 📜[`English-Guidelines.md `](https://github.com/Thiago-RM/Studies/blob/689f1c31336a80ee58bb33bca0532f2bc0517cc3/Front-Frameworks/Angular/udemy1-CursoAngular9/annotations/English-Guidelines.md)  
 ┃ ┗ 📜Portuguese-Guidelines.md  
 ┣ 📂crud  
 ┃ ┣ 📂backend  
 ┃ ┃ ┣ 📜db.json  
 ┃ ┃ ┣ 📜package-lock.json  
 ┃ ┃ ┗ 📜package.json  
 ┃ ┗ 📂frontend  
 ┃ ┃ ┣ 📂src  
 ┃ ┃ ┃ ┣ 📂app  
 ┃ ┃ ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┃ ┃ ┣ 📂product  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂product-create  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-create.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-create.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-create.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂product-delete  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-delete.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-delete.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-delete.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂product-read  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂product-read2  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-read2-datasource.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-read2.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-read2.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-read2.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-read.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-read.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-read.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂product-update  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-update.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-update.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-update.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product.model.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product.service.ts  
 ┃ ┃ ┃ ┃ ┃ ┗ 📂template  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂footer  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜footer.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜footer.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂header  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header-data.model.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜header.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜header.service.ts  
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂nav  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nav.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜nav.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜nav.component.ts  
 ┃ ┃ ┃ ┃ ┣ 📂directves  
 ┃ ┃ ┃ ┃ ┃ ┣ 📜for.directive.ts  
 ┃ ┃ ┃ ┃ ┃ ┗ 📜red.directive.ts  
 ┃ ┃ ┃ ┃ ┣ 📂views  
 ┃ ┃ ┃ ┃ ┃ ┣ 📂home  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜home.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜home.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜home.component.ts  
 ┃ ┃ ┃ ┃ ┃ ┗ 📂product-crud  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-crud.component.css  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📜product-crud.component.html  
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜product-crud.component.ts  
 ┃ ┃ ┃ ┃ ┣ 📜app-routing.module.ts  
 ┃ ┃ ┃ ┃ ┣ 📜app.component.html  
 ┃ ┃ ┃ ┃ ┣ 📜app.component.ts  
 ┃ ┃ ┃ ┃ ┗ 📜app.module.ts  
 ┃ ┃ ┃ ┣ 📂assets  
 ┃ ┃ ┃ ┃ ┣ 📂img  
 ┃ ┃ ┃ ┃ ┃ ┗ 📜download.png  
 ┃ ┃ ┃ ┃ ┗ 📜.gitkeep  
 ┃ ┃ ┃ ┣ 📂environments  
 ┃ ┃ ┃ ┃ ┣ 📜environment.prod.ts  
 ┃ ┃ ┃ ┃ ┗ 📜environment.ts  
 ┃ ┃ ┃ ┣ 📜favicon.ico  
 ┃ ┃ ┃ ┣ 📜index.html  
 ┃ ┃ ┃ ┣ 📜main.ts  
 ┃ ┃ ┃ ┣ 📜polyfills.ts  
 ┃ ┃ ┃ ┗ 📜styles.css  
 ┃ ┃ ┣ 📜.gitignore  
 ┃ ┃ ┣ 📜README.md  
 ┃ ┃ ┣ 📜angular.json  
 ┃ ┃ ┣ 📜browserslist  
 ┃ ┃ ┣ 📜package-lock.json  
 ┃ ┃ ┣ 📜package.json  
 ┃ ┃ ┣ 📜tsconfig.app.json   
 ┃ ┃ ┗ 📜tsconfig.json  
 ┗ 📜README.md  