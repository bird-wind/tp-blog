/** 时间转换格式 **/
//时间戳转换时间格式
$.fn.timestamp = function(format, type){
	if(typeof type !== "string" || type !== "js"){
		type = "default";
	}

	var timestamp = type == "js" ? this[0] : this[0] * 1000;
	return $(timestamp).formatTimestamp(format);
}

//格式化时间戳
$.fn.formatTimestamp = function(format){
	if(typeof format !== "string"){
		format = "yyyy-mm-dd hh:ii:ss";
	}

	var date = new Date();
	if(typeof timestamp === "number" && timestamp >= 0){
		date.setTime(this[0]);
	}

	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours() + "";
	var i = date.getMinutes() + "";
	var s = date.getSeconds() + "";

	var yFormat = $(format).strFristEnd("y");
	var mFormat = $(format).strFristEnd("m");
	var dFormat = $(format).strFristEnd("d");
	var hFormat = $(format).strFristEnd("h");
	var iFormat = $(format).strFristEnd("i");
	var sFormat = $(format).strFristEnd("s");

	var yConM = $(format).strFristEnd('y', 'm').substr(-2, 1);
	var mConD = $(format).strFristEnd('m', 'd').substr(-2, 1);
	var dConH = $(format).strFristEnd('d', 'h').substr(-2, 1);
	var hConI = $(format).strFristEnd('h', 'i').substr(-2, 1);
	var iConS = $(format).strFristEnd('i', 's').substr(-2, 1);

	return $(y).dateFormat(yFormat.length) + yConM
		 + $(m).dateFormat(mFormat.length) + mConD
		 + $(d).dateFormat(dFormat.length) + dConH
		 + $(h).dateFormat(hFormat.length) + hConI
		 + $(i).dateFormat(iFormat.length) + iConS
		 + $(s).dateFormat(sFormat.length);
}

//时间格式补充
$.fn.dateFormat = function(length){
	var date = this[0] ? this[0] + "" : this.selector;

	if(typeof length !== "number" || date.length == length){
		return date;
	}

	if(date.length == 4){
		return date.substr(-2, 2);
	}else if(date.length < length){
		return "0" + date;
	}

	return date;
}

/** 菜单隐藏 **/
$.fn.menuHidden = function(options){
	var el = $(options.el);
	if(el.length != 1){
		return false;
	}
	options.area = options.area ? options.area : 50;
	options.time = options.time ? options.time : 0.7;
	
	$(el).attr('role', "0");

	$(this).click(function(el){
		var el = $(options.el);
		// $(options.el).css("transition", (options.area ? options.area : "50px") + " " + (options.time ? options.time : 0.7) + "s");
		if($(el).attr('role') != "0"){
			
			$(el).attr('role', "0");
			$(el).css({width : ""});
			$(this).children("span").prop("class", "glyphicon glyphicon-menu-left");
		}else{
			$(el).attr('role', "1");
			$(el).css({width : "7%"});
			$(this).children("span").prop("class", "glyphicon glyphicon-menu-right");
		}
	});
}

//以字符索引切割字符串
$.fn.strFristEnd = function(first, end){
	var str = this.selector;
	if(typeof str !== "string"){
		return "";
	}
	if(typeof first !== "string"){
		return str;
	}
	if(typeof end !== "string"){
		return str.substring(str.indexOf(first), str.lastIndexOf(first) + first.length);
	}

	return str.substring(str.indexOf(first), str.indexOf(end) + end.length);
}