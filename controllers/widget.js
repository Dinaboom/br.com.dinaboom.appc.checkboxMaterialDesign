var selected = false;

init(arguments[0] || {});

var container;
function init(args) {
	var exclude = ['id', 'selected', 'title', 'font'];
	$.vContainer.applyProperties( _.omit(args, exclude) );
	
	if (OS_IOS) {
		initIos(args);		
	}
	else {
		initAndroid(args);
	}
}

function initAndroid(args) {
	$.vAndroidSwitch.setTitle(args.title);
	$.vAndroidSwitch.setTextAlign(args.textAlign || 'left');
	$.vAndroidSwitch.setValue(args.value || false);
	
	$.vAndroidSwitch.on('change', function(e) {
		setValue($.vAndroidSwitch.getValue());
	});
}

function initIos(args) {
	$.vIosTitle.setText(args.title);
	
	$.vIos.addEventListener('click', vIosClicked);
}

function vIosClicked(e) {
	setValue(!selected);
}

function setValue(isSelected) {
  	selected = isSelected;
  	
  	if (OS_IOS) {
		var classSelected = (isSelected ? 'iconOn' : 'iconOff');
		$.vIosIcon.applyProperties( $.createStyle({ classes: [classSelected] }) );
	}
	
	$.trigger('change', { value: selected });
}
exports.setValue = setValue;

exports.getValue = function() {
	return selected;
};
