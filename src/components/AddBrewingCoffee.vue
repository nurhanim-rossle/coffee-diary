<template>
  <div class="panel-body">
    <div class="container">
      <div class="col-md-6">
        <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
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
  data () {
    return {
      model: {
        id: 1,
        name: 'John Doe',
        password: 'J0hnD03!x4',
        skills: ['Javascript', 'VueJS'],
        email: 'john.doe@gmail.com',
        status: true
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
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Producer',
            model: 'producer',
            placeholder: 'Producer',
            featured: true,
            required: true
          },
          {
            type: 'input',
            inputType: 'password',
            label: 'Password',
            model: 'password',
            min: 6,
            required: true,
            hint: 'Minimum 6 characters',
            validator: VueFormGenerator.validators.string
          },
          {
            type: 'select',
            label: 'Skills',
            model: 'skills',
            values: ['Javascript', 'VueJS', 'CSS3', 'HTML5']
          },
          {
            type: 'input',
            inputType: 'email',
            label: 'E-mail',
            model: 'email',
            placeholder: 'User\'s e-mail address'
          },
          {
            type: 'checkbox',
            label: 'Status',
            model: 'status',
            default: true
          }
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