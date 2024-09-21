const title = "Centro de Belleza Shalom";
const email = "CIELO.ROA1975@GMAIL.COM";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573143841941";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Centro de Belleza Shalom ofrece una amplia gama de servicios para realzar tu belleza y bienestar. Desde depilación en cera hasta manicure y pedicure, nuestro objetivo es proporcionar una experiencia de belleza completa y personalizada que te haga sentir renovada.",
        description2: "En Centro de Belleza Shalom, nos dedicamos a ofrecer tratamientos de alta calidad en un ambiente acogedor y profesional. Con nuestro lema 'Belleza', estamos aquí para ayudarte a resaltar lo mejor de ti misma y a disfrutar de un cuidado de belleza excepcional."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Belleza",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/CIELO.ROA",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
