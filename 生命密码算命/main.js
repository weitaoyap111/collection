var data = document.getElementById("birthday_date");
var data2 = document.getElementById("birthday_date2");
var data3 = document.getElementById("birthday_date3");
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var f = 0;
var g = 0;
var h = 0;

var i = 0;
var j = 0;
var k = 0;
var l = 0;

var m = 0;
var n = 0;

var o = 0;

var p = 0;
var q = 0;
var r = 0;

var x = 0;
var w = 0;
var s = 0;

var v = 0;
var u = 0;
var t = 0;

var a1 = 0;
var b1 = 0;
var c1 = 0;
var d1 = 0;
var e1 = 0;
var f1 = 0;
var g1 = 0;
var h1 = 0;

var i1 = 0;
var j1 = 0;
var k1 = 0;
var l1 = 0;

var m1 = 0;
var n1 = 0;

var o1 = 0;

var a2 = 0;
var b2 = 0;
var c2 = 0;
var d2 = 0;
var e2 = 0;
var f2 = 0;
var g2 = 0;
var h2 = 0;

var i2 = 0;
var j2 = 0;
var k2 = 0;
var l2 = 0;

var m2 = 0;
var n2 = 0;

var o2 = 0;

var invalidChars = [
  "-",
  "+",
  "e",
  "E",
];

data.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-\E]/gi, "");
});


data.addEventListener("keydown", function(e) {
	if (invalidChars.includes(e.key)) {
		e.preventDefault();
	}
});

data2.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-\E]/gi, "");
});


data2.addEventListener("keydown", function(e) {
	if (invalidChars.includes(e.key)) {
		e.preventDefault();
	}
});

data3.addEventListener("input", function() {
  this.value = this.value.replace(/[e\+\-\E]/gi, "");
});


data3.addEventListener("keydown", function(e) {
	if (invalidChars.includes(e.key)) {
		e.preventDefault();
	}
});

function calculate(){
	if (data.value > 99991231){
		console.log("max is 99991231");
		document.getElementById("birthday_date").value = "99991231";
	}
	else
	{
		main_core(data.value);
	}
}

function final_single_digits(value){
	var t1 = 0;
	var t2 = 0;
	while (value > 10){
		value = value.toString();
		t1 = Number(value[0]);
		t2 = Number(value[1]);
		value = t1 + t2;
	}
	return value;
}

function main_core(value)
{
	value = value.toString();
	a = Number(value[4]);
	b = Number(value[5]);
	c = Number(value[6]);
	d = Number(value[7]);
	e = Number(value[0]);
	f = Number(value[1]);
	g = Number(value[2]);
	h = Number(value[3]);
	
	i = final_single_digits(a + b);
	j = final_single_digits(c + d);
	k = final_single_digits(e + f);
	l = final_single_digits(g + h);
	
	m = final_single_digits(i + j);
	n = final_single_digits(k + l);
	
	o = final_single_digits(m + n);
	
	p = final_single_digits(m + o);
	q = final_single_digits(n + o);
	r = final_single_digits(p + q);
	
	x = final_single_digits(i + m);
	w = final_single_digits(j + m);
	s = final_single_digits(w + x);
	
	v = final_single_digits(k + n);
	u = final_single_digits(l + m);
	t = final_single_digits(v + u);
	
	display();
}

function display(){
	document.getElementById("calc_a").innerHTML = a;
	document.getElementById("calc_b").innerHTML = b;
	document.getElementById("calc_c").innerHTML = c;
	document.getElementById("calc_d").innerHTML = d;
	document.getElementById("calc_e").innerHTML = e;
	document.getElementById("calc_f").innerHTML = f;
	document.getElementById("calc_g").innerHTML = g;
	document.getElementById("calc_h").innerHTML = h;
	document.getElementById("calc_i").innerHTML = i;
	document.getElementById("calc_j").innerHTML = j;
	document.getElementById("calc_k").innerHTML = k;
	document.getElementById("calc_l").innerHTML = l;
	document.getElementById("calc_m").innerHTML = m;
	document.getElementById("calc_n").innerHTML = n;
	document.getElementById("calc_o").innerHTML = o;
	document.getElementById("calc_p").innerHTML = p;
	document.getElementById("calc_q").innerHTML = q;
	document.getElementById("calc_r").innerHTML = r;
	document.getElementById("calc_s").innerHTML = s;
	document.getElementById("calc_t").innerHTML = t;
	document.getElementById("calc_u").innerHTML = u;
	document.getElementById("calc_v").innerHTML = v;
	document.getElementById("calc_w").innerHTML = w;
	document.getElementById("calc_x").innerHTML = x;
	
	document.getElementById("calc_a1").innerHTML = a;
	document.getElementById("calc_b1").innerHTML = b;
	document.getElementById("calc_c1").innerHTML = c;
	document.getElementById("calc_d1").innerHTML = d;
	document.getElementById("calc_e1").innerHTML = e;
	document.getElementById("calc_f1").innerHTML = f;
	document.getElementById("calc_g1").innerHTML = g;
	document.getElementById("calc_h1").innerHTML = h;
	document.getElementById("calc_i1").innerHTML = i;
	document.getElementById("calc_j1").innerHTML = j;
	document.getElementById("calc_k1").innerHTML = k;
	document.getElementById("calc_l1").innerHTML = l;
	document.getElementById("calc_m1").innerHTML = m;
	document.getElementById("calc_n1").innerHTML = n;
	document.getElementById("calc_o1").innerHTML = o;
	document.getElementById("calc_p1").innerHTML = p;
	document.getElementById("calc_q1").innerHTML = q;
	document.getElementById("calc_r1").innerHTML = r;
	document.getElementById("calc_s1").innerHTML = s;
	document.getElementById("calc_t1").innerHTML = t;
	document.getElementById("calc_u1").innerHTML = u;
	document.getElementById("calc_v1").innerHTML = v;
	document.getElementById("calc_w1").innerHTML = w;
	document.getElementById("calc_x1").innerHTML = x;
	
	document.getElementById("emotion1").value = i;
	document.getElementById("emotion2").value = j;
	document.getElementById("emotion3").value = k;
	document.getElementById("emotion4").value = l;
	document.getElementById("emotion5").value = m;
	document.getElementById("emotion6").value = n;
	document.getElementById("emotion7").value = o;
}

function reset(){
	window.location.reload();
}

function calculate2(){
	if (data2.value > 99991231){
		console.log("max is 99991231");
		document.getElementById("birthday_date2").value = "99991231";
	}
	else if (data3.value > 99991231){
		console.log("max is 99991231");
		document.getElementById("birthday_date3").value = "99991231";
	}
	else
	{
		main_core2(data2.value, data3.value);
	}
}

function main_core2(value1, value2)
{
	value1 = value1.toString();
	a1 = Number(value1[4]);
	b1 = Number(value1[5]);
	c1 = Number(value1[6]);
	d1 = Number(value1[7]);
	e1 = Number(value1[0]);
	f1 = Number(value1[1]);
	g1 = Number(value1[2]);
	h1 = Number(value1[3]);
	
	i1 = final_single_digits(a1 + b1);
	j1 = final_single_digits(c1 + d1);
	k1 = final_single_digits(e1 + f1);
	l1 = final_single_digits(g1 + h1);
	
	m1 = final_single_digits(i1 + j1);
	n1 = final_single_digits(k1 + l1);
	
	o1 = final_single_digits(m1 + n1);
	
	value2 = value2.toString();
	a2 = Number(value2[4]);
	b2 = Number(value2[5]);
	c2 = Number(value2[6]);
	d2 = Number(value2[7]);
	e2 = Number(value2[0]);
	f2 = Number(value2[1]);
	g2 = Number(value2[2]);
	h2 = Number(value2[3]);
	
	i2 = final_single_digits(a2 + b2);
	j2 = final_single_digits(c2 + d2);
	k2 = final_single_digits(e2 + f2);
	l2 = final_single_digits(g + h2);
	
	m2 = final_single_digits(i2 + j2);
	n2 = final_single_digits(k2 + l2);
	
	o2 = final_single_digits(m2 + n2);
	
	display2(final_single_digits(o1+o2));
}

function display2(value){
	document.getElementById("partner_o").value = value;
}