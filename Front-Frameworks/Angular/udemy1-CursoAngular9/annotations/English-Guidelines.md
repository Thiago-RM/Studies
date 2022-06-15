 # Index
1. [`Some important-steps-in-creation `](#some-important-steps-in-creation)  
2. [`Elements of the Angular #01 `](#elements-of-angular-01)  
3. [`Elements of the Angular  #02 `](#elements-of-angular-02)  
4. [`Elements of the Angular  #03 `](#elements-of-angular-03)  
5. [`Create Product Method `](#Create-Product-method)  
6. [`Using Material Design schematic `](#using-material-design-schematic-schematic)  

***
<br><br>

# Some important steps in creation

1) ng g c [component-directory/template-directory(or other)/component-name]
  
2) When you import something (reference to imports), you must put this reference in Imports of @NgModules from app.module.ts (Component main application in Angular.)
  
Important: the assets folder is responsible for storing static files!
  
mat-elevation-z4 == Material Toolbar element that gives a raised appearance to the toolbar created in the header!
  
***
<br>

# Elements of Angular #01:
  
1. Module: responsible for grouping all other elements such as components, directives, pipes and application-related services.
  
2. Component: class, skeleton where we use the necessary elements for the functioning of a application. It has its own scope.
  
> Once again:
Remember: components are directives with templates!
  
3. Directives: component without template that is used to handle logic, be it an element style (CSS) or behavior. Types of directives:
  
        * Attribute Directives = style attribute directives;  
        * Structural Directives = structural directives;  
Structural directives have an * (asterisk) in front!  
I can use the directive throughout the application!
  
> Not to forget!  
Remember: Directives are components without templates!  
  
1. **About linking html with ts in Angular**:
  
    a) [ ] --> Property binding = listen for component attribute events (one way data binding);
  
    b) () --> Event binding = execute actions on ts sent by html;
  
    c) [()] --> Two way data binding = change both sides (uses ngModel);
  
    d) {{ variable || date }} --> interpolation == using pipes -- helps formatting an element for example.
  
OBS: **I can have a chain of pipes (Chaining).** Example:
  
```typescript
<p>
    The due date is:
    {{ product. expiration | date: 'fullDate' | uppercase }}
</p>
```
***
<br>

# Elements of Angular #02:
  
## Reactive Programming:
  
* rxjs &nbsp; ⇨ &nbsp; ReactiveX;
  
Most used pattern on the web == **Observer!**. From there we have to:
  
1. It is an event-driven pattern.
  
## Understanding Observables:
  
> Callbacks: Function as a parameter to another function!
  
> Observables: encapsulate the observer pattern ⇨ Reactively act when the event happens! ⇨ Remember they are reusable!
***
<br>

# Elements of Angular #03:

## Services
  
**Concept:** Its purpose is to organize and share methods and data between components.  
  
     Creating service:  
```Ts
ng g s services/product
```

Use the route using ***dependency injection!**
  
**root &nbsp; ⇨&nbsp;** An alias for the AppModule within the Service, or, a root injector! The bootstrap = start component, the main application!  

quotes are used for root, i.e. the alias of appModule  

Look at the line where we have providedIn: 'root'. [`Reference file for root`](https://github.com/Thiago-RM/Studies/blob/1ed20988c90d05a2f798c1af4e293f1e876fc6aa/Front-Frameworks/Angular/udemy1-CursoAngular9/crud/frontend/src/app/components/product/product.service.ts)
<br>

# Create Product Method
  
## Post Method
  
**Note:** The post returns a typed _**observable**_ and for that we need to use generics in the post method (< > _diamond notation_);  


See the service code snippet where the Observable notation is mounted  
  [`Lines 27 to 30`](https://github.com/Thiago-RM/Studies/blob/1ed20988c90d05a2f798c1af4e293f1e876fc6aa/Front-Frameworks/Angular/udemy1-CursoAngular9/crud/frontend/src/app/components/product/product.service.ts)

```Ts
Observable<Product>
```

<br>

# Using Material Design schematic
  
## Command Line
  
```npm
     ng generate @angular/material:table <component-name>
```
  
**Note:** About _@ViewChild_ &nbsp; ⇨&nbsp; loops through the html to find the selected visual component! Once it finds the html visual component, it inserts it into a variable selected by the programmer! Example:
  
```Ts
@ViewChild(MatPaginator) paginator: MatParginator;
```
<br>