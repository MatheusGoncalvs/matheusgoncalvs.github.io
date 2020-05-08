<h1 align="center">
  Landing Page
</h1>

<h3 align="center">
  My Personal page
</h3>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/MatheusGoncalvs/matheusgoncalvs.github.io?color=%#3ae374">

  <a href="https://www.linkedin.com/in/laurabeatris/">
    <img alt="Made by Laura Beatris" src="https://img.shields.io/badge/made%20by-MatheusGoncalves-%3ae374">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#runner-installation">Installation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;
</p>

<br>
<p align="center">
  <img align="center" src="https://i.ibb.co/wccRhm9/product-screen.png" alt="Product List" border="0">
</p>
<p align="center">
  <img align="center" src="https://i.ibb.co/wSjGYgs/Ac3m-LCZ-Imgur.png" alt="Product List" border="0">
</p>
<br>


## :rocket: Sobre o projeto
  
## :runner: Installation 

```   
  // 1 - Git Clone
  
  // 2 - If you're going to use firebase to provide product data, be sure do create a env with the service data. 
        
  // 3 - Installing the dependencies
  yarn install
  
  // 4 - Run the application in the development mode 
  yarn dev
  
```

## :hammer: Deploy 
[Zeit](https://zeit.co/) provides a easy way to deploy NextJS applications. You need to create a now.json file with the build configuration. 

```
{
    "build": {
        "env": {
            "SITE_URL": "@site_url",
            "FIREBASE_API_KEY": "@firebase_api_key",
            "FIREBASE_APP_KEY": "@firebase_app_id",
            "FIREBASE_MEASUREMENT_ID": "@firebase_measurement_id",
            "FIREBASE_MESSAGE_SENDER_ID": "@firebase_message_sender_id"
        }
    }
}

```

To map environment variables, you need to create secrets with the commands provided by the [Now CLI](https://zeit.co/download)

```
now secrets add <secret-name> <secret-value>
```

And then use them as the values of the env variables that you want to map inside of the build configuration.

---

If you have some problem with the application, don't be afraid to contribute sending a issue/pull request, i'll be happy to help. 😃

Made with ♥ by Laura :wave: [See my linkedin!](https://www.linkedin.com/in/laurabeatris/)
