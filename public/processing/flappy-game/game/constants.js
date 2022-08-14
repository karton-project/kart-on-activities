const CANVAS_WIDTH = Math.max(
    document.documentElement["clientWidth"],
    document.body["scrollWidth"],
    document.documentElement["scrollWidth"],
    document.body["offsetWidth"],
    document.documentElement["offsetWidth"]
);
const CANVAS_HEIGHT = Math.max(
    document.documentElement["clientHeight"],
    document.body["scrollHeight"],
    document.documentElement["scrollHeight"],
    document.body["offsetHeight"],
    document.documentElement["offsetHeight"]
);
const MIN_PIPE_GAP = 170;
const MAX_PIPE_GAP = 200;
const MIN_PIPE_HEIGHT = CANVAS_HEIGHT * 0.5;
const MAX_PIPE_HEIGHT = CANVAS_HEIGHT * 0.9;
const PIPE_WIDTH = 100;
const MaxPipeOffset = 400;
const MinPipeOffset = 300;
let PipeSpeed = 2;
const BIRDSIZE = { Width: 70, Height: 50 };
const BIRDANIMATIONFRAME = [200, 272, 344, 416];
const FLOOROFFSET = 150;

