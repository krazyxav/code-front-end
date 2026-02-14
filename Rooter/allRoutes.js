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
allRoutes.addRoute(new Route("/galerie", "Galerie", "/pages/galerie.html"));

export const websiteName = "Quai Antique";


