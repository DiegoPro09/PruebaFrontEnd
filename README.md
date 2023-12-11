# Aplicacion para cargar personajes de peliculas o series (Prueba tecnica desarrollador Front End)

Este sistema le permitira al usuario ingresar dos nombres de peliculas o series diferentes para asi luego poder cargar el nombre, descripcion e imagen del mismo, para luego mostrar todos los personajes en un listado.

## Scripts

El siguiente repositorio se maneja con los siguientes scripts:

### `npm start`

Este comando npm hara que se ejecute el sistema.\
La direccion url es [http://localhost:3000](http://localhost:3000)

### `npm test`

Este comando ejecutara los test de la aplicacion, separado por componentes y hooks personalizados

## Informaciaon Adicional
-. Para este proyecto se utiliza a demas de la libreria Styled-Component, la libreria Ant-Design para el diseño de algunos componentes.
-. En dentro de los componentes personalizados con Styled-Component se puede encontrar la siguiente sintaxis: .\

```
interface Props{
  name: type
}
```

Esto se debe a que se define el tipo de dato que va a recibir mediante props para a si en un futuro si la aplicacion se transfomra en un proyecto mas grande, se pudiera ingresar la cantidad de tipos que se desee.

-. Al igual que el punto anterior se podra divisar en el momento de guardar una variable al localstorage o al momento de requerirla esta sintaxis:

```
${name}${t('buttons.-characters')}
```

Esto es porque la primera parte osea ```${name}``` vendra el nombre de la pelicula o serie, y en ```${t('buttons.-characters')}``` le podra esa adicion de ```-characteres``` en caso de que este en ingles ó ```-personajes``` en caso de que sea en español.



## Respuestas al cuestionario

### `What is accessibility? How do you achieve it? `
Accessibility is about creating applications that are understandable and useful for all users, regardless of their skills or abilities. "Normal" people, people with different abilities, older people, etc. The goal is to ensure that users, regardless of their characteristics, can interact effectively and understand it.
This is achieved with Inclusive design, contrast and readability, intuitive navigation, Keyboard management, accessible documentation, etc.

### ` What is the difference between session storage, local storage, and cookies? `
The three are different ways to store data within the browser, but the key differences to highlight are in storage duration, size, access, and security.

In the case of sessionStorage, it stores data persistently until the browser window is closed. localStorage saves data almost permanently, even if the tab is closed, and manual deletion is required. With cookies, data can have a duration either for the session or for a specified period.

Regarding storage access, to interact with cookies, an HTTP request is necessary, while in the other two, access can be achieved through JavaScript functions or the browser.

In terms of security, cookies have domain and path restrictions, but they can be configured to be accessible from different subdomains or applications. On the other hand, localStorage and sessionStorage have access limited to the same domain, and one can only access data saved by another page if they share the same domain.

### `Explain the javascript event loop (also may explain how promises or async await work in js these are basically all the same question/answer)`
Javascript handles operations sequentially because it is a "single-threaded language" and to manage non-critical tasks such as network requests or file reads it uses event loops, these loops constantly check call stacks and call backs. , if the call stack is empty it takes the first function of the call back and executes it.

The tools to work with these are promises that provide a clear situation to handle these operations and handle the state depending on whether it was resolved, in code you can find it like ```.then()``` to append the result and ```.catch()``` for errors.

Another tool, and in my opinion one of the most used, is async/await, which allows you to write asynchronous code synchronously. This means that async declares the asynchronous functions and await pauses execution until the promise is resolved.

### `If you are getting too many API calls being made from your hooks, what can you do to prevent this?`
Mostly I use load indicators to stop the process and wait for what is running to be resolved so as not to overload or make multiple calls at the same time that generate problems, or else a useCallBack also optimizing the hooks so that this does not happen or eliminating dependencies that you do not require.

I really like using ReactQuery and managing the cache, being able to delete it to make a new one or keep it so it persists in case the data needs to be recovered

### `How do you manage the global state? And why in that way?`
Personally, I manage the global state with React hooks, find the logic to use a useState, or a useEffect, but also if I see that a certain function is repeated in several components, I go to create a hook to be able to make it reusable and thus have more code. clean, in fact in this application I did it, it seemed more convenient since it was repeated and could be "universal".
Although I've only had a short time using Redux, I wouldn't mind learning more about it and implementing it to handle global states.

### `What is progressive rendering?`
Progressive rendering is a web design and development technique that improves the user experience by gradually displaying the content of a page as it loads. Instead of waiting for the entire page to fully load before displaying something to the user, content is presented progressively as it becomes available.
