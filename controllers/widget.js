var selected = false;

init(arguments[0] || {});

var container;
function init(args) {
	var exclude = ['id', 'selected', 'title', 'font'];
	$.vContainer.applyProperties( _.omit(args, exclude) );
	
	if (OS_IOS) {
		
	}
	else {
		initAndroid(args);
	}
}

function initAndroid(args) {
	console.log(args);
	$.vAndroidSwitch.setTitle(args.title);
	$.vAndroidSwitch.setTextAlign(args.textAlign || 'left');
}

function initIos(args) {
	var exclude = ['id', 'selected', 'title', 'font'];
	$.vCheckbox.applyProperties( _.omit(args, exclude) );
	
  	setValue(args.selected == 'true');
	$.title.text = args.title;
}

function checkboxClick(e) {
	setValue(!selected);
  	$.trigger('change', { value: selected });
}

function setValue(isSelected) {
  	selected = isSelected;
	// $.icon.applyProperties( $.createStyle({ classes: 'imc-checkbox-icon-' + (isSelected ? 'selected' : 'normal') }) );
}
exports.setValue = setValue;

exports.getValue = function() {
	return selected;
};
