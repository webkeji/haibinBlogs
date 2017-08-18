(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.S90Game = function() {
	this.initialize();

	// ad
	this.btn_ad = new lib.btnad();
	this.btn_ad.setTransform(320,919,1,1,0,0,0,320,85);

	// bg
	this.instance = new lib.bg_1("synched",0);
	this.instance.setTransform(320,600,1,1,0,0,0,320,600);

	this.addChild(this.instance,this.btn_ad);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


// symbols:
(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib.btnx = function() {
	this.initialize(img.btnx);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,71);


(lib.end = function() {
	this.initialize(img.end);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,610,512);


(lib.p11 = function() {
	this.initialize(img.p11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,740,274);


(lib.p12 = function() {
	this.initialize(img.p12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,287,214);


(lib.p13 = function() {
	this.initialize(img.p13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,27);


(lib.p14 = function() {
	this.initialize(img.p14);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,112);


(lib.p15 = function() {
	this.initialize(img.p15);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,62,64);


(lib.p17 = function() {
	this.initialize(img.p17);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,418,150);


(lib.p18 = function() {
	this.initialize(img.p18);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,170);


(lib.p21 = function() {
	this.initialize(img.p21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,462,26);


(lib.p22 = function() {
	this.initialize(img.p22);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,165);


(lib.shareTips = function() {
	this.initialize(img.shareTips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1200);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,118,172);


(lib.wajueji1 = function() {
	this.initialize(img.wajueji1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,294,262);


(lib.wajueji2 = function() {
	this.initialize(img.wajueji2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,86,56);


(lib.wajueji3 = function() {
	this.initialize(img.wajueji3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,278);


(lib.yan = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p15();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62,64);


(lib.wajuejilun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060101").s().p("AJcFVIAAg4IAhAAIAAA4gAHsFVIAAg4IAhAAIAAA4gAF8FVIAAg4IAiAAIAAA4gAEMFVIAAg4IAiAAIAAA4gACdFVIAAg4IAhAAIAAA4gAAtFVIAAg4IAhAAIAAA4gAhBFVIAAg4IAiAAIAAA4gAixFVIAAg4IAiAAIAAA4gAkhFVIAAg4IAiAAIAAA4gAmQFVIAAg4IAhAAIAAA4gAoAFVIAAg4IAhAAIAAA4gApwFVIAAg4IAiAAIAAA4gAriFTIAFg4QAPACAQAAIAAA4QgVAAgPgCgALKEdQAQgBAPgCIAIA3IglAEgAtXExIAZgyQARAIALAFIgTAzQgPgEgTgKgAMtEHQAMgFAQgIIAbAxIghAQgAu4DpIApgmQAJAKANALIgkAqQgMgKgPgPgAOCDQIAVgVIArAkQgOAQgMAKgAv5CDIAzgWQAFANAIAPIgxAbQgKgUgFgNgAO/B/IAMgcIA0AUQgGARgIAQgAwUANIA4gDQABAQACAPIg3AIQgDgXgBgNgAPbAeQACgPAAgPIA4AAQAAAUgCAQgAPRhQIA1gQQAFAQAEATIg3AKQgDgQgEgNgAwMhGQAEgUAFgPIA1ASIgIAdgAOjirIAtgiIAUAeIgwAegAvei2QAKgQALgOIArAjIgRAagANZjwIAeguQAQAKANAKIgjAsQgNgKgLgIgAuMkOQAPgMAPgJIAdAwIgaARgAL7kVIALg3IAkAJIgSA1QgOgEgPgDgAsglFQATgGAQgDIAKA3QgOACgPAFgAKRkcIAAg4IAiAAIAAA4gAIikcIAAg4IAhAAIAAA4gAGykcIAAg4IAhAAIAAA4gAFCkcIAAg4IAiAAIAAA4gADSkcIAAg4IAiAAIAAA4gABjkcIAAg4IAhAAIAAA4gAgLkcIAAg4IAfAAIAAA4gAh7kcIAAg4IAiAAIAAA4gAjrkcIAAg4IAiAAIAAA4gAlbkcIAAg4IAiAAIAAA4gAnKkcIAAg4IAhAAIAAA4gAo6kcIAAg4IAhAAIAAA4gAqqkcIAAg4IAiAAIAAA4g");
	this.shape.setTransform(288.6,252.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{rotation:180}}]}).to({state:[{t:this.shape,p:{rotation:0}}]},4).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(184.1,218.3,209.1,68.3);


(lib.w3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wajueji3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,278);


(lib.w2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wajueji2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,86,56);


(lib.w1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.wajueji1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,294,262);


(lib.timebar2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0FF6B").s().p("Egi4ABjQgfAAAAggIAAiEQAAgiAfAAMBFxAAAQATAAAHAMQAFAJAAANIAACEQAAAMgFAJQgHAMgTgBg");
	this.shape.setTransform(226.5,10);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,453,20);


(lib.sun_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sun();
	this.instance.setTransform(0,0,0.831,0.831);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,98,142.9);


(lib.p18_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p18();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,170);


(lib.p16 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47CDFF").s().p("Egx/AfkMAAAg/HMBj+AAAMAAAA/Hg");
	this.shape.setTransform(320,202);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,404);


(lib.p14_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p14();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,161,112);


(lib.p12_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p12();
	this.instance.setTransform(650.2,0);

	this.instance_1 = new lib.p12();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,937.2,214);


(lib.p11_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p11();
	this.instance.setTransform(718.2,0);

	this.instance_1 = new lib.p11();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1458.2,274);


(lib.btnx_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.btnx();
	this.instance.setTransform(-35.4,-35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:-35.4,y:-35.4}}]}).to({state:[{t:this.instance,p:{rotation:30,x:-12.9,y:-48.4}}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-35.4,71,71);


(lib.btnplay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p17();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,418,150);


(lib.boxh = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060101").s().p("ArULVIAA2pIWpAAIAAWpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boxbg = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#060101").s().p("ArULVIAA2pIWpAAIAAWpg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.4,-72.4,145,145);


(lib.bg_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,1008);


(lib._1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D4FB6A").s().p("AAVBgIAAgrIAbAAIAAhUQgIABgMABIgHAAIAAgrIADAAQASABAPgIQAQgHAHgJIAcAAIAACUIAbAAIAAArgAhfBRIAAgtIgnAAIAAgbIAnAAIAAgoIAeAAIAAAoIAmAAIAAAbIgmAAIAAAtg");
	this.shape.setTransform(16.1,18.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,8.6,27.1,19.4);


(lib.yanmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.yan("synched",0);
	this.instance.setTransform(-1.1,79.8,0.086,0.086,0,0,0,31.4,32);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:31.1,scaleX:0.38,scaleY:0.38,x:2,y:75,alpha:1},6,cjs.Ease.get(1)).wait(24).to({startPosition:0},0).to({scaleX:0.56,scaleY:0.56,x:11.5,y:59.5,alpha:0},9,cjs.Ease.get(-0.99)).wait(1));

	// Layer 1
	this.instance_1 = new lib.yan("synched",0);
	this.instance_1.setTransform(17.5,48.5,0.203,0.203,0,0,0,31,32);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,x:31,y:32,alpha:1},8,cjs.Ease.get(1)).wait(10).to({startPosition:0},0).to({scaleX:1.44,scaleY:1.44,x:42,y:20,alpha:0},5,cjs.Ease.get(-0.99)).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,77,5.3,5.5);


(lib.wajueji = function() {
	this.initialize();

	// wajueji1
	this.instance = new lib.w1("synched",0);
	this.instance.setTransform(244.2,153.9,1,1,0,0,0,148.5,132.5);

	// wajueji3
	this.instance_1 = new lib.w3("synched",0);
	this.instance_1.setTransform(104.6,29,1,1,0,0,0,104.6,29);

	// wajueji2
	this.instance_2 = new lib.w2("synched",0);
	this.instance_2.setTransform(142.6,33,1,1,0,0,0,43,28);

	// Layer 6
	this.instance_3 = new lib.wajuejilun();
	this.instance_3.setTransform(288.6,252.5,1,1,0,0,0,288.6,252.5);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,393.1,286.6);


(lib.timebarmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1799 = function() {
		this.stop();
		timeEnd();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1799).call(this.frame_1799));

	// yan-mc
	this.instance = new lib.yanmc();
	this.instance.setTransform(486.2,-17.1,0.208,0.208,0,0,0,30.8,32);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:20.1},1799).wait(1));

	// wajueji
	this.instance_1 = new lib.wajueji();
	this.instance_1.setTransform(445,-0.3,0.208,0.208,0,0,0,196.4,143.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-20.9},1799).wait(1));

	// time-bar-2
	this.instance_2 = new lib.timebar2("synched",0);
	this.instance_2.setTransform(5,13,1,1,0,0,0,0,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0},1799).wait(1));

	// p2-1.png
	this.instance_3 = new lib.p21();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(1800));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-30.1,485.9,59.6);


(lib.sunmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14));

	// Layer 1
	this.instance = new lib.sun_1("synched",0);
	this.instance.setTransform(0,63,0.137,0.137,0,0,0,47.5,126);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},14,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,45.8,13.4,19.6);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// p1-4
	this.instance = new lib.p14_1("synched",0);
	this.instance.setTransform(-62,93,1,1,0,0,0,80.5,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:770.1},199).wait(1));

	// yan-mc
	this.instance_1 = new lib.yanmc();
	this.instance_1.setTransform(617.7,201.1,1,1,0,0,0,31,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(200));

	// wajueji
	this.instance_2 = new lib.wajueji();
	this.instance_2.setTransform(419.3,282.1,1,1,0,0,0,196.3,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(200));

	// di
	this.instance_3 = new lib.p13();
	this.instance_3.setTransform(35,379.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(200));

	// p1-2
	this.instance_4 = new lib.p12_1("synched",0);
	this.instance_4.setTransform(-339,297,1,1,0,0,0,163,107);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:311},199).wait(1));

	// p1-1
	this.instance_5 = new lib.p11_1("synched",0);
	this.instance_5.setTransform(-402.1,267,1,1,0,0,0,370,137);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:316},199).wait(1));

	// p1-6
	this.instance_6 = new lib.p16("synched",0);
	this.instance_6.setTransform(355,202,1,1,0,0,0,320,202);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-772.1,0,1458.2,425.5);


(lib.P2 = function() {
	this.initialize();

	// Layer 2
	this.score = new cjs.Text("0", "bold 22px Roboto");
	this.score.textAlign = "center";
	this.score.lineHeight = 24;
	this.score.lineWidth = 54;
	this.score.setTransform(506.1,52.6);

	// Layer 3
	this.time_bar = new lib.timebarmc();
	this.time_bar.setTransform(323,200,1,1,0,0,0,231,13);

	// Layer 1
	this.b12 = new lib.boxbg();
	this.b12.setTransform(496,798);
	this.b12.alpha = 0.102;

	this.b11 = new lib.boxbg();
	this.b11.setTransform(328,798);
	this.b11.alpha = 0.102;

	this.b10 = new lib.boxbg();
	this.b10.setTransform(160,798);
	this.b10.alpha = 0.102;

	this.b9 = new lib.boxbg();
	this.b9.setTransform(496,635);
	this.b9.alpha = 0.102;

	this.b8 = new lib.boxbg();
	this.b8.setTransform(328,635);
	this.b8.alpha = 0.102;

	this.b7 = new lib.boxbg();
	this.b7.setTransform(160,635);
	this.b7.alpha = 0.102;

	this.b6 = new lib.boxbg();
	this.b6.setTransform(496,471);
	this.b6.alpha = 0.102;

	this.b5 = new lib.boxbg();
	this.b5.setTransform(328,471);
	this.b5.alpha = 0.102;

	this.b4 = new lib.boxbg();
	this.b4.setTransform(160,471);
	this.b4.alpha = 0.102;

	this.b3 = new lib.boxbg();
	this.b3.setTransform(496,308);
	this.b3.alpha = 0.102;

	this.b2 = new lib.boxbg();
	this.b2.setTransform(328,308);
	this.b2.alpha = 0.102;

	this.b1 = new lib.boxbg();
	this.b1.setTransform(160,308);
	this.b1.alpha = 0.102;

	this.instance = new lib.p22();

	this.addChild(this.instance,this.b1,this.b2,this.b3,this.b4,this.b5,this.b6,this.b7,this.b8,this.b9,this.b10,this.b11,this.b12,this.time_bar,this.score);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,870.5);


(lib.P1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(54).call(this.frame_54));

	// sun-mc
	this.instance = new lib.sunmc();
	this.instance.setTransform(162.2,439.7,0.4,0.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(51));

	// sun-mc
	this.instance_1 = new lib.sunmc();
	this.instance_1.setTransform(79,474.5,0.6,0.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).wait(45));

	// sun-mc
	this.instance_2 = new lib.sunmc();
	this.instance_2.setTransform(553.1,780.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).wait(38));

	// p1-4
	this.instance_3 = new lib.sky();
	this.instance_3.setTransform(335,212.7,1,1,0,0,0,370,212.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(55));

	// btn_play
	this.btn_play = new lib.btnplay();
	this.btn_play.setTransform(313,648.3,0.6,0.6,0,0,0,209,75);
	this.btn_play.alpha = 0;
	this.btn_play._off = true;
	new cjs.ButtonHelper(this.btn_play, 0, 1, 2, false, new lib.btnplay(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn_play).wait(23).to({_off:false},0).to({scaleX:1.08,scaleY:1.08,alpha:1},24,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-807.1,0,1458.2,425.5);


(lib.End = function() {
	this.initialize();

	// Layer 2
	this.score = new cjs.Text("0", "bold 22px Roboto", "#47BB6E");
	this.score.textAlign = "center";
	this.score.lineHeight = 24;
	this.score.lineWidth = 50;
	this.score.setTransform(181.1,-74.3);

	// Layer 1
	this.btn_close = new lib.btnx_1();
	this.btn_close.setTransform(255.1,-243.6);
	new cjs.ButtonHelper(this.btn_close, 0, 1, 2, false, new lib.btnx_1(), 3);

	this.instance = new lib.end();
	this.instance.setTransform(-304.9,-232.7);

	// Layer 3
	this.instance_1 = new lib.shareTips();
	this.instance_1.setTransform(-319.9,-501.9);

	this.addChild(this.instance_1,this.instance,this.btn_close,this.score);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-319.9,-501.9,640,1200);


(lib.Box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(25).call(this.frame_39));

	// hit
	this.hit = new lib.boxh();
	new cjs.ButtonHelper(this.hit, 0, 1, 2, false, new lib.boxh(), 3);

	this.timeline.addTween(cjs.Tween.get(this.hit).to({_off:true},39).wait(1));

	// Layer 2
	this.instance = new lib._1("synched",0);
	this.instance.setTransform(153.8,-35,0.549,0.549,0,0,0,17.7,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({startPosition:0,_off:false},0).to({scaleX:1,scaleY:1,x:166.8,y:-49.9,alpha:1},10).wait(2).to({startPosition:0},0).to({scaleX:1.49,scaleY:1.49,x:171.7,y:-61.7,alpha:0},3).to({_off:true},6).wait(1));

	// wajueji1
	this.instance_1 = new lib.w1("synched",0);
	this.instance_1.setTransform(81.5,0.2,0.595,0.595,0,0,0,148.5,132.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15).to({startPosition:0,_off:false},0).wait(16).to({startPosition:0},0).to({x:61.5,alpha:0},7).to({_off:true},1).wait(1));

	// wajueji3
	this.instance_2 = new lib.w3("synched",0);
	this.instance_2.setTransform(-1.6,-74.1,0.595,0.595,0,0,0,104.6,28.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(15).to({startPosition:0,_off:false},0).to({regY:29,rotation:13.3},6,cjs.Ease.get(0.86)).to({regY:28.9,rotation:0},4,cjs.Ease.get(-0.99)).wait(6).to({startPosition:0},0).to({x:-21.5,alpha:0},7).to({_off:true},1).wait(1));

	// wajueji2
	this.instance_3 = new lib.w2("synched",0);
	this.instance_3.setTransform(20.9,-71.7,0.595,0.595,0,0,0,43,27.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({startPosition:0,_off:false},0).wait(16).to({startPosition:0},0).to({x:0.9,alpha:0},7).to({_off:true},1).wait(1));

	// lun
	this.instance_4 = new lib.wajuejilun();
	this.instance_4.setTransform(107.9,58.9,0.595,0.595,0,0,0,288.6,252.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(15).to({_off:false},0).wait(16).to({x:87.9,alpha:0},7).to({_off:true},1).wait(1));

	// sun
	this.instance_5 = new lib.sun_1("synched",0);
	this.instance_5.setTransform(0,45.2,0.094,0.094,0,0,0,47.6,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:47.5,scaleX:0.68,scaleY:0.68,y:35.2},14,cjs.Ease.get(1)).wait(8).to({startPosition:0},0).to({regX:47.4,regY:126.2,scaleX:0.4,scaleY:0.4,rotation:11.9,x:-8.3,y:39.8},3).wait(6).to({y:52.8},0).to({x:-28.3,alpha:0},7).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.4,-72.4,145,145);


(lib.btnad = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p18_1("synched",0);
	this.instance.setTransform(320,87,1,1,0,0,0,320,87);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,640,170);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;