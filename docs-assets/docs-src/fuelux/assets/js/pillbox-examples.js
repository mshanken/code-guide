define(function (require) {
	var jquery = require('jquery');

	require('bootstrap');
	require('fuelux');

	$('#pillboxIllustration').pillbox();

	$('#myPillbox').pillbox({
		edit: true,
		onKeyDown: function (data, callback) {
			callback({
				data: [
					{
						text: 'Acai',
						value: 'acai'
					},
					{
						text: 'African cherry orange',
						value: 'african cherry orange'
					},
					{
						text: 'Banana',
						value: 'banana'
					},
					{
						text: 'Bilberry',
						value: 'bilberry'
					},
					{
						text: 'Cantaloupe',
						value: 'cantaloupe'
					},
					{
						text: 'Ceylon gooseberry',
						value: 'ceylon gooseberry'
					},
					{
						text: 'Dragonfruit',
						value: 'dragonfruit'
					},
					{
						text: 'Dead Man\'s Fingers',
						value: 'dead man\'s fingers'
					},
					{
						text: 'Fig',
						value: 'fig'
					},
					{
						text: 'Forest strawberries',
						value: 'forest strawberries'
					},
					{
						text: 'Governor’s Plum',
						value: 'governor’s plum'
					},
					{
						text: 'Grapefruit',
						value: 'grapefruit'
					},
					{
						text: 'Guava',
						value: 'guava'
					},
					{
						text: 'Honeysuckle',
						value: 'honeysuckle'
					},
					{
						text: 'Huckleberry',
						value: 'huckleberry'
					},
					{
						text: 'Jackfruit',
						value: 'jackfruit'
					},
					{
						text: 'Japanese Persimmon',
						value: 'japanese persimmon'
					},
					{
						text: 'Key Lime',
						value: 'key lime'
					},
					{
						text: 'Kiwi',
						value: 'kiwi'
					},
					{
						text: 'Lemon',
						value: 'lemon'
					},
					{
						text: 'Lillypilly',
						value: 'lillypilly'
					},
					{
						text: 'Mandarin',
						value: 'mandarin'
					},
					{
						text: 'Miracle Fruit',
						value: 'miracle fruit'
					},
					{
						text: 'Orange',
						value: 'orange'
					},
					{
						text: 'Oregon grape',
						value: 'oregon grape'
					},
					{
						text: 'Persimmon',
						value: 'persimmon'
					},
					{
						text: 'Pomegranate',
						value: 'pomegranate'
					},
					{
						text: 'Rhubarb',
						value: 'rhubarb'
					},
					{
						text: 'Rose hip',
						value: 'rose hip'
					},
					{
						text: 'Soursop',
						value: 'soursop'
					},
					{
						text: 'Starfruit',
						value: 'starfruit'
					},
					{
						text: 'Tamarind',
						value: 'tamarind'
					},
					{
						text: 'Thimbleberry',
						value: 'thimbleberry'
					},
					{
						text: 'Wineberry',
						value: 'wineberry'
					},
					{
						text: 'Wongi',
						value: 'wongi'
					},
					{
						text: 'Youngberry',
						value: 'youngberry'
					}
				]
			});
		}
	});

	$('#myPillboxEmpty').pillbox({
		edit: true,
		onKeyDown: function (data, callback) {
			callback({
				data: [
					{
						text: 'Acai',
						value: 'acai'
					},
					{
						text: 'African cherry orange',
						value: 'african cherry orange'
					},
					{
						text: 'Banana',
						value: 'banana'
					},
					{
						text: 'Bilberry',
						value: 'bilberry'
					},
					{
						text: 'Cantaloupe',
						value: 'cantaloupe'
					},
					{
						text: 'Ceylon gooseberry',
						value: 'ceylon gooseberry'
					}
				]
			});
		}
	});

	$('#myPillboxTruncateReadOnly').pillbox({
		truncate: true
	});

	$('#myPillbox').on('added', function (event, data) {
		console.log('pillbox added', data);
	});

	$('#myPillbox').on('removed', function (event, data) {
		console.log('pillbox removed', data);
	});

	// buttons
	$('#btnPillboxEnable').click(function () {
		$('#myPillbox').pillbox('enable');
	});

	$('#btnPillboxDisable').click(function () {
		$('#myPillbox').pillbox('disable');
	});

	$('#btnPillboxAdd').click(function () {
		var newItemCount = $('#myPillbox ul li').length + 1;
		$('#myPillbox').pillbox('addItems', {
			text: 'item ' + newItemCount,
			value: 'item ' + newItemCount
		});
	});

	$('#btnPillboxRemoveByValue').click(function () {
		$('#myPillbox').pillbox('removeByValue', 'foo');
	});

	$('#btnPillboxRemoveBySelector').click(function () {
		$('#myPillbox').pillbox('removeBySelector', '.status-success');
	});

	$('#btnPillboxRemoveByText').click(function () {
		$('#myPillbox').pillbox('removeByText', 'Item 6');
	});

	$('#btnPillboxItems').click(function () {
		var items = $('#myPillbox').pillbox('items');
		console.log(items);
	});

	$('#btnPillboxDestroy').click(function () {
		var markup = $('#myPillbox').pillbox('destroy');
		console.log(markup);
		$(this).closest('.section').append(markup);
		$('#myPillbox').pillbox({
			edit: true
		});
	});
});
