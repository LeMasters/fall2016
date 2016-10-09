// object-oriented version of supershapes collection
// garrison lemasters
// georgetown fall 2016
// draft iteration 1
// just the crispy outer shell

/*
The structure:
SuperBadge Class will eventually
comprise 4+/- Objects built out of
the SuperShape Class.  See my accompanying
illustration for info.

This may get a little tricky.  
Don't push through too quickly.  
Take your time to learn what things do.
*/

// This will become an array of objects
// built out of the SuperBadge Class
var myBadge = [];

// The other array of objects --
// individual SuperShapes -- is not
// declared in the Global variable
// section because every SuperBadge
// needs its own SuperShapes -- global
// variables won't help much.  We'll
// declare a new myShape each time we
// build a new SuperBadge.

// Other globals
var palette;

// Some of these are old and should be
// removed... I'll attend to this later.
var backingPaint;
var reductioAdAbsurdam;
var fixedRadius;
var superValues = [];
var n1 = 1;
var n2 = 1;
var n3 = 1;
var a = 1;
var b = 1;
var c = 1;
var situatedIdealRadius;
var rFactor = 1;
var iterativeReductionRatio;
var realX, realY;
var radius;
var qtyPoints;

function setup() {
    createCanvas(800, 800);
    smooth();
	// I put all of the startup value-setting
	// in another function --
	// initialize();
	// -- so that I could
	// ignore them more easily.
	
	initialize();
	
    var bkgd = (palette[int(random(palette.length))]);
	background(bkgd);
	
	// I'll see if this is working
	// by building an empty superbadge;
	// this superbadge will have 
	// an empty supershape inside.
	// None of them will have any
	// properties other than an ID
	// number -- the point is to test and
	// see I'm creating the objects
	// from the Class specifications
	// in the right way.  I can't do
	// anything with these objects yet,
	// but as long as I don't get any errors,
	// I'm in good shape!

	// note that because I'm only creating
	// a single superBadge, I don't need
	// a for() loop.  Also:  I'm not going
	// to put it inside an array, as there
	// is only 1.  I'll just give it its
	// own temporary local variable.
	
	// I'll pass "0" as the ID for the
	// new object.
	
	var testBadge = new SuperBadge(0)
}

// I've removed draw() for this test.

function initialize() {
	// need to make this comprehensible
	// just ignore the values for now.
    fixedRadius = 90;
    fixedMarginShift = 25; //fixedRadius * 0.4;
    reductioAdAbsurdam = 0.2;
    situatedIdealRadius = fixedRadius;
    iterativeReductionRatio = 1;
    realX = situatedIdealRadius + fixedMarginShift;
    realY = situatedIdealRadius + fixedMarginShift;
	
	setSuperValues();
	createPalette();
	
	// these set quality of output, sort of.
	radius = 800;
	qtyPoints = 1000;
}

function createPalette() {
	// palette drawn from detail
	// of eBoy poster, ca. 2010
	palette = [
	    "#637051",
	    "#9C8C7E",
	    "#38392C",
	    "#C5C1A6",
	    "#F2F1E3",
	    "#B43D1D",
	    "#E2CB12",
	    "#28A0C1"
	];
}

// array particular to the creation of supershapes.
// don't worry about this for now.
function setSuperValues() {
    var superValues = [
        [6, 60, 55, 30, 1, 1, 1],
        [4.4, 1, 1, 7, 3, 1, 1],
        [3.14159, 1, 1.15, 1.25, 12, 1, 1],
        [3.1, 3.5, 2.5, 30, 12, 1, 1],
        [TWO_PI, .3, 3, .6, 5, 1, 1],
        [5, 2, 16, 2.5, 12, 1, 1],
        [5, 1, 1, 1, 8, 1, 1],
        [8, 2, .5, .5, 2, 1, 1],
        [3, 0.2, 1.7, 1.7, 3, 1, 1],
        [13, 0.5, 4, 2, 3, 1, 1],
        [1625, 1, 1, 1, 12, 1, 1],
        [PI, 9.1, 9.1, 9.1, 12, 1, 1],
        [5, 1, 1, .5, 2, 1, 1],
        [5, 0.5, 2, 1, 12, 1, 1],
        [6, 0.53, 1.69, 0.45, 1, 1],
        [0, 1, 1, 1, 2, 1, 1],
        [15, 0.5, 0.5, 16, 4, 1, 1],
        [8, 0.5, 0.5, 8, 2, 1, 1],
        [5, 2, 7, 7, 2, 1, 1],
        [7, 2, 9, 1, 2, 1, 1],
        [3, 30, 30, 30, 2, 2, 1],
        [0.7, 1.5, 8, 8, 1, 1],
        [30, 75, 1.5, 35, 1, 0.6],
        [10, 1, 0.5, 2, 1, 1]
    ];
}

function adjustSuperValues() {
    var q = int(random(superValues.length));
    var adj = int(int(random(10, 40)) * 0.1)-0.5;
    m = superValues[q][0] * adj;
    n1 = superValues[q][1] * adj;
    n2 = superValues[q][2] * adj;
    n3 = superValues[q][3] * adj;
    c = superValues[q][4] * adj;
    a = superValues[q][5];
    b = superValues[q][6];
}

// takes supervalues and creates 
// data for supershapes
function plotSuperShape(theta) {
    var p1 = (1.0 / a) * cos(theta * m * 0.25);
    p1 = pow(abs(p1), n2);
    var p2 = (1.0 / b) * sin(theta * m * 0.25);
    p2 = pow(abs(p2), n3);
    var p3 = pow(p1 + p2, 1.0 / n1);
    return (1.0 / p3);
}

// CLASSES BELOW
// CLASSES BELOW
// CLASSES BELOW

// Note that you don't always need the 
// ID number that I stick inside every
// Class I build.  But it does come in
// handy sometimes, and is a safe way
// to begin when I'm not sure what
// else to do...

// Note that in order to make things a bit
// clearer, I'm going to insert two
// supershapes into our Badge.  The array
// shapeLayer[] is where we'll store them.
// This may look confusing, but remember that
// we handle this process here in the same fashion 
// as we handle it outside of a Class -- we just
// add "this." to everything inside the Class.

// Class SuperBadge()
function SuperBadge(_badgeID) {
	this.badgeID = _badgeID;
	this.shapeLayer = [];
	var shapeQty = 2;
	for (var layer = 0; layer<shapeQty; layer++) {

		// Again, it looks weird, but it ain't.
		// we know we need this.shapeLayer,
		// and we know we need shapeLayer.push --
		// It may start to look like a German noun
		// after a while...
		// (Geschwindigkeitsbegrenzung = speed limit)
		// but you can use as many dots as you need.
		
		this.shapeLayer.push(new SuperShape(layer, this.badgeID));
		
		// so this creates a new element in my
		// shapeLayer array, and fills it with 
		// an object from my superShape Class.
		// IMPORTANTLY, this shapeLayer array
		// belongs ONLY to this specific
		// superbadge.  It is stored inside
		// this superbadge.
		
		// finally, note that shapeQty is not a
		// this.shapeQty -- I could have built
		// it into the Class, but I'd need to 
		// get the .length eventually anyway,
		// so it seemed redundant.
		// layer, of course, is just a for() loop
		// variable, and won't make it out of
		// here alive.
	}
	
	this.showBadge = function(){
		// just a dummy function
		// a placeholder
	}
}


// I'll include a second number here,
// "owner", which refers to the SuperBadge
// that created any particular supershape.
// Do I need it?  Don't know yet.
// Why do you ask so many questions?

// Class SuperShape() gets built by
// and inserted into class SuperBadge

function SuperShape(_shapeID, _owner) {
	this.shapeID = _shapeID;
	
	this.showShape = function() {
		// just a dummy function
	}
}

// superior!  Let's add a second
// class for inclusion, too, just
// to show how this can work.
// Note that I haven't put it into 
// any Classes yet, for the sake
// of clarity.

function SuperTimer(_isArmed, _millisFromNow){
	this.isArmed = _isArmed;
	this.timerStart = millis();
	this.millisFromNow = _millisFromNow;
	
	this.clockWatcher = function() {
		// dummy f()
	}
}
