const TRAIN_LINES = [
  { label: "1 Train", src: "/train_lines/1.jpg" },
  { label: "2 Train", src: "/train_lines/2.jpg" },
  { label: "3 Train", src: "/train_lines/3.jpg" },
  { label: "A Train", src: "/train_lines/A.jpg" },
  { label: "B Train", src: "/train_lines/B.jpg" },
  { label: "C Train", src: "/train_lines/C.jpg" },
  { label: "D Train", src: "/train_lines/D.jpg" },
  { label: "E Train", src: "/train_lines/E.jpg" },
  { label: "F Train", src: "/train_lines/F.jpg" },
  { label: "G Train", src: "/train_lines/G.jpg" },
  { label: "J Train", src: "/train_lines/J.jpg" },
  { label: "L Train", src: "/train_lines/L.jpg" },
  { label: "M Train", src: "/train_lines/M.jpg" },
  { label: "N Train", src: "/train_lines/N.jpg" },
  { label: "Q Train", src: "/train_lines/Q.jpg" },
  { label: "R Train", src: "/train_lines/R.jpg" },
  { label: "Z Train", src: "/train_lines/Z.jpg" }
];
const SLICES = [
  { label: "Artichoke Pizza", src: "/slices/artichoke.png" },
  { label: "Joe's Pizza", src: "/slices/joes.png" },
  { label: "Scar's Pizza", src: "/slices/scarrs.png" },
  { label: "Two Bros Pizza", src: "/slices/twobros.png" },
  { label: "Upside Pizza", src: "/slices/upside.png" },
  { label: "Williamsburg Pizza", src: "/slices/williamsburg.png" }
];
const PARKS = [
  { label: "Central Park", src: "/parks/central.jpg" },
  { label: "Maria Hernandez Park", src: "/parks/maria.jpg" },
  { label: "Prospect Park", src: "/parks/prospect.jpg" },
  { label: "Fort Greene Park", src: "/parks/fortgreene.jpg" },
  { label: "Tompkins Square Park", src: "/parks/tompkins.jpg" },
  { label: "Washington Square Park", src: "/parks/washington.jpg" },
  { label: "Seward Park", src: "/parks/seward.jpg" }
];
const CARS = [
  { label: "Toyota RAV4", src: "/cars/rav4.png" },
  { label: "Toyota Tacoma", src: "/cars/tacoma.png" },
  { label: "Toyota Camry", src: "/cars/camry.png" }
];
const FRUITS = [
  { label: "Orange", src: "/fruit/orange.png" }
];
function getRandomTrainLine() {
  const randomIndex = Math.floor(Math.random() * TRAIN_LINES.length);
  return TRAIN_LINES[randomIndex];
}
function getRandomSlice() {
  const randomIndex = Math.floor(Math.random() * SLICES.length);
  return SLICES[randomIndex];
}
function getRandomPark() {
  const randomIndex = Math.floor(Math.random() * PARKS.length);
  return PARKS[randomIndex];
}
function getRandomCar() {
  const randomIndex = Math.floor(Math.random() * CARS.length);
  return CARS[randomIndex];
}
function getRandomFruit() {
  const randomIndex = Math.floor(Math.random() * FRUITS.length);
  return FRUITS[randomIndex];
}
function load() {
  let car = getRandomCar();
  let fruit = getRandomFruit();
  const misc_data = [
    {
      cover: "/cards/car.jpeg",
      title: "#1",
      label: "If you see a " + car.label + " today, take a moment to consider its surroundings.",
      src: car.src
    },
    {
      cover: "/cards/unlucky.jpeg",
      title: "#2",
      label: "Don't let an " + fruit.label + " ruin your day.",
      src: fruit.src
    },
    {
      cover: "/cards/diner.jpeg",
      title: "#3",
      label: "Consider going for a walk between 12:50PM and 1:10PM today"
      // src: '/fruit/orange.png'
    }
  ];
  let trainLine = getRandomTrainLine();
  let slice = getRandomSlice();
  let park = getRandomPark();
  const nyc_data = [
    {
      cover: "/cards/construction.jpeg",
      title: "#1",
      label: "Time to ride the " + trainLine.label + ". It will guide you well.",
      src: trainLine.src
    },
    {
      cover: "/cards/slice.jpeg",
      title: "#2",
      label: "Get a slice at " + slice.label + ", maybe even two.",
      src: slice.src
    },
    {
      cover: "/cards/park.jpeg",
      title: "#3",
      label: "Only good things can come from hanging around " + park.label + " today",
      src: park.src
    }
    // {
    //     cover: '/cards/car.jpeg',
    //     title: 'Lucky Street',
    //     label: street.label,
    //     src: street.src
    // },
    // {
    //     cover: '/cards/diner.jpeg',
    //     title: 'Lucky Diner',
    //     src: '/fruit/orange.png'
    // },
    // {
    //     cover: '/cards/bar.jpeg',
    //     title: 'Lucky Bar',
    //     src: '/fruit/orange.png'
    // },
    // {
    //     cover: '/cards/deli.jpeg',
    //     title: 'Lucky Deli',
    //     src: '/fruit/orange.png'
    // },
    // {
    //     title: 'Lucky Library',
    //     src: '/fruit/orange.png'
    // },
  ];
  const love_data = [
    {
      cover: "/cards/school.jpeg",
      title: "#1",
      label: "You are likely to have an encounter today. It is unclear if it will be for the better or worse."
    },
    {
      cover: "/cards/friend.jpeg",
      title: "#2",
      label: "Today is not the day to send the message you've been thinking of. Take time to reflect."
    },
    {
      cover: "/cards/bar.jpeg",
      title: "#3",
      label: "???",
      src: "/cat.gif"
    }
  ];
  return {
    misc_data,
    nyc_data,
    love_data
  };
}
export {
  load
};
