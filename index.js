
let lineHeight = 50;

class AVlTreeNode {

    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        this.position = window.innerWidth/2;
    }

    setLeft(otherNode) {
        this.left = otherNode;
    }

    setRight(otherNode) {
        this.right = otherNode;
    }

    insert(nodeToInsert) {
        if (nodeToInsert.value < this.value) {
            if (this.left == null) this.setLeft(nodeToInsert);
            else this.left.insert(nodeToInsert);
        } else {
            if (this.right == null) this.setRight(nodeToInsert);
            else this.right.insert(nodeToInsert);
        }
    }


    display(xLeft=0, xRight=window.innerWidth, yPos = 50, level = 1){

        let xPos = (xLeft + xRight)/2;

        let svgWidth = (xRight - xLeft) / 2;


        let id = xPos + "-" + level;
        document.body.innerHTML += `
        <div id="${id}" style="position: absolute; left: ${xPos}px; top: ${yPos}px;"><h2>${this.value}</h2></div>
        `;

        
        let h4Width = document.getElementById(id).clientWidth;
        console.log(h4Width);


        document.body.innerHTML += `
        <svg height="100" width="${svgWidth}" style="position: absolute; left: ${xPos - svgWidth/2 + (h4Width/2)}px; top: ${yPos+lineHeight}px;">
        <line x1="${svgWidth/2}" y1="0" x2="0" y2="100" style="stroke:rgb(255,0,0);stroke-width:2"></line>
        <line x1="${svgWidth/2}" y1="0" x2="${svgWidth}" y2="100" style="stroke:rgb(255,0,0);stroke-width:2"></line>
        </svg> 
        `
        if(this.left != null) this.left.display(xLeft, xPos, yPos + lineHeight*3, level+1);
        if(this.right != null) this.right.display(xPos, xRight, yPos + lineHeight*3, level+1);

    }
}

function genRand(bound){
    return Math.floor(Math.random() * bound)
}

let numLevelsThatFitOnScreen = Math.ceil(window.innerHeight / (lineHeight*3));

let root = new AVlTreeNode(12);
for(let i = 0; i < Math.pow(2, (numLevelsThatFitOnScreen-1)/2.1); i++){
    root.insert(new AVlTreeNode(genRand(25)));
}
root.display();