let popupHtml = `
        <div id="popup" style="display: none; position: fixed; width: 140px; height: 140px; background-color: #ffffff; ">
            <div id="header" style="cursor: move; background-color: #f1f1f1; width: 100%; height: 30px; padding: 5px;">
                <span style="font-size: 12px;">这里拖动</span>
            </div>
            <canvas id="joystick" width="150" height="150" style="margin:10px;"></canvas>
        </div>`;

let body = (top.document.getElementsByTagName("main")|| top.document.getElementsByTagName("body"))[0];
let div = top.document.createElement('div');
div.innerHTML = popupHtml;
body.appendChild(div);
let canvas = top.document.getElementById('joystick');
let ctx = canvas.getContext('2d');

let joystick = {
    x: 70,
    y: 55,
    radius: 50,
    isMoving: false,
    angle: 0,
    distance: 0,
};

function drawJoystick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(70, 55, joystick.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.strokeStyle = '#aaaaaa';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(joystick.x, joystick.y, 30, 0, Math.PI * 2);
    ctx.fillStyle = '#aaaaaa';
    ctx.fill();
    ctx.closePath();
}

canvas.addEventListener('mousedown', (e) => {
    let dx = e.clientX - (canvas.offsetLeft + top.document.getElementById('popup').offsetLeft) - 70;
    let dy = e.clientY - (canvas.offsetTop + top.document.getElementById('popup').offsetTop) - 55;
    if (dx * dx + dy * dy < joystick.radius * joystick.radius) {
        joystick.isMoving = true;
    }
});

canvas.addEventListener('mousemove', (e) => {
    if (joystick.isMoving) {
        let dx = e.clientX - (canvas.offsetLeft + top.document.getElementById('popup').offsetLeft) - 70;
        let dy = e.clientY - (canvas.offsetTop + top.document.getElementById('popup').offsetTop) - 55;
        joystick.angle = Math.atan2(dy, dx);
        joystick.distance = Math.min(Math.sqrt(dx * dx + dy * dy), joystick.radius);
        joystick.x = 70 + Math.cos(joystick.angle) * joystick.distance;
        joystick.y = 55 + Math.sin(joystick.angle) * joystick.distance;
        drawJoystick();
    }
});

canvas.addEventListener('mouseup', () => {
    joystick.isMoving = false;
    joystick.x = 70;
    joystick.y = 55;
    joystick.angle = 0;
    joystick.distance = 0;
    drawJoystick();
});

// Draggable Popup
let popup = top.document.getElementById('popup');
let header = top.document.getElementById('header');

function openPopup() {
    popup.style.display = 'block';
    popup.style.zIndex = 1000;
    drawJoystick();
}
function closePopup() {
    popup.style.display = 'none';
}


header.onmousedown = function (event) {
    popup.style.position = 'absolute';
    popup.style.zIndex = 1000;

    function moveAt(pageX, pageY) {
        popup.style.left = pageX - popup.offsetWidth / 2 + 'px';
        popup.style.top = pageY - header.offsetHeight / 2 + 'px';
    }

    moveAt(event.pageX, event.pageY);

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    top.document.addEventListener('mousemove', onMouseMove);

    header.onmouseup = function () {
        top.document.removeEventListener('mousemove', onMouseMove);
        header.onmouseup = null;
    };

};
header.ondragstart = function () {
    return false;
};
class js {
    constructor() { }
    getInfo() {
        return {
            id: 'joystick',
            name: '虚拟摇杆',
            blocks: [{
                opcode: 'show',
                blockType: Scratch.BlockType.COMMAND,
                text: '显示摇杆',
                arguments: {}
            },{
                opcode: 'hide',
                blockType: Scratch.BlockType.COMMAND,
                text: '隐藏摇杆',
                arguments: {}
            },{
                opcode: 'rad',
                blockType: Scratch.BlockType.REPORTER,
                text: '摇杆弧度',
                arguments: {}
            },{
                opcode: 'ang',
                blockType: Scratch.BlockType.REPORTER,
                text: '摇杆角度',
                arguments: {}
            },{
                opcode: 'distance',
                blockType: Scratch.BlockType.REPORTER,
                text: '摇杆距离',
                arguments: {}
            },{
                opcode: 'x',
                blockType: Scratch.BlockType.REPORTER,
                text: '摇杆x',
                arguments: {}
            },{
                opcode: 'y',
                blockType: Scratch.BlockType.REPORTER,
                text: '摇杆y',
                arguments: {}
            }]
        };
    }
    show(){
        openPopup()
    }
    hide(){
        closePopup()
    }
    rad(){
        return joystick.angle;
    }
    ang(){
        return joystick.angle/Math.PI*180
    }
    distance(){
        return joystick.distance
    }
    x(){
        return joystick.x-70
    }
    y(){
        return joystick.y-55
    }
}
Scratch.extensions.register(new js())