<template>
	<div>
		<div class="panel-body">
			<div class="container">
				<div class="row">
					<div class="col-md-10">
						<vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import VueFormGenerator from 'vue-form-generator'
import 'vue-form-generator/dist/vfg.css'

Vue.use(VueFormGenerator)

export default {
	name: 'AddNewBrew',
	data () {
	return {
		showModal : false,
		model: {
		id: 1
		},
		schema: {
		fields: [
			{
			type: 'input',
			inputType: 'text',
			label: 'ID (disabled text field)',
			model: 'id',
			readonly: true,
			disabled: true
			},
			{
			type: 'input',
			inputType: 'text',
			label: 'Coffee Name',
			model: 'coffee-name',
			placeholder: 'Coffee name',
			featured: true,
			required: true,
			styleClasses:'col-md-6 font-12'
			},
			{
			type: 'input',
			inputType: 'text',
			label: 'Region & Country',
			model: 'region-country',
			placeholder: 'Region and/or country',
			featured: true,
			styleClasses:'col-md-6'
			},
			{
			type: 'input',
			inputType: 'text',
			label: 'Producer',
			model: 'producer',
			placeholder: 'Producer',
			featured: true,
			styleClasses:'col-md-6'
			},
			{
			type: 'input',
			inputType: 'text',
			label: 'Varietal',
			model: 'varietal',
			placeholder: 'Varietal',
			featured: true,
			styleClasses:'col-md-6'
			},
			{
			type: 'input',
			inputType: 'text',
			label: 'Processing Method',
			model: 'Processing Method',
			placeholder: 'Processing Method',
			featured: true,
			styleClasses:'col-md-6'
			},
			{
			type: "input",
			inputType: "date",
			label: "Roast Date",
			model: "roastDate",
			set: function(model, val) {
				model.roastDate = new Date(val).valueOf();
			},
			featured: true,
			styleClasses:'col-md-6'
			}
		],
		groups: [
		{
			legend: "User Details",
			fields: [
				{
					type: "input",
					inputType: "number",
					id: "current_age",
					label: "Age",
					model: "age"
				}
			]
		},
		{
			legend: "Rating",
			fields: [
				{
					type: "select",
					label: "Color",
					model: "color",
					values: [
						"Red",
						"Green",
						"Blue"
					]
				}
			]
		},
		{
			legend: "Aroma",
			fields: [
				{
					type: "input",
					inputType: "text",
					id: "fragance",
					label: "Fragance",
					model: "fragance",
					hint: "Note: Fragance is the scent of coffee grounds before water is added",
					help: "Fragance is the scent of coffee grounds before water is added"
				},
				{
					type: "input",
					inputType: "text",
					id: "aroma",
					label: "Aroma",
					model: "aroma",
					hint: "Note: Aroma is the scent of coffee grounds after water is added",
					help: "Aroma is the scent of coffee grounds after water is added"
				}
			]
		},
	]
		},
		formOptions: {
		validateAfterLoad: true,
		validateAfterChanged: true,
		validateAsync: true
		}
	}
	}
}
</script>

<style module>
	html {
		font-family: 'Arial';
		font-size: 12px;
		color: red;
	}
	.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, .5);
	display: table;
	transition: opacity .3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 80%;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
	transition: all .3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
	margin-top: 0;
	color: #42b983;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>