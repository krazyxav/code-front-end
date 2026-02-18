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

allRoutes.addRoute(new Route("/", "Accueil", "/pages/home.html", []));
allRoutes.addRoute(new Route("404", "Page introuvable", "/pages/404.html", []));
allRoutes.addRoute(new Route("/galery", "Galerie", "/pages/galerie.html", []));
allRoutes.addRoute(new Route("/menu", "Menu", "/pages/menu.html", []));
allRoutes.addRoute(new Route("/signin", "Conenxion", "/pages/auth/signin.html",["disconnected"], "/js/auth/signin.js"));
allRoutes.addRoute(new Route("/signup", "Inscription", "/pages/auth/signup.html", ["disconnected"], "/js/auth/signup.js"));
allRoutes.addRoute(new Route("/account", "Mon Compte", "/pages/auth/account.html"["admin","client"]));
allRoutes.addRoute(new Route("/editPassword", "Changement Mot de passe", "/pages/auth/editPassword.html", ["admin","client"], "/js/auth/editPassword.js"));
allRoutes.addRoute(new Route("/allResa", "Vos réservations", "pages/reservations/allResas.html", ["client"]));
allRoutes.addRoute(new Route("/reserve", "Réserver", "/pages/reservations/reserve.html", ["client"]));


export const websiteName = "Quai Antique";


