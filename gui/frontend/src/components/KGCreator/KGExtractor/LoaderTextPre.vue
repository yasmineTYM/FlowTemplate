<template>
  <v-card>
    <v-card-title class="headline">
      Corpus
    </v-card-title>
    <v-divider></v-divider>

    <v-card-actions class="mt-5">
      <v-row>
        <v-col cols="12">      
          <v-file-input
            label="Upload your corpus data"
            outlined
            dense
            full-width
          ></v-file-input>
        </v-col>
      </v-row>
    </v-card-actions>
    
    <v-card-title class="headline">
      Existing Corpus
    </v-card-title>
    <template>
      <v-data-table
      v-model="selected"
      :headers="headers"
      :items="desserts"
      item-key="table"
      show-select
      class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            
          >
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </template>
    <v-card-actions class="mt-5">
      <v-spacer></v-spacer>
      <v-btn
        text
        color="error"
        @click="cancelSelect"
      >
        Cancel
      </v-btn>
       <v-btn
        text
        color="primary"
        @click="confirmSelect"
       >
        Confirm
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data(){
    return {
      selected: [],
      headers: [
        {
          text: 'Table',
          align: 'start',
          sortable: false,
          value: 'table',
        },
        { text: 'Size', value: 'size' },
        { text: 'Last use', value: 'last_time' },
        { text: 'Uploaded date', value: 'upload_date' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [
        {
          table: 'vispub_cleaned_sample4.csv',
          size: '32KB',
          last_time: 'Today',
          upload_date: '2022-5-22',
        },{
          table: 'ner_sample.csv',
          size: '20KB',
          last_time: 'Today',
          upload_date: '2022-5-22',
        }
      ]
    }
  },
  methods: {
    cancelSelect(){
      this.$emit('closeDialog')
      this.$emit('loaderAction', {status: 'fail'})
      this.selected = []
    },
    confirmSelect(){
      if(this.selected.length > 0){
        this.$emit('closeDialog')
        this.$emit('loaderAction', {status: 'success', selected: this.selected[0]})
        this.selected = []
      }else{
        this.cancelSelect()
      }
      
    }
  }
}
</script>

<style>

</style>
