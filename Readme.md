## Micro-frontend
 A micro-frontend app is an architectural approach to building web applications that decomposes the traditional monolithic frontend into smaller, independent, and self-contained modules, often referred to as micro-frontends. 

Each micro-frontend represents a distinct feature or functionality of the application and can be developed, deployed, and maintained independently. In a micro-frontend architecture, the user interface is divided into smaller, more manageable parts, allowing different teams to work on different sections simultaneously. 

These micro-frontends can be developed using various technologies, frameworks, or programming languages, and they communicate with each other to form a cohesive user experience. 

Key advantages of a micro-frontend approach include:

1. *Independent Development:* Teams can work on individual micro-frontends without affecting others, enabling faster development cycles and parallel work. 
2. *Technology Agnosticism:* Different micro-frontends can be built using different technologies, allowing teams to choose the most suitable tools for their specific requirements. 
3. *Scalability:* As the application grows, new features or updates can be added to specific micro-frontends without impacting the entire application, promoting scalability and maintainability. 
4. *Isolation:* Errors or changes in one micro-frontend are less likely to affect others, reducing the risk of system-wide failures. 
5. *Team Autonomy:* Each team responsible for a micro-frontend has autonomy over its development, deployment, and maintenance, fostering a more agile and efficient development process.

 Implementing a micro-frontend architecture requires effective communication and coordination among teams, as well as a robust system for integrating the individual micro-frontends into a seamless user experience. 

> This approach is particularly beneficial for large and complex applications where modularization and scalability are essential.

## Type of Micro-frontend

1.	Build time integration (compile time integration); e.g: Node modules, npm packages
2.	Run time integration (Client side integration): Implemented in this repo (url based)
3.	Server integration

  

# To run apps

- Install dependencies in each app then
- Go to container app and run `npm start`. Similarly, Run m1 and m2 app.


 ### Screenshots

    ![Container]('./screenshots/Container_app.png')
    ![App 1]('./screenshots/M1_app.png')
    ![App 2]('./screenshots/M2_app.png')