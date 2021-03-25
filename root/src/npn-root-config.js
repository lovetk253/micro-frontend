import { registerApplication, start } from "single-spa";

registerApplication({
    name: "@npn/spa-navbar",
    app: () => System.import("@npn/navbar"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@npn/spa-homepage",
    app: () => System.import("@npn/homepage"),
    activeWhen: [(location) => location.pathname === "/"],
});

registerApplication({
    name: "@npn/spa-aboutpage",
    app: () => System.import("@npn/aboutpage"),
    activeWhen: ["/"],
});

registerApplication({
    name: "@npn/spa-contactpage",
    app: () => System.import("@npn/contactpage"),
    activeWhen: ["/"],
});

start({
    urlRerouteOnly: true,
});