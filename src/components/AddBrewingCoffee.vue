<template>
  <div>
   <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> 

  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="panel-body">
                <div class="container">
                  <div class="col-md-12">
                    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                  </div>
                </div>
              </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
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
  name: 'AddBrewingCoffee',
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
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Region & Country',
            model: 'region-country',
            placeholder: 'Region and/or country',
            featured: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Producer',
            model: 'producer',
            placeholder: 'Producer',
            featured: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Varietal',
            model: 'varietal',
            placeholder: 'Varietal',
            featured: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Processing Method',
            model: 'Processing Method',
            placeholder: 'Processing Method',
            featured: true
          },
          {
            type: "input",
            inputType: "date",
            label: "Roast Date",
            model: "roastDate",
            set: function(model, val) {
              model.roastDate = new Date(val).valueOf();
            },
            featured: true
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

<style scoped>
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