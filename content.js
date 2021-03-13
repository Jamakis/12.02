const getNumber = function(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRGB = function(a = 1) {
    let r = getNumber(255);
    let g = getNumber(255);
    let b = getNumber(255);
    return `rgba(${r},${g},${b},${a})`;
}

let sites = [{
        name: "Утро -5°C",
        logo: "cloud_icon-icons.com_54315.svg",
        color: getRGB(.2)
    },
    {
        name: "День -2°C",
        logo: "cloud_icon-icons.com_54315.svg",
        color: getRGB(.2)
    },
    {
        name: "Вечер -3°C",
        logo: "cloud_icon-icons.com_54315.svg",
        color: getRGB(.2)
    },
    {
        name: "Ночь -7°C",
        logo: "cloud_icon-icons.com_54315.svg",
        color: getRGB(.2)
    },
];