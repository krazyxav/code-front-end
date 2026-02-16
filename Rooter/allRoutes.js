import Route from "./Route.js";
export { allRoutes };


class AllRoutes {

    constructor() {
        this.routes = [];
    }

    addRoute(route) {
        this.routes.push(route);
    }

    getRouteByUrl(url){

        let routeFound = false;

        this.routes.forEach((route) => {
            if (route.url == url) {
                routeFound = route;
            }
        });

        if (routeFound) {
            return routeFound;
        } else {
            return this.get404();
        }
    }

    get404() {
        return this.getRouteByUrl("404");
    }

}


const allRoutes = new AllRoutes();

allRoutes.addRoute(new Route("/", "Accueil", "/pages/home.html"));
allRoutes.addRoute(new Route("404", "Page introuvable", "/pages/404.html"));
allRoutes.addRoute(new Route("/galery", "Galerie", "/pages/galerie.html"));
allRoutes.addRoute(new Route("/menu", "Menu", "/pages/menu.html"));
allRoutes.addRoute(new Route("/signin", "Conenxion", "/pages/auth/signin.html"));
allRoutes.addRoute(new Route("/signup", "Inscription", "/pages/auth/signup.html"));
allRoutes.addRoute(new Route("/account", "Mon Compte", "/pages/auth/account.html"));
allRoutes.addRoute(new Route("/editPassword", "Changement Mot de passe", "/pages/auth/editPassword.html"));
allRoutes.addRoute(new Route("/allResa", "Vos réservations", "pages/reservations/allResas.html"));
allRoutes.addRoute(new Route("/reserve", "Réserver", "/pages/reservations/reserve.html"));


export const websiteName = "Quai Antique";


