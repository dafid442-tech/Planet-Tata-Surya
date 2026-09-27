const planets = {
    Pluto: {
        image: "images/pluto.jpg",
        description: "Pluto adalah planet katai yang berada di bagian terluar Tata Surya. Permukaannya terdiri dari es dan batuan serta memiliki wilayah berbentuk hati yang sangat terkenal.",
        number: "01",
        accent: "#b8b4b5",
        glow: "rgba(180, 180, 180, 0.35)"
    },
    Neptune: {
        image: "images/NEPTUNE.jpg",
        description: "Neptune adalah planet terjauh dari Matahari. Planet biru dingin ini memiliki angin kencang dan badai yang sangat besar.",
        number: "02",
        accent: "#4f7ae0",
        glow: "rgba(79, 122, 224, 0.35)"
    },
    Uranus: {
        image: "images/uranus.jpg",
        description: "Uranus adalah planet es yang memiliki rotasi miring. Planet ini dikelilingi oleh cincin samar dan atmosfer biru muda yang menawan.",
        number: "03",
        accent: "#8bdcff",
        glow: "rgba(137, 219, 255, 0.35)"
    },
    Saturn: {
        image: "images/SATURN.jpg",
        description: "Planet dengan cincin terkenal. Saturn adalah raksasa gas yang dikelilingi oleh ribuan partikel es yang indah.",
        number: "04",
        accent: "#d4af73",
        glow: "rgba(212, 175, 115, 0.35)"
    },
    Jupiter: {
        image: "images/jupiter.jpg",
        description: "Planet terbesar di Tata Surya kita. Jupiter dikenal karena badai raksasa dan medan magnet yang sangat kuat.",
        number: "05",
        accent: "#d89a62",
        glow: "rgba(216, 154, 98, 0.35)"
    },
    Mars: {
        image: "images/mars.jpg",
        description: "Planet merah dan tetangga menarik Bumi. Dunia dengan lembah kuno, gunung berapi besar, dan lanskap yang penuh misteri.",
        number: "06",
        accent: "#d75643",
        glow: "rgba(215, 86, 67, 0.35)"
    },
    Earth: {
        image: "images/earth.jpg",
        description: "Planet rumah kita, penuh dengan lautan, gunung, kehidupan, dan atmosfer yang unik serta menakjubkan.",
        number: "07",
        accent: "#2d7df6",
        glow: "rgba(45, 125, 246, 0.35)"
    },
    Venus: {
        image: "images/venus.jpg",
        description: "Dunia yang panas dan berawan, ditutupi atmosfer tebal. Venus sangat mirip dengan Bumi dalam ukuran, tetapi jauh lebih ekstrem.",
        number: "08",
        accent: "#df9d62",
        glow: "rgba(223, 157, 98, 0.35)"
    },
    Mercury: {
        image: "images/Mercury.jpg",
        description: "Planet terkecil di Tata Surya dan yang paling dekat dengan Matahari. Dunia dengan suhu ekstrem dan kawah yang menghiasi permukaannya.",
        number: "09",
        accent: "#bca28e",
        glow: "rgba(188, 162, 142, 0.35)"
    },
    SemuaPlanet: {
        image: "images/semua planet.jpg",
        description: "Di luar angkasa terdapat berbagai planet dengan karakteristik, ukuran, warna, dan kondisi yang sangat berbeda. Setiap planet membawa keunikan tersendiri dalam Tata Surya.",
        number: "10",
        accent: "#7ccaf9",
        glow: "rgba(124, 202, 249, 0.35)"
    }
};

const buttons = document.querySelectorAll(".planet-item");
const image = document.getElementById("planetImage");
const name = document.getElementById("planetName");
const description = document.getElementById("planetDescription");
const planet = document.querySelector(".planet");
const content = document.querySelector(".content");
const currentNumber = document.getElementById("currentNumber");

function applyPlanet(planetName) {
    const data = planets[planetName];
    if (!data) return;

    document.body.classList.toggle("all-planets-mode", planetName === "SemuaPlanet");
    document.documentElement.style.setProperty("--planet-accent", data.accent);
    document.documentElement.style.setProperty("--planet-halo", data.glow);

    buttons.forEach((btn) => btn.classList.toggle("active", btn.dataset.planet === planetName));

    if (planetName === "SemuaPlanet") {
        name.textContent = "ALL PLANETS";
        description.textContent = "Matahari dan planet-planet bergerak bersama dalam harmoni di tata surya, membentuk pemandangan yang dinamis dan menawan.";
        currentNumber.textContent = "10";
        return;
    }

    planet.classList.remove("change");
    void planet.offsetWidth;
    planet.classList.add("change");

    content.classList.remove("change");
    void content.offsetWidth;
    content.classList.add("change");

    setTimeout(() => {
        image.src = data.image;
        image.alt = planetName;
        name.textContent = planetName.toUpperCase();
        description.textContent = data.description;
        currentNumber.textContent = data.number;
        planet.classList.remove("change");
    }, 260);
}

buttons.forEach((button) => {
    button.addEventListener("click", () => applyPlanet(button.dataset.planet));
});

applyPlanet("Mercury");