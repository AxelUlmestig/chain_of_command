app.controller('space_controller', function($scope, state) {
	$scope.shapes = ['Rectangle', 'Circle'];

	$scope.selectedShapeChanged = function(shapeName) {
		console.log(shapeName);
	}

	$scope.circle = {
		'start': {},
		'center': {}
	}

	$scope.rectangle = {
		'start': {},
		'corner1': {},
		'corner2': {}
	}

	$scope.submitCircle = function(circ) {
		var xStart = circ.start.x;
		var yStart = circ.start.y;

		var xSpaceCenter = circ.center.x;
		var ySpaceCenter = circ.center.y;

		var radius = circ.radius;

		state.space = createCircularSpace(xStart, yStart, xSpaceCenter, ySpaceCenter, radius);
	}

	$scope.submitRectangle = function(rect) {
		var xStart = rect.start.x;
		var yStart = rect.start.y;

		var xCorner1 = rect.corner1.x;
		var yCorner1 = rect.corner1.y;

		var xCorner2 = rect.corner2.x;
		var yCorner2 = rect.corner2.y;

		state.space = createRectangularSpace(xStart, yStart, xCorner1, yCorner1, xCorner2, yCorner2);
	}


})